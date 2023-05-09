import { Contract, ethers, Wallet } from 'ethers';
require('dotenv').config();
import Permit2ABI from '../abi/static/Permit2.json';
import { ChainId } from '../constants/types';
import { AllowanceTransfer, PermitSingle } from '@uniswap/permit2-sdk';
import { addresses } from '../addresses'

//1 week or 604800 seconds
const DEFAULT_SIG_DEADLINE = 604800;

//1 week or 604800 seconds
const DEFAULT_TRANSFER_DEADLINE = 604800;

export const PERMIT2_PERMIT_TYPE = {
    PermitDetails: [
        { name: 'token', type: 'address' },
        { name: 'amount', type: 'uint160' },
        { name: 'expiration', type: 'uint48' },
        { name: 'nonce', type: 'uint48' },
    ],
    PermitSingle: [
        { name: 'details', type: 'PermitDetails' },
        { name: 'spender', type: 'address' },
        { name: 'sigDeadline', type: 'uint256' },
    ],
};

export function getEip712Domain(chainId: number, verifyingContract: string) {
    return {
        name: 'Permit2',
        chainId,
        verifyingContract,
    };
}

export async function signPermit2Data(
    chainId: number,
    owner: string,
    spender: string,
    token: string,
    amount: string,
    sigDeadlineInEpochMillis: number,
    transferDeadlineInEpochMillis: number,
    signer: Wallet,
): Promise<any> {
    const permitSingle: PermitSingle = await generatePermitSingle(
        chainId,
        owner,
        spender,
        token,
        amount,
        sigDeadlineInEpochMillis,
        transferDeadlineInEpochMillis,
    );

    const networkFromSigner = await signer.provider.getNetwork();

    if (chainId != networkFromSigner.chainId) {
        throw new Error(
            `chainId: ${chainId} mismatching with the chainId: ${networkFromSigner.chainId} of provider in Signer`,
        );
    }

    //generate permit2 hash
    const permit2MsgHash = AllowanceTransfer.hash(
        permitSingle,
        addresses[chainId].permit2Address,
        chainId,
    );
    console.log('permit2MsgHash generated is: ', permit2MsgHash);

    const signature = await signPermitSingle(
        permitSingle,
        signer,
        addresses[chainId].permit2Address,
        chainId,
    );
    return {
        signature: signature,
        permitSingle: permitSingle,
        permit2MsgHash: permit2MsgHash,
    };
}

export async function getPermitSingleSignableData(
    chainId: number,
    owner: string,
    spender: string,
    token: string,
    amount: string,
    sigDeadlineInEpochMillis: number,
    transferDeadlineInEpochMillis: number) {

    const eip712Domain = getEip712Domain(chainId, addresses[chainId].permit2Address);
    const permitSingle = await generatePermitSingle(chainId, owner, spender, token, amount, 
        sigDeadlineInEpochMillis, transferDeadlineInEpochMillis);

    return {
        eip712Domain: eip712Domain,
        permitSigSchema: PERMIT2_PERMIT_TYPE,
        permitData: permitSingle
    }
}

export async function signPermitSingle(
    permit: PermitSingle,
    signer: Wallet,
    verifyingContract: string,
    chainId: number,
): Promise<string> {
    const eip712Domain = getEip712Domain(chainId, verifyingContract);
    return await signer._signTypedData(eip712Domain, PERMIT2_PERMIT_TYPE, permit);
}

export async function getPermitSignature(
    permit: PermitSingle,
    signer: Wallet,
    permit2Address: string,
    chainId: number,
): Promise<string> {
    // look up the correct nonce for this permit
    return await signPermitSingle(permit, signer, permit2Address, chainId);
}

export async function generatePermitSingle(
    chainId: number,
    owner: string,
    spender: string,
    token: string,
    amount: string,
    sigDeadlineInEpochMillis: number,
    transferDeadlineInEpochMillis: number,
): Promise<PermitSingle> {
    const packedAllowance = await getPackedAllowanceNonce(
        owner,
        token,
        spender,
        chainId,
    );

    //generate permit2 - permitDetails Object
    const permitDetails = {
        token: token,
        amount: amount,
        expiration: transferDeadlineInEpochMillis > 0 ? transferDeadlineInEpochMillis : DEFAULT_TRANSFER_DEADLINE,
        nonce: packedAllowance.nonce,
    };

    //generate permit2 - PermitSingle Object
    const permitSingle = {
        details: permitDetails,
        spender: spender,
        sigDeadline: sigDeadlineInEpochMillis > 0 ? sigDeadlineInEpochMillis : DEFAULT_SIG_DEADLINE,
    };

    return permitSingle;
}

export async function getPackedAllowanceNonce(
    owner: string,
    token: string,
    spender: string,
    chainId: number,
) {
    const permit2Instance = await getPermit2Instance(chainId);
    const packedAllowance = await permit2Instance.allowance(
        owner,
        token,
        spender,
    );

    return {
        amount: packedAllowance[0].toString(),
        expiry: packedAllowance[1].toString(),
        nonce: packedAllowance[2],
    };
}

export async function getPermit2Instance(chainId: number) {
    return new ethers.Contract(
        addresses[chainId].permit2Address,
        Permit2ABI,
        getProviderInstance(chainId),
    );
}

export function getProviderInstance(chainId: number) {
    let rpcUrl = '';

    switch (chainId) {
        case ChainId.MAINNET_CHAIN_ID:
            rpcUrl = process.env.ETHEREUM_RPC as string;
            break;

        case ChainId.POLYGON_CHAIN_ID:
            rpcUrl = process.env.POLYGON_RPC as string;
            break;

        case ChainId.ARBITRUM_CHAIN_ID:
            rpcUrl = process.env.ARBITRUM_RPC as string;
            break;

        case ChainId.OPTIMISM_CHAIN_ID:
            rpcUrl = process.env.OPTIMISM_RPC as string;
            break;

        case ChainId.AURORA_CHAIN_ID:
            rpcUrl = process.env.AURORA_RPC as string;
            break;

        case ChainId.BSC_CHAIN_ID:
            rpcUrl = process.env.BINANCE_RPC as string;
            break;

        case ChainId.AVAX_CHAIN_ID:
            rpcUrl = process.env.AVAX_RPC as string;
            break;

        case ChainId.XDAI_CHAIN_ID:
            rpcUrl = process.env.XDAI_RPC as string;
            break;

        case ChainId.FANTOM_CHAIN_ID:
            rpcUrl = process.env.FANTOM_RPC as string;
            break;
    }

    return new ethers.providers.JsonRpcProvider(rpcUrl);
}

export async function makePermitTxn(
    chainId: number,
    owner: string,
    spender: string,
    token: string,
    amount: string,
    sigDeadlineInEpochMillis: number,
    transferDeadlineInEpochMillis: number,
    signer: Wallet,
) {
    const permit2SignedData = await signPermit2Data(
        chainId,
        owner,
        spender,
        token,
        amount,
        sigDeadlineInEpochMillis,
        transferDeadlineInEpochMillis,
        signer,
    );

    const permitSingle = permit2SignedData.permitSingle;
    const signature = permit2SignedData.signature;
    const msgHash = permit2SignedData.permit2MsgHash;
    let permitTxnResponse: any = {};

    permitTxnResponse.permitSingle = permitSingle;
    permitTxnResponse.signature = signature;
    permitTxnResponse.msgHash = msgHash;

    try {
        //call approve on USDC for permit2-address
        const permit2Instance: Contract = new ethers.Contract(
            addresses[chainId].permit2Address,
            Permit2ABI,
            signer,
        );

        const gasPrice = await signer.provider.getGasPrice();

        const permitTxn = await permit2Instance[
            'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)'
        ](
            owner,
            [
                [
                    permitSingle.details.token,
                    permitSingle.details.amount,
                    permitSingle.details.expiration,
                    permitSingle.details.nonce,
                ],
                permitSingle.spender,
                permitSingle.sigDeadline,
            ],
            signature,
            {
                gasPrice: gasPrice,
                gasLimit: 120000,
            },
        );

        await permitTxn.wait();

        permitTxnResponse.hash = permitTxn.hash;
        permitTxnResponse.isSuccessful = true;
        console.log(
            `relayed permit transaction successfully with hash: ${permitTxnResponse.hash}`,
        );
    } catch (err) {
        console.error('Failed to relay permit transaction with error', err);
        permitTxnResponse.isSuccessful = false;
        throw err;
    }

    return permitTxnResponse;
}

import {Controller, ChainId, Bridge, Middleware} from "../constants/types";

import {Address} from "./type";

export const addresses: {
    [chainId: number]: Address;
} = {
    [ChainId.MAINNET_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        stargateReceiver: "0x362c116779D2d27F822a497E4650B6e2616d3859",

        routeIds: {
            [Bridge.Hop]: {
                routeId: 415,
                isMiddleware: false,
            },
            [Bridge.HopCctp]: {
                routeId: 423,
                isMiddleware: false,
            },
            [Bridge.PolygonBridge]: {
                routeId: 416,
                isMiddleware: false,
            },
            [Bridge.Celer]: {
                routeId: 417,
                isMiddleware: false,
            },
            [Bridge.Hyphen]: {
                routeId: 418,
                isMiddleware: false,
            },
            [Bridge.ArbitrumBridge]: {
                routeId: 409,
                isMiddleware: false,
            },
            [Bridge.OptimismBridge]: {
                routeId: 419,
                isMiddleware: false,
            },
            [Bridge.Across]: {
                routeId: 429,
                isMiddleware: false,
            },
            [Bridge.Stargate]: {
                routeId: 424,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 420,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV4]: {
                routeId: 10,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV6]: {
                routeId: 18,
                isMiddleware: false,
            },
            [Bridge.CCTP]: {
                routeId: 407,
                isMiddleware: false,
            },
            [Bridge.CCTPv2]: {
                routeId: 440,
                isMiddleware: false,
            },
            [Bridge.BaseBridge]: {
                routeId: 405,
                isMiddleware: false,
            },
            [Bridge.ZoraBridge]: {
                routeId: 394,
                isMiddleware: false,
            },
            [Bridge.Connext]: {
                routeId: 425,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 389,
                isMiddleware: false,
            },
            [Bridge.ZkSyncNative]: {
                routeId: 390,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 412,
                isMiddleware: false,
            },
            [Bridge.GnosisNative]: {
                routeId: 403,
                isMiddleware: false,
            },
            [Bridge.MantleNative]: {
                routeId: 433,
                isMiddleware: false,
            },
            [Bridge.ScrollNative]: {
                routeId: 422,
                isMiddleware: false,
            },
            [Bridge.ModeNative]: {
                routeId: 427,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 430,
                isMiddleware: false,
            },
            [Bridge.InkNative]: {
                routeId: 436,
                isMiddleware: false,
            },
            [Bridge.Mayan]: {
                routeId: 438,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 421,
                isMiddleware: true,
            },
            [Middleware.ZeroX]: {
                routeId: 413,
                isMiddleware: true,
            },
            [Middleware.ZeroxV2]: {
                routeId: 434,
                isMiddleware: true,
            },
            [Middleware.Rainbow]: {
                routeId: 414,
                isMiddleware: true,
            },
            [Middleware.UniswapV3]: {
                routeId: 432,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 435,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 439,
                isMiddleware: true,
            },
            wrappedTokenSwapperImpl: {
                routeId: 406,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 2,
            },
        },
        chainInfo: {
            chainId: 1,
            name: "mainnet",
            isL1: true,
        },
        extraData: {
            ERC20PredicateProxy: "0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf",
            ERC721PredicateProxy: "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD",
            RootChainManagerProxy: "0xA0c68C638235ee32657e8f720a23ceC1bFc77C77",
        },
    },
    [ChainId.BSC_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        stargateReceiver: "0x71cF3E64E42bcAEC7485AF71571d7033E5b7dF93",
        routeIds: {
            [Bridge.Celer]: {
                routeId: 13,
                isMiddleware: false,
            },
            [Bridge.Hyphen]: {
                routeId: 2,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 3,
                isMiddleware: false,
            },
            [Bridge.Stargate]: {
                routeId: 399,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV4]: {
                routeId: 5,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV6]: {
                routeId: 12,
                isMiddleware: false,
            },
            [Bridge.Connext]: {
                routeId: 400,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 396,
                isMiddleware: false,
            },
            [Bridge.SuperBridge]: {
                routeId: 401,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 402,
                isMiddleware: false,
            },
            [Bridge.Mayan]: {
                routeId: 408,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 14,
                isMiddleware: true,
            },
            [Middleware.ZeroX]: {
                routeId: 397,
                isMiddleware: true,
            },
            [Middleware.ZeroxV2]: {
                routeId: 405,
                isMiddleware: true,
            },
            [Middleware.Rainbow]: {
                routeId: 398,
                isMiddleware: true,
            },
            [Middleware.UniswapV3]: {
                routeId: 404,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 406,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 409,
                isMiddleware: true,
            },
            wrappedTokenSwapperImpl: {
                routeId: 394,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 2,
            },
        },
        chainInfo: {
            chainId: 56,
            name: "bsc",
            isL1: false,
        },
    },
    [ChainId.FANTOM_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        stargateReceiver: "0x24dE7b66673e6996a6677EC27c3678a32Ed5Bd15",
        routeIds: {
            [Bridge.Hyphen]: {
                routeId: 2,
                isMiddleware: false,
            },
            [Bridge.Celer]: {
                routeId: 12,
                isMiddleware: false,
            },
            [Bridge.Stargate]: {
                routeId: 388,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 4,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV4]: {
                routeId: 5,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV6]: {
                routeId: 11,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 13,
                isMiddleware: true,
            },
            [Middleware.ZeroX]: {
                routeId: 389,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 2,
            },
        },
        chainInfo: {
            chainId: 250,
            name: "fantom",
            isL1: false,
        },
    },
    [ChainId.AVAX_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        stargateReceiver: "0x83b2cda6A33128324ee9cb2f0360bA8a42Cec2C6",
        routeIds: {
            [Bridge.Celer]: {
                routeId: 12,
                isMiddleware: false,
            },
            [Bridge.Hyphen]: {
                routeId: 2,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 3,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV4]: {
                routeId: 4,
                isMiddleware: false,
            },
            [Bridge.Stargate]: {
                routeId: 398,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV6]: {
                routeId: 11,
                isMiddleware: false,
            },
            [Bridge.CCTP]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.CCTPv2]: {
                routeId: 407,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 395,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 399,
                isMiddleware: false,
            },
            [Bridge.Mayan]: {
                routeId: 405,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 13,
                isMiddleware: true,
            },
            [Middleware.ZeroX]: {
                routeId: 396,
                isMiddleware: true,
            },
            [Middleware.ZeroxV2]: {
                routeId: 402,
                isMiddleware: true,
            },
            [Middleware.Rainbow]: {
                routeId: 397,
                isMiddleware: true,
            },
            [Middleware.UniswapV3]: {
                routeId: 401,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 403,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 406,
                isMiddleware: true,
            },
            wrappedTokenSwapperImpl: {
                routeId: 392,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 2,
            },
        },
        chainInfo: {
            chainId: 43114,
            name: "Avalanche",
            isL1: false,
        },
    },
    [ChainId.OPTIMISM_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        stargateReceiver: "0xddC3A2bc1D6252D09A82814269d602D84Ca3E7ae",
        routeIds: {
            [Bridge.CCTP]: {
                routeId: 396,
                isMiddleware: false,
            },
            [Bridge.Hop]: {
                routeId: 17,
                isMiddleware: false,
            },
            [Bridge.HopCctp]: {
                routeId: 409,
                isMiddleware: false,
            },
            [Bridge.Celer]: {
                routeId: 18,
                isMiddleware: false,
            },
            [Bridge.Hyphen]: {
                routeId: 3,
                isMiddleware: false,
            },
            [Bridge.Across]: {
                routeId: 413,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 5,
                isMiddleware: false,
            },
            [Bridge.Stargate]: {
                routeId: 410,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV6]: {
                routeId: 16,
                isMiddleware: false,
            },
            [Bridge.Connext]: {
                routeId: 411,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 389,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 405,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 414,
                isMiddleware: false,
            },
            [Bridge.Mayan]: {
                routeId: 420,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 19,
                isMiddleware: true,
            },
            [Middleware.ZeroX]: {
                routeId: 406,
                isMiddleware: true,
            },
            [Middleware.ZeroxV2]: {
                routeId: 417,
                isMiddleware: true,
            },
            [Middleware.Rainbow]: {
                routeId: 407,
                isMiddleware: true,
            },
            [Middleware.UniswapV3]: {
                routeId: 416,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 418,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 421,
                isMiddleware: true,
            },
            wrappedTokenSwapperImpl: {
                routeId: 402,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 2,
            },
        },
        chainInfo: {
            chainId: 10,
            name: "Optimism",
            isL1: false,
        },
    },
    [ChainId.ARBITRUM_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        stargateReceiver: "0x88616cB9499F32Ff6A784B66B60aABF0bCf0df39",
        routeIds: {
            [Bridge.CCTP]: {
                routeId: 396,
                isMiddleware: false,
            },
            [Bridge.Hop]: {
                routeId: 18,
                isMiddleware: false,
            },
            [Bridge.HopCctp]: {
                routeId: 410,
                isMiddleware: false,
            },
            [Bridge.Celer]: {
                routeId: 19,
                isMiddleware: false,
            },
            [Bridge.Hyphen]: {
                routeId: 3,
                isMiddleware: false,
            },
            [Bridge.Across]: {
                routeId: 415,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV4]: {
                routeId: 5,
                isMiddleware: false,
            },
            [Bridge.Stargate]: {
                routeId: 411,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 7,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV6]: {
                routeId: 17,
                isMiddleware: false,
            },
            [Bridge.Connext]: {
                routeId: 412,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 391,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 406,
                isMiddleware: false,
            },
            [Bridge.SuperBridge]: {
                routeId: 416,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 417,
                isMiddleware: false,
            },
            [Bridge.Mayan]: {
                routeId: 424,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 20,
                isMiddleware: true,
            },
            [Middleware.ZeroX]: {
                routeId: 407,
                isMiddleware: true,
            },
            [Middleware.ZeroxV2]: {
                routeId: 420,
                isMiddleware: true,
            },
            [Middleware.Rainbow]: {
                routeId: 408,
                isMiddleware: true,
            },
            [Middleware.UniswapV3]: {
                routeId: 419,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 421,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 425,
                isMiddleware: true,
            },
            wrappedTokenSwapperImpl: {
                routeId: 403,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 2,
            },
        },
        chainInfo: {
            chainId: 42161,
            name: "Arbitrum",
            isL1: false,
        },
    },
    [ChainId.XDAI_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        routeIds: {
            [Bridge.Hop]: {
                routeId: 8,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 9,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 388,
                isMiddleware: true,
            },
            [Bridge.refuel]: {
                routeId: 3,
                isMiddleware: false,
            },
            [Bridge.Connext]: {
                routeId: 387,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 389,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 390,
                isMiddleware: false,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 1,
            },
            [Controller.FeesTakerController]: {
                controllerId: 3,
            },
        },
        chainInfo: {
            chainId: 100,
            name: "gnosis",
            isL1: false,
        },
    },
    [ChainId.POLYGON_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        stargateReceiver: "0x8DfeB2e0B392f0033C8685E35FB4763d88a70d12",
        routeIds: {
            [Bridge.Hop]: {
                routeId: 22,
                isMiddleware: false,
            },
            [Bridge.HopCctp]: {
                routeId: 412,
                isMiddleware: false,
            },
            [Bridge.Celer]: {
                routeId: 23,
                isMiddleware: false,
            },
            [Bridge.Hyphen]: {
                routeId: 3,
                isMiddleware: false,
            },
            [Bridge.Across]: {
                routeId: 416,
                isMiddleware: false,
            },
            [Bridge.Stargate]: {
                routeId: 413,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV4]: {
                routeId: 6,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 7,
                isMiddleware: false,
            },
            [Bridge.AnySwapRouterV6]: {
                routeId: 21,
                isMiddleware: false,
            },
            [Bridge.Connext]: {
                routeId: 414,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 393,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 406,
                isMiddleware: false,
            },
            [Bridge.CCTP]: {
                routeId: 403,
                isMiddleware: false,
            },
            [Bridge.SuperBridge]: {
                routeId: 417,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 418,
                isMiddleware: false,
            },
            [Bridge.Mayan]: {
                routeId: 424,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 24,
                isMiddleware: true,
            },
            [Middleware.ZeroX]: {
                routeId: 407,
                isMiddleware: true,
            },
            [Middleware.ZeroxV2]: {
                routeId: 421,
                isMiddleware: true,
            },
            [Middleware.Rainbow]: {
                routeId: 408,
                isMiddleware: true,
            },
            [Middleware.UniswapV3]: {
                routeId: 420,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 422,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 425,
                isMiddleware: true,
            },
            [Middleware.Kyberswap]: {
                routeId: 426,
                isMiddleware: true,
            },
            wrappedTokenSwapperImpl: {
                routeId: 404,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 2,
            },
        },
        chainInfo: {
            chainId: 137,
            name: "polygon",
            isL1: false,
        },
    },
    [ChainId.AURORA_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        routeIds: {
            [Bridge.refuel]: {
                routeId: 1,
                isMiddleware: false,
            },
            [Bridge.Celer]: {
                routeId: 5,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 6,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 2,
            },
        },
        chainInfo: {
            chainId: 1313161554,
            name: "Aurora",
            isL1: false,
        },
    },
    [ChainId.ZKSYNC_ERA_CHAIN_ID]: {
        socketGateway: "0xaDdE7028e7ec226777e5dea5D53F6457C21ec7D6",
        routeIds: {
            [Bridge.AnySwapRouterV6]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.Celer]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 387,
                isMiddleware: false,
            },
            [Middleware.OneInch]: {
                routeId: 389,
                isMiddleware: true,
            },
            [Bridge.Across]: {
                routeId: 393,
                isMiddleware: false,
            },
        },
        controllerIds: {
            [Controller.FeesTakerController]: {
                controllerId: 0,
            },
        },
    },
    [ChainId.POLYGON_ZKEVM_CHAIN_ID]: {
        socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        routeIds: {
            [Bridge.AnySwapRouterV6]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Bridge.Celer]: {
                routeId: 388,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 390,
                isMiddleware: false,
            },
        },
        controllerIds: {
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.BASE_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        stargateReceiver: "0xf510A87f6E28B4AE71c87123026617aBB6CE1420",
        routeIds: {
            [Bridge.Hop]: {
                routeId: 390,
                isMiddleware: false,
            },
            [Bridge.HopCctp]: {
                routeId: 407,
                isMiddleware: false,
            },
            [Bridge.Synapse]: {
                routeId: 388,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Middleware.Rainbow]: {
                routeId: 405,
                isMiddleware: true,
            },
            [Middleware.OneInch]: {
                routeId: 391,
                isMiddleware: true,
            },
            [Middleware.ZeroX]: {
                routeId: 404,
                isMiddleware: true,
            },
            [Middleware.ZeroxV2]: {
                routeId: 416,
                isMiddleware: true,
            },
            [Bridge.Across]: {
                routeId: 411,
                isMiddleware: false,
            },
            [Bridge.Stargate]: {
                routeId: 408,
                isMiddleware: false,
            },
            [Bridge.BaseBridge]: {
                routeId: 396,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 409,
                isMiddleware: false,
            },
            [Bridge.CCTP]: {
                routeId: 397,
                isMiddleware: false,
            },
            [Bridge.CCTPv2]: {
                routeId: 422,
                isMiddleware: false,
            },
            [Bridge.SuperBridge]: {
                routeId: 412,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 413,
                isMiddleware: false,
            },
            [Bridge.Mayan]: {
                routeId: 419,
                isMiddleware: false,
            },
            wrappedTokenSwapperImpl: {
                routeId: 399,
                isMiddleware: true,
            },
            [Middleware.UniswapV3]: {
                routeId: 415,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 417,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 421,
                isMiddleware: true,
            },
            [Bridge.B3Native]: {
                routeId: 420,
                isMiddleware: false,
            },
        },
        controllerIds: {
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
        },
    },
    [ChainId.LINEA_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.Hop]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.Symbiosis]: {
                routeId: 388,
                isMiddleware: false,
            },
            [Bridge.Across]: {
                routeId: 392,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 391,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 393,
                isMiddleware: false,
            },
            [Bridge.CCTPv2]: {
                routeId: 397,
                isMiddleware: false,
            },
            [Middleware.ZeroxV2]: {
                routeId: 394,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 395,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 396,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.MANTLE_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.Symbiosis]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.refuel]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 387,
                isMiddleware: false,
            },
            [Middleware.ZeroxV2]: {
                routeId: 388,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 389,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.SCROLL_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.Celer]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Bridge.Across]: {
                routeId: 387,
                isMiddleware: false,
            },
            [Middleware.ZeroxV2]: {
                routeId: 388,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 389,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 390,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 1,
            },
            [Controller.FeesTakerController]: {
                controllerId: 0,
            },
        },
    },
    [ChainId.BLAST_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.Synapse]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.Across]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Middleware.UniswapV3]: {
                routeId: 388,
                isMiddleware: true,
            },
            [Middleware.ZeroxV2]: {
                routeId: 389,
                isMiddleware: true,
            },
            [Middleware.OpenOcean]: {
                routeId: 390,
                isMiddleware: true,
            },
            [Middleware.Magpie]: {
                routeId: 391,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.MODE_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.Symbiosis]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.Across]: {
                routeId: 386,
                isMiddleware: false,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.INK_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.Across]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Middleware.Magpie]: {
                routeId: 386,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.ABSTRACT_CHAIN_ID]: {
        socketGateway: "0xf8291b7c7fdaa275a0b17da1a756d1fbe4d3a13d",
        routeIds: {
            [Bridge.Symbiosis]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.StargateV2]: {
                routeId: 386,
                isMiddleware: false,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.B3_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.SuperBridge]: {
                routeId: 385,
                isMiddleware: false,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.UNI_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.Across]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Bridge.CCTP]: {
                routeId: 386,
                isMiddleware: false,
            },
            [Middleware.ZeroxV2]: {
                routeId: 387,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
    [ChainId.BERA_CHAIN_ID]: {
        socketGateway: "0x3a23f943181408eac424116af7b7790c94cb97a5",
        routeIds: {
            [Bridge.Symbiosis]: {
                routeId: 385,
                isMiddleware: false,
            },
            [Middleware.Magpie]: {
                routeId: 386,
                isMiddleware: true,
            },
        },
        controllerIds: {
            [Controller.RefuelSwapAndBridge]: {
                controllerId: 0,
            },
            [Controller.FeesTakerController]: {
                controllerId: 1,
            },
        },
    },
};

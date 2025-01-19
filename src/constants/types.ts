export enum Bridge {
  Hop = "hop",
  HopCctp = "hopCctp", // special bridge to bridge only usdc/usdc.e tokens
  AnySwap = "anyswap",
  AnySwapRouterV4 = "anyswap-router-v4",
  AnySwapRouterV6 = "anyswap-router-v6",
  PolygonBridge = "polygon-bridge",
  ArbitrumBridge = "arbitrum-bridge",
  Hyphen = "hyphen",
  Across = "across",
  OptimismBridge = "optimism-bridge",
  Celer = "celer",
  refuel = "refuel-bridge",
  Stargate = "stargate",
  Connext = "connext",
  CCTP = "cctp",
  Synapse = "synapse",
  BaseBridge = 'base-bridge',
  ZoraBridge =  'zora-bridge',
  ZkSyncNative = "zksync-native",
  Symbiosis = "symbiosis",
  GnosisNative = "gnosis-native-bridge",
  MantleNative = "mantle-native-bridge",
  ScrollNative = "scroll-native-bridge",
  ModeNative = "mode-native-bridge",
  SuperBridge = "super-bridge",
  StargateV2 = "stargate-v2",
  InkNative = "ink-native-bridge",
  Mayan = 'mayan'
}

export enum DexNames {
  OneInch = "oneinch",
  ZeroX = "zerox",
  ZeroxV2 = "zeroxv2",
  Rainbow = 'rainbow',
  UniswapV2 = 'uniswapV2',
  UniswapV3 = 'uniswapV3',
  OpenOcean = 'openocean',
}
export enum RefuelDexNames {
  refuelOneInch = 'refuel-oneinch',
  refuelZeroX = 'refuel-zerox',
  refuelZeroxV2 = 'refuel-zeroxv2',
  refuelRainbow = 'refuel-rainbow',
  refuelUniswapV3 = 'refuel-uniswapV3',
  refuelOpenOcean = 'refuel-openocean',
}
export enum SimpleMiddleware {
  refuel = "refuel",
}

export const Middleware = {
  ...SimpleMiddleware,
  ...DexNames,
  ...RefuelDexNames
}
export type Middleware = DexNames | RefuelDexNames | SimpleMiddleware

export enum ChainId {
  POLYGON_CHAIN_ID = 137,
  MAINNET_CHAIN_ID = 1,
  XDAI_CHAIN_ID = 100,
  ARBITRUM_CHAIN_ID = 42161,
  FANTOM_CHAIN_ID = 250,
  OPTIMISM_CHAIN_ID = 10,
  AVAX_CHAIN_ID = 43114,
  BSC_CHAIN_ID = 56,
  AURORA_CHAIN_ID = 1313161554,
  POLYGON_ZKEVM_CHAIN_ID = 1101,
  ZKSYNC_ERA_CHAIN_ID = 324,
  ZORA_CHAIN_ID = 7777777,
  BASE_CHAIN_ID = 8453,
  LINEA_CHAIN_ID = 59144,
  MANTLE_CHAIN_ID = 5000,
  SCROLL_CHAIN_ID = 534352,
  BLAST_CHAIN_ID = 81457,
  MODE_CHAIN_ID = 34443,
  INK_CHAIN_ID = 57073,
  SOLANA_CHAIN_ID = 89999,
  SONIC_CHAIN_ID = 146
}


export enum Controller {
  RefuelSwapAndBridge = "refuel-swap-bridge",
  FeesTakerController = "fee-taker-controller",
}

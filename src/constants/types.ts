export enum Bridge {
  Hop = "hop",
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
  ZkSyncNative = "zksync-native",
  ZoraBridge = "zora-bridge",
  BaseBridge = "base-bridge",
  Symbiosis = "symbiosis",
  GnosisNative = "gnosis-native-bridge",
  Lyra = "lyra-bridge"
}

export enum Controller {
  RefuelSwapAndBridge = "refuel-swap-bridge",
  FeesTakerController = "fee-taker-controller",
}

export enum Middleware {
  OneInch = "oneinch",
  ZeroX = "zerox",
  Rainbow = "rainbow",
  refuelOneInch = "refuel-oneinch",
  refuelRainbow = "refuel-rainbow",
  refuelZeroX = "refuel-zerox",
  refuel = "refuel",
}

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
  LYRA_CHAIN_ID = 957
}

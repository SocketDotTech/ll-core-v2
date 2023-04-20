import { ChainId, Bridge, Middleware, Controller } from "../constants/types";
import { Address } from "./type";
export const addresses: {
  [chainId: number]: Address;
} = {
  [ChainId.MAINNET_CHAIN_ID]: {
    socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
    stargateReceiver: "0x362c116779D2d27F822a497E4650B6e2616d3859",

    routeIds: {
      [Bridge.Hop]: {
        routeId: 17,
        isMiddleware: false,
      },
      [Bridge.PolygonBridge]: {
        routeId: 2,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 16,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 4,
        isMiddleware: false,
      },
      [Bridge.ArbitrumBridge]: {
        routeId: 5,
        isMiddleware: false,
      },
      [Bridge.OptimismBridge]: {
        routeId: 6,
        isMiddleware: false,
      },
      [Bridge.Across]: {
        routeId: 7,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 8,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 9,
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
      [Middleware.OneInch]: {
        routeId: 12,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 15,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 14,
        isMiddleware: true,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 0,
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
        routeId: 11,
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
        routeId: 4,
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
      [Middleware.OneInch]: {
        routeId: 7,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 10,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 9,
        isMiddleware: true,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 0,
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
        routeId: 10,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 3,
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
      [Middleware.OneInch]: {
        routeId: 7,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 9,
        isMiddleware: true,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 0,
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
        routeId: 10,
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
        routeId: 5,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV6]: {
        routeId: 11,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 7,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 9,
        isMiddleware: true,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 0,
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
      [Bridge.Hop]: {
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 13,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 3,
        isMiddleware: false,
      },
      [Bridge.Across]: {
        routeId: 12,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 5,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 6,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV6]: {
        routeId: 16,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 8,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 11,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 10,
        isMiddleware: true,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 0,
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
      [Bridge.Hop]: {
        routeId: 16,
        isMiddleware: false,
      },

      [Bridge.Celer]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 3,
        isMiddleware: false,
      },
      [Bridge.Across]: {
        routeId: 4,
        isMiddleware: false,
      },

      [Bridge.AnySwapRouterV4]: {
        routeId: 5,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 6,
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
      [Middleware.OneInch]: {
        routeId: 10,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 13,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 12,
        isMiddleware: true,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 0,
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
        routeId: 7,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 5,
        isMiddleware: true,
      },
      [Bridge.refuel]: {
        routeId: 3,
        isMiddleware: false,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 1,
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
    routeIds: {
      [Bridge.Hop]: {
        routeId: 19,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 17,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 3,
        isMiddleware: false,
      },
      [Bridge.Across]: {
        routeId: 4,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 5,
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
        routeId: 8,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 9,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 16,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 13,
        isMiddleware: true,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 0,
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
        routeId: 4,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
    },
    controllerIds: {
      [Controller.RefuelSwapAndBridge]: {
        controllerId: 0,
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
    },
  },
  [ChainId.POLYGON_ZKEVM_CHAIN_ID]: {
    socketGateway: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
    routeIds: {
      [Bridge.AnySwapRouterV6]: {
        routeId: 385,
        isMiddleware: false,
      },
    },
  },
};

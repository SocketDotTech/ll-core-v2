import { ChainId, Bridge, Middleware } from '../constants/types';
import { Address } from './type';
export const addresses: {
  [chainId: number]: Address;
} = {
  [ChainId.MAINNET_CHAIN_ID]: {
    socketGateway: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    stargateReceiver: '0x362c116779D2d27F822a497E4650B6e2616d3859',

    routeIds: {
      [Bridge.AnySwapRouterV6]: {
        routeId: 26,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 27,
        isMiddleware: false,
      },
      [Bridge.Hop]: {
        routeId: 18,
        isMiddleware: false,
      },
      [Bridge.PolygonBridge]: {
        routeId: 2,
        isMiddleware: false,
      },
      [Bridge.ArbitrumBridge]: {
        routeId: 3,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV4]: {
        routeId: 4,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 12,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 7,
        isMiddleware: true,
      },
      [Bridge.OptimismBridge]: {
        routeId: 20,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 17,
        isMiddleware: false,
      },
      [Bridge.Across]: {
        routeId: 11,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 15,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
        routeId: 16,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 21,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 22,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 24,
        isMiddleware: true,
      },
      [Middleware.refuelRainbow]: {
        routeId: 23,
        isMiddleware: true,
      }
    },
    chainInfo: {
      chainId: 1,
      name: 'mainnet',
      isL1: true,
    },
    extraData: {
      ERC20PredicateProxy: '0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf',
      ERC721PredicateProxy: '0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD',
      RootChainManagerProxy: '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77',
    },
  },

  [ChainId.BSC_CHAIN_ID]: {
    socketGateway: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    stargateReceiver: '0x71cF3E64E42bcAEC7485AF71571d7033E5b7dF93',
    routeIds: {
      [Bridge.AnySwapRouterV6]: { 
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 16,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [Bridge.Celer]: {
        routeId: 11,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 6,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 8,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 9,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
        routeId: 10,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 12,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 13,
        isMiddleware: true,
      }
    },
    chainInfo: {
      chainId: 56,
      name: 'bsc',
      isL1: false,
    },
  },
  [ChainId.FANTOM_CHAIN_ID]: {
    socketGateway: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    stargateReceiver: '0x24dE7b66673e6996a6677EC27c3678a32Ed5Bd15',
    routeIds: {
      [Bridge.AnySwapRouterV6]: { 
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 12,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Middleware.ZeroX]: {
        routeId: 3,
        isMiddleware: true,
      },
      [Bridge.Celer]: {
        routeId: 9,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 6,
        isMiddleware: false,
      },
      [Middleware.refuelZeroX]: {
        routeId: 7,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
        routeId: 8,
        isMiddleware: true,
      },
      [Middleware.OneInch]: {
        routeId: 10,
        isMiddleware: true,
      },
      [Middleware.refuelOneInch]: {
        routeId: 11,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 250,
      name: 'fantom',
      isL1: false,
    },
  },
  [ChainId.AVAX_CHAIN_ID]: {
    socketGateway: '0x2b42AFFD4b7C14d9B7C2579229495c052672Ccd3',
    stargateReceiver: '0x83b2cda6A33128324ee9cb2f0360bA8a42Cec2C6',
    routeIds: {
      [Bridge.AnySwapRouterV6]: { 
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 16,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV4]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 6,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [Bridge.Celer]: {
        routeId: 11,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 8,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 9,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
        routeId: 10,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 12,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 13,
        isMiddleware: true,
      }
    },
    chainInfo: {
      chainId: 43114,
      name: 'Avalanche',
      isL1: false,
    },
  },
  [ChainId.OPTIMISM_CHAIN_ID]: {
    socketGateway: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    stargateReceiver: '0xddC3A2bc1D6252D09A82814269d602D84Ca3E7ae',

    routeIds: {
      [Bridge.Connext]: {
        routeId: 23,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV6]: { 
        routeId: 22,
        isMiddleware: false,
      },
      [Bridge.Stargate]: {
        routeId: 21,
        isMiddleware: false,
      },
      [Bridge.Hop]: {
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 3,
        isMiddleware: true,
      },
      [Bridge.Across]: {
        routeId: 7,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 13,
        isMiddleware: false,
      },

      [Bridge.refuel]: {
        routeId: 9,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 10,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
        routeId: 11,
        isMiddleware: true,
      },
      [Middleware.ZeroX]: {
        routeId: 16,
        isMiddleware: true,
      },
      [Middleware.refuelZeroX]: {
        routeId: 17,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 19,
        isMiddleware: true,
      },
      [Middleware.refuelRainbow]: {
        routeId: 18,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 10,
      name: 'Optimism',
      isL1: false,
    },
  },
  [ChainId.ARBITRUM_CHAIN_ID]: {
    socketGateway: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',
    stargateReceiver: '0x88616cB9499F32Ff6A784B66B60aABF0bCf0df39',

    routeIds: {
      [Bridge.AnySwapRouterV6]: {
        routeId: 22,
        isMiddleware: false,
       },
      [Bridge.Stargate]: { 
        routeId: 23,
        isMiddleware: false,
      },
      [Bridge.Hop]: {
        routeId: 16,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 15,
        isMiddleware: false,
      },
      [Bridge.AnySwapRouterV4]: {
        routeId: 2,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 4,
        isMiddleware: true,
      },
      [Bridge.Across]: {
        routeId: 8,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 14,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 10,
        isMiddleware: false,
      },
      [Middleware.refuelOneInch]: {
        routeId: 11,
        isMiddleware: true,
      },
      [Middleware.refuel]: {
        routeId: 12,
        isMiddleware: true,
      },
      [Middleware.Rainbow]: {
        routeId: 18,
        isMiddleware: true,
      },
      [Middleware.refuelRainbow]: {
        routeId: 17,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 42161,
      name: 'Arbitrum',
      isL1: false,
    },
  },

  [ChainId.XDAI_CHAIN_ID]: {
    socketGateway: '0xAb506A3E23a581f578e5A9D3533Ef5170a93cb4C',
    routeIds: {
      [Bridge.Hop]: {
        routeId: 1,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 100,
      name: 'gnosis',
      isL1: false,
    },
  },

  [ChainId.POLYGON_CHAIN_ID]: {
    socketGateway: '0xAb506A3E23a581f578e5A9D3533Ef5170a93cb4C',
    routeIds: {
      [Bridge.Celer]: {
        routeId: 2,
        isMiddleware: false,
      }
    },
    chainInfo: {
      chainId: 137,
      name: 'polygon',
      isL1: false,
    },
  },

  [ChainId.AURORA_CHAIN_ID]: {
    socketGateway: '0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0',

    routeIds: {
      [Bridge.Celer]: {
        routeId: 5,
        isMiddleware: false,
      },
      [Bridge.refuel]: {
        routeId: 3,
        isMiddleware: false,
      },
      [Middleware.refuel]: {
        routeId: 4,
        isMiddleware: true,
      },
      [Middleware.OneInch]: {
        routeId: 6,
        isMiddleware: true,
      },
      [Middleware.refuelOneInch]: {
        routeId: 7,
        isMiddleware: true,
      },
    },
    chainInfo: {
      chainId: 1313161554,
      name: 'Aurora',
      isL1: false,
    },
  },
};

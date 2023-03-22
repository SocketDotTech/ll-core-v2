import { ChainId, Bridge, Middleware } from '../constants/types';
import { Address } from './type';
export const addresses: {
  [chainId: number]: Address;
} = {
  [ChainId.MAINNET_CHAIN_ID]: {
    socketGateway: '0x3a23F943181408EAC424116Af7b7790c94Cb97a5',
    stargateReceiver: '0x362c116779D2d27F822a497E4650B6e2616d3859',

    routeIds: {
      [Bridge.Hop]: { 
        routeId: 1,
        isMiddleware: false,
      }, 
      [Bridge.PolygonBridge]: {
        routeId: 2,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 3,
        isMiddleware: false,
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
    socketGateway: '0x3a23F943181408EAC424116Af7b7790c94Cb97a5',
    stargateReceiver: '0x71cF3E64E42bcAEC7485AF71571d7033E5b7dF93',
    routeIds: {
      [Bridge.Celer]: {
        routeId: 1,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 56,
      name: 'bsc',
      isL1: false,
    },
  },
  [ChainId.FANTOM_CHAIN_ID]: {
    socketGateway: '0x3a23F943181408EAC424116Af7b7790c94Cb97a5',
    stargateReceiver: '0x24dE7b66673e6996a6677EC27c3678a32Ed5Bd15',
    routeIds: {
    
    },
    chainInfo: {
      chainId: 250,
      name: 'fantom',
      isL1: false,
    },
  },
  [ChainId.AVAX_CHAIN_ID]: {
    socketGateway: '0x3a23F943181408EAC424116Af7b7790c94Cb97a5',
    stargateReceiver: '0x83b2cda6A33128324ee9cb2f0360bA8a42Cec2C6',
    routeIds: {
      [Bridge.Celer]: {
        routeId: 1,
        isMiddleware: false,
      },
    },
    chainInfo: {
      chainId: 43114,
      name: 'Avalanche',
      isL1: false,
    },
  },
  [ChainId.OPTIMISM_CHAIN_ID]: {
    socketGateway: '0x3a23F943181408EAC424116Af7b7790c94Cb97a5',
    stargateReceiver: '0xddC3A2bc1D6252D09A82814269d602D84Ca3E7ae',
    routeIds: {
      [Bridge.Hop]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 2,
        isMiddleware: false,
      }
    },
    chainInfo: {
      chainId: 10,
      name: 'Optimism',
      isL1: false,
    },
  },
  [ChainId.ARBITRUM_CHAIN_ID]: {
    socketGateway: '0x3a23F943181408EAC424116Af7b7790c94Cb97a5',
    stargateReceiver: '0x88616cB9499F32Ff6A784B66B60aABF0bCf0df39',

    routeIds: {
      [Bridge.Hop]: { 
        routeId: 1,
        isMiddleware: false,
      }, 

      [Bridge.Celer]: {
        routeId: 2,
        isMiddleware: false,
      }
    },
    chainInfo: {
      chainId: 42161,
      name: 'Arbitrum',
      isL1: false,
    },
  },

  [ChainId.XDAI_CHAIN_ID]: {
    socketGateway: '0x3a23F943181408EAC424116Af7b7790c94Cb97a5',
    routeIds: {
      [Bridge.Hop]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Middleware.OneInch]: {
        routeId: 2,
        isMiddleware: true,
      }
    },
    chainInfo: {
      chainId: 100,
      name: 'gnosis',
      isL1: false,
    },
  },

  [ChainId.POLYGON_CHAIN_ID]: {
    socketGateway: '0x3a23F943181408EAC424116Af7b7790c94Cb97a5',
    routeIds: {
      [Bridge.Hop]: {
        routeId: 1,
        isMiddleware: false,
      },
      [Bridge.Celer]: {
        routeId: 2,
        isMiddleware: false,
      },
      [Bridge.Hyphen]: {
        routeId: 3,
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
   
    },
    chainInfo: {
      chainId: 1313161554,
      name: 'Aurora',
      isL1: false,
    },
  },
};

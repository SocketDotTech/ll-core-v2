import { ChainId, Bridge, Middleware } from "../constants/types";
// bytes code of verifiedRouteAddress and routeAddress are the same

export const routesMap = {
  [ChainId.MAINNET_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x8F22b246e2d380f5F5786dE28847BE17ACaAA2B8",
    },
    2: {
      protocolName: Bridge.PolygonBridge,
      isMiddleware: false,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0x653a03b511E6FE9e80eeCb2bBbD36DCaf93cF147",
    },
    3: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0x7c6C373190421988fA31E64f369C45205676C1f0",
    },
    4: {
      protocolName: Bridge.Hyphen,
      isMiddleware: false,
      routeAddress: "0xE8704Ef6211F8988Ccbb11badC89841808d66890",
      verifiedRouteAddress: "0x6e520F25E66450397d02ece0166edaF46c9BF28b",
    },
    5: {
      protocolName: Bridge.ArbitrumBridge,
      isMiddleware: false,
      routeAddress:'0x9aff58c460a461578c433e11c4108d1c4cf77761',
      verifiedRouteAddress: "0xA257242ceFc988e9EEdD20a1dfbEe415223A7179",
    },
    6: {
      protocolName: Bridge.OptimismBridge,
      isMiddleware: false,
      routeAddress: '0x2d1733886cfd465b0b99f1492f40847495f334c5',
      verifiedRouteAddress: "0xB24e2B830f4c78a1993F9b046089321764B28902",
    },
    7: {
      protocolName: Bridge.Across,
      isMiddleware: false,
      routeAddress: '0x715497Be4D130F04B8442F0A1F7a9312D4e54FC4',
      verifiedRouteAddress: "0x0553582d40D4fe5445e9272f3B59f6fF80129952",
    },
    8: {
      protocolName: Bridge.Stargate,
      isMiddleware: false,
      routeAddress: '0x90C8a40c38E633B5B0e0d0585b9F7FA05462CaaF',
      verifiedRouteAddress: "0x3Dd7419889FF387A58D3Dad1F8B49ea1064290fB",
    },
    9: {
      protocolName: Middleware.refuel,
      isMiddleware: false,
      routeAddress: '0xa402b70FCfF3F4a8422B93Ef58E895021eAdE4F6',
      verifiedRouteAddress: "0x838286885360aaFF02AA42C95bde31f6055C919F",
    },
    10: {
      protocolName: Bridge.AnySwapRouterV4,
      isMiddleware: false,
      routeAddress: '0xc1B718522E15CD42C4Ac385a929fc2B51f5B892e',
      verifiedRouteAddress: "0x6D4F89284e06554eeEEF79215A823B6F9d7b48D8",
    },
    11: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress: '0xa97bf2f7c26C43c010c349F52f5eA5dC49B2DD38',
      verifiedRouteAddress: "0xD5AA63075160B2a00Edfa3D7bB51ACdB81AF7678",
    },
  },
  [ChainId.BSC_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x5CddbecAF8603E5e0bC771A46D48e148593351eA",
    },
    2: {
      protocolName: Bridge.Hyphen,
      isMiddleware: false,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0xA898821781ba5dd78a485Bcb610b8a60bbC5357E",
    },
    3: {
      protocolName: Middleware.refuel,
      isMiddleware: false,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0x653a03b511E6FE9e80eeCb2bBbD36DCaf93cF147",
    },
    4: {
      protocolName: Bridge.Stargate,
      isMiddleware: false,
      routeAddress: "0xE8704Ef6211F8988Ccbb11badC89841808d66890",
      verifiedRouteAddress: "0x216314f5E2FCD984f54c3ba1e51035Ea29d6BE37",
    },
    5: {
      protocolName: Bridge.AnySwapRouterV4,
      isMiddleware: false,
      routeAddress: "0x9aFF58C460a461578C433e11C4108D1c4cF77761",
      verifiedRouteAddress: "0x89800A17CEA97dB4A8F0705d7f8da770032397f5",
    },
    6: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress: "0x2D1733886cFd465B0B99F1492F40847495f334C5",
      verifiedRouteAddress: "0x6e520F25E66450397d02ece0166edaF46c9BF28b",
    }
  },
  [ChainId.POLYGON_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x5CddbecAF8603E5e0bC771A46D48e148593351eA",
    },
    2: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0xe0134Ca3d7AD384070580542Baee00511105BEfA",
    },
    3: {
      protocolName: Bridge.Hyphen,
      isMiddleware: false,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0xBAde7653492f1a70c3725EdeB2D28F3C84369809",
    },
    4: {
      protocolName: Bridge.Across,
      isMiddleware: false,
      routeAddress: "0xE8704Ef6211F8988Ccbb11badC89841808d66890",
      verifiedRouteAddress: "0xA257242ceFc988e9EEdD20a1dfbEe415223A7179",
    },
    5: {
      protocolName: Bridge.Stargate,
      isMiddleware: false,
      routeAddress: "0x9aFF58C460a461578C433e11C4108D1c4cF77761",
      verifiedRouteAddress: "0xB24e2B830f4c78a1993F9b046089321764B28902",
    }, 
    6: {
      protocolName: Bridge.AnySwapRouterV4,
      isMiddleware: false,
      routeAddress: "0x2D1733886cFd465B0B99F1492F40847495f334C5",
      verifiedRouteAddress: "0x0553582d40D4fe5445e9272f3B59f6fF80129952",
    },
    7: {
      protocolName: Bridge.refuel,
      isMiddleware: false,
      routeAddress: "0x715497Be4D130F04B8442F0A1F7a9312D4e54FC4",
      verifiedRouteAddress: "0xFC42BcAA16a54e7E48D0c39e4713dC5923BD551D",
    },
    8: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress: "0x90C8a40c38E633B5B0e0d0585b9F7FA05462CaaF",
      verifiedRouteAddress: "0x34d5999e737defa0c4dda2512f399862ee368445",
    }
  },
  [ChainId.XDAI_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x9aFF58C460a461578C433e11C4108D1c4cF77761",
      verifiedRouteAddress: "0xB24e2B830f4c78a1993F9b046089321764B28902",
    },
    2: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0x7c6C373190421988fA31E64f369C45205676C1f0",
    },
    3: {
      protocolName: Bridge.refuel,
      isMiddleware: false,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0xA898821781ba5dd78a485Bcb610b8a60bbC5357E",
    },
  },
  [ChainId.ARBITRUM_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x2d0EeB574cC98f6d57c72FFe730D5C8a8f2eac37",
    },
    2: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0x7c6C373190421988fA31E64f369C45205676C1f0",
    },
    3: {
      protocolName: Bridge.Hyphen,
      isMiddleware: false,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0x653a03b511E6FE9e80eeCb2bBbD36DCaf93cF147",
    },
    4: {
      protocolName: Bridge.Across,
      isMiddleware: false,
      routeAddress: "0xe8704ef6211f8988ccbb11badc89841808d66890",
      verifiedRouteAddress: "0xfaafb26c06a45962e97452e5d4310df2586623a2",
    },
    5: {
      protocolName: Bridge.AnySwapRouterV4,
      isMiddleware: false,
      routeAddress: "0x9aff58c460a461578c433e11c4108d1c4cf77761",
      verifiedRouteAddress: "0x09bbe4dacbf631994f2f1b70c1b18d62c19466e6",
    },
    6: {
      protocolName: Bridge.Stargate,
      isMiddleware: false,
      routeAddress: "0x2d1733886cfd465b0b99f1492f40847495f334c5",
      verifiedRouteAddress: "0x6e520f25e66450397d02ece0166edaf46c9bf28b",
    },
    7: {
      protocolName: Bridge.refuel,
      isMiddleware: false,
      routeAddress: "0x715497be4d130f04b8442f0a1f7a9312d4e54fc4",
      verifiedRouteAddress: "0xbade7653492f1a70c3725edeb2d28f3c84369809",
    },
    8: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress: "0x90c8a40c38e633b5b0e0d0585b9f7fa05462caaf",
      verifiedRouteAddress: "0xb24e2b830f4c78a1993f9b046089321764b28902",
    }
  },
  [ChainId.OPTIMISM_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x2d0EeB574cC98f6d57c72FFe730D5C8a8f2eac37",
    },
    2: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0xe0134Ca3d7AD384070580542Baee00511105BEfA",
    },
    3: {
      protocolName: Bridge.Hyphen,
      isMiddleware: false,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0x653a03b511E6FE9e80eeCb2bBbD36DCaf93cF147",
    },
    4: {
      protocolName: Bridge.Across,
      isMiddleware: false,
      routeAddress: "0xe8704ef6211f8988ccbb11badc89841808d66890",
      verifiedRouteAddress: "	0x89800A17CEA97dB4A8F0705d7f8da770032397f5",
    },
    5: {
      protocolName: Bridge.refuel,
      isMiddleware: false,
      routeAddress: "0x9aff58c460a461578c433e11c4108d1c4cf77761",
      verifiedRouteAddress: "0xE186a05FB020324a7cA61d80138BB1EA66DDDbDF",
    },
    6: {
      protocolName: Bridge.Stargate,
      isMiddleware: false,
      routeAddress: "0x2d1733886cfd465b0b99f1492f40847495f334c5",
      verifiedRouteAddress: "0xFAAFb26C06a45962E97452E5d4310df2586623A2",
    },
    7: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress: "0x715497Be4D130F04B8442F0A1F7a9312D4e54FC4",
      verifiedRouteAddress: '0x09BBE4DacBf631994F2f1b70c1B18d62c19466E6'
    },
  },
  [ChainId.AVAX_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0xe0134Ca3d7AD384070580542Baee00511105BEfA",
    },
    2: {
      protocolName: Bridge.Hyphen,
      isMiddleware: false,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0xE186a05FB020324a7cA61d80138BB1EA66DDDbDF",
    },
    3: {
      protocolName: Bridge.refuel,
      isMiddleware: false,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0xBAde7653492f1a70c3725EdeB2D28F3C84369809",
    },
    4: {
      protocolName: Bridge.AnySwapRouterV4,
      isMiddleware: false,
      routeAddress: "0xE8704Ef6211F8988Ccbb11badC89841808d66890",
      verifiedRouteAddress: "0x09BBE4DacBf631994F2f1b70c1B18d62c19466E6",
    },
    5: {
      protocolName: Bridge.Stargate,
      isMiddleware: false,
      routeAddress: "0x9aFF58C460a461578C433e11C4108D1c4cF77761",
      verifiedRouteAddress: "0x235c819eB6877c2ffDE5AF457464131Db47500Dc",
    },
    6: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress: "0x2D1733886cFd465B0B99F1492F40847495f334C5",
      verifiedRouteAddress: "0x838286885360aaFF02AA42C95bde31f6055C919F",
    },
  },
  [ChainId.FANTOM_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x1768C1D2900f1408D44FbB1EdCc306F94aF852ae",
    },
    2: {
      protocolName: Bridge.Hyphen,
      isMiddleware: false,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0x8F22b246e2d380f5F5786dE28847BE17ACaAA2B8",
    },
    3: {
      protocolName: Bridge.Stargate,
      isMiddleware: false,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0xe0134Ca3d7AD384070580542Baee00511105BEfA",
    },
    4: {
      protocolName: Bridge.refuel,
      isMiddleware: false,
      routeAddress: "0xE8704Ef6211F8988Ccbb11badC89841808d66890",
      verifiedRouteAddress: "0xA898821781ba5dd78a485Bcb610b8a60bbC5357E",
    },
    5: {
      protocolName: Bridge.AnySwapRouterV4,
      isMiddleware: false,
      routeAddress: "0x9aFF58C460a461578C433e11C4108D1c4cF77761",
      verifiedRouteAddress: "0xb9B74bdaDeC1aF7FA2B69a47C645c724e8AA3b91",
    },
    6: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress: "0x2D1733886cFd465B0B99F1492F40847495f334C5",
      verifiedRouteAddress: "0xE186a05FB020324a7cA61d80138BB1EA66DDDbDF",
    }
  },
  [ChainId.AURORA_CHAIN_ID]: {
    1: {
      protocolName: Bridge.refuel,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x8f22b246e2d380f5f5786de28847be17acaaa2b8",
    },
    2: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0x5cddbecaf8603e5e0bc771a46d48e148593351ea",
    },
  }
};

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
      routeAddress: "0x9aff58c460a461578c433e11c4108d1c4cf77761",
      verifiedRouteAddress: "0xA257242ceFc988e9EEdD20a1dfbEe415223A7179",
    },
    6: {
      protocolName: Bridge.OptimismBridge,
      isMiddleware: false,
      routeAddress: "0x2d1733886cfd465b0b99f1492f40847495f334c5",
      verifiedRouteAddress: "0xB24e2B830f4c78a1993F9b046089321764B28902",
    },
    7: {
      protocolName: Bridge.Across,
      isMiddleware: false,
      routeAddress: "0x715497Be4D130F04B8442F0A1F7a9312D4e54FC4",
      verifiedRouteAddress: "0x0553582d40D4fe5445e9272f3B59f6fF80129952",
    },
    8: {
      protocolName: Bridge.Stargate,
      isMiddleware: false,
      routeAddress: "0x90C8a40c38E633B5B0e0d0585b9F7FA05462CaaF",
      verifiedRouteAddress: "0x3Dd7419889FF387A58D3Dad1F8B49ea1064290fB",
    },
    9: {
      protocolName: Middleware.refuel,
      isMiddleware: false,
      routeAddress: "0xa402b70FCfF3F4a8422B93Ef58E895021eAdE4F6",
      verifiedRouteAddress: "0x838286885360aaFF02AA42C95bde31f6055C919F",
    },
    10: {
      protocolName: Bridge.AnySwapRouterV4,
      isMiddleware: false,
      routeAddress: "0xc1B718522E15CD42C4Ac385a929fc2B51f5B892e",
      verifiedRouteAddress: "0x6D4F89284e06554eeEEF79215A823B6F9d7b48D8",
    },
    11: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress: "0xa97bf2f7c26C43c010c349F52f5eA5dC49B2DD38",
      verifiedRouteAddress: "0xD5AA63075160B2a00Edfa3D7bB51ACdB81AF7678",
    },
    12: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0x969423d71b62C81d2f28d707364c9Dc4a0764c53",
      verifiedRouteAddress: "0xaea8417CBEb05C3B78b5E89db657eE56F095dE8D",
    },
    13: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xF86729934C083fbEc8C796068A1fC60701Ea1207",
      verifiedRouteAddress: "0x4D46d8c1Ac1c80538AF5002BC64B6412e4Ac1023",
    },
    14: {
      protocolName: Middleware.Rainbow,
      isMiddleware: true,
      routeAddress: "0xD7cC2571F5823caCA26A42690D2BE7803DD5393f",
      verifiedRouteAddress: "0xe7aC28a24E7c77413a55B99B7e0D53116D2E3E88",
    },
    15: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0x7c8837a279bbbf7d8B93413763176de9F65d5bB9",
      verifiedRouteAddress: "0x3E76e8674FFFD1e6495Ec719B82a86cb6a31EFf7",
    },
    16: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x13b81C27B588C07D04458ed7dDbdbD26D1e39bcc",
      verifiedRouteAddress: "0x1904bC76723dc82D57083876E913d42E8DDbfDc0",
    },
    17: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x52560Ac678aFA1345D15474287d16Dc1eA3F78aE",
      verifiedRouteAddress: "0xe60F1B805c4bED6703dA1C2fe5d11dEFeA0a9b65",
    }
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
    },
    7: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0x715497Be4D130F04B8442F0A1F7a9312D4e54FC4",
      verifiedRouteAddress: "0x235c819eB6877c2ffDE5AF457464131Db47500Dc",
    },
    8: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0x90C8a40c38E633B5B0e0d0585b9F7FA05462CaaF",
      verifiedRouteAddress: "0xAA95ED59FC4a4e0AcDeE31A8981cD8F6F2ae6445",
    },
    9: {
      protocolName: Middleware.Rainbow,
      isMiddleware: true,
      routeAddress: "0xa402b70FCfF3F4a8422B93Ef58E895021eAdE4F6",
      verifiedRouteAddress: "0x0553582d40D4fe5445e9272f3B59f6fF80129952",
    },
    10: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xc1B718522E15CD42C4Ac385a929fc2B51f5B892e",
      verifiedRouteAddress: "0xE00D67F732E6ED1158553fDBE9C6a151d06bed6c",
    },
    11: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0xa97bf2f7c26C43c010c349F52f5eA5dC49B2DD38",
      verifiedRouteAddress: "0x406B7133BA1Ba7898637AEdD197f783A07b1E13f",
    },
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
    },
    9: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0xa402b70FCfF3F4a8422B93Ef58E895021eAdE4F6",
      verifiedRouteAddress: "0xD5AA63075160B2a00Edfa3D7bB51ACdB81AF7678",
    },
    10: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xc1B718522E15CD42C4Ac385a929fc2B51f5B892e",
      verifiedRouteAddress: "0xaea8417CBEb05C3B78b5E89db657eE56F095dE8D",
    },
    11: {
      protocolName: Middleware.Rainbow,
      isMiddleware: true,
      routeAddress: "0xa97bf2f7c26C43c010c349F52f5eA5dC49B2DD38",
      verifiedRouteAddress: "0xeE4D022dF0A616007091a5f50FeD141a0aF7c06A",
    },
    12: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0x969423d71b62C81d2f28d707364c9Dc4a0764c53",
      verifiedRouteAddress: "0x4D46d8c1Ac1c80538AF5002BC64B6412e4Ac1023",
    },
    13: {
      protocolName: Middleware.Rainbow,
      isMiddleware: true,
      routeAddress: "0xF86729934C083fbEc8C796068A1fC60701Ea1207",
      verifiedRouteAddress: "0x1f83E8a02F3869fB7fF043c89F3f31a48EfA9195r",
    },
    14: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xD7cC2571F5823caCA26A42690D2BE7803DD5393f",
      verifiedRouteAddress: "0x7438c178BA5B6C014F984478de175951B39A2E24",
    },
    15: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0x7c8837a279bbbf7d8B93413763176de9F65d5bB9",
      verifiedRouteAddress: "0xe72edEc20D6c65A046Ae96c3DdecFB93F5CfA52C",
    },
    16: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0x13b81C27B588C07D04458ed7dDbdbD26D1e39bcc",
      verifiedRouteAddress: "0x7f031Ac52E2098a2F91C651584D26D9442B6eb4A",
    },
    17: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x52560Ac678aFA1345D15474287d16Dc1eA3F78aE",
      verifiedRouteAddress: "0xDDE19c4bDD0220d16495EC7D33Be25a1BDC29202",
    },
    18: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x1E31e376551459667cd7643440c1b21CE69065A0",
      verifiedRouteAddress: "0x3aEffE89e6CA2a0b6937bc3BDF40065c13c9bfeA",
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
    4: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0xE8704Ef6211F8988Ccbb11badC89841808d66890",
      verifiedRouteAddress: "0x89800a17cea97db4a8f0705d7f8da770032397f5",
    },
    5: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0x9aFF58C460a461578C433e11C4108D1c4cF77761",
      verifiedRouteAddress: "0xFAAFb26C06a45962E97452E5d4310df2586623A2",
    },
    6: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x2D1733886cFd465B0B99F1492F40847495f334C5",
      verifiedRouteAddress: "0x33Ac3447b7707A31888d5f003234CCaBb54339e5",
    }
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
    },
    10: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0xc1B718522E15CD42C4Ac385a929fc2B51f5B892e",
      verifiedRouteAddress: "0x3Dd7419889FF387A58D3Dad1F8B49ea1064290fB",
    },
    11: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xa97bf2f7c26C43c010c349F52f5eA5dC49B2DD38",
      verifiedRouteAddress: "0x34d5999E737DeFa0C4DDA2512F399862ee368445",
    },
    12: {
      protocolName: Middleware.Rainbow,
      isMiddleware: true,
      routeAddress: "0x969423d71b62C81d2f28d707364c9Dc4a0764c53",
      verifiedRouteAddress: "0xAe21DC9F43d335BF7925E69E2d272288492d91c5",
    },
    13: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xF86729934C083fbEc8C796068A1fC60701Ea1207",
      verifiedRouteAddress: "0x8B7e6Be0e12207604cF5858b4CB8d987926a4754",
    },
    14: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0xD7cC2571F5823caCA26A42690D2BE7803DD5393f",
      verifiedRouteAddress: "0x7E3911efCb3FD411230bAff77835766dF2F71b24",
    },
    15: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x7c8837a279bbbf7d8B93413763176de9F65d5bB9",
      verifiedRouteAddress: "0x3EC389511AF4AF02C9F3723C0fdEB105d1cC5A9C",
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
      verifiedRouteAddress: "0x09BBE4DacBf631994F2f1b70c1B18d62c19466E6",
    },
    8: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0x90c8a40c38e633b5b0e0d0585b9f7fa05462caaf",
      verifiedRouteAddress: "0xAA95ED59FC4a4e0AcDeE31A8981cD8F6F2ae6445",
    },
    9: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xa402b70FCfF3F4a8422B93Ef58E895021eAdE4F6",
      verifiedRouteAddress: "0x6D4F89284e06554eeEEF79215A823B6F9d7b48D8",
    },
    10: {
      protocolName: Middleware.Rainbow,
      isMiddleware: true,
      routeAddress: "0xc1B718522E15CD42C4Ac385a929fc2B51f5B892e",
      verifiedRouteAddress: "0xFC42BcAA16a54e7E48D0c39e4713dC5923BD551D",
    },
    11: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xa97bf2f7c26C43c010c349F52f5eA5dC49B2DD38",
      verifiedRouteAddress: "0x1cC477a4B1ab759D21Aba3fdd886AdC2EeC28243",
    },
    12: {
      protocolName: Bridge.Across,
      isMiddleware: false,
      routeAddress: "0x969423d71b62C81d2f28d707364c9Dc4a0764c53",
      verifiedRouteAddress: "	0xD5AA63075160B2a00Edfa3D7bB51ACdB81AF7678",
    },
    13: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0xF86729934C083fbEc8C796068A1fC60701Ea1207",
      verifiedRouteAddress: "0x7E3911efCb3FD411230bAff77835766dF2F71b24",
    },
    14: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0xD7cC2571F5823caCA26A42690D2BE7803DD5393f",
      verifiedRouteAddress: "0xa8b549b46CAB71ee91bfCF1861EC052c5E76EF3B",
    }
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
    7: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0x715497Be4D130F04B8442F0A1F7a9312D4e54FC4",
      verifiedRouteAddress: "0x7BdBC83a50894a3c693F9FBfAAF07776be410c8E",
    },
    8: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0x90c8a40c38e633b5b0e0d0585b9f7fa05462caaf",
      verifiedRouteAddress: "0xD5AA63075160B2a00Edfa3D7bB51ACdB81AF7678",
    },
    9: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xa402b70FCfF3F4a8422B93Ef58E895021eAdE4F6",
      verifiedRouteAddress: "0x7E486DE56b18e0EBe156B9d264E3e933242EB5dF",
    },
    10: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0xc1B718522E15CD42C4Ac385a929fc2B51f5B892e",
      verifiedRouteAddress: "0x9b52F74D5c0DAac985946f32CF45b11bb98615c7",
    }
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
    },
    7: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0x715497Be4D130F04B8442F0A1F7a9312D4e54FC4",
      verifiedRouteAddress: "0x6e520F25E66450397d02ece0166edaF46c9BF28b",
    },
    8: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0x90c8a40c38e633b5b0e0d0585b9f7fa05462caaf",
      verifiedRouteAddress: "0xA257242ceFc988e9EEdD20a1dfbEe415223A7179",
    },
    9: {
      protocolName: Middleware.ZeroX,
      isMiddleware: true,
      routeAddress: "0xa402b70FCfF3F4a8422B93Ef58E895021eAdE4F6",
      verifiedRouteAddress: "0x41e06c1Cafa528413A5430BC3A56dF59Ad84ebF8",
    },
    10: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0xc1B718522E15CD42C4Ac385a929fc2B51f5B892e",
      verifiedRouteAddress: "0x331c0edE78230d842132189C1496B31b9e7923e2",
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
    3: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0xEd9b37342BeC8f3a2D7b000732ec87498aA6EC6a",
      verifiedRouteAddress: "0xA898821781ba5dd78a485Bcb610b8a60bbC5357E",
    },
    4: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0xE8704Ef6211F8988Ccbb11badC89841808d66890",
      verifiedRouteAddress: "0x359bBF6D0f8dDcBbf86f32f0aBD1B63b8F2a9D29",
    }
  },
  [ChainId.POLYGON_ZKEVM_CHAIN_ID]: {
    385: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress:"0x1768C1D2900f1408D44FbB1EdCc306F94aF852ae",
      verifiedRouteAddress: "0x1768C1D2900f1408D44FbB1EdCc306F94aF852ae",
    }
  },
  [ChainId.ZKSYNC_ERA_CHAIN_ID]: {
    385: {
      protocolName: Bridge.AnySwapRouterV6,
      isMiddleware: false,
      routeAddress:"0x0c8F5C755233401257b3Fda01816eC17Ae54642d",
      verifiedRouteAddress: "0x0c8F5C755233401257b3Fda01816eC17Ae54642d",
    }
  }
};

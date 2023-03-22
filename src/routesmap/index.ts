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
  },
  [ChainId.BSC_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x5CddbecAF8603E5e0bC771A46D48e148593351eA",
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
  },
  [ChainId.XDAI_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Hop,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0x2d0EeB574cC98f6d57c72FFe730D5C8a8f2eac37",
    },
    2: {
      protocolName: Middleware.OneInch,
      isMiddleware: true,
      routeAddress: "0x31524750Cd865fF6A3540f232754Fb974c18585C",
      verifiedRouteAddress: "0x7c6C373190421988fA31E64f369C45205676C1f0",
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
  },
  [ChainId.AVAX_CHAIN_ID]: {
    1: {
      protocolName: Bridge.Celer,
      isMiddleware: false,
      routeAddress: "0x8cd6BaCDAe46B449E2e5B34e348A4eD459c84D50",
      verifiedRouteAddress: "0xe0134Ca3d7AD384070580542Baee00511105BEfA",
    },
  },
};

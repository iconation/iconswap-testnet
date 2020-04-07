export const Networks = Object.freeze({
    LOCALHOST: Symbol('LOCALHOST'),
    MAINNET: Symbol('MAINNET'),
    EULJIRO: Symbol('EULJIRO'),
    YEOUIDO: Symbol('YEOUIDO')
})

export const WALLET_LOCAL_STORAGE_KEY = 'wallet'

// SCORE Configuration
export const SCORE_ENDPOINT = 'cxfbe5703f71d9dc1befb98a91c0a9d37f65e7bed9'
export const SCORE_NETWORK = Networks.YEOUIDO
// export const SCORE_ENDPOINT = "cx9c08deb7f3f6bbc4a66e9b34d04c1d05a54708d3"
// export const SCORE_NETWORK = Networks.LOCALHOST
// export const SCORE_ENDPOINT = "cxe116c9b949f63a8575be1b5ff7f8167598d372e7"
// export const SCORE_NETWORK = Networks.MAINNET

// ICX Configuration
export const ICX_TOKEN_CONTRACT = 'cx0000000000000000000000000000000000000000'
export const ICX_TOKEN_DECIMALS = 18

// MAX_ITERATION_LOOP is defined in SCORE contract
export const MAX_ITERATION_LOOP = 100
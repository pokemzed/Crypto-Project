// coins and coin
export interface ICoinMarketsApi {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    market_cap_rank: number
    price_change_24h: number
    price_change_percentage_24h: number
    market_cap_change_24h: number
    low_24h: number
    high_24h: number
}
export interface ICoinApi {
    id: string
    symbol: string
    name: string
    asset_platform_id: null
    coingecko_rank: number
    coingecko_score: number
    block_time_in_minutes: number
    hashing_algorithm: string
    categories: string[]
    preview_listing: boolean
    public_notice: null
    additional_notices: []
    localization: Localization
    market_data: MarketData
    description: Description
    links: Links
    image: {
        small: string
    }
}
export interface Links {
    homepage: string[]
    blockchain_site: string[]
    official_forum_url: string[]
    chat_url: string[]
    announcement_url: string[]
    twitter_screen_name: string
    facebook_username: string
    bitcointalk_thread_identifier: any
    telegram_channel_identifier: string
    subreddit_url: string
    repos_url: ReposUrl
}
export interface ReposUrl {
    github: string[]
    bitbucket: any[]
}
export interface Localization {
    en: string
    de: string
    es: string
    fr: string
    it: string
    pl: string
    ro: string
    hu: string
    nl: string
    pt: string
    sv: string
    vi: string
    tr: string
    ru: string
    ja: string
    zh: string
    "zh-tw": string
    ko: string
    ar: string
    th: string
    id: string
    cs: string
    da: string
    el: string
    hi: string
    no: string
    sk: string
    uk: string
    he: string
    fi: string
    bg: string
    hr: string
    lt: string
    sl: string
}
export interface Description {
    en: string
    de: string
    es: string
    fr: string
    it: string
    pl: string
    ro: string
    hu: string
    nl: string
    pt: string
    sv: string
    vi: string
    tr: string
    ru: string
    ja: string
    zh: string
    "zh-tw": string
    ko: string
    ar: string
    th: string
    id: string
    cs: string
    da: string
    el: string
    hi: string
    no: string
    sk: string
    uk: string
    he: string
    fi: string
    bg: string
    hr: string
    lt: string
    sl: string
}
export interface MarketData {
    current_price: {
        usd: number
    }
    low_24h: {
        usd: number
    }
    high_24h: {
        usd: number
    }
    total_value_locked: any
    mcap_to_tvl_ratio: any
    fdv_to_tvl_ratio: any
    roi: any
    market_cap_rank: number
    market_cap_fdv_ratio: number
    price_change_24h: number
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_14d: number
    price_change_percentage_30d: number
    price_change_percentage_60d: number
    price_change_percentage_200d: number
    price_change_percentage_1y: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    total_supply: number
    max_supply: number
    circulating_supply: number
    last_updated: string
}

// exchanges and exchange
export interface IExchangesMarketsApi {
    id: string
    name: string
    year_established: number
    country: string
    description: string
    url: string
    image: string
    has_trading_incentive: boolean
    trust_score: number
    trust_score_rank: number
    trade_volume_24h_btc: number
    trade_volume_24h_btc_normalized: number
}

export interface IExchangeApi {
    name: string
    year_established: number
    country: string
    description: string
    url: string
    image: string
    facebook_url: string
    reddit_url: string
    telegram_url: string
    slack_url: string
    other_url_1: string
    other_url_2: string
    twitter_handle: string
    has_trading_incentive: boolean
    centralized: boolean
    public_notice: string
    alert_notice: string
    trust_score: number
    trust_score_rank: number
    trade_volume_24h_btc: number
    trade_volume_24h_btc_normalized: number
    tickers: Ticker[]
    status_updates: StatusUpdate[]
}
export interface Ticker {
    base: string
    target: string
    market: Market
    last: number
    volume: number
    converted_last: ConvertedLast
    converted_volume: ConvertedVolume
    trust_score: string
    bid_ask_spread_percentage: number
    timestamp: string
    last_traded_at: string
    last_fetch_at: string
    is_anomaly: boolean
    is_stale: boolean
    trade_url: string
    token_info_url: any
    coin_id: string
    target_coin_id?: string
}
export interface Market {
    name: string
    identifier: string
    has_trading_incentive: boolean
}
export interface ConvertedLast {
    btc: number
    eth: number
    usd: number
}
export interface ConvertedVolume {
    btc: number
    eth: number
    usd: number
}
export interface StatusUpdate {
    description: string
    category: string
    created_at: string
    user: string
    user_title: string
    pin: boolean
    project: Project
}
export interface Project {
    type: string
    id: string
    name: string
    image: Image
}
export interface Image {
    thumb: string
    small: string
    large: string
}


//NFT MARKETS / NFT
export interface INftMarkets {
    id: string
    contract_address: string
    name: string
    asset_platform_id: string
    symbol: string
}

export interface INftApi {
    id: string
    contract_address: string
    asset_platform_id: string
    name: string
    symbol: string
    image: Image
    description: string
    native_currency: string
    native_currency_symbol: string
    floor_price: FloorPrice
    market_cap: MarketCap
    volume_24h: Volume24h
    floor_price_in_usd_24h_percentage_change: number
    floor_price_24h_percentage_change: FloorPrice24hPercentageChange
    market_cap_24h_percentage_change: MarketCap24hPercentageChange
    volume_24h_percentage_change: Volume24hPercentageChange
    number_of_unique_addresses: number
    number_of_unique_addresses_24h_percentage_change: number
    volume_in_usd_24h_percentage_change: number
    total_supply: number
    one_day_sales: number
    one_day_sales_24h_percentage_change: number
    one_day_average_sale_price: number
    one_day_average_sale_price_24h_percentage_change: number
    links: Links
    coingecko_rank: number
    floor_price_7d_percentage_change: FloorPrice7dPercentageChange
    floor_price_14d_percentage_change: FloorPrice14dPercentageChange
    floor_price_30d_percentage_change: FloorPrice30dPercentageChange
    floor_price_60d_percentage_change: FloorPrice60dPercentageChange
    floor_price_1y_percentage_change: FloorPrice1yPercentageChange
    explorers: Explorer[]
}

export interface Image {
    small: string
}

export interface FloorPrice {
    native_currency: number
    usd: number
}

export interface MarketCap {
    native_currency: number
    usd: number
}

export interface Volume24h {
    native_currency: number
    usd: number
}

export interface FloorPrice24hPercentageChange {
    usd: number
    native_currency: number
}

export interface MarketCap24hPercentageChange {
    usd: number
    native_currency: number
}

export interface Volume24hPercentageChange {
    usd: number
    native_currency: number
}

export interface Links {
    home_page: string
    twitter: string
    discord: string
}

export interface FloorPrice7dPercentageChange {
    usd: number
    native_currency: number
}

export interface FloorPrice14dPercentageChange {
    usd: number
    native_currency: number
}

export interface FloorPrice30dPercentageChange {
    usd: number
    native_currency: number
}

export interface FloorPrice60dPercentageChange {
    usd: number
    native_currency: number
}

export interface FloorPrice1yPercentageChange {
    usd: number
    native_currency: number
}

export interface Explorer {
    name: string
    link: string
}

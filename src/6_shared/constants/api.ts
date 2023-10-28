
export const GLOBAL_API_URL: string = 'https://api.coingecko.com/api/v3'

//Получение всех монет – обязательный параметр vs_currency=usd, eur, jpy, etc. + настриоть страничность
export const MARKETS_API = (page: number, perPage: number) => `/coins/markets?vs_currency=usd&page=${page}&per_page=${perPage}`
export const TRENDING_COINS_API = (perPage: number) => `/coins/markets?vs_currency=usd&per_page=5`

//Получение одной монеты - обязательный параметр – id
export const COIN_API = (id: string) => `/coins/${id}`

//Получение истории одной монеты - обязательный параметр – id и date (формат хх-хх-хххх)
export const COIN_HISTORY_API = (id: string, date: string) => `/coins/${id}/history?date=${date}`

//Получение всех бирж. Есть возможность определения количества получения данных + страницы
export const ALL_EXCHANGES_API = (page: number, perPage: number) => `/exchanges?per_page=${perPage}&page=${page}`

//Получение одной биржи по id
export const EXCHANGE_API = (id: string) => `/exchanges/${id}`

//Получение всех nft - возможность определения страницы: параметр page и определения количества элементов: per_page
export const NFT_LIST_API = (page: number, perPage: number) => `/nfts/list?per_page=${perPage}&page=${page}`

//Получение одной монеты - обязательный параметр - id
export const NFT_API = (id: string) => `/nfts/${id}`

//Поиск по coins, categories and markets listed
export const SEARCH_API = (query: string) => `/search?query=${query}`
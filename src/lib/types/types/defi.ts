export interface DeFi1TotalSingleNumber {
    "Swap Count": number,
    "Unique Swapper": number,
    "Volume": number,
    "Swap Size": number,
}
export interface DeFi2DailySingleNumber {
    "AVG Swap Count": number,
    "AVG Unique Swapper": number,
    "AVG Volume": number,
    "AVG Swap Size": number,
}
export interface DeFi3TodayChanges {
    "Day": string,
    "24h Swap Count": number
    "Previous 24h Swap Count": number
    "change (%) Swap Count": number
    "24h Unique Swapper": number
    "Previous 24h Unique Swapper": number
    "change (%) Unique Swapper": number
    "24h Volume (in USD)": number
    "Previous 24h Volume": number
    "change (%) Volume": number
}
export interface DeFi4SwappingOverTime {
    "Day": string,
    "Swap Count": number,
    "Unique Swapper": number,
    "Volume": number,
    "Swap Size": number,
    "MA7 Swap Count": number,
    "MA7 Volume": number,
    "Cum Swap Count": number,
    "Cum Volume": number,
    "AVG Swap Count": number,
    "AVG Unique Swapper": number,
    "AVG Volume": number,
    "AVG Swap Size": number,
}
export interface DeFi5TopSwappingFromAssetsTransactions {
    "Asset": string,
    "Swap Count": number
}
export interface DeFi5TopSwappingFromAssetsUniqueSwappers {
    "Asset": string,
    "Unique Swapper": number
}
export interface DeFi5TopSwappingFromAssetsVolume {
    "Asset": string,
    "Volume": number
}
export interface DeFi6TopSwappingToAssetsTransactions {
    "Asset": string,
    "Swap Count": number
}
export interface DeFi6TopSwappingToAssetsUniqueSwappers {
    "Asset": string,
    "Unique Swapper": number
}
export interface DeFi6TopSwappingToAssetsVolume {
    "Asset": string,
    "Volume": number
}
export interface DeFi7TopSwappingPairsTransactions {
    "Pair": string,
    "Swap Count": number
}
export interface DeFi7TopSwappingPairsUniqueSwappers {
    "Pair": string,
    "Unique Swapper": number
}
export interface DeFi7TopSwappingPairsVolume {
    "Pair": string,
    "Volume": number
}
export interface DeFi8WeeklyTop10SwappingPairsTransactions {
    "Day": string,
    "Pair": string,
    "Swap Count": number,
    "Rank": number
}
export interface DeFi8WeeklyTop10SwappingPairsUniqueSwappers {
    "Day": string,
    "Pair": string,
    "Unique Swapper": number,
    "Rank": number
}
export interface DeFi8WeeklyTop10SwappingPairsVolume {
    "Day": string,
    "Pair": string,
    "Volume": number
    "Rank": number
}
export interface StablecoinsTodayChanges {
    "Day": string,
    "24h Transactions": number,
    "Previous 24h Transactions": number,
    "change (%) Transactions": number,
    "24h Active Wallets": number,
    "Previous 24h Active Wallets": number,
    "change (%) Active Wallets": number,
    "24h Volume": number,
    "Previous 24h Volume": number,
    "change (%) Volume": number,
}

export interface StablecoinsAverage {
    "AVG tx count": number
    "AVG Active users": number
    "AVG Volume": number
}

export interface StablecoinsOverview {
    "Day": string,
    "Stablecoin": string,
    "TX Count": number,
    "Unique User": number,
    "Volume": number,
    "TX Volume": number,
}

export interface StablecoinsCompetition {
    "Stablecoin": string,
    "AVG TX Count": number
    "AVG Unique user": number
    "AVG volume": number
    "AVG TX Volume": number
}


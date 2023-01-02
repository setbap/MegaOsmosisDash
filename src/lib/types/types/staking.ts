export interface StakingOvertime {
  Day: string;
  Actions: string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
  "Cum tx count": number;
  "Cum volume": number;
}

export interface StakingDailyAverage {
  Actions: string;
  "AVG tx count": number;
  "AVG unique wallet": number;
  "AVG volume": number;
  "AVG TX volume": number;
}

export interface StakingActiveStakingPool {
  Day: string;
  "Active Staking Pool": number;
}

export interface StakingTop10Pools {
  "Pool name": string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
}

export interface StakingTop10PoolsWithDay {
  Day: string;
  "Pool name": string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
  Rank: number;
}

export interface StakingTop30HighestPools {
  "Pool name": string;
  "Current stake amount": number;
}
export interface StakingTopStakers {
  Staker: string;
  "Staked Balance": number;
  "% Staked Supply": number;
  "Staking Pools": string;
}

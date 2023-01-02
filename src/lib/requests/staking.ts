import { ReturnDataType } from "lib/types/base";
import {
  StakingActiveStakingPool,
  StakingDailyAverage,
  StakingOvertime,
  StakingTop10Pools,
  StakingTop10PoolsWithDay,
  StakingTop30HighestPools,
  StakingTopStakers,
} from "lib/types/types/staking";
import { getSimpleArrayData, pivotData } from "./utils";

// 1
const _getStakingOvertime = () =>
  getSimpleArrayData<StakingOvertime, StakingOvertime>(
    "8102dd8e-0ea3-45f4-bb26-b01aebd02df2",
    "3. Weekly number of unique users,4. Cumulative number of staking transactions,5. Cumulative volume of staking transactions,1. Weekly number of staking transactions,2. Weekly total volume of staking transactions",
    "Day"
  );

export const getStakingOvertime = async () => {
  const rawData = await _getStakingOvertime();

  const actionType = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Actions"];
      })
    )
  );
  const cumVolume = pivotData(
    rawData.data,
    "Day",
    "Actions",
    "Cum volume",
    actionType,
    0
  );

  const volume = pivotData(
    rawData.data,
    "Day",
    "Actions",
    "Volume",
    actionType,
    0
  );

  const uniqueWallet = pivotData(
    rawData.data,
    "Day",
    "Actions",
    "Unique wallet",
    actionType,
    0
  );

  const cumTXCount = pivotData(
    rawData.data,
    "Day",
    "Actions",
    "Cum tx count",
    actionType,
    0
  );
  const tXCount = pivotData(
    rawData.data,
    "Day",
    "Actions",
    "tx count",
    actionType,
    0
  );
  return {
    data: {
      tXCount: tXCount.sort((a, b) => (a["Name"] > b["Name"] ? 1 : -1)),
      cumTXCount: cumTXCount.sort((a, b) => (a["Name"] > b["Name"] ? 1 : -1)),
      uniqueWallet: uniqueWallet.sort((a, b) =>
        a["Name"] > b["Name"] ? 1 : -1
      ),
      volume: volume.sort((a, b) => (a["Name"] > b["Name"] ? 1 : -1)),
      cumVolume: cumVolume.sort((a, b) => (a["Name"] > b["Name"] ? 1 : -1)),
      actions: actionType,
    },
    key: rawData.key,
    title: rawData.title,
  } as ReturnDataType<any>;
};

// 2
export const getStakingDailyAverage = () =>
  getSimpleArrayData<StakingDailyAverage, StakingDailyAverage>(
    "14cc6878-d474-4569-b040-7e76850c9382",
    "4. Average transactions volume,1. Daily number of transactions,2. Daily number of unique users,3. Daily volume of transactions"
  );

// 3
export const getStakingActiveStakingPool = () =>
  getSimpleArrayData<StakingActiveStakingPool, StakingActiveStakingPool>(
    "a63e5399-4a72-4d60-952b-5e86ecf5f6e9",
    "Number of active staking pool"
  );

// 4
export const getStakingTop10PoolsTransaction = () =>
  getSimpleArrayData<StakingTop10Pools, StakingTop10Pools>(
    "939ab31b-aea3-4147-a957-803b3aa2f0cc",
    "2. Top 10 pools based on staking transactions"
  );

export const getStakingTop10PoolsUniqueStakers = () =>
  getSimpleArrayData<StakingTop10Pools, StakingTop10Pools>(
    "0db3ec76-011b-4fa7-b68d-4b1a3c738ada",
    "2. Top 10 pools based on unique stakers"
  );

export const getStakingTop10PoolsVolume = () =>
  getSimpleArrayData<StakingTop10Pools, StakingTop10Pools>(
    "2a8ff3ad-34a3-4b64-84da-3f1418247db8",
    "2. Top 10 pools based on staking volume"
  );

// 5
export const _getStakingTop10PoolsWithDayTransaction = () =>
  getSimpleArrayData<StakingTop10PoolsWithDay, StakingTop10PoolsWithDay>(
    "67c117d3-2647-45cf-a6aa-1ce35ecf1bf9",
    "1. Weekly top 10 pools based on staking transactions"
  );

export const getStakingTop10PoolsWithDayTransaction: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getStakingTop10PoolsWithDayTransaction();

  const actionType = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pool name"];
      })
    )
  );
  const txCount = pivotData(
    rawData.data,
    "Day",
    "Pool name",
    "tx count",
    actionType,
    0
  );

  return {
    data: {
      txCount,
      actions: actionType,
    },
    key: rawData.key,
    title: rawData.title,
  };
};

export const _getStakingTop10PoolsWithDayUniqueStakers = () =>
  getSimpleArrayData<StakingTop10PoolsWithDay, StakingTop10PoolsWithDay>(
    "01502bc8-c8ad-4299-b5cb-e3d2e46d203c",
    "1. Weekly top 10 pools based on staking unique stakers"
  );

export const getStakingTop10PoolsWithDayUniqueStakers: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getStakingTop10PoolsWithDayUniqueStakers();

  const actionType = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pool name"];
      })
    )
  );
  const uniqueWallet = pivotData(
    rawData.data,
    "Day",
    "Pool name",
    "Unique wallet",
    actionType,
    0
  );

  return {
    data: {
      uniqueWallet,
      actions: actionType,
    },
    key: rawData.key,
    title: rawData.title,
  };
};

export const _getStakingTop10PoolsWithDayUniqueVolume = () =>
  getSimpleArrayData<StakingTop10PoolsWithDay, StakingTop10PoolsWithDay>(
    "5d43109b-1730-4d81-8dcb-6a0891fdf859",
    "1. Weekly top 10 pools based on staking volume"
  );
export const getStakingTop10PoolsWithDayUniqueVolume: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getStakingTop10PoolsWithDayUniqueVolume();

  const actionType = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pool name"];
      })
    )
  );
  const volume = pivotData(
    rawData.data,
    "Day",
    "Pool name",
    "Volume",
    actionType,
    0
  );

  return {
    data: {
      volume,
      actions: actionType,
    },
    key: rawData.key,
    title: rawData.title,
  };
};

//  6
export const getStakingTop30HighestPools = () =>
  getSimpleArrayData<StakingTop30HighestPools, StakingTop30HighestPools>(
    "98384211-4088-4914-a9cc-4d8050b345cf",
    "Top 30 Pools based on current balance"
  );

// 7

export const getStakingTopWallets = () =>
  getSimpleArrayData<StakingTopStakers, StakingTopStakers>(
    "394241cd-4a73-42bb-ba22-f33145e09821",
    "Top 30 Pools based on current balance"
  );

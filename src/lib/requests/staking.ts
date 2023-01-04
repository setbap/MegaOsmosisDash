import { ReturnDataType } from "lib/types/base";
import {
  StakingActiveStakingPool,
  StakingDailyAverage,
  StakingOSMOOvertime,
  StakingOvertime,
  StakingTop10Pools,
  StakingTop10PoolsWithDay,
  StakingTop30HighestPools,
  StakingTopStakers,
} from "lib/types/types/staking";
import { getSimpleArrayData, pivotData } from "./utils";

// 1
export const getStakingOSMOOvertime = () =>
  getSimpleArrayData<StakingOSMOOvertime, StakingOSMOOvertime>(
    "037f2467-7127-4666-8806-64fd46fbf12a",
    "Staked $OSMO over Time",
    "Day"
  );

const _getStakingOvertime = () =>
  getSimpleArrayData<StakingOvertime, StakingOvertime>(
    "8402c388-3b56-4b6a-8387-57fb6397b3b0",
    "Cumulative number of staking transactions,Weekly number of staking transactions,Cumulative volume of staking transactions,Weekly total volume of staking transactions,Weekly number of unique users",
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
    "d940ac09-5655-4d3b-bee1-1b5027632786",
    "Average transactions volume,Daily number of transactions,Daily number of unique users,Daily volume of transactions"
  );

// 3
export const getStakingActiveStakingPool = () =>
  getSimpleArrayData<StakingActiveStakingPool, StakingActiveStakingPool>(
    "27245ed3-a370-4c46-a2a3-c24e1e62a470",
    "Number of active staking pool"
  );

// 4
export const getStakingTop10PoolsTransaction = () =>
  getSimpleArrayData<StakingTop10Pools, StakingTop10Pools>(
    "754ecb49-c216-42b3-b2b3-381f3a418cc0",
    "Top 10 pools based on staking transactions"
  );

export const getStakingTop10PoolsUniqueStakers = () =>
  getSimpleArrayData<StakingTop10Pools, StakingTop10Pools>(
    "508df983-43c5-4aa8-9275-ae6df17f0db5",
    "Top 10 pools based on unique stakers"
  );

export const getStakingTop10PoolsVolume = () =>
  getSimpleArrayData<StakingTop10Pools, StakingTop10Pools>(
    "db999d19-5d98-413c-8974-024a93e574e6",
    "Top 10 pools based on staking volume"
  );

// 5
export const _getStakingTop10PoolsWithDayTransaction = () =>
  getSimpleArrayData<StakingTop10PoolsWithDay, StakingTop10PoolsWithDay>(
    "a1abe25c-a148-44cc-8534-3c65c8b336f7",
    "Weekly top 10 pools based on staking transactions"
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
    "e8fc8c42-5ce2-4d79-bf3c-eca0c3bda31a",
    "3.Weekly top 10 pools based on staking unique stakers"
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
    "0a4a77f8-774b-4f43-94b1-8c243ed0c138",
    "Weekly top 10 pools based on staking volume"
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
    "c8aab201-bf72-4987-9bc9-7e2dd5e33d3f",
    "Top 30 Pools based on current balance"
  );

// 7

export const getStakingTopWallets = () =>
  getSimpleArrayData<StakingTopStakers, StakingTopStakers>(
    "96d8e1d7-2687-4548-8a72-197b1051588f",
    "Top 30 Pools based on current balance"
  );

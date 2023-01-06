import { ReturnDataType } from "lib/types/base";
import { DeFi1TotalSingleNumber, DeFi2DailySingleNumber, DeFi3TodayChanges, DeFi4SwappingOverTime, DeFi5TopSwappingFromAssetsTransactions, DeFi5TopSwappingFromAssetsUniqueSwappers, DeFi5TopSwappingFromAssetsVolume, DeFi6TopSwappingToAssetsTransactions, DeFi6TopSwappingToAssetsUniqueSwappers, DeFi6TopSwappingToAssetsVolume, DeFi7TopSwappingPairsTransactions, DeFi7TopSwappingPairsUniqueSwappers, DeFi7TopSwappingPairsVolume, DeFi8WeeklyTop10SwappingPairsTransactions, DeFi8WeeklyTop10SwappingPairsUniqueSwappers, DeFi8WeeklyTop10SwappingPairsVolume } from "lib/types/types/defi";

import {
  getSimpleArrayData,
  getSimpleInfo,
  pivotData,
  summerizeRow,
} from "./utils";

export const getDeFi1TotalSingleNumber = () =>
  getSimpleInfo<DeFi1TotalSingleNumber>(
    "217bd4d3-7321-48a0-8153-ee26d932fe38",
    "Total Swap Transactions,Total Unique Swappers,Total Swap Volume(in USD)"
  );

export const getDeFi2DailySingleNumber = () =>
  getSimpleInfo<DeFi2DailySingleNumber>(
    "695fc28d-fea5-4db6-8c8e-93bed3fffeca",
    "Daily Swap size(in USD),Daily Unique Swappers,Daily Swap Volume(in USD),Daily Swap Transactions"
  );

export const getDeFi3TodayChanges = () =>
  getSimpleInfo<DeFi3TodayChanges>(
    "5e631e8b-c650-4815-bbbf-3ac71af2ca8f",
    "24h Swap Count,24h Unique Swapper,24h Volume (in USD)"
  );


export const getDeFi4SwappingOverTime = () =>
  getSimpleArrayData<
    DeFi4SwappingOverTime,
    DeFi4SwappingOverTime
  >(
    "6745f0f8-d006-4472-a3b2-79c7406cbdfe",
    "Weekly average swap size(in USD),Cumulative volume of swap transactions(in USD),Cumulative number of swap transactions,Weekly number of unique swappers,Weekly volume of swap transactions,Weekly number of swap transactions"
  );


export const getDeFi5TopSwappingFromAssetsTransactions = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsTransactions,
    DeFi5TopSwappingFromAssetsTransactions
  >(
    "e32807f8-924b-4859-a8da-d34804fb33b3",
    "Top swapping from assets based on transactions"
  );


export const getDeFi5TopSwappingFromAssetsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsUniqueSwappers,
    DeFi5TopSwappingFromAssetsUniqueSwappers
  >(
    "842b79c0-3655-4ed3-9534-781631657ffd",
    "Top swapping from assets based on unique swappers"
  );


export const getDeFi5TopSwappingFromAssetsVolume = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsVolume,
    DeFi5TopSwappingFromAssetsVolume
  >(
    "392c35ba-054a-4eb9-9a72-80a3e9bda257",
    "Top swapping from assets based on volume"
  );

export const getDeFi6TopSwappingToAssetsTransactions = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsTransactions,
    DeFi6TopSwappingToAssetsTransactions
  >(
    "8e747766-77aa-40b9-8691-25347bcfc92f",
    "Top swapping to assets based on transactions"
  );


export const getDeFi6TopSwappingToAssetsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsUniqueSwappers,
    DeFi6TopSwappingToAssetsUniqueSwappers
  >(
    "39b57d27-39a7-4805-b3d7-7c63b32e440e",
    "Top swapping to assets based on unique swappers"
  );


export const getDeFi6TopSwappingToAssetsVolume = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsVolume,
    DeFi6TopSwappingToAssetsVolume
  >(
    "33970d9b-1136-41a6-b8db-21c0cb1209fb",
    "Top swapping to assets based on volume"
  );


export const getDeFi7TopSwappingPairsTransactions = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsTransactions,
    DeFi7TopSwappingPairsTransactions
  >(
    "23cd07bb-41d9-4a3a-9fe0-89ce44c9942d",
    "Top swapping pairs based on transactions"
  );


export const getDeFi7TopSwappingPairsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsUniqueSwappers,
    DeFi7TopSwappingPairsUniqueSwappers
  >(
    "b2bbeb0b-bc1a-4ea8-8c42-839a92b49d6e",
    "Top swapping pairs based on unique swappers"
  );


export const getDeFi7TopSwappingPairsVolume = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsVolume,
    DeFi7TopSwappingPairsVolume
  >(
    "807e55f6-ced9-4971-b846-e7b2fd890507",
    "Top swapping pairs based on volume"
  );


export const _getDeFi8WeeklyTop10SwappingPairsTransactions = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsTransactions,
    DeFi8WeeklyTop10SwappingPairsTransactions
  >(
    "72910fb0-82b4-4abd-8fc1-9423971b2961",
    "Weekly top 10 swapping pairs based on transactions"
  );

export const getDeFi8WeeklyTop10SwappingPairsTransactions: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsTransactions();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const swapCount = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Swap Count",
    pairs,
    0
  );

  return {
    data: {
      swapCount,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};


export const _getDeFi8WeeklyTop10SwappingPairsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsUniqueSwappers,
    DeFi8WeeklyTop10SwappingPairsUniqueSwappers
  >(
    "204c9fbc-fbe5-470e-99a1-762170d0b68f",
    "Weekly top 10 swapping pairs based on unique swappers"
  );
export const getDeFi8WeeklyTop10SwappingPairsUniqueSwappers: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsUniqueSwappers();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const uniqueSwapper = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Unique Swapper",
    pairs,
    0
  );

  return {
    data: {
      uniqueSwapper,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};

export const _getDeFi8WeeklyTop10SwappingPairsVolume = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsVolume,
    DeFi8WeeklyTop10SwappingPairsVolume
  >(
    "48c40021-0653-4bfe-b20d-2018a67a5cf4",
    "Weekly top 10 swapping pairs based on volume"
  );
export const getDeFi8WeeklyTop10SwappingPairsVolume: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsVolume();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const volume = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Volume",
    pairs,
    0
  );

  return {
    data: {
      volume,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};


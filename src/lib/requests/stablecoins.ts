import { ReturnDataType } from "lib/types/base";
import { StablecoinsAverage, StablecoinsCompetition, StablecoinsOverview, StablecoinsTodayChanges } from "lib/types/types/stablecoins";

import {
  getSimpleArrayData,
  getSimpleInfo,
  pivotData,
  summerizeRow,
} from "./utils";


export const getStablecoinsTodayChanges = () =>
  getSimpleInfo<StablecoinsTodayChanges>(
    "30ebff88-2a5c-42cf-aec7-4e9717150c26",
    "24h Transactions,24h Active Wallets,24h Volume"
  );

export const getStablecoinsAverage = () =>
  getSimpleInfo<StablecoinsAverage>(
    "29448435-6800-4fa2-8f5d-39ec408d5e5e",
    "Daily volume,Daily transactions,Daily active wallets"
  );

export const _getStablecoinsOverview = () =>
  getSimpleArrayData<
    StablecoinsOverview,
    StablecoinsOverview
  >(
    "68a6fa7e-5617-4eab-93fd-a3c4733acee8",
    "Weekly average volume of transactions,Weekly number of unique users,Weekly volume of transactions,Weekly number of transactions",
    "Day"
  );

export const getStablecoinsOverview = async () => {
  const rawData = await _getStablecoinsOverview();

  const stablecoins = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Stablecoin"];
      })
    )
  );
  const txVolume = pivotData(
    rawData.data,
    "Day",
    "Stablecoin",
    "TX Volume",
    stablecoins,
    0
  );

  const uniqueUser = pivotData(
    rawData.data,
    "Day",
    "Stablecoin",
    "Unique User",
    stablecoins,
    0
  );

  const volume = pivotData(
    rawData.data,
    "Day",
    "Stablecoin",
    "Volume",
    stablecoins,
    0
  );

  const txCount = pivotData(
    rawData.data,
    "Day",
    "Stablecoin",
    "TX Count",
    stablecoins,
    0
  );

  return {
    data: {
      volume: volume.sort((a, b) => (a["Name"] > b["Name"] ? 1 : -1)),
      uniqueUser: uniqueUser.sort((a, b) => a["Name"] > b["Name"] ? 1 : -1),
      txVolume: txVolume.sort((a, b) => (a["Name"] > b["Name"] ? 1 : -1)),
      txCount: txCount.sort((a, b) => (a["Name"] > b["Name"] ? 1 : -1)),
      actions: stablecoins,
    },
    key: rawData.key,
    title: rawData.title,
  } as ReturnDataType<any>;
};



export const getStablecoinsCompetition = () =>
  getSimpleArrayData<
    StablecoinsCompetition,
    StablecoinsCompetition
  >(
    "b035f57c-e5cc-4948-87ca-024525f038c5",
    "Average transactions volume,Daily number of transactions,Daily number of unique users,Daily volume of transactions"
  );




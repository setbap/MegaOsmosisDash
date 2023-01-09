import { } from "lib/types/base";
import { } from "lib/types/types/development";
import { SupplyCirculatingSupply, SupplyCurrentCirculatingSupply, SupplyOSMOHolders1TopOPHolders, SupplyOSMOHolders2DistributionOfOPHolders } from "lib/types/types/supply";
import { } from "./staking";
import {
  getSimpleArrayData,
  getSimpleInfo,
  pivotData,
  summerizeRow,
} from "./utils";

export const getSupplyCirculatingSupply = () =>
  getSimpleArrayData<
    SupplyCirculatingSupply,
    SupplyCirculatingSupply
  >(
    "4cf0a15e-aec0-4b7d-af3e-cea54ade1ce8",
    "Circulating Supply over time"
  );

export const getSupplyCurrentCirculatingSupply = () =>
  getSimpleInfo<SupplyCurrentCirculatingSupply>(
    "f7a8cf51-53ef-42ee-b5d0-6c8e39d636c9",
    "Circulating Supply"
  );

export const getSupplyOSMOHolders2DistributionOfOPHolders = () =>
  getSimpleArrayData<SupplyOSMOHolders2DistributionOfOPHolders, SupplyOSMOHolders2DistributionOfOPHolders>(
    "f1aeebc7-9b27-46f1-b02b-9a9ad69dedac",
    "Distribution of $OSMO holders",
  );

export const getSupplyOSMOHolders1TopOPHolders = () =>
  getSimpleArrayData<SupplyOSMOHolders1TopOPHolders, SupplyOSMOHolders1TopOPHolders>(
    "6237887d-f2e5-4b9f-8eda-635293194455",
    "Top $OSMO holders",
  );


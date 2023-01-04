import { } from "lib/types/base";
import { } from "lib/types/types/development";
import { SupplyCirculatingSupply, SupplyCurrentCirculatingSupply } from "lib/types/types/supply";
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

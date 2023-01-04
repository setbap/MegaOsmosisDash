import { } from "lib/types/base";
import { DevelopmentNewContracts } from "lib/types/types/development";
import { } from "./staking";
import {
  getSimpleArrayData,
  getSimpleInfo,
  pivotData,
  summerizeRow,
} from "./utils";

export const getDevelopmentNewContracts = () =>
  getSimpleArrayData<
    DevelopmentNewContracts,
    DevelopmentNewContracts
  >(
    "e287009d-7276-47e2-9529-e6bb99e7f4d4",
    "Cumulative new deployed contracts,Weekly new deployed contracts",
    "Day"
  );

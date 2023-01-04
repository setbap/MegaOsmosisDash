import { } from "lib/types/base";
import { AirdropClaimed, AirdropTotalInfo } from "lib/types/types/airdrop";
import { } from "lib/types/types/development";
import { } from "./staking";
import {
  getSimpleArrayData,
  getSimpleInfo,
} from "./utils";

export const getAirdropClaimed = () =>
  getSimpleArrayData<
    AirdropClaimed,
    AirdropClaimed
  >(
    "0f2d229d-0721-4e2d-853a-f0a88ca31a0e",
    "Cumulative claimed amount(in OSMO),Weekly number of transactions,Weekly claimed amount(in OSMO)",
    "Day"
  );

export const getAirdropTotalInfo = () =>
  getSimpleInfo<AirdropTotalInfo>(
    "758eccc8-aa38-4b6b-83c3-9736d837c8b1",
    "Total claimed transactions,Total OSMO claimed"
  );

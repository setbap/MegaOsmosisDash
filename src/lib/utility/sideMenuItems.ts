import { GiMeepleCircle, GiNightSky, GiProfit } from "react-icons/gi";
import { BsCodeSquare } from "react-icons/bs";
import { BiDollar, BiTransferAlt } from "react-icons/bi";
import { AiOutlineSwap } from "react-icons/ai";

export default [
  { name: "Transactions", path: "/", icon: BiTransferAlt },
  { name: "Staking", path: "/staking", icon: GiProfit },
  { name: "Stablecoins", path: "/stablecoins", icon: BiDollar },
  { name: "Defi", path: "/defi", icon: AiOutlineSwap },
  { name: "Contract Growth", path: "/contract-growth", icon: BsCodeSquare },
  { name: "Airdrop", path: "/airdrop", icon: GiNightSky },
  { name: "Supply", path: "/supply", icon: GiMeepleCircle },
];

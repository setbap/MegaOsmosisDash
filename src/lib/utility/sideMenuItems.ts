import { GiMeepleCircle, GiNightSky, GiProfit } from "react-icons/gi";
import { BsCodeSquare } from "react-icons/bs";
import { BiDollar, BiTransferAlt } from "react-icons/bi";

export default [
  { name: "Transactions", path: "/", icon: BiTransferAlt },
  { name: "Staking", path: "/staking", icon: GiProfit },
  { name: "Stablecoins", path: "/stablecoins", icon: BiDollar },
  { name: "Development", path: "/development", icon: BsCodeSquare },
  { name: "Airdrop", path: "/airdrop", icon: GiNightSky },
  { name: "Supply", path: "/supply", icon: GiMeepleCircle },
  // { name: "DEX", path: "/dex", icon: BsCodeSquare },
];

import Supply from "lib/pages/supply";
import { } from "lib/requests/supply";
import { getSupplyCirculatingSupply, getSupplyCurrentCirculatingSupply } from "lib/requests/supply";
import { ReturnDataType } from "lib/types/base";
import { SupplyCurrentCirculatingSupply } from "lib/types/types/supply";
import { SupplyCirculatingSupply } from "lib/types/types/supply";

export async function getStaticProps() {
  const [
    supplyCirculatingSupply,
    supplyCurrentCirculatingSupply,
  ] = await Promise.all([
    getSupplyCirculatingSupply(),
    getSupplyCurrentCirculatingSupply(),
  ]);

  return {
    props: {
      supplyCirculatingSupply,
      supplyCurrentCirculatingSupply,
    },
    revalidate: 10 * 60,
  };
}

export interface SupplyProps {
  supplyCirculatingSupply: ReturnDataType<SupplyCirculatingSupply[]>;
  supplyCurrentCirculatingSupply: ReturnDataType<SupplyCurrentCirculatingSupply>;
}

export default Supply;

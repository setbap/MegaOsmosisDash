import Supply from "lib/pages/supply";
import {
  getSupplyOSMOHolders1TopOPHolders,
  getSupplyOSMOHolders2DistributionOfOPHolders,
} from "lib/requests/supply";
import {
  getSupplyCirculatingSupply,
  getSupplyCurrentCirculatingSupply,
} from "lib/requests/supply";

export async function getStaticProps() {
  const [
    supplyCirculatingSupply,
    supplyCurrentCirculatingSupply,
    supplyOSMOHolders2DistributionOfOPHolders,
    supplyOSMOHolders1TopOPHolders,
  ] = await Promise.all([
    getSupplyCirculatingSupply(),
    getSupplyCurrentCirculatingSupply(),
    getSupplyOSMOHolders2DistributionOfOPHolders(),
    getSupplyOSMOHolders1TopOPHolders(),
  ]);

  return {
    props: {
      supplyCirculatingSupply,
      supplyCurrentCirculatingSupply,
      supplyOSMOHolders2DistributionOfOPHolders,
      supplyOSMOHolders1TopOPHolders,
    },
    revalidate: 10 * 60,
  };
}

export type SupplyProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default Supply;

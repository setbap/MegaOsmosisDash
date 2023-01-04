import Stablecoins from "lib/pages/stablecoins";
import { getStablecoinsAverage, getStablecoinsCompetition, getStablecoinsOverview, getStablecoinsTodayChanges } from "lib/requests/stablecoins";
import { ReturnDataType } from "lib/types/base";
import { StablecoinsAverage, StablecoinsCompetition, StablecoinsTodayChanges } from "lib/types/types/stablecoins";

export async function getStaticProps() {
  const [
    stablecoinsTodayChanges,
    stablecoinsAverage,
    stablecoinsOverview,
    stablecoinsCompetition,
  ] = await Promise.all([
    getStablecoinsTodayChanges(),
    getStablecoinsAverage(),
    getStablecoinsOverview(),
    getStablecoinsCompetition(),

  ]);

  return {
    props: {
      stablecoinsTodayChanges,
      stablecoinsAverage,
      stablecoinsOverview,
      stablecoinsCompetition,
    },
    revalidate: 10 * 60,
  };
}

export interface StablecoinsProps {
  stablecoinsTodayChanges: ReturnDataType<StablecoinsTodayChanges>;
  stablecoinsAverage: ReturnDataType<StablecoinsAverage>;
  stablecoinsOverview: ReturnDataType<any>;
  stablecoinsCompetition: ReturnDataType<StablecoinsCompetition[]>;
}

export default Stablecoins;

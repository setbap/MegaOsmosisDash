import DeFi from "lib/pages/defi";
import {
  getDeFi1TotalSingleNumber,
  getDeFi2DailySingleNumber,
  getDeFi3TodayChanges,
  getDeFi4SwappingOverTime,
  getDeFi5TopSwappingFromAssetsTransactions,
  getDeFi5TopSwappingFromAssetsUniqueSwappers,
  getDeFi5TopSwappingFromAssetsVolume,
  getDeFi6TopSwappingToAssetsTransactions,
  getDeFi6TopSwappingToAssetsUniqueSwappers,
  getDeFi6TopSwappingToAssetsVolume,
  getDeFi7TopSwappingPairsTransactions,
  getDeFi7TopSwappingPairsUniqueSwappers,
  getDeFi7TopSwappingPairsVolume,
  getDeFi8WeeklyTop10SwappingPairsTransactions,
  getDeFi8WeeklyTop10SwappingPairsUniqueSwappers,
  getDeFi8WeeklyTop10SwappingPairsVolume,
} from "lib/requests/defi";

export async function getStaticProps() {
  const [
    deFi1TotalSingleNumber,
    deFi2DailySingleNumber,
    deFi3TodayChanges,
    deFi4SwappingOverTime,
    deFi5TopSwappingFromAssetsTransactions,
    deFi5TopSwappingFromAssetsUniqueSwappers,
    deFi5TopSwappingFromAssetsVolume,
    deFi6TopSwappingToAssetsTransactions,
    deFi6TopSwappingToAssetsUniqueSwappers,
    deFi6TopSwappingToAssetsVolume,
    deFi7TopSwappingPairsTransactions,
    deFi7TopSwappingPairsUniqueSwappers,
    deFi7TopSwappingPairsVolume,
    deFi8WeeklyTop10SwappingPairsTransactions,
    deFi8WeeklyTop10SwappingPairsUniqueSwappers,
    deFi8WeeklyTop10SwappingPairsVolume,
  ] = await Promise.all([
    getDeFi1TotalSingleNumber(),
    getDeFi2DailySingleNumber(),
    getDeFi3TodayChanges(),
    getDeFi4SwappingOverTime(),
    getDeFi5TopSwappingFromAssetsTransactions(),
    getDeFi5TopSwappingFromAssetsUniqueSwappers(),
    getDeFi5TopSwappingFromAssetsVolume(),
    getDeFi6TopSwappingToAssetsTransactions(),
    getDeFi6TopSwappingToAssetsUniqueSwappers(),
    getDeFi6TopSwappingToAssetsVolume(),
    getDeFi7TopSwappingPairsTransactions(),
    getDeFi7TopSwappingPairsUniqueSwappers(),
    getDeFi7TopSwappingPairsVolume(),
    getDeFi8WeeklyTop10SwappingPairsTransactions(),
    getDeFi8WeeklyTop10SwappingPairsUniqueSwappers(),
    getDeFi8WeeklyTop10SwappingPairsVolume(),
  ]);

  return {
    props: {
      deFi1TotalSingleNumber,
      deFi2DailySingleNumber,
      deFi3TodayChanges,
      deFi4SwappingOverTime,
      deFi5TopSwappingFromAssetsTransactions,
      deFi5TopSwappingFromAssetsUniqueSwappers,
      deFi5TopSwappingFromAssetsVolume,
      deFi6TopSwappingToAssetsTransactions,
      deFi6TopSwappingToAssetsUniqueSwappers,
      deFi6TopSwappingToAssetsVolume,
      deFi7TopSwappingPairsTransactions,
      deFi7TopSwappingPairsUniqueSwappers,
      deFi7TopSwappingPairsVolume,
      deFi8WeeklyTop10SwappingPairsTransactions,
      deFi8WeeklyTop10SwappingPairsUniqueSwappers,
      deFi8WeeklyTop10SwappingPairsVolume,
    },
    revalidate: 10 * 60,
  };
}

export type DefiProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default DeFi;

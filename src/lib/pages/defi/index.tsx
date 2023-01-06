import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";

import { DefiProps } from "pages/defi";
import DonutChart from "lib/components/charts/DonutChart";
import BarGraph from "lib/components/charts/BarGraph";
import HeaderSection from "lib/components/basic/HeaderSection";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

const Defi = ({
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
}: DefiProps): JSX.Element => {
  const deFi1TotalSingleNumberNames = deFi1TotalSingleNumber.title.split(",");
  const deFi2DailySingleNumberNames = deFi2DailySingleNumber.title.split(",");
  const deFi3TodayChangesNames = deFi3TodayChanges.title.split(",");
  const deFi4SwappingOverTimeNames = deFi4SwappingOverTime.title.split(",");

  const deFi6TopSwappingToAssetsTransactionsNames =
    deFi6TopSwappingToAssetsTransactions.title.split(",");
  const deFi6TopSwappingToAssetsUniqueSwappersNames =
    deFi6TopSwappingToAssetsUniqueSwappers.title.split(",");
  const deFi6TopSwappingToAssetsVolumeNames =
    deFi6TopSwappingToAssetsVolume.title.split(",");
  const deFi7TopSwappingPairsTransactionsNames =
    deFi7TopSwappingPairsTransactions.title.split(",");
  const deFi7TopSwappingPairsUniqueSwappersNames =
    deFi7TopSwappingPairsUniqueSwappers.title.split(",");
  const deFi7TopSwappingPairsVolumeNames =
    deFi7TopSwappingPairsVolume.title.split(",");
  const deFi8WeeklyTop10SwappingPairsTransactionsNames =
    deFi8WeeklyTop10SwappingPairsTransactions.title.split(",");
  const deFi8WeeklyTop10SwappingPairsUniqueSwappersNames =
    deFi8WeeklyTop10SwappingPairsUniqueSwappers.title.split(",");
  const deFi8WeeklyTop10SwappingPairsVolumeNames =
    deFi8WeeklyTop10SwappingPairsVolume.title.split(",");

  return (
    <>
      <NextSeo
        title={`Osmosis | Defi`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Osmosis  | Defi`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} pt="4" px={{ base: 3, sm: 2, md: 8 }}>
        <HeaderSection title="Osmosis DEFI" />
        <Box pt={"4"}></Box>
        <HeaderSection title="Glance">
          {`
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
        </HeaderSection>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {/* total */}

          <StatsCard
            stat={deFi1TotalSingleNumber.data["Swap Count"]}
            title={deFi1TotalSingleNumberNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={deFi1TotalSingleNumber.key}
          />
          <StatsCard
            stat={deFi1TotalSingleNumber.data.Volume}
            title={deFi1TotalSingleNumberNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={deFi1TotalSingleNumber.key}
          />
          <StatsCard
            stat={deFi1TotalSingleNumber.data["Unique Swapper"]}
            title={deFi1TotalSingleNumberNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={deFi1TotalSingleNumber.key}
          />

          {/* daily */}

          <StatsCard
            stat={deFi2DailySingleNumber.data["AVG Swap Count"]}
            title={deFi2DailySingleNumberNames[3]}
            status="inc"
            hasArrowIcon={false}
            link={deFi2DailySingleNumber.key}
          />
          <StatsCard
            stat={deFi2DailySingleNumber.data["AVG Volume"]}
            title={deFi2DailySingleNumberNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={deFi2DailySingleNumber.key}
          />
          <StatsCard
            stat={deFi2DailySingleNumber.data["AVG Unique Swapper"]}
            title={deFi2DailySingleNumberNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={deFi2DailySingleNumber.key}
          />
          <StatsCard
            stat={deFi2DailySingleNumber.data["AVG Swap Size"]}
            title={deFi2DailySingleNumberNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={deFi2DailySingleNumber.key}
          />
          <HeaderSection title="24h Changes" />

          <StatsCard
            stat={deFi3TodayChanges.data["24h Swap Count"]}
            title={deFi3TodayChangesNames[0]}
            status={
              deFi3TodayChanges.data["change (%) Swap Count"] >= 0
                ? "inc"
                : "dec"
            }
            change={deFi3TodayChanges.data["change (%) Swap Count"]}
            changeUnit={"%"}
            hasArrowIcon
            link={deFi3TodayChanges.key}
          />
          <StatsCard
            stat={deFi3TodayChanges.data["24h Volume (in USD)"]}
            title={deFi3TodayChangesNames[2]}
            status={
              deFi3TodayChanges.data["change (%) Volume"] >= 0 ? "inc" : "dec"
            }
            change={deFi3TodayChanges.data["change (%) Volume"]}
            changeUnit={"%"}
            hasArrowIcon
            link={deFi3TodayChanges.key}
          />
          <StatsCard
            stat={deFi3TodayChanges.data["24h Unique Swapper"]}
            title={deFi3TodayChangesNames[1]}
            status={
              deFi3TodayChanges.data["change (%) Unique Swapper"] >= 0
                ? "inc"
                : "dec"
            }
            change={deFi3TodayChanges.data["change (%) Unique Swapper"]}
            changeUnit={"%"}
            hasArrowIcon
            link={deFi3TodayChanges.key}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Swapping over time" />

          <LineChartWithBar
            data={deFi4SwappingOverTime.data}
            queryLink={deFi4SwappingOverTime.key}
            title={deFi4SwappingOverTimeNames[5]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Swap Count"}
            lineDataKey="AVG Swap Count"
            additionalLineKey={["MA7 Swap Count"]}
          />
          <LineChartWithBar
            data={deFi4SwappingOverTime.data}
            queryLink={deFi4SwappingOverTime.key}
            title={deFi4SwappingOverTimeNames[4]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Volume"}
            lineDataKey="AVG Volume"
            additionalLineKey={["MA7 Volume"]}
          />
          <LineChartWithBar
            data={deFi4SwappingOverTime.data}
            queryLink={deFi4SwappingOverTime.key}
            title={deFi4SwappingOverTimeNames[3]}
            baseSpan={2}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Unique Swapper"}
            lineDataKey="AVG Unique Swapper"
          />
          <ChartBox
            data={deFi4SwappingOverTime.data}
            queryLink={deFi4SwappingOverTime.key}
            title={deFi4SwappingOverTimeNames[2]}
            baseSpan={1}
            customColor={colors[0]}
            xAxisDataKey="Day"
            areaDataKey="Cum Swap Count"
          />
          <LineChartWithBar
            data={deFi4SwappingOverTime.data}
            queryLink={deFi4SwappingOverTime.key}
            title={deFi4SwappingOverTimeNames[0]}
            baseSpan={2}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Swap Size"}
            lineDataKey="AVG Swap Size"
          />
          <ChartBox
            data={deFi4SwappingOverTime.data}
            queryLink={deFi4SwappingOverTime.key}
            title={deFi4SwappingOverTimeNames[1]}
            baseSpan={1}
            customColor={colors[0]}
            xAxisDataKey="Day"
            areaDataKey="Cum Volume"
          />
          <HeaderSection title="Top swapping from assets" />

          <DonutChart
            queryLink={deFi5TopSwappingFromAssetsTransactions.key}
            data={deFi5TopSwappingFromAssetsTransactions.data}
            modalInfo=""
            baseSpan={1}
            title={deFi5TopSwappingFromAssetsTransactions.title}
            nameKey="Asset"
            dataKey="Swap Count"
          />

          <DonutChart
            queryLink={deFi5TopSwappingFromAssetsVolume.key}
            data={deFi5TopSwappingFromAssetsVolume.data}
            modalInfo=""
            baseSpan={1}
            title={deFi5TopSwappingFromAssetsVolume.title}
            nameKey="Asset"
            dataKey="Volume"
          />
          <DonutChart
            queryLink={deFi5TopSwappingFromAssetsUniqueSwappers.key}
            data={deFi5TopSwappingFromAssetsUniqueSwappers.data}
            modalInfo=""
            baseSpan={1}
            title={deFi5TopSwappingFromAssetsUniqueSwappers.title}
            nameKey="Asset"
            dataKey="Unique Swapper"
          />

          <HeaderSection title="Top swapping to assets" />
          <DonutChart
            queryLink={deFi6TopSwappingToAssetsTransactions.key}
            data={deFi6TopSwappingToAssetsTransactions.data}
            modalInfo=""
            baseSpan={1}
            title={deFi6TopSwappingToAssetsTransactions.title}
            nameKey="Asset"
            dataKey="Swap Count"
          />

          <DonutChart
            queryLink={deFi6TopSwappingToAssetsVolume.key}
            data={deFi6TopSwappingToAssetsVolume.data}
            modalInfo=""
            baseSpan={1}
            title={deFi6TopSwappingToAssetsVolume.title}
            nameKey="Asset"
            dataKey="Volume"
          />
          <DonutChart
            queryLink={deFi6TopSwappingToAssetsUniqueSwappers.key}
            data={deFi6TopSwappingToAssetsUniqueSwappers.data}
            modalInfo=""
            baseSpan={1}
            title={deFi6TopSwappingToAssetsUniqueSwappers.title}
            nameKey="Asset"
            dataKey="Unique Swapper"
          />

          <HeaderSection title="Top swapping pairs" />

          <DonutChart
            queryLink={deFi7TopSwappingPairsTransactions.key}
            data={deFi7TopSwappingPairsTransactions.data}
            modalInfo=""
            baseSpan={1}
            title={deFi7TopSwappingPairsTransactions.title}
            nameKey="Pair"
            dataKey="Swap Count"
          />
          <DonutChart
            queryLink={deFi7TopSwappingPairsVolume.key}
            data={deFi7TopSwappingPairsVolume.data}
            modalInfo=""
            baseSpan={1}
            title={deFi7TopSwappingPairsVolume.title}
            nameKey="Pair"
            dataKey="Volume"
          />
          <DonutChart
            queryLink={deFi7TopSwappingPairsUniqueSwappers.key}
            data={deFi7TopSwappingPairsUniqueSwappers.data}
            modalInfo=""
            baseSpan={1}
            title={deFi7TopSwappingPairsUniqueSwappers.title}
            nameKey="Pair"
            dataKey="Unique Swapper"
          />

          <HeaderSection title="Weekly top 10 swapping pairs" />
          <BarGraph
            values={deFi8WeeklyTop10SwappingPairsTransactions.data.swapCount}
            queryLink={deFi8WeeklyTop10SwappingPairsTransactions.key}
            modalInfo=""
            title={deFi8WeeklyTop10SwappingPairsTransactions.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={deFi8WeeklyTop10SwappingPairsTransactions.data.pairs.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
          <BarGraph
            values={deFi8WeeklyTop10SwappingPairsVolume.data.volume}
            queryLink={deFi8WeeklyTop10SwappingPairsVolume.key}
            modalInfo=""
            title={deFi8WeeklyTop10SwappingPairsVolume.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={deFi8WeeklyTop10SwappingPairsVolume.data.pairs.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
          <BarGraph
            values={
              deFi8WeeklyTop10SwappingPairsUniqueSwappers.data.uniqueSwapper
            }
            queryLink={deFi8WeeklyTop10SwappingPairsUniqueSwappers.key}
            modalInfo=""
            title={deFi8WeeklyTop10SwappingPairsUniqueSwappers.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={deFi8WeeklyTop10SwappingPairsUniqueSwappers.data.pairs.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Defi;

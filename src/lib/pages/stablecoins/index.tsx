import { Box, SimpleGrid } from "@chakra-ui/react";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { StablecoinsProps } from "pages/stablecoins";
import BarGraph from "lib/components/charts/BarGraph";
import HeaderSection from "lib/components/basic/HeaderSection";

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

const Stablecoins = ({ stablecoinsAverage, stablecoinsCompetition, stablecoinsOverview, stablecoinsTodayChanges }: StablecoinsProps): JSX.Element => {
  const stablecoinsAverageNames =
    stablecoinsAverage.title.split(",");
  const stablecoinsCompetitionNames =
    stablecoinsCompetition.title.split(",");
  const stablecoinsOverviewNames =
    stablecoinsOverview.title.split(",");
  const stablecoinsTodayChangesNames =
    stablecoinsTodayChanges.title.split(",");

  return (
    <>
      <NextSeo
        title={`Osmosis | Stablecoins`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Osmosis  | Stablecoins`,
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
        <HeaderSection title="Osmosis Stablecoins" />

        <SimpleGrid
          my={"4"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <HeaderSection title="Glance">
            {`
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
          </HeaderSection>

          <StatsCard
            stat={stablecoinsAverage.data["AVG tx count"]}
            title={stablecoinsAverageNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={stablecoinsAverage.key}
          />
          <StatsCard
            stat={stablecoinsAverage.data["AVG Volume"]}
            title={stablecoinsAverageNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={stablecoinsAverage.key}
          />
          <StatsCard
            stat={stablecoinsAverage.data["AVG Active users"]}
            title={stablecoinsAverageNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={stablecoinsAverage.key}
          />
          <HeaderSection title="24 Change" />
          <StatsCard
            stat={stablecoinsTodayChanges.data["24h Transactions"]}
            title={stablecoinsTodayChangesNames[0]}
            status={
              stablecoinsTodayChanges.data["change (%) Transactions"] >= 0
                ? "inc"
                : "dec"
            }
            change={stablecoinsTodayChanges.data["change (%) Transactions"]}
            changeUnit={"%"}
            hasArrowIcon
            link={stablecoinsTodayChanges.key}
          />
          <StatsCard
            stat={stablecoinsTodayChanges.data["24h Active Wallets"]}
            title={stablecoinsTodayChangesNames[1]}
            status={
              stablecoinsTodayChanges.data["change (%) Active Wallets"] >= 0
                ? "inc"
                : "dec"
            }
            change={stablecoinsTodayChanges.data["change (%) Active Wallets"]}
            changeUnit={"%"}
            hasArrowIcon
            link={stablecoinsTodayChanges.key}
          />
          <StatsCard
            stat={stablecoinsTodayChanges.data["24h Volume"]}
            title={stablecoinsTodayChangesNames[2]}
            status={
              stablecoinsTodayChanges.data["change (%) Volume"] >= 0
                ? "inc"
                : "dec"
            }
            change={stablecoinsTodayChanges.data["change (%) Volume"]}
            changeUnit={"%"}
            hasArrowIcon
            link={stablecoinsTodayChanges.key}
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
          <HeaderSection title="Stablecoins overview" />
          {[["txCount", 3], ["txVolume", 2], ["uniqueUser", 1], ["volume", 0],].map((type, index) => (
            <BarGraph
              values={stablecoinsOverview.data[type[0]]}
              queryLink={stablecoinsOverview.key}
              modalInfo=""
              title={stablecoinsOverviewNames[type[1] as number]}
              baseSpan={3}
              dataKey="Name"
              oyLabel=""
              oxLabel=""
              labels={stablecoinsOverview.data.actions.map((act: string, index: number) => ({
                key: act,
                color: colors[index],
              }))
              }
            />
          ))}
          <HeaderSection title="Daily average" />
          {[, ['AVG TX Count', 1], ['AVG volume', 3], ['AVG Unique user', 2], ['AVG TX Volume', 0]].map(([type, num]: any, index) => (
            <BarGraph
              values={stablecoinsCompetition.data}
              queryLink={stablecoinsCompetition.key}
              modalInfo=""
              title={stablecoinsCompetitionNames[num]}
              baseSpan={3}
              isNotDate
              dataKey="Stablecoin"
              oyLabel=""
              oxLabel=""
              labels={[{
                key: type,
                color: colors[0]
              }]}
            />
          ))}



        </SimpleGrid>
      </Box>
    </>
  );
};

export default Stablecoins;

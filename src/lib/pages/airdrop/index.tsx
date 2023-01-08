import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { AirdropProps } from "pages/airdrop";
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

const Airdrop = ({
  airdropClaimed,
  airdropTotalInfo,
}: AirdropProps): JSX.Element => {
  const airdropClaimedNames = airdropClaimed.title.split(",");
  const airdropTotalInfoNames = airdropTotalInfo.title.split(",");

  return (
    <>
      <NextSeo
        title={`Osmosis | Airdrop`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Osmosis  | Development`,
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
        <HeaderSection title="Osmosis Airdrop">
          {`
Osmosis is a cryptocurrency that was airdropped to addresses that were staking ATOM at the time of the launch of the Stargate upgrade. A snapshot of ATOM stakers was taken on February 18, 2021, in which eligible participants received 50 million OSMO tokens. The airdrop was designed to encourage more people to get involved in the Cosmos Hub and to support the growth of the ecosystem.
`}
        </HeaderSection>
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
          <StatsCard
            stat={airdropTotalInfo.data["Total Tx count"]}
            title={airdropTotalInfoNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={airdropTotalInfo.key}
          />
          <StatsCard
            stat={airdropTotalInfo.data["Total Claimed Amount"]}
            title={airdropTotalInfoNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={airdropTotalInfo.key}
          />
        </SimpleGrid>
        <HeaderSection title="Airdrop Over time" />
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <ChartBox
            data={airdropClaimed.data}
            queryLink={airdropClaimed.key}
            title={airdropClaimedNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            xAxisDataKey="Day"
            defultSelectedRange="all"
            areaDataKey="Cum Claimed Amount"
          />
          <LineChartWithBar
            data={airdropClaimed.data}
            queryLink={airdropClaimed.key}
            title={airdropClaimedNames[2]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            defultSelectedRange="all"
            hideLine
            barDataKey={"Claimed Amount"}
            lineDataKey={"fake"}
            additionalLineKey={["MA7 Claimed Amount"]}
          />
          <LineChartWithBar
            data={airdropClaimed.data}
            queryLink={airdropClaimed.key}
            title={airdropClaimedNames[1]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            hideLine
            defultSelectedRange="all"
            barDataKey={"Tx count"}
            lineDataKey={""}
            additionalLineKey={["MA7 Tx count"]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Airdrop;

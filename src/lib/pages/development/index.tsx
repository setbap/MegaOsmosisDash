import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";

import { DevelopmentProps } from "pages/development";
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

const Development = ({ developmentNewContracts }: DevelopmentProps): JSX.Element => {
  const developmentNewContractsNames =
    developmentNewContracts.title.split(",");

  return (
    <>
      <NextSeo
        title={`Osmosis | Development`}
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
        <HeaderSection title="Osmosis Development ">
          {`
in this page we review all information about Osmosis Smart Contract Development and increase usage of different smart contract in Osmosis Network 


but before deep dive into chart i prepare some statics to see status of network at the glance.
`}
        </HeaderSection>
        <Box pt={"4"}></Box>
        <HeaderSection title="Glance">
          {`
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
        </HeaderSection>
        <SimpleGrid
          my={"2"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >

        </SimpleGrid>
        <HeaderSection title="Development Contracts ">
          {`
Development of Contracts show how much of compebility of one network is used by developers. increasing number of new smart contract show windwos of new idea in network and help growth faster 
`}
        </HeaderSection>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <LineChartWithBar
            data={developmentNewContracts.data}
            queryLink={developmentNewContracts.key}
            title={developmentNewContractsNames[1]}
            baseSpan={2}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Deployed Contract"}
            lineDataKey="Avg Deployed Contract"
          />
          <ChartBox customColor={colors[1]} baseSpan={1} xAxisDataKey={"Day"} areaDataKey={"Cum Deployed Contract"} queryLink={developmentNewContracts.key} title={developmentNewContractsNames[0]} data={developmentNewContracts.data} />

        </SimpleGrid>
      </Box>
    </>
  );
};

export default Development;

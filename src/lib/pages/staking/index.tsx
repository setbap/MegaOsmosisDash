import { Box, SimpleGrid } from "@chakra-ui/react";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { StakingProps } from "pages/staking";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import HeaderSection from "lib/components/basic/HeaderSection";
import ChartBox from "lib/components/charts/LineChart";
import { ColumnDef } from "@tanstack/react-table";
import millify from "millify";
import { StakingTopStakers } from "lib/types/types/staking";
import TableBox from "lib/components/charts/TableBox";

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

const colDef: ColumnDef<StakingTopStakers>[] = [
  {
    accessorFn: (row) => row.Staker,
    enableSorting: false,
    id: "Staker",
    cell: (info) => info.getValue(),
    header: () => <span>Staker</span>,
  },
  {
    accessorFn: (row) => row["Staked Balance"],
    id: "Staked Balance",
    cell: (info) =>
      millify(info.getValue() as number, {
        precision: 2,
        decimalSeparator: ".",
      }),
    header: () => <span>Staked Balance</span>,
  },
  {
    accessorFn: (row) => row["Staking validators"],
    id: "Staking validators",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  }
];

const Staking = ({
  stakingOvertime,
  stakingDailyAverage,
  stakingActiveStakingPool,
  stakingTop10PoolsTransaction,
  stakingTop10PoolsUniqueStakers,
  stakingTop10PoolsVolume,
  stakingTop10PoolsWithDayTransaction,
  stakingTop10PoolsWithDayUniqueStakers,
  stakingTop10PoolsWithDayUniqueVolume,
  stakingTop30HighestPools,
  stakingTopWallets,
  stakingOSMOOvertime
}: StakingProps): JSX.Element => {
  const stakingOvertimeNames = stakingOvertime.title.split(",");
  const stakingDailyAverageNames = stakingDailyAverage.title.split(",");

  return (
    <>
      <NextSeo
        title={`Osmosis | Staking`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Osmosis | Staking`,
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
        <HeaderSection title="$OSMO staking">{`
OSMO staking is a process by which users can earn rewards for holding OSMO tokens. Users will start to accrue rewards based on the amount of OSMO tokens they have staked and the current staking rate. Generally, the higher the amount of OSMO tokens staked, the higher the rewards will be.

To be eligible for staking rewards with $OSMO, users must have at least 100 OSMO in their wallet and must keep it staked for a minimum of seven days. 

Unstaking $OSMO tokens from the Osmosis protocol can take up to 14 days. This is due to the fact that there is a waiting period before the tokens are officially released from the staking contract. After the 14-day waiting period, the tokens will be released and sent to the user's wallet address.

Now I describe each section:

- **Staking Over time:** In this section, you could see some simple metrics include number of staking transactions and stakers, volume of staking transactions, and also total $OSMO staked over time.

  

- **Daily average:** In this section, you can see on average, how much $OSMO was staked per day. how many staked their $OSMO per day. How many staking transactions were made per day. Only the last three months are considered.

  

- **Active Staking Pool:** Shows the number of validators used to staking per certain period.

  

- **Top validators:** Tried to find top validators in terms of number of transactions, number of users and volume of transactions.

  

- **Weekly top 10 validators:** Tried to find weekly top 10 validators in terms of number of transactions, number of users and volume of transactions.

  

- **Top validators based on current power:** Validator power is a measure of the amount of stake that is delegated to a validator. In this section, tried to find top validators in terms of current amount of stake they have.

  

- **Top stakers:** This section show the most active stakers, those who staked the most amount of token. Also, I showed the validators they use.


`}</HeaderSection>

        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          pt={"4"}
          pb={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Staking Over time" />

          <ChartBox
            xAxisDataKey={"Day"}
            areaDataKey={"Staked $OSMO"}
            title={stakingOSMOOvertime.title}
            baseSpan={1}
            oyLabel={"$OSMO"}
            customColor={colors[0]}
            queryLink={stakingOSMOOvertime.key}
            data={stakingOSMOOvertime.data}
          />

          {[["tXCount", 1, ""], ["uniqueWallet", 3, "$OSMO"], ["volume", 4, ""], ["cumTXCount", 0, ""], ["cumVolume", 2, "$OSMO"]].map(
            ([item, place, yLabel], index) => (
              <StackedAreaChart
                key={index}
                values={stakingOvertime.data[item]}
                queryLink={stakingOvertime.key}
                modalInfo=""
                title={stakingOvertimeNames[place as number]}
                baseSpan={1}
                dataKey="Name"
                oyLabel={yLabel as string}
                oxLabel="Action"
                labels={stakingOvertime.data.actions.map(
                  (item: string, index: number) => ({
                    key: item,
                    color: colors[index % colors.length],
                  })
                )}
              />
            )
          )}

          <HeaderSection title="Daily average" />
          {[
            ["AVG tx count", 1, ""],
            ["AVG unique wallet", 2, ""],
            ["AVG volume", 3, "OSMO"],
            ["AVG TX volume", 0, "OSMO"],
          ].map(([item, place, yLabel], index) => (
            <BarGraph
              key={item}
              values={stakingDailyAverage.data}
              queryLink={stakingDailyAverage.key}
              modalInfo=""
              isNotDate
              title={stakingDailyAverageNames[place as number]}
              baseSpan={1}
              dataKey="Actions"
              oyLabel={yLabel as string}
              oxLabel="Action"
              labels={[
                {
                  key: item as string,
                  color: colors[index],
                },
              ]}
            />
          ))}

          <HeaderSection title="Active Staking validators" />
          <ChartBox
            baseSpan={3}
            customColor={colors[2]}
            xAxisDataKey={"Day"}
            areaDataKey={"Active Staking Pool"}
            title={stakingActiveStakingPool.title}
            queryLink={stakingActiveStakingPool.key}
            data={stakingActiveStakingPool.data}
          />

          <HeaderSection title="Top 10 validators" />
          <DonutChart
            queryLink={stakingTop10PoolsTransaction.key}
            data={stakingTop10PoolsTransaction.data}
            modalInfo=""
            baseSpan={1}
            title={stakingTop10PoolsTransaction.title}
            nameKey="Pool name"
            dataKey="tx count"
          />

          <DonutChart
            queryLink={stakingTop10PoolsVolume.key}
            data={stakingTop10PoolsVolume.data}
            modalInfo=""
            baseSpan={1}
            title={stakingTop10PoolsVolume.title}
            nameKey="Pool name"
            dataKey="Volume"
          />
          <DonutChart
            queryLink={stakingTop10PoolsUniqueStakers.key}
            data={stakingTop10PoolsUniqueStakers.data}
            modalInfo=""
            baseSpan={1}
            title={stakingTop10PoolsUniqueStakers.title}
            nameKey="Pool name"
            dataKey="Unique wallet"
          />
          <HeaderSection title="Weekly top 10 validators" />

          <BarGraph
            values={stakingTop10PoolsWithDayTransaction.data.txCount}
            queryLink={stakingTop10PoolsWithDayTransaction.key}
            modalInfo=""
            title={stakingTop10PoolsWithDayTransaction.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={stakingTop10PoolsWithDayTransaction.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={stakingTop10PoolsWithDayUniqueVolume.data.volume}
            queryLink={stakingTop10PoolsWithDayUniqueVolume.key}
            modalInfo=""
            title={stakingTop10PoolsWithDayUniqueVolume.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={stakingTop10PoolsWithDayUniqueVolume.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
          <BarGraph
            values={stakingTop10PoolsWithDayUniqueStakers.data.uniqueWallet}
            queryLink={stakingTop10PoolsWithDayUniqueStakers.key}
            modalInfo=""
            title={stakingTop10PoolsWithDayUniqueStakers.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={stakingTop10PoolsWithDayUniqueStakers.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
          <HeaderSection title="Top 30 validators based on current balance" />
          <BarGraph
            values={stakingTop30HighestPools.data}
            queryLink={stakingTop30HighestPools.key}
            isNotDate
            modalInfo=""
            title={stakingTop30HighestPools.title}
            baseSpan={3}
            dataKey="Pool name"
            oyLabel=""
            oxLabel="Pool name"
            hideLegend
            labels={[
              {
                key: "Current stake amount",
                color: colors[2],
              },
            ]}
          />

          <HeaderSection title="Top stakers" />
          <TableBox
            customHeaderColor={colors[2]}
            queryLink={stakingTopWallets.key}
            title={stakingTopWallets.title}
            baseSpan={3}
            tablePageSize={10}
            modalInfo={``}
            data={stakingTopWallets.data}
            columnsDef={colDef}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Staking;

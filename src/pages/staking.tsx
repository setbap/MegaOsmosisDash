import Staking from "lib/pages/staking";
import {
  getStakingActiveStakingPool,
  getStakingDailyAverage,
  getStakingOSMOOvertime,
  getStakingOvertime,
  getStakingTop10PoolsTransaction,
  getStakingTop10PoolsUniqueStakers,
  getStakingTop10PoolsVolume,
  getStakingTop10PoolsWithDayTransaction,
  getStakingTop10PoolsWithDayUniqueStakers,
  getStakingTop10PoolsWithDayUniqueVolume,
  getStakingTop30HighestPools,
  getStakingTopWallets,
} from "lib/requests/staking";
import { ReturnDataType } from "lib/types/base";
import {
  StakingActiveStakingPool,
  StakingDailyAverage,
  StakingOSMOOvertime,
  StakingTop10Pools,
  StakingTop30HighestPools,
  StakingTopStakers,
} from "lib/types/types/staking";

export async function getStaticProps() {
  const [
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
  ] = await Promise.all([
    getStakingOvertime(),
    getStakingDailyAverage(),
    getStakingActiveStakingPool(),
    getStakingTop10PoolsTransaction(),
    getStakingTop10PoolsUniqueStakers(),
    getStakingTop10PoolsVolume(),
    getStakingTop10PoolsWithDayTransaction(),
    getStakingTop10PoolsWithDayUniqueStakers(),
    getStakingTop10PoolsWithDayUniqueVolume(),
    getStakingTop30HighestPools(),
    getStakingTopWallets(),
    getStakingOSMOOvertime(),
  ]);
  return {
    props: {
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
    },
    revalidate: 10 * 60,
  };
}
export default Staking;
export interface StakingProps {
  stakingOvertime: ReturnDataType<any>;
  stakingDailyAverage: ReturnDataType<StakingDailyAverage[]>;
  stakingActiveStakingPool: ReturnDataType<StakingActiveStakingPool[]>;
  stakingTop10PoolsTransaction: ReturnDataType<StakingTop10Pools[]>;
  stakingTop10PoolsUniqueStakers: ReturnDataType<StakingTop10Pools[]>;
  stakingTop10PoolsVolume: ReturnDataType<StakingTop10Pools[]>;
  stakingTop10PoolsWithDayTransaction: ReturnDataType<any>;
  stakingTop10PoolsWithDayUniqueStakers: ReturnDataType<any>;
  stakingTop10PoolsWithDayUniqueVolume: ReturnDataType<any>;
  stakingTop30HighestPools: ReturnDataType<StakingTop30HighestPools[]>;
  stakingTopWallets: ReturnDataType<StakingTopStakers[]>;
  stakingOSMOOvertime: ReturnDataType<StakingOSMOOvertime[]>
}

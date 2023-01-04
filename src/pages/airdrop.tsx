import Airdrop from "lib/pages/airdrop";
import { getAirdropClaimed, getAirdropTotalInfo } from "lib/requests/airdrop";
import { ReturnDataType } from "lib/types/base";
import { AirdropClaimed, AirdropTotalInfo } from "lib/types/types/airdrop";


export async function getStaticProps() {
  const [
    airdropClaimed,
    airdropTotalInfo,

  ] = await Promise.all([
    getAirdropClaimed(),
    getAirdropTotalInfo(),
  ]);

  return {
    props: {
      airdropClaimed,
      airdropTotalInfo,
    },
    revalidate: 10 * 60,
  };
}

export interface AirdropProps {
  airdropClaimed: ReturnDataType<AirdropClaimed[]>;
  airdropTotalInfo: ReturnDataType<AirdropTotalInfo>;
}

export default Airdrop;

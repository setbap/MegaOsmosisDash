import Dex from "lib/pages/dex";
import { } from "lib/requests/dex";
import { ReturnDataType } from "lib/types/base";
import { } from "lib/types/types/dex";

export async function getStaticProps() {
  const [] = await Promise.all([]);

  return {
    props: {},
    revalidate: 10 * 60,
  };
}

export interface DexProps { }

export default Dex;

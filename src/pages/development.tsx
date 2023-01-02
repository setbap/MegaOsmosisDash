import Development from "lib/pages/development";
import {} from "lib/requests/development";
import { ReturnDataType } from "lib/types/base";
import {} from "lib/types/types/development";

export async function getStaticProps() {
  const [] = await Promise.all([]);

  return {
    props: {},
    revalidate: 10 * 60,
  };
}

export interface DevelopmentProps {}

export default Development;

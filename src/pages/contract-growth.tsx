import Development from "lib/pages/development";
import { getDevelopmentNewContracts } from "lib/requests/development";
import { ReturnDataType } from "lib/types/base";
import { DevelopmentNewContracts } from "lib/types/types/development";

export async function getStaticProps() {
  const [developmentNewContracts] = await Promise.all([
    getDevelopmentNewContracts()
  ]);

  return {
    props: { developmentNewContracts },
    revalidate: 10 * 60,
  };
}

export interface DevelopmentProps {
  developmentNewContracts: ReturnDataType<DevelopmentNewContracts[]>;
}

export default Development;

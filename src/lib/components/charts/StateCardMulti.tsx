import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stat,
  StatLabel,
  StatNumber,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import millify from "millify";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import Renderer from "chakra-ui-markdown-renderer";
import MotionBox from "../motion/Box";

interface StatsCardMultiProps {
  data: { value: number; name: string; title: string }[];
  defualtState: number;
  status?: "inc" | "dec" | "unchanged" | "custom";
  link?: string;
  comment?: string;
  unit?: string;
  forceDecimal?: boolean;
  customColor?: string;
}
export const StatsCardMulti = (props: StatsCardMultiProps) => {
  const bgCard = useColorModeValue("white", "#191919");
  const {
    status = "unchanged",
    forceDecimal = false,
    defualtState,
    customColor = "#ec5f7e",
  } = props;
  const [selectedStat, setSelectedStat] = useState(defualtState);
  const [selectedData, setSelectedData] = useState(props.data[selectedStat]);
  const defaultColor = useColorModeValue("gray.600", "gray.400");
  const incColor = useColorModeValue("green.800", "green.300");
  const decColor = useColorModeValue("red.800", "red.500");
  const [statusColor, setStatusColor] = useState<any>();

  useEffect(() => {
    setSelectedData(props.data[selectedStat]);
    return () => {};
  }, [selectedStat]);

  useEffect(() => {
    if (status === "inc" && statusColor !== incColor) {
      setStatusColor(incColor);
    }
    if (status === "dec" && statusColor !== decColor) {
      setStatusColor(decColor);
    }
    if (status === "unchanged" && statusColor !== defaultColor) {
      setStatusColor(defaultColor);
    }
    if (status === "custom" && statusColor !== defaultColor) {
      setStatusColor(customColor);
    }
  }, []);

  const calculateNum = (num: number) => {
    if (!forceDecimal) {
      return millify(selectedData.value, {
        precision: 2,
        decimalSeparator: ".",
      });
    }
    const word = millify(selectedData.value, {
      precision: 2,
      decimalSeparator: ".",
    });
    const splited = word.split(".");
    if (splited.length === 1) {
      const num = word.match(/\d+/g);
      const text = word.match(/[a-zA-Z]+/g) ?? " ";
      return `${num![0]}.00${text![0]}`;
    } else {
      const firstNum = splited[0];
      const secondNum = splited[1].match(/\d+/g);
      const text = splited[1].match(/[a-zA-Z]+/g) ?? " ";
      return `${firstNum}.${secondNum![0].padEnd(2, "0")}${text[0]}`;
    }
  };

  const tooltip = props.comment && (
    <Tooltip
      rounded={"lg"}
      px="2"
      pt={"2"}
      bg="#100e"
      boxShadow={"xl"}
      color={"white"}
      aria-label="a tooltip that add extra information like attribution for api"
      hasArrow
      label={
        <ReactMarkdown components={Renderer()}>{props.comment}</ReactMarkdown>
      }
    >
      <IconButton
        size={"xs"}
        variant="link"
        _focus={{ outline: "none" }}
        pt={"-1"}
        px={"3"}
        icon={<AiOutlineInfoCircle />}
        aria-label={""}
      />
    </Tooltip>
  );

  return (
    <Stat
      px={{ base: 4, md: 8 }}
      zIndex={1000}
      pt="5"
      pb={"4"}
      shadow="base"
      transition={"box-shadow 0.4s"}
      _hover={{ boxShadow: "var(--chakra-shadows-xl)" }}
      backgroundColor={bgCard}
      border="1px solid"
      borderColor={statusColor}
      rounded="lg"
    >
      {props.link === undefined ? (
        <StatLabel fontWeight="medium" noOfLines={1} display={"flex"}>
          {selectedData.title} {tooltip}
        </StatLabel>
      ) : (
        <Link href={props.link} isExternal>
          <StatLabel fontWeight="medium" display={"flex"} noOfLines={1}>
            {selectedData.title}{" "}
            <Box px={"1"}>
              <FiExternalLink />
            </Box>
            {tooltip}
          </StatLabel>
        </Link>
      )}

      <StatNumber
        pt={"1"}
        color={statusColor}
        fontSize="4xl"
        fontWeight="extrabold"
        pos="relative"
        zIndex={10000}
      >
        <Menu>
          <MenuButton
            position={"absolute"}
            right={"0"}
            size={"sm"}
            top="-8"
            as={Button}
          >
            {selectedData.name}
          </MenuButton>
          <MenuList bg="#232323" pos={"relative"} zIndex={"10000"}>
            {props.data.map((data, index) => (
              <MenuItem
                fontSize={"sm"}
                key={index}
                onClick={() => setSelectedStat(index)}
              >
                {data.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Box display={"inline-flex"}>
          {calculateNum(selectedData.value)}
          <Box fontSize={"2xl"} fontWeight={"bold"}>
            {" "}
            {props.unit ?? ""}
          </Box>
        </Box>
      </StatNumber>
    </Stat>
  );
};

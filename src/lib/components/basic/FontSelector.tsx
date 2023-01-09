import { Box, Select } from "@chakra-ui/react";
import { Great_Vibes, Inter } from "@next/font/google";
import { Mulish } from "@next/font/google";
import { Montserrat } from "@next/font/google";
import { League_Spartan } from "@next/font/google";
import {
  Roboto,
  Sofia,
  Poppins,
  Bakbak_One,
  Varela_Round,
  Open_Sans,
} from "@next/font/google";

const sofia = Sofia({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});
const open_Sans = Open_Sans({
  subsets: ["latin"],
  preload: true,
});
const varela_Round = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});
const bakbak_One = Bakbak_One({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  preload: true,
});

const mulish = Mulish({
  subsets: ["latin"],
  preload: true,
});
const montserrat = Montserrat({
  subsets: ["latin"],
  preload: true,
});
const league_Spartan = League_Spartan({
  subsets: ["latin"],
  preload: true,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  preload: true,
});
const great_Vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

const FontSelector = () => {
  const changeFont = (fontVar: string) => {
    console.log(fontVar);

    document?.body?.style.setProperty("--chakra-fonts-heading", fontVar);
  };
  return (
    <Box
      position={"fixed"}
      top="120px"
      zIndex={10000}
      transform="translateX(-20%)"
      right="0px"
    >
      <Select
        rounded={"2xl"}
        shadow="outline"
        onChange={(e) => changeFont(e.target.value)}
        placeholder="Select Font"
        backgroundColor={"Background"}
      >
        {[
          [open_Sans.style.fontFamily, "open_Sans"],
          [varela_Round.style.fontFamily, "varela_Round"],
          [great_Vibes.style.fontFamily, "great_Vibes"],
          [sofia.style.fontFamily, "sofia"],
          [bakbak_One.style.fontFamily, "bakbak_One"],
          [poppins.style.fontFamily, "poppins"],
          [inter.style.fontFamily, "inter"],
          [roboto.style.fontFamily, "roboto"],
          [mulish.style.fontFamily, "mulish"],
          [montserrat.style.fontFamily, "montserrat"],
          [league_Spartan.style.fontFamily, "league_Spartan"],
        ].map((item, index) => (
          <option key={item[0]} value={item[0]}>
            {item[1]}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default FontSelector;

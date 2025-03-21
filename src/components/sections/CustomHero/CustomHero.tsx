import { getOverriddenSection, HeroSection } from "@faststore/core";
import { CustomHeroHeader } from "./CustomHeroHeader/CustomHeroHeader";

const CustomHero = getOverriddenSection({
  Section: HeroSection,
  components: {
    HeroHeader: {
      Component: CustomHeroHeader,
    },
  },
});

export default CustomHero;

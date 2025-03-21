import { SectionOverride } from "@faststore/core";
import CustomProductCard from "../molecules/CustomProductCard";
//import { CustomBuyButton } from "../CustomBuyButton";

const SECTION = "ProductGallery" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    __experimentalProductCard: { Component: CustomProductCard },
    
    //    __experimentalEmptyGallery: { Component: EmptyGallery },
  },
};

export { override }

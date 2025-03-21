"use strict";
exports.__esModule = true;
exports.override = void 0;
//import CustomProductCard from "../molecules/CustomProductCard";
var CustomBuyButton_1 = require("../CustomBuyButton");
var SECTION = "ProductDetails";
var override = {
    section: SECTION,
    components: {
        BuyButton: { Component: CustomBuyButton_1.CustomBuyButton }
    }
};
exports.override = override;

"use strict";
exports.__esModule = true;
var AboutFeaturesSection_1 = require("./CustomSections/AboutFeatureSection/AboutFeaturesSection");
var AboutSection_1 = require("./CustomSections/AboutSection/AboutSection");
var ReverseAboutSection_1 = require("./CustomSections/ReverseAboutSection/ReverseAboutSection");
var SubscriptionBenefitsSection_1 = require("./CustomSections/SubscriptionBenefitsSection/SubscriptionBenefitsSection");
var SubscriptionHowToSection_1 = require("./CustomSections/SubscriptionHowToSection/SubscriptionHowToSection");
var sections = {
    //Custom Sections
    AboutSection: AboutSection_1["default"],
    ReverseAboutSection: ReverseAboutSection_1["default"],
    AboutFeaturesSection: AboutFeaturesSection_1["default"],
    SubscriptionHowToSection: SubscriptionHowToSection_1["default"],
    SubscriptionBenefitsSection: SubscriptionBenefitsSection_1["default"],
    //Overrides
};
exports["default"] = sections;

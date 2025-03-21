"use strict";
exports.__esModule = true;
exports.SubscriptionHowToSection = void 0;
var subscription_how_to_section_module_scss_1 = require("./subscription-how-to-section.module.scss");
var react_1 = require("react");
var icons_1 = require("./icons");

var featuresData = [
    {
        icon: icons_1.cart,
        title: "Monte seu carrinho",
        description: "Selecione os produtos desejados e adicione eles ao seu carrinho.",
    },
    {
        icon: icons_1.checkout,
        title: "Vá para tela de checkout",
        description: "Vá para a tela de checkout para ver os detalhes de pagamentos.",
    },
    {
        icon: icons_1.calendar,
        title: "Selecione a frequência",
        description: "Selecione de quanto em quanto tempo quer receber seu pedido.",
    },
    {
        icon: icons_1.compareIcon,
        title: "Compare os preços",
        description: "Veja o valor dos produtos com e sem assinatura, fazendo um comparativo.",
    },
];

function SubscriptionHowToSection() {
    return (react_1["default"].createElement("section", { className: subscription_how_to_section_module_scss_1["default"].featuresSection },
        react_1["default"].createElement("h2", { className: subscription_how_to_section_module_scss_1["default"].sectionHeading }, "Como ativar?"),
        react_1["default"].createElement("div", { className: subscription_how_to_section_module_scss_1["default"].featuresGrid }, featuresData.map(function (feature, index) { return (react_1["default"].createElement("div", { key: index, className: subscription_how_to_section_module_scss_1["default"].featureItem },
            react_1["default"].createElement("div", { className: subscription_how_to_section_module_scss_1["default"].iconContainer }, typeof feature.icon === "string" ? (react_1["default"].createElement("img", { src: feature.icon, alt: feature.title + " icon", className: subscription_how_to_section_module_scss_1["default"].featureIcon })) : (react_1["default"].createElement(feature.icon, null))),
            react_1["default"].createElement("h2", { className: subscription_how_to_section_module_scss_1["default"].featureTitle }, feature.title),
            react_1["default"].createElement("p", { className: subscription_how_to_section_module_scss_1["default"].featureDescription }, feature.description))); })) ));
}

exports.SubscriptionHowToSection = SubscriptionHowToSection;
exports["default"] = SubscriptionHowToSection;
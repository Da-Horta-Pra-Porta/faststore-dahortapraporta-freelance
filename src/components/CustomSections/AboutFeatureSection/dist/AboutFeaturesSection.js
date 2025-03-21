"use strict";
exports.__esModule = true;
exports.AboutFeaturesSection = void 0;
var about_features_section_module_scss_1 = require("./about-features-section.module.scss");
var react_1 = require("react");
var icons_1 = require("./icons");
var featuresData = [
    {
        icon: icons_1.lightbulb,
        title: "Inovação e solução",
        description: "Nosso foco sempre é inovar e buscar soluções práticas em todas as etapas do processo. Temos tecnologia e serviços altamente qualificados em todas as fases do nosso processo desde o pedido até a entrega."
    },
    {
        icon: icons_1.leaf,
        title: "Bem estar e meio ambiente",
        description: "Além do constante compromisso com a segurança alimentar, o bem-estar dos nossos clientes é mais que uma prioridade; é o nosso foco, assim como o respeito ao meio-ambiente, evitando desperdícios de alimentos e danos à natureza"
    },
    {
        icon: icons_1.truck,
        title: "Logística",
        description: "Nossa logística é um dos grandes diferenciais que fazem do nosso hortifrúti a escolha ideal para quem busca frescor e qualidade. Com uma cadeia de abastecimento ágil e eficiente, garantimos que nossos produtos cheguem até você sempre frescos, direto do campo para sua mesa."
    },
    {
        icon: icons_1.apple,
        title: "Nossos Produtos",
        description: "Conquistamos nossos clientes pelo nosso trabalho, por esse motivo cumprirmos rigorosamente nossa Política de Qualidade e comprometimento em oferecer serviços altamente qualificados. Visamos sempre o alto padrão, frescor, sabor, aroma e variedade, para todos os gostos."
    },
];
function AboutFeaturesSection() {
    return (react_1["default"].createElement("section", { className: about_features_section_module_scss_1["default"].featuresSection },
        react_1["default"].createElement("h2", { className: about_features_section_module_scss_1["default"].sectionHeading }, "Nossos diferenciais"),
        react_1["default"].createElement("div", { className: about_features_section_module_scss_1["default"].featuresGrid }, featuresData.map(function (feature, index) { return (react_1["default"].createElement("div", { key: index, className: about_features_section_module_scss_1["default"].featureItem },
            react_1["default"].createElement("div", { className: about_features_section_module_scss_1["default"].iconContainer }, typeof feature.icon === "string" ? (react_1["default"].createElement("img", { src: feature.icon, alt: feature.title + " icon", className: about_features_section_module_scss_1["default"].featureIcon })) : (react_1["default"].createElement(feature.icon, null))),
            react_1["default"].createElement("h2", { className: about_features_section_module_scss_1["default"].featureTitle }, feature.title),
            react_1["default"].createElement("p", { className: about_features_section_module_scss_1["default"].featureDescription }, feature.description))); }))));
}
exports.AboutFeaturesSection = AboutFeaturesSection;
exports["default"] = AboutFeaturesSection;

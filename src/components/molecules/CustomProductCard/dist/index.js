"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var styles = require("./custom-product-card.module.scss");
var link_1 = require("next/link");
var image_1 = require("next/image");
var usePriceFormatter_1 = require("../../utilities/usePriceFormatter");
var ui_1 = require("@faststore/ui");
var icons_1 = require("./icons");

var CustomProductCard = react_1["default"].memo(function (props) {
    var product = props.product;

    var listPrice = product.offers.offers[0].listPrice;
    var price = product.offers.offers[0].price;

    var hasDiscount = price < listPrice;

    var _a = react_2.useState(0), productCounter = _a[0], setProductCounter = _a[1];
    var _b = react_2.useState(true), showCartButton = _b[0], setShowCartButton = _b[1];

    var handleDecrement = function () {
        setProductCounter(function (prevCounter) { return Math.max(prevCounter - 1, 0); });
    };

    var handleIncrement = function () {
        setProductCounter(function (prevCounter) { return prevCounter + 1; });
    };

    var handleAddToCart = function () {
        setShowCartButton(false);
    };

    return (
        react_1["default"].createElement("div", { className: styles.productCard },
            react_1["default"].createElement("div", { className: styles.imageContainer },
                product.image && product.image[0] && product.image[0].url ? (
                    react_1["default"].createElement(link_1["default"], { href: "/" + product.slug + "/p", target: "_self", className: styles.productImage + " " + styles.noLinkStyle },
                        react_1["default"].createElement(image_1["default"], { src: product.image[0].url, alt: product.name, width: 159, height: 159, loading: "lazy" })
                    )
                ) : (
                    react_1["default"].createElement(link_1["default"], { href: "/" + product.slug + "/p", className: styles.productImage + " " + styles.noLinkStyle })
                )
            ),
            react_1["default"].createElement("div", { className: styles.productContent },
                react_1["default"].createElement(link_1["default"], { href: "/" + product.slug + "/p", className: styles.productName + " " + styles.noLinkStyle },
                    react_1["default"].createElement("p", { className: styles.productName }, product.name)
                ),
                react_1["default"].createElement("div", { className: styles.productPrice },
                    hasDiscount && react_1["default"].createElement("span", { className: styles.listPrice }, "De: " + usePriceFormatter_1.useFormattedPrice(listPrice)),
                    react_1["default"].createElement("p", { className: styles.priceContainer },
                        react_1["default"].createElement("span", { className: styles.price }, hasDiscount ? "Por: " + usePriceFormatter_1.useFormattedPrice(price) : usePriceFormatter_1.useFormattedPrice(price)),
                        hasDiscount && react_1["default"].createElement(ui_1.DiscountBadge, { listPrice: listPrice, spotPrice: price })
                    ),
                    react_1["default"].createElement("span", { className: styles.pricePerWeight }, product.pricePerKg && "R$ " + product.pricePerKg + "/Kg")
                )
            ),
            showCartButton ? (
                react_1["default"].createElement(ui_1.Button, {
                    className: styles.addButton + " " + (!showCartButton ? styles.hidden : ""),
                    variant: "primary",
                    onClick: handleAddToCart
                },
                    react_1["default"].createElement(icons_1.Cart, null)
                )
            ) : (
                react_1["default"].createElement("div", { className: styles.buttonContainer + " " + (showCartButton ? "" : styles.visible) },
                    react_1["default"].createElement("div", { onClick: handleDecrement },
                        react_1["default"].createElement(icons_1.MinusIcon, null)
                    ),
                    react_1["default"].createElement(ui_1.Price, { className: styles.productCounter, value: productCounter, variant: "selling" }),
                    react_1["default"].createElement("div", { onClick: handleIncrement },
                        react_1["default"].createElement(icons_1.PlusIcon, null)
                    )
                )
            ),
            react_1["default"].createElement("pre", null, JSON.stringify(props, null, 1))
        )
    );
});

exports["default"] = CustomProductCard;
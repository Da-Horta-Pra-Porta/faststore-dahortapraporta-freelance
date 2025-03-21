import React, { ReactNode, useEffect, useMemo, useState, useCallback } from "react";
import styles from "./custom-product-card.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ClientManyProductsQueryQuery } from ".faststore/@generated/graphql";
import { useFormattedPrice } from "../../../utilities/usePriceFormatter";
import { Button, DiscountBadge, Price, useUI, Badge } from "@faststore/ui";
import { Cart, MinusIcon, PlusIcon } from "./icons";
import { cartStore, type CartItem, useCart } from "src/sdk/cart";
import { useSession } from "src/sdk/session";
import { CartItemFragment } from ".faststore/@generated/graphql";
import { gql } from "@faststore/core/api";
//import { useQuery_unstable as useQuery } from "@faststore/core/experimental";

import { getProductMeasure } from "../../../utilities/getProductMeasure";

export const useBuyButton = (item: CartItem | null) => {
  const {
    currency: { code },
  } = useSession();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!item) {
        return;
      }
      cartStore.addItem(item);
    },
    [code, item]
  );

  return {
    onClick,
    "data-testid": "buy-button",
    "data-sku": item?.itemOffered.sku,
    "data-seller": item?.seller.identifier,
  };
};

interface BuyButtonProps {
  children: ReactNode;
  product: ClientManyProductsQueryQuery["search"]["products"]["edges"][number]["node"];
  isDefaultCard?: boolean;
  customButtonClass?: "mobileBuyButton" | "desktopBuyButton";
  customInputClass?: "mobileInput" | "desktopInput";
  disabled?: boolean;
  observation?: string;
  hasWeightField?: boolean;
}

const roundToTwo = (n: number): number => Number(n.toFixed(2));

const CustomProductCard = React.memo((props: BuyButtonProps) => {
  const { items } = useCart();
  const { children, product, isDefaultCard, customButtonClass, customInputClass, disabled, observation } = props;

  const {
    id,
    sku,
    gtin,
    unitMultiplier,
    name: variantName,
    brand,
    isVariantOf,
    image: productImages,
    additionalProperty,
    offers: {
      offers: [{ price, listPrice, priceWithTaxes, listPriceWithTaxes, seller }],
    },
  } = product;

  // Cria um array vazio para additionalProperty se necessário
  const additionalPropertyArr: Array<{
    propertyID: string;
    name: string;
    value: any;
    valueReference: any;
  }> = [];

  const { updateItemQuantity } = cartStore;
  const hasDiscount = price < listPrice;

  const [quantityItem, setQuantityItem] = useState(0);

  const itemCart = useMemo(() => {
    return items?.filter((item: CartItemFragment) => item.itemOffered.sku === product.sku);
  }, [items, product.sku]);

  const hasItemOnCart = useMemo(() => itemCart.length > 0, [itemCart]);
  const cartQuantity = itemCart?.[0]?.quantity;

  const { openModal, pushToast, popToast } = useUI();

  const normalizedIsVariantOf = isVariantOf
    ? {
        ...isVariantOf,
        skuVariants: isVariantOf.skuVariants
          ? isVariantOf.skuVariants
          : { activeVariations: {}, slugsMap: {}, availableVariations: {} },
      }
    : { skuVariants: { activeVariations: {}, slugsMap: {}, availableVariations: {} } };

  // Estado para o "step" do produto
  // Para produtos vendidos unitariamente o step é 1,
  // mas se for vendido por KG, o step será definido pelo backend (por exemplo, 0.2)
  const [step, setStep] = useState<number>(1);

  // Obtém a medida do produto (ex.: "KG")
  function getGtinInfo(gtin: string): { productId: string; measure: string } {
    if (!gtin) return { productId: "", measure: "" };

    const parts = gtin.split("-");
    const productId = parts[0]?.trim() || "";
    const measure = parts[1]?.trim().toUpperCase() || "";

    return { productId, measure };
  }

  const { productId, measure } = getGtinInfo(product.gtin);

  //   const PRODUCT_QUERY = gql<any>(`
  //   query GetProduct($id: String!) {
  //     product(locator: { key: "id", value: $id }) {
  //       slug
  //       name
  //       unitMultiplier
  //       productID
  //       sku
  //       gtins
  //     }
  //   }
  // `);

  //const { data: productData, error } = useQuery(PRODUCT_QUERY, { id: id }, { doNotRun: !id });

  // if (!productData && !error) {
  //   console.log("Query rodando - aguardando dados...");
  // }

  // useEffect(() => {
  //   if (error) {
  //     console.error("Erro na query:", error);
  //   }
  //   if (productData) {
  //     console.log("Query executada com sucesso:", productData);
  //   }
  // }, [productData, error]);

  useEffect(() => {
    if (measure === "KG") {
      fetch("BaseUrl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productList: [Number(productId)] }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setStep(Number(data[0].multiple_sale_cpf));
        })
        .catch((error) => {
          console.error("Erro ao buscar múltiplo de venda:", error);
        });
    }
  }, [id, measure]);

  const sendToast = (title: string) => {
    popToast();
    pushToast({
      message: title,
      status: "INFO",
    });
  };

  const [productCounter, setProductCounter] = useState(0);
  const [showCartButton, setShowCartButton] = useState(true);

  const handleDecrement = () => {
    if (hasItemOnCart) {
      const itemId = itemCart[0]?.id;
      if (!itemId) return;

      if (cartQuantity && cartQuantity > step) {
        const newQuantity = roundToTwo(cartQuantity - step);
        updateItemQuantity(itemId, newQuantity);
        setProductCounter(newQuantity);
        setQuantityItem(newQuantity);
        //sendToast("Quantidade alterada");
      } else {
        updateItemQuantity(itemId, 0);
        setProductCounter(0);
        setQuantityItem(0);
        setShowCartButton(true);
        //sendToast("Produto removido");
      }
    }
  };

  const handleIncrement = () => {
    if (hasItemOnCart) {
      const itemId = itemCart[0]?.id;
      if (itemId) {
        const newQuantity = roundToTwo((cartQuantity || 0) + step);
        updateItemQuantity(itemId, newQuantity);
        setProductCounter(newQuantity);
        setQuantityItem(newQuantity);
        //sendToast("Quantidade alterada");
      } else {
        addNewItem();
      }
    } else {
      addNewItem();
    }
  };

  const addNewItem = () => {
    const initialQuantity = measure === "KG" ? roundToTwo(step) : 1.0;
    cartStore.addItem({
      id,
      price,
      listPrice,
      priceWithTaxes,
      listPriceWithTaxes,
      seller,
      quantity: initialQuantity,
      itemOffered: {
        sku,
        name: variantName,
        gtin,
        image: productImages,
        brand,
        isVariantOf: normalizedIsVariantOf,
        additionalProperty: additionalPropertyArr,
        unitMultiplier,
      },
    });
    setProductCounter(initialQuantity);
    setQuantityItem(initialQuantity);
    //sendToast("Produto adicionado");
  };

  const handleAddToCart = () => {
    setShowCartButton(false);
    setQuantityItem(0);
    setProductCounter(0);
    // Aqui não chamamos a função de adicionar automaticamente
  };

  useEffect(() => {
    if (hasItemOnCart && cartQuantity) {
      setShowCartButton(false);
      setProductCounter(cartQuantity);
      setQuantityItem(cartQuantity);
    } else {
      // Se o item não estiver no carrinho, exibe o botão de adicionar
      setShowCartButton(true);
      setProductCounter(0);
      setQuantityItem(0);
    }
  }, [hasItemOnCart, cartQuantity]);

  const totalPrice = useFormattedPrice(productCounter * price);
  const cleanName = product.name.replace(/\s*-\s*(UN|KG)$/i, "");

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        {product.image?.[0]?.url ? (
          <Link href={`/${product.slug}/p`} target={"_self"} className={`${styles.productImage} ${styles.noLinkStyle}`}>
            <Image src={product.image?.[0]?.url} alt={product.name} width={159} height={159} loading="lazy" />
          </Link>
        ) : (
          <Link href={`/${product?.slug}/p`} className={`${styles.productImage} ${styles.noLinkStyle}`} />
        )}
      </div>
      <div className={styles.productContent}>
        <Link href={`/${product.slug}/p`} className={`${styles.productName} ${styles.noLinkStyle}`}>
          <p className={styles.productName}>{cleanName}</p>
        </Link>
        <div className={styles.productPrice}>
          {hasDiscount ? (
            <span className={styles.listPrice}>De: {useFormattedPrice(listPrice)}</span>
          ) : (
            <span className={styles.listPrice} style={{ opacity: 0 }}>
              De: {useFormattedPrice(listPrice)}
            </span>
          )}
          <p className={styles.priceContainer}>
            <span className={styles.price}>
              Por:
              <br />
              {useFormattedPrice(price)}
            </span>
            {hasDiscount && <DiscountBadge listPrice={listPrice} spotPrice={price} />}
          </p>
          <Badge className={styles.badge} size="small" variant="info">
            {measure}
          </Badge>
        </div>
      </div>
      {showCartButton ? (
        <Button
          className={`${styles.addButton} ${!showCartButton ? styles.hidden : ""}`}
          variant="primary"
          onClick={handleAddToCart}>
          <Cart />
        </Button>
      ) : (
        <div className={`${styles.buttonContainer} ${showCartButton ? "" : styles.visible}`}>
          <div className={styles.counter}>
            <div onClick={handleDecrement}>
              <MinusIcon />
            </div>
            <Price className={styles.productCounter} value={productCounter} variant="selling" />
            <div onClick={handleIncrement}>
              <PlusIcon />
            </div>
          </div>
          <div className={styles.total}>{totalPrice}</div>
        </div>
      )}
      {<pre>{/*JSON.stringify(productData ? productData : { name: "testeeee" }, null, 1)*/}</pre>}
    </div>
  );
});

export default CustomProductCard;

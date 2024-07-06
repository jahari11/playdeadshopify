import Cookies from "js-cookie";
import { client } from "./shopify";

const addProductToCart = async (product) => {
  Cookies.remove("cart");
  let checkoutId = Cookies.get("checkoutId");
  if (checkoutId === "undefined") {
    checkoutId = await createCheckout();
  }
  Cookies.set("checkoutId", checkoutId);
  const cart = await client.checkout.addLineItems(checkoutId, product);
  await storeCart(cart);
};

const getCart = async () => {
  return JSON.parse(window.localStorage.getItem("cart"));
};

const storeCart = async ({
  lineItems,
  totalPrice,
  totalPriceV2,
  TotalTax,
  id,
  currencyCode,
  subTotalPrice,
  webUrl,
}) => {
  const cartInfo = {
    lineItems,
    totalPrice,
    totalPriceV2,
    TotalTax,
    id,
    currencyCode,
    subTotalPrice,
    webUrl,
  };
  const storage = window.localStorage;
  storage.setItem("cart", JSON.stringify(cartInfo));
};

const createCheckout = async () => {
  const { id } = await client.checkout.create();
  return id;
};

const updateProductQuantity = async (lineItemId, quantity) => {
  const checkoutId = Cookies.get("checkoutId");
  const lineItemsToUpdate = [
    {
      id: lineItemId,
      quantity: quantity,
    },
  ];
  const cart = await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
  await storeCart(cart);
};

const removeProductFromCart = async (lineItemId) => {
  const checkoutId = Cookies.get("checkoutId");
  const lineItemsToRemove = [lineItemId];
  const cart = await client.checkout.removeLineItems(checkoutId, lineItemsToRemove);
  await storeCart(cart);
};

export { addProductToCart, getCart, createCheckout, storeCart, updateProductQuantity, removeProductFromCart };

export const getProductMeasure = (gtin: string): string => {
  const normalizedGtin = gtin.toLowerCase();
  if (normalizedGtin.endsWith("un")) {
    return "UN";
  }
  if (normalizedGtin.endsWith("kg")) {
    return "KG";
  }
  return "unknown";
};

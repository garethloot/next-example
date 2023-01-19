type Curreny = "EUR";
type Locale = "nl-NL" | "en-EN";

export const toPrice = (number: number, locale: Locale, currency: Curreny) => {
  return Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(number);
};

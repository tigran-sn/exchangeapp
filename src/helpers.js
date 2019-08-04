export function arrayContains(arr, val) {
  var contains =
    arr.filter(function(obj) {
      return (obj.fromCurrencyId = val);
    }).length >= 1;
  return contains;
}

export function currencySymbol(currency_name) {
  const currency_symbols = {
    USD: "$", // US Dollar
    MXN: "$", // Mexican Peso
    RUB: "₽", // Russian Ruble
    SEK: "kr", // Swedish Krona
    CHF: "Fr", // Swiss Franc
    EUR: "€", // Euro
    CRC: "₡", // Costa Rican Colón
    GBP: "£", // British Pound Sterling
    ILS: "₪", // Israeli New Sheqel
    INR: "₹", // Indian Rupee
    JPY: "¥", // Japanese Yen
    KRW: "₩", // South Korean Won
    NGN: "₦", // Nigerian Naira
    PHP: "₱", // Philippine Peso
    PLN: "zł", // Polish Zloty
    PYG: "₲", // Paraguayan Guarani
    THB: "฿", // Thai Baht
    UAH: "₴", // Ukrainian Hryvnia
    VND: "₫" // Vietnamese Dong
  };
  if (currency_symbols[currency_name] !== undefined) {
    return currency_symbols[currency_name];
  }
}

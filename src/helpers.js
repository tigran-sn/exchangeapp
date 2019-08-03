export function arrayContains(arr, val) {
  var contains =
    arr.filter(function(obj) {
      return (obj.fromCurrencyId = val);
    }).length >= 1;
  return contains;
}

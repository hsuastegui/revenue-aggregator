export const formatNumber = (number, decimals = 2) =>
  new Intl.NumberFormat("en", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);

export const aggregateProducts = (data) =>
  data.reduce((acc, curr) => {
    const row = { ...curr };
    row.revenue = curr.unitPrice * curr.sold;
    if (acc.hasOwnProperty(curr.id)) {
      row.sold += acc[curr.id].sold;
      row.revenue += acc[curr.id].revenue;
    }
    delete row.unitPrice;
    return { ...acc, [curr.id]: row };
  }, {});

export const sortProducts = (data, sortBy = "name") =>
  Object.values(data).sort(function (a, b) {
    if (sortBy === "name") {
      const itemA = a[sortBy].toLowerCase();
      const itemB = b[sortBy].toLowerCase();
      if (itemA < itemB) {
        return -1;
      }
      if (itemA > itemB) {
        return 1;
      }
      return 0;
    } else {
      return b[sortBy] - a[sortBy];
    }
  });

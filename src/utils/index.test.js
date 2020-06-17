import { aggregateProducts, formatNumber, sortProducts } from "./index";
describe("utils", () => {
  it("aggregates products", () => {
    const products = [
      { id: "046", name: "Pears", sold: 856, unitPrice: 6.9 },
      { id: "046", name: "Pears", sold: 641, unitPrice: 6.9 },
    ];
    expect(aggregateProducts(products)).toEqual({
      "046": {
        id: "046",
        name: "Pears",
        sold: 1497,
        revenue: 10329.300000000001,
      },
    });
  });
  it("formats number", () => {
    expect(formatNumber(123.4567, 2)).toEqual("123.46");
    expect(formatNumber(123.4567, 0)).toEqual("123");
    expect(formatNumber(123.7, 0)).toEqual("124");
    expect(formatNumber(1233234, 0)).toEqual("1,233,234");
    expect(formatNumber(1233234, 2)).toEqual("1,233,234.00");
  });
  it("sorts products", () => {
    expect(
      sortProducts({
        "1": { name: "ZXC" },
        "2": { name: "ABC" },
      })
    ).toEqual([{ name: "ABC" }, { name: "ZXC" }]);
    expect(
      sortProducts(
        {
          "1": { revenue: 5 },
          "2": { revenue: 100 },
        },
        "revenue"
      )
    ).toEqual([{ revenue: 100 }, { revenue: 5 }]);
  });
});

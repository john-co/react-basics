// import Product from './Product';
// const filter = require("./Product");


// test('', () => {
//   const value = Product("Android", 60);

//   expect(value.innerHTML).toEqual('<>')
// });
const filterByTerm = require("./filterByTerm")

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {

    const input = [
      { id: 1, url: "https://www.url1.dev"},
      { id: 2, url: "https://www.url2.dev"},
      { id: 3, url: "https://www.link3.dev"},
    ];

    const output = [{ id: 3, url: "https://www.link3.dev"}]

    expect(filterByTerm(input,"link")).toEqual(output);
    expect(filterByTerm(input,"Link")).toEqual(output);
  });

  test("it should throw when search term is empty)", () => {

    const input = [
      { id: 1, url: "https://www.url1.dev"},
      { id: 2, url: "https://www.url2.dev"},
      { id: 3, url: "https://www.link3.dev"},
    ];

    const output = [{ id: 3, url: "https://www.link3.dev"}]

    expect(() => {
      filterByTerm(input);
    }).toThrow("searchTerm cannot be empty");


    expect(() => {
      filterByTerm(input,"");
    }).toThrow("searchTerm cannot be empty");
  })

  test("it should throw when array is empty)", () => {
    const input = [];

    expect(() => {
      filterByTerm(input,"asdf");
    }).toThrow("inputArr cannot be empty");
  })
});
import Folder from "../types/Folder";
import Product from "../types/Product";

const characters = "qwertzuiopasdfghjklyxcvbnmQWERTZUIOPASDFGHJKLYXCVBNM"

export default class MockGenerator {
  public randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public randomString(length: number): string {
    let str = "";
    while (length > 0) {
      let index = this.randomInt(0, characters.length - 1);
      str += characters[index];
      length--;
    }
    return str;
  }

  public randomProduct(categoryId: string): Product {

    return {
      Id: this.randomString(4),
      Name: this.randomString(10),
      CategoryId: categoryId
    }
  }

  public randomProducts(count: number, categoryId: string): Array<Product> {
    const products: Array<Product> = [];
    while (count > 0) {
      products.push(this.randomProduct(categoryId));
      count--;
    }
    return products;
  }



  public randomCategories(): Array<Folder> {
    return [
      {
        Id: "1",
        Name: "Category e",
        ParentCategroyId: undefined
      },
      {
        Id: "2",
        Name: "Category qw",
        ParentCategroyId: "1"
      },
      {
        Id: "3",
        Name: "Category eq",
        ParentCategroyId: "1"
      },
      {
        Id: "4",
        Name: "Category 12",
        ParentCategroyId: undefined
      },
      {
        Id: "5",
        Name: "Category gerfg",
        ParentCategroyId: "4"
      },
      {
        Id: "6",
        Name: "Category wer",
        ParentCategroyId: "4"
      },
      {
        Id: "7",
        Name: "Category wefr",
        ParentCategroyId: "4"
      },
      {
        Id: "8",
        Name: "Category twer",
        ParentCategroyId: "6"
      },
      {
        Id: "9",
        Name: "Category werdf",
        ParentCategroyId: "6"
      },
      {
        Id: "10",
        Name: "Category fdfds",
        ParentCategroyId: "6"
      },
    ]
  }
}
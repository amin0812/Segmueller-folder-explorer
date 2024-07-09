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

    public randomProduct(): Product {
        
        return {
            id: this.randomString(4),
            name: this.randomString(10),
            categoryId: this.randomString(4)
        }
    }

    public randomProducts(count: number): Array<Product> {
        const products: Array<Product> = [];
        while (count > 0) {
            products.push(this.randomProduct());
            count--;
        }
        return products;
    }

   

    public randomCategories(count : number) : Array<Folder> {
        return [
            {
              id: "1",
              parentCategroyId: undefined
            },
            {
              id: "2",
              parentCategroyId: "1"
            },
            {
              id: "3",
              parentCategroyId: "1"
            },
            {
              id: "4",
              parentCategroyId: undefined
            },
            {
              id: "5",
              parentCategroyId: "4"
            },
            {
              id: "6",
              parentCategroyId: "4"
            },
            {
              id: "7",
              parentCategroyId: "4"
            },
            {
              id: "8",
              parentCategroyId: "6"
            },
            {
              id: "9",
              parentCategroyId: "6"
            },
            {
              id: "10",
              parentCategroyId: "6"
            },
          ]
    }
}
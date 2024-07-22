import Folder from "../types/Folder";
import Product from "../types/Product";
import MockGenerator from "./MockGenerator";
import { Ref, ref } from "vue";

const mockGenerator = new MockGenerator();

export default class Explorer {
    public folders: Array<Folder>
    public server: string
    public products: Ref<Array<Product>>

    public constructor(server: string) {
        this.folders = this.parseFolderStructure(this.getFolders())
        this.server = server
        this.products = ref([]);
    }

    public getCategoryProducts(categoryId: string, search: string) : Array<Product> {
        //TODO: replace mocks with api call
        return mockGenerator.randomProducts(10, categoryId);
    }

    public search(search: string) : Array<Product> {
        //TODO: replace mocks with api call
        return mockGenerator.randomProducts(5, mockGenerator.randomString(1));
    }

    private getFolders(): Array<Folder> {
        //TODO: replace mock with api call when api exists
        return mockGenerator.randomCategories();
    }

    private parseFolderStructure(Folders: Array<Folder>, parentCategroyId?: string): Array<Folder> {
        return Folders.filter(f => f.ParentCategroyId == parentCategroyId).reduce((acc: Array<Folder>, curr: Folder) => {
            acc.push( { ...curr, ChildCategories: this.parseFolderStructure(Folders, curr.Id) });
            return acc;
        }, []);
    }
}


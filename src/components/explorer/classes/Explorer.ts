import Folder from "../types/Folder";
import Product from "../types/Product";
import MockGenerator from "./MockGenerator";

const mockGenerator = new MockGenerator();

export default class Explorer {
    public folders: Array<Folder>
    public server: string

    public constructor(server: string) {
        this.folders = this.parseFolderStructure(this.getFolders())
        this.server = server
    }

    public getCategoryProducts(categoryId: string, search: string) : Array<Product> {
        //TODO: replace mocks with api call
        return mockGenerator.randomProducts(10);
    }

    public search(search: string) : Array<Product> {
        //TODO: replace mocks with api call
        return mockGenerator.randomProducts(5);
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


import Folder from "./types/Folder";
import FolderStructure from "./types/FolderStructure";
import Product from "./types/Product";
import MockGenerator from "./classes/MockGenerator";

const mockGenerator = new MockGenerator();

export default class Explorer {
    public folderStructure: FolderStructure
    public folders: Array<Folder>
    public server: string

    public constructor(server: string) {
        this.folders = this.getFolders()
        this.folderStructure = this.parseFolderStructure(this.folders);
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
        return mockGenerator.randomCategories(10);
    }

    private parseFolderStructure(Folders: Array<Folder>, parentCategroyId?: string): FolderStructure {
        return Folders.filter(f => f.parentCategroyId == parentCategroyId).reduce((acc: FolderStructure, curr: Folder) => {
            acc[curr.id] = { ...curr, childCategories: this.parseFolderStructure(Folders, curr.id) };
            return acc;
        }, {});
    }
}


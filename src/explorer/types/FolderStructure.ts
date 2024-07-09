export default interface FolderStructure {
    [key: string]: {
        id: string
        parentCategroyId?: string
        childCategories: FolderStructure
    }
}

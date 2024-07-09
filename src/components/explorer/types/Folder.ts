export default interface Folder {
    id: string
    parentCategroyId?: string
    childCategories?: Array<Folder>
}
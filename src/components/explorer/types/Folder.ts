export default interface Folder {
    Id: string
    Name: string
    ParentCategroyId?: string
    ChildCategories?: Array<Folder>
}
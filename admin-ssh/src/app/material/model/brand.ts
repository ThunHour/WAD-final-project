interface Image{
    id?:string;
    imageUrl?:string
}
interface Category{
    id?:string;
    categoryName?:string
    Image?:Image
}
export interface Brand {
    id?: string;
    brandName?: string;
    Image?:Image;
    category?:Category;
}

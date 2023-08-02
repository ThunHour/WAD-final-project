interface Image{
    id:string;
    imageUrl:string
}
interface Brand{
    id:string;
    brandName:string;
}
export interface Category {
    id?: string;
    categoryName?: string;
    Image?:Image;
    brand?:Brand;
}

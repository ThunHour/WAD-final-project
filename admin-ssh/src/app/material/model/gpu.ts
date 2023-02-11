interface Image{
    id?: string;
    imageUrl?:string
}
interface color{
    id?:string;
    color?:string,
    image?:Image[]

}
export interface PanelGpu{
    id?:string;
    category?:Category;
    name?:string,
    gpu?:Gpu[],
    image?:Image[]

}
interface Category {
    id?: string;
    categoryName?: string;
}
export interface CreateGpu {
    id?:string
    categoryId?: string;
    itemId?: string;
    model?: string;
    spec?: string;
    color?: string;
    price?: number;
}

export interface Gpu {
    id:string;
    categoryId?: string;
    model?: string;
    spec?: string;
    color?: color;
    price?: number;
}

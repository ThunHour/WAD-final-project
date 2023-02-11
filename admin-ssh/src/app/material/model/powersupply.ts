interface Image{
    id?: string;
    imageUrl?:string
}
interface color{
    id?:string;
    color?:string,
    image?:Image[]

}
export interface PanelPowerSupply{
    id?:string;
    category?:Category;
    name?:string,
    powerSupply?:PowerSupply[],
    image?:Image[]

}
interface Category {
    id?: string;
    categoryName?: string;
}
export interface CreatePowerSupply {
    id?:string
    categoryId?: string;
    itemId?: string;
    model?: string;
    spec?:string
    color?: string;
    price?: number;
}

export interface PowerSupply {
    categoryId?:string
    id?:string;
    model?: string;
    color?: color;
    price?: number;
    spec?:string
}

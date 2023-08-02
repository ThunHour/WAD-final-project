interface Image{
    id?: string;
    imageUrl?:string
}
interface color{
    id?:string;
    color?:string,
    image?:Image[]

}
export interface PanelStorage{
    id?:string;
    category?:Category;
    name?:string,
    storage?:Storage[],
    image?:Image[],
    panelmotherBoard?:PanelMotherBoard[]

}
export interface PanelMotherBoard{
    id?:string;
    name?:string;
}

interface Category {
    id?: string;
    categoryName?: string;
}
export interface CreateStorage {
    id?:string
    categoryId?: string;
    itemId?: string;
    model?: string;
    spec?: string;
    color?: string;
    price?: number;
}

export interface Storage {
    id:string;
    categoryId?: string;
    model?: string;
    spec?: string;
    color?: color;
    price?: number;
    listMotherBoardId?:string;
}

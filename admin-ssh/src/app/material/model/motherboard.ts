interface Image{
    id?: string;
    imageUrl?:string
}
interface color{
    id?:string;
    color?:string,
    image?:Image[]

}
export interface PanelMotherBoard{
    id?:string;
    category?:Category;
    name?:string,
    motherBoard?:MotherBoard[],
    image?:Image[]

}
interface Category {
    id?: string;
    categoryName?: string;
}
export interface CreateMotherBoard {
    id?:string
    categoryId?: string;
    itemId?: string;
    model?: string;
    color?: string;
    price?: number;
}

export interface MotherBoard {
    id?:string;
    categoryId?: string;
    model?: string;
    color?: color;
    price?: number;
}


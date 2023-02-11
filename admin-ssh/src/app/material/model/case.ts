interface Image{
    id?: string;
    imageUrl?:string
}
interface color{
    id?:string;
    color?:string,
    image?:Image[]

}
export interface PanelCase{
    id?:string;
    category?:Category;
    name?:string,
    case?:Case[],
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
export interface CreateCase {
    id?:string
    categoryId?: string;
    itemId?: string;
    model?: string;
    color?: string;
    price?: number;
}

export interface Case {
    id:string;
    categoryId?: string;
    model?: string;
    color?: color;
    price?: number;
    listMotherBoardId?:string;
}

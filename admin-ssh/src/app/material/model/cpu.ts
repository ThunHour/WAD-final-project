interface Image{
    id?: string;
    imageUrl?:string
}
interface color{
    id?:string;
    color?:string,
    image?:Image[]

}
export interface PanelCpu{
    id?:string;
    category?:Category;
    name?:string,
    cpu?:Cpu[],
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
export interface CreateCpu {
    id?:string
    categoryId?: string;
    itemId?: string;
    model?: string;
    spec?: string;
    type?:string;
    color?: string;
    price?: number;
}

export interface Cpu {
    id:string;
    categoryId?: string;
    model?: string;
    spec?: string;
    type?:string;
    color?: color;
    price?: number;
    listMotherBoardId?:string;
}

interface Image {
    id?: string;
    imageUrl?: string
}
interface color {
    id?: string;
    color?: string,
    image?: Image[]

}
export interface PanelRam {
    id?: string;
    category?: Category;
    name?: string,
    ram?: Ram[],
    image?: Image[],
    panelmotherBoard?: PanelMotherBoard[]

}
export interface PanelMotherBoard {
    id?: string;
    name?: string;
}

interface Category {
    id?: string;
    categoryName?: string;
}
export interface CreateRam {
    id?: string
    categoryId?: string;
    itemId?: string;
    model?: string;
    spec?: string;
    color?: string;
    price?: number;
    type?: string;
}

export interface Ram {
    id: string;
    categoryId?: string;
    model?: string;
    spec?: string;
    color?: color;
    price?: number;
    type?: string;
    listMotherBoardId?: string;
}

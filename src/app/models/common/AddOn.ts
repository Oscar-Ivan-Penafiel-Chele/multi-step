export interface AddOn{
    name: string,
    title: string,
    detail: string,
    price: number
}

export interface AddOnElements{
    elements: NodeListOf<Element>,
    layouts: NodeListOf<Element>
}
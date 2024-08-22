// export = public
// typescript tarafında api'dan gelen dataların tutulması için class'lar yerine interface'ler kullanılır.

// number => All JavaScript numbers are stored as decimal numbers (floating point) 

export interface Product{
    productId: number;
    productName: string;
    categoryId: number;
    unitPrice: number;
    unitsInStock: number;
}
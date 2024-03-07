import {categoriesModelData, productsModelData} from "../providers/loaders/homeLoader.ts";

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function buildProductsCard(categories: categoriesModelData[], products: productsModelData[]) {
  return products.map((product) => {
    product.category = getRandomItem(categories).name;
    return product;
  }).sort((a, b) => a.id - b.id);
}

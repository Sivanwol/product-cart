import {defer} from "react-router-dom";
import {getCategories, getProducts} from "../../common/Apis.ts";

export type categorieModelData = {
  id: number;
  name: string;
}
export type productsModelData = {
  id: number;
  name: string;
  price: number;
  category: string;
}
export type HomeRouteLoaderData = {
  categories: categorieModelData[];
  products: productsModelData[];
}


export async function homeLoader() {
  return defer({
    categories: await getCategories(),
    products: await getProducts(),
  })
}
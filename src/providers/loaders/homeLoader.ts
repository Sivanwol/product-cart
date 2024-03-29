import {defer} from "react-router-dom";
import {getCategories, getProducts} from "../../common/Apis.ts";

export type categoriesModelData = {
  id: number;
  name: string;
}
export type productsModelData = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}
export type HomeRouteLoaderData = {
  categories: categoriesModelData[];
  products: productsModelData[];
}


export async function homeLoader() {
  return defer({
    categories: await getCategories(),
    products: await getProducts(),
  })
}
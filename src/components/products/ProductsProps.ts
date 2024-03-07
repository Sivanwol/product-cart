import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {vector3} from "../../common/types.ts";

export type ProductsProps = {
  items: productsModelData[],
  categories: string[],
  position: vector3
}
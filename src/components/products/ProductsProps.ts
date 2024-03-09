import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {Vector3} from "@react-three/fiber";

export type ProductsProps = {
  children: 0 | Element;
  items: productsModelData[],
  categories: string[],
  position: Vector3
}
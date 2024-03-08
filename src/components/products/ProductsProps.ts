import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {Vector3} from "@react-three/fiber";

export type ProductsProps = {
  items: productsModelData[],
  categories: string[],
  position: Vector3
}
import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {useState} from "react";
import {suspend} from "suspend-react";
import {Billboard} from "@react-three/drei";
import {Text} from "@react-three/drei";
import {Vector3} from "@react-three/fiber";

type ProductCardProps = {
  category: string;
  products: productsModelData[];
  position: Vector3;
  from: number,
  len: number
  radius: number;
  onPointerOver: () => void,
  onPointerOut: () => void
  onClick: () => void
}

function ProductCards(props: ProductCardProps) {
  const {category, products, position, from, len, radius, onPointerOver, onPointerOut, onClick} = props;
  const [hovered, hover] = useState(null)
  const [clicked, click] = useState(null)
  const amount = Math.round(len * 22)
  const textPosition = from + (amount / 2 / amount) * len
  return (
    <group  {...props}>
      <Billboard position={[Math.sin(textPosition) * radius * 1.4, 0.5, Math.cos(textPosition) * radius * 1.4]}>
        <Text font={suspend(inter).default} fontSize={0.25} anchorX="center" color="black">
          {category}
        </Text>
      </Billboard>
      {products.map((product, index) => {
        const angle = from + (index / amount) * len

      }}
    </group>
  )
}

export default ProductCards;
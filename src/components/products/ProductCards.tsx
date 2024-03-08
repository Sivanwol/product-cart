import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {useState} from "react";
import {suspend} from "suspend-react";
import {Billboard} from "@react-three/drei";
import {Text} from "@react-three/drei";
import {Vector3} from "@react-three/fiber";
import {inter} from "../../common/constants.ts";
import ProductCard from "./ProductCard.tsx";
import ProductActiveCard from "./ProductActiveCard.tsx";

type ProductCardProps = {
  category: string;
  products: productsModelData[];
  position: Vector3;
  from: number;
  len: number;
  radius: number;
}

function ProductCards(props: ProductCardProps) {
  const {category, products, position, from, len, radius, onPointerOver, onPointerOut, onClick} = props;
  const [hovered, hover] = useState<number | null>(null)
  // const [clicked, click] = useState(null)
  const amount = Math.round(len * 22)
  const textPosition = from + (amount / 2 / amount) * len
  return (
    <group  {...props}>
      <Billboard position={[Math.sin(textPosition) * radius * 1.4, 0.5, Math.cos(textPosition) * radius * 1.4]}>
        {/* @ts-ignore */}
        <Text font={suspend(inter).default} fontSize={0.25} anchorX="center" color="black">
          {category}
        </Text>
      </Billboard>
      {products.map((_product, index) => {
        const angle = from + (index / amount) * len;
        return (<ProductCard
          item={_product}
          key={angle}
          onPointerOver={(e) => (e.stopPropagation(), hover(index), onPointerOver())}
          onPointerOut={() => (hover(null), onPointerOut())}
          position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
          rotation={[0, Math.PI / 2 + angle, 0]}
          active={hovered !== null}
          hovered={hovered === index}
        />);
      })}
      {hovered !== null && <ProductActiveCard hovered={hovered} item={products[hovered]} key={-1}/>}
    </group>
  )
}

export default ProductCards;
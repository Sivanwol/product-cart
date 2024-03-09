import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {useState} from "react";
import {suspend} from "suspend-react";
import {Billboard} from "@react-three/drei";
import {Text} from "@react-three/drei";
import {inter} from "../../common/constants.ts";
import ProductCard from "./ProductCard.tsx";
import ProductActiveCard from "./ProductActiveCard.tsx";

type ProductCardProps = {
  children: 0 | Element;
  category: string;
  products: productsModelData[];
  from: number;
  len: number;
  radius: number;
}

function ProductCards(props: ProductCardProps) {
  const {category, products, from, len, radius} = props;
  const [hovered, hover] = useState<number | null>(null)
  const [lastCategory, setLastCategory] = useState<string>('')
  // const [clicked, click] = useState(null)
  const amount = Math.round(len * 22)
  const textPosition = from + (amount / 2 / amount) * len
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onPointerOverHandler = (e, index) => {
    e.stopPropagation();
    hover(index);
    setLastCategory(category);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log('pointer over', index, hovered, products[hovered])
  }
  const onPointerOutHandler = () => {
    console.log('pointer out')
    hover(null);
  }
  return (
    <group  {...props}>
      <Billboard position={[Math.sin(textPosition) * radius * 1.4, 1.5, Math.cos(textPosition) * radius * 1.4]}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Text font={suspend(inter).default} fontSize={0.55} anchorX="center" color="black">
          {category}
        </Text>
      </Billboard>
      {products.map((_product, index) => {
        const angle = from + (index / amount) * len;
        return (<ProductCard
          item={_product}
          key={angle}
          onPointerOver={(e) => onPointerOverHandler(e, index)}
          onPointerOut={() => onPointerOutHandler}
          position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
          rotation={[0, Math.PI / 2 + angle, 0]}
          active={hovered !== null}
          hovered={hovered === index}
        />);
      })}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ProductActiveCard hovered={hovered} image={products[hovered]?.image || ''} name={products[hovered]?.name || ''}
                         clear={lastCategory !== category}
                         key="active" {...props}/>
    </group>
  )
}

export default ProductCards;
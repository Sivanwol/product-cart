import {Box} from "@chakra-ui/react";
import BoardScene from "./BoardScene.tsx";
import {ProductsProps} from "./ProductsProps.ts";
import {ScrollControls} from "@react-three/drei";
import {Canvas, Vector3} from "@react-three/fiber";

function Products(props: ProductsProps) {
  const {categories, items} = props;
  if (items.length === 0) {
    return (
      <Box>
        <p>No products found</p>
      </Box>
    )
  }
  const position = [0, 1.5, 0] as Vector3;
  return (
    <div style={{height: "50vh", width: "50vw"}}>
      <Canvas dpr={[1, 1.5]}>
        <ScrollControls pages={4} infinite>
          <BoardScene items={items} categories={categories} position={position} children={props.children}/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Products;
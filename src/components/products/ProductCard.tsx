import {vector3} from "../../common/types.ts";
import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {easing} from "maath";
import {Euler, useFrame, Vector3} from "@react-three/fiber";
import {Image} from "@react-three/drei";
import {useRef} from "react";
import * as THREE from 'three'

type productProps = {
  key: number;
  item: productsModelData;
  position: Vector3;
  rotation: Euler;
  active: boolean;
  hovered: boolean;
}

export default function ProductCard(props: productProps) {
  const {active, hovered, item} = props;
  const ref = useRef<any>()
  useFrame((_state, delta) => {
    const f = hovered ? 1.4 : active ? 1.25 : 1
    easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta)
    easing.damp3(ref.current.scale, [1.618 * f, 1 * f, 1], 0.15, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} url={item.image} scale={[1.618, 1]} side={THREE.DoubleSide}/>
    </group>
  )
}
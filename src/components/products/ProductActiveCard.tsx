import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {easing, geometry} from "maath";
import {Euler, extend, useFrame, Vector3} from "@react-three/fiber";
import {Billboard, Image, Text} from "@react-three/drei";
import {useLayoutEffect, useRef} from "react";
import {suspend} from "suspend-react";
import {inter} from "../../common/constants.ts"

extend(geometry)
type productActiveProps = {
  key: number;
  item: productsModelData;
  position: Vector3;
  rotation: Euler;
  hovered: number | null;
}

export default function ProductActiveCard(props: productActiveProps) {
  const {hovered, item} = props;
  const ref = useRef<any>()
  const name = item.name
  useLayoutEffect(() => void (ref.current.material.zoom = 0.8), [hovered])
  useFrame((_state, delta) => {
    easing.damp(ref.current.material, 'zoom', 1, 0.5, delta)
    easing.damp(ref.current.material, 'opacity', hovered !== null ? 0 : 1, 0.3, delta)
  })
  return (
    <Billboard {...props}>
      {/* @ts-ignore */}
      <Text font={suspend(inter).default} fontSize={0.5} position={[2.15, 3.85, 0]} anchorX="left" color="black">
        {hovered !== null && `${name}\n${hovered}`}
      </Text>
      <Image ref={ref} transparent position={[0, 1.5, 0]} url={item.image}>
        {/* @ts-ignore */}
        <roundedPlaneGeometry parameters={{width: 3.5, height: 1.618 * 3.5}} args={[3.5, 1.618 * 3.5, 0.2]}/>
      </Image>
    </Billboard>
  )
}
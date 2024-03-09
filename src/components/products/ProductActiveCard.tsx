import {productsModelData} from "../../providers/loaders/homeLoader.ts";
import {easing, geometry} from "maath";
import {extend, useFrame} from "@react-three/fiber";
import {Billboard, Image, Text} from "@react-three/drei";
import {useLayoutEffect, useRef, useState} from "react";
import {suspend} from "suspend-react";
import {inter} from "../../common/constants.ts"

extend(geometry)
type productActiveProps = {
  key: string;
  name: string;
  image: string;
  clear: boolean;
  hovered: number | null;
}

export default function ProductActiveCard(props: productActiveProps) {
  const {hovered, name, image} = props;
  const ref = useRef<any>()
  const [lastHovered, setLastHovered] = useState<number | null>(null);
  useLayoutEffect(() => {

    if (hovered !== null) {
      try {
        ref.current.material.zoom = 0.8;
        ref.current.material.opacity = 1;
      } catch (e) {
        console.error(e)
      }
    }

  }, [hovered])
  useFrame((_state, delta) => {
    if (hovered !== null) {
      try {
        if (hovered !== lastHovered && lastHovered !== null) {
          setLastHovered(hovered);
          easing.damp(ref.current.material, 'zoom', 1, 0.5, delta)
          easing.damp(ref.current.material, 'opacity', hovered !== null ? 0.0 : 1, 0.5, delta)
          return;
        }
        ref.current.material.opacity = 1;
      } catch (e) {
        console.error(e)
      }
    }
  })
  return ((hovered !== null) && (hovered !== undefined)) && (
    <Billboard {...props}>
      {hovered && (<>
        {/* @ts-ignore */}
        <Text font={suspend(inter).default} fontSize={1.25} position={[-7.15, -5.85, 0]} anchorX="left" color="black">
          {`${name}\n${hovered}`}
        </Text>
        <Image ref={ref} transparent position={[0, 1.5, 0]} url={image}>
          {/* @ts-ignore */}
          <roundedPlaneGeometry parameters={{width: 3.5, height: 1.618 * 3.5}} args={[3.5, 1.618 * 3.5, 0.2]}/>
        </Image>
      </>)}
    </Billboard>
  )
}
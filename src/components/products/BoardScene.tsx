import {extend, useFrame} from "@react-three/fiber";
import {easing, geometry} from "maath";
import {ProductsProps} from "./ProductsProps.ts";
import {useScroll} from "@react-three/drei";
import {useRef, useState} from "react";

extend(geometry)


function BoardScene(props: ProductsProps) {
  const ref = useRef<any>()
  const scroll = useScroll()
  const [hovered, hover] = useState(null)

  const [clicked, click] = useState(null)
  useFrame((state, delta) => {
    if (ref && ref.current) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
    }
    if (state.events.update) {
      state.events.update()
    } // Raycasts every frame rather than on pointer-move
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9], 0.3, delta)
    state.camera.lookAt(0, 0, 0)
  })
  return (
    <group ref={ref} {...props}>

    </group>
  )
}

export default BoardScene;
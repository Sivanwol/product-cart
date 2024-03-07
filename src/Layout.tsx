import {Center, Container, HStack, Spacer} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";

function Layout() {
  return (<Container>
    <Center>
      <h1>Shopping Selection</h1>
    </Center>
    <HStack>
      <div>Quick Sale</div>
      <div>Product List</div>
    </HStack>
    <Spacer/>
    <Outlet />
    <Spacer/>
    <footer>
      <Center>
        <span className="read-the-docs">
            Build By Sivan Wolberg At <a href="https://www.wolberg.pro" target="_blank">Wolberg.pro</a>
        </span>
      </Center>
    </footer>
  </Container>)
}

export default Layout;
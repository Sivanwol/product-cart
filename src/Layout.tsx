import {Box, Center, Container, HStack, Link, Spacer} from "@chakra-ui/react";
import {Outlet, Link as ReactRouterLink} from "react-router-dom";

function Layout() {
  return (<Box>
    <Center>
      <h1>Catalog Of Products</h1>
    </Center>
    <HStack>
      <Link color='teal.500' as={ReactRouterLink} to='/'>Product List</Link>
      <Link color='teal.500' as={ReactRouterLink} to="/quick-sale">Quick Sale</Link>
    </HStack>
    <Spacer/>
    <Outlet/>
    <Spacer/>
    <footer>
      <Center>
        <span className="read-the-docs">
            Build By Sivan Wolberg At <a href="https://www.wolberg.pro" target="_blank">Wolberg.pro</a>
        </span>
      </Center>
    </footer>
  </Box>)
}

export default Layout;
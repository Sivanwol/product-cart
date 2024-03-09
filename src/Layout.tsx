import {Box, Center, Container, HStack, Link, Spacer} from "@chakra-ui/react";
import {Outlet, Link as ReactRouterLink} from "react-router-dom";

function Layout() {
  return (<Box>
    <Center>
      <h1>Shopping Selection</h1>
    </Center>
    <HStack>
      <div><Link color='teal.500' as={ReactRouterLink} to='/'>Product List</Link></div>
      <div><Link color='teal.500' as={ReactRouterLink} to="/quick-sale">Quick Sale</Link></div>
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
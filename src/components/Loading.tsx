import {
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Spacer,
} from "@chakra-ui/react";
const Loading = () => {
  return (
    <Flex>
      <Spacer/>
      <Box padding='6' boxShadow='lg' w="100%">
        <SkeletonCircle size='10'/>
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2'/>
      </Box>
      <Spacer/>
    </Flex>
  )
}

export default Loading;
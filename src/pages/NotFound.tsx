import { Flex, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100vh"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color={"text"}
        textAlign={"center"}
      >
        404 Not Found
      </Text>
    </Flex>
  );
};

export default NotFound;
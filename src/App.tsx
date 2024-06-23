import { Flex } from "@chakra-ui/react";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <Flex
      flexDirection={"column"}
      color={"text"}
      width={"100%"}
      height={"100vh"}
      layerStyle={"primary_background"}
    >
      <AppRouter />
    </Flex>
  );
};

export default App;

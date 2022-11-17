import { ChakraProvider } from "@chakra-ui/react";
import { FlexContainer } from "./components/FlexContainer";
import { theme } from "./styles/theme";

function App() {


  return (
    <ChakraProvider theme={theme}>
      <FlexContainer />
    </ChakraProvider>
  );
}

export default App;

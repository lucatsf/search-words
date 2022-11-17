import { useRef, useState } from "react";
import { Flex, Input, Text, Button, Stack, useToast  } from "@chakra-ui/react";
import { api } from "../services/api";
import { WordCard } from "./WordCard";

export function FlexContainer () {
  const [ definitions, setDefinition ] = useState([]);

  const toast = useToast()
  const toastIdRef = useRef()

  async function handleSearch(form) {
    setDefinition([]);
    form.preventDefault();
    if (form.target[0].value.length <= 0) {
      toastIdRef.current = toast({
        title: 'No word entered.',
        description: "Please enter a word to search.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return false;
    };
    try {
      const { data } = await api.get(`/${form.target[0].value}`)

      setDefinition(data)
    } catch (error) {
      toastIdRef.current = toast({
        title: 'No results found.',
        description: "Please try another word.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return false;
    }
  }
  return (
    <Flex
      className="App"
      w="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing={4}
        w="100%"
        maxWidth={960}
      >
        <Flex
          width="100%"
          maxWidth={960}
          p="8"
          borderRadius={8}
        >
          <Text fontSize="4xl" fontWeight="bold">Search for a word</Text>
        </Flex>
        <Flex
          bg="gray.700"
          width="100%"
          maxWidth={960}
          p="8"
          borderRadius={8}
          as="form"
          onSubmit={handleSearch}
        >
          <Input
            placeholder="Type a word"
            name="word"
            focusBorderColor="green.500"
            bgColor="gray.900"
            size="lg"
          />
          <Button
            colorScheme="green"
            p={5}
            ml={3}
            type="submit"
          >
            Find the meaning
          </Button>
        </Flex>
        {definitions && (
          definitions.map((def, index) => (
            <WordCard
              key={index}
              definition={def}
            />
          ))
        )}
      </Stack>
    </Flex>
  )
}

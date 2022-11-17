import { Flex, Text, Box, Button, Stack, Link } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { RiSoundcloudLine } from "react-icons/ri";

export function WordCard({ definition }) {
  function canPlay(audio) {
    if (audio) {
      const audioElement = new Audio(audio);
      audioElement.play();
    }
  }

  return (
    <Flex
      bg="gray.700"
      width="100%"
      minWidth={960}
      p="8"
      borderRadius={8}
    >
      <Stack width="100%">
        <Box
          p={4}
          display={{ md: "flex" }}
          width="100%"
          margin={2}
        >
          {definition && (
            <Box>
              <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
              >
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="green.600"
                >
                  { definition.word }
                </Text>
                <Text
                  textTransform="uppercase"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="green.400"
                >
                  {definition.phonetic}
                </Text>
                <Link
                  my={1}
                  display="block"
                  fontSize="md"
                  lineHeight="normal"
                  fontWeight="semibold"
                  href="#"
                >
                  {definition.meanings[0].partOfSpeech}
                </Link>
                <Text my={2} color="gray.50">
                  {definition.meanings[0].definitions[0].definition}
                </Text>
                <Button
                  disabled={definition?.phonetics[0]?.audio ? false : true}
                  onClick={() => canPlay(definition?.phonetics[0]?.audio)}
                  w={40}
                  leftIcon={<Icon
                  as={RiSoundcloudLine}
                  />}
                  colorScheme='green'
                  variant='solid'>
                  To hear
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Stack>
    </Flex>
  )
}

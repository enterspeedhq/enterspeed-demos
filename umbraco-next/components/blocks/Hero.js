import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Link
} from '@chakra-ui/react'
import Image from 'next/image'
import heroImage from '../../public/magic-key-bg.jpg'

export default function Hero ({
  block
}) {
  return (
    <Box pos="relative">
      <Image
        alt="Fairy tale magic key"
        src={heroImage}
        width="100%"
        height="100%"
        layout="fill"
      />
      <Box
        bg='rgb(0 0 0 / 75%)'
        pos="relative"
      >
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              as="h1"
              color={'orange.100'}
              fontFamily={'Henny Penny'}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'150%'}>
              {block.heroHeader}
            </Heading>
            <Text color={'white'}>
              {block.heroDescription}
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Link
                href={block.heroCTALink.view.url}
                _hover={{
                  textDecoration: 'none'
                }}
              >
                <Button
                  colorScheme={'orange'}
                  size={'lg'}
                  bg={'orange.500'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'orange.600'
                  }}
                  _active={{
                    bg: 'orange.700'
                  }}>
                  {block.heroCTACaption}
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

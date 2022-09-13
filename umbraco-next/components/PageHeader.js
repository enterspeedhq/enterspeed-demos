import { Box, Heading, Container } from '@chakra-ui/react'
import Image from 'next/image'
import heroImage from '../public/magic-key-bg.jpg'

export default function PageHeader ({ title }) {
  return (
    <Box
      pos="relative"
      borderBottom="5px solid"
      borderColor="orange.400"
    >
      <Image
        alt="Fairy tale magic key"
        src={heroImage}
        width="100%"
        height="100%"
        layout="fill"
      />
      <Box bg="rgb(0 0 0 / 75%)" pos="relative">
        <Container maxW={'container.xl'}>
          <Box textAlign={'center'} py={{ base: 10, md: 20 }}>
            <Heading
              fontWeight={600}
              color={'white'}
              as="h1"
              fontFamily={'Henny Penny'}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'150%'}
            >
              {title}
            </Heading>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

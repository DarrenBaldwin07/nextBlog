import Head from 'next/head'
import { Flex, Box, Text, Image as Img, Button} from '@chakra-ui/react'
import Link from 'next/link'

function Home() {

  return (
    <div className="container">
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Flex direction='column'fontSize={24} fontWeight='extrabold' marginTop={12}>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Text color='primary'>Next.js blog with ChakraUI</Text>
            <Flex bg='white' boxShadow='lg' alignItems='center' borderRadius={12} pl={8} pr={8} mt={4}>
              <Text color='primary2' fontWeight='bold' fontSize={18} mr={4}>Deployed with</Text>
              <Img w={24} h={12} src='/vercel.svg' alt='vercel logo'/>
            </Flex>
          </Box>
          <Box mt={12}>
            <Text color='primary'>Posts</Text>
            <Box className='post' mt={4}>
              <Link href='/posts/firstPost'><a>Supabase and the rise of open source</a></Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Home 
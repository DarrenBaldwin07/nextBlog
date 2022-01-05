import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Flex, Box, Text, Image as Img, Button, Link} from '@chakra-ui/react'
import LinkN from 'next/link'


export const siteTitle = 'Next.js sample website'

export default function Layout({ children, home }: { children: React.ReactNode
    home?: boolean }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Container maxW='container.xl'>
                <Flex justifyContent='center'>
                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' maxW={500}>
                        <Flex direction='column'fontSize={24} fontWeight='extrabold' marginTop={12}>
                            <Box display='flex' flexDirection='column' alignItems='center'>
                                <Text color='primary'>Next.js blog with ChakraUI</Text>
                                <Flex bg='white' boxShadow='lg' alignItems='center' borderRadius={12} pl={8} pr={8} mt={4}>
                                    <Text color='primary2' fontWeight='bold' fontSize={18} mr={4}>Deployed with</Text>
                                    <Img w={24} h={12} src='/vercel.svg' alt='vercel logo'/>
                                </Flex>
                                <Flex direction='column' alignItems='center' mt={12}>
                                    {home ? (
                                        <>
                                          <Img w={44} src='/profile.svg' alt='profile picture'/>
                                          <Text color='primary2'>Darren Baldwin</Text>
                                        </>
                                        
                                    ) : (
                                        <>
                                          <Img w={24} src='/profile.svg' alt='profile picture'/>
                                          <LinkN href='/'><Link color='primary2'>Darren Baldwin</Link></LinkN>
                                        </>
                                    )}
                                </Flex>
                            </Box>
                            <main>{ children }</main>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
            
        </>
    )
}

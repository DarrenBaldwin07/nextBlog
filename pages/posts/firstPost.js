import { Box, Text, Button, Link } from '@chakra-ui/react'
import LinkN from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function firstPost() {

    // LinkN = next link - cant have two of the same named imports (aka already defined - type already declared)
    return (
        <Layout home={false}>
            <Head>
                <title>Supabase and the rise of open source</title>
            </Head>
            <Box>
                <Box display='flex' flexDirection='column' alignItems='center' m={16}>
                    <Text color='red' fontWeight='extrabold' fontSize={24}>This is the first post</Text>
                </Box>
                <LinkN href='/'><Link m={4}>Back</Link></LinkN> 
            </Box>
        </Layout> 
    )
}


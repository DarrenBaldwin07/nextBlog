import { Box, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function firstPost() {
    return (
        <Box>
            <Link href='/'><Button m={4}>Back</Button></Link>
            <Box display='flex' flexDirection='column' alignItems='center' m={16}>
                <Text color='red' fontWeight='extrabold' fontSize={24}>This is the first post</Text>
            </Box>
        </Box>
    )
}


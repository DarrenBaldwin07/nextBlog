import { parseISO, format } from 'date-fns'
import { Text } from '@chakra-ui/react'

export function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString)
    return <Text as='span' fontWeight='semiBold' fontSize='0.6em' color='lightGray'>{format(date, 'LLLL d, yyyy')}</Text>
}


import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Flex, Box, Text, Image as Img, UnorderedList, ListItem, Link} from '@chakra-ui/react'
import LinkN from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import { Date } from '../components/date'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'


export const getStaticProps: GetStaticProps = async () => { // for ssr all you do is export getServerSideProps() instead of getStaticProps (needs to be in a page)
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function Home({ allPostsData }) {
  return ( 
    <Layout home={true}>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <Flex direction='column'  mt={4}>
        <Text fontSize='0.8em' fontWeight='normal'>👋 Hi, Im <Text as='span' color='primary' fontWeight='bold'>Darren</Text>. I enjoy solving problems with code. </Text>
        <Text fontSize='0.8em' fontWeight='normal' mt={4}>(This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our <Text as='span' color='primary'>Next.js tutorial</Text> </a>.)</Text>
      </Flex>
      <Box mt={12}>
        <Text color='primary' mb={4}>Blog</Text>
        <UnorderedList mb={4}>
          {allPostsData.map(({id, date, title}) => (
            <ListItem key={id}>
              <LinkN href={'/posts/' + id}><Link>{title}</Link></LinkN>
              <br />
              <Date dateString={date} />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Layout>
  )
}

export default Home 
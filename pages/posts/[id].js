import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { Text, Box, Button} from '@chakra-ui/react'
import Head from 'next/head'
import { Date } from '../../components/date'
import LinkN from 'next/link'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export default function Post({ postData }) {
    return (
      <Layout home={false}>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <LinkN href='/'><Button mt={6} bg='primary' color='white' hover_={{bg: 'red'}}>Back</Button></LinkN>
        <Text mt={12} >{postData.title}</Text>
        <Date dateString={postData.date} />
        <article>
            <Box mb={4} fontWeight='normal' dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></Box>
        </article>
      </Layout>
    )
  }


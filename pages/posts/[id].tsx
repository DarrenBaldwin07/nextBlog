import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { Text, Box, Button} from '@chakra-ui/react'
import Head from 'next/head'
import { Date } from '../../components/date'
import LinkN from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () =>  {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export default function Post({ postData }: {postData: {title: string, date: string, contentHtml: string}}) {
    return (
      <Layout home={false}>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <LinkN href='/'><Button mt={6} bg='primary' color='white'>Back</Button></LinkN>
        <Text mt={12} >{postData.title}</Text>
        <Date dateString={postData.date} />
        <article>
            <Box mb={4} fontWeight='normal' dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></Box>
        </article>
      </Layout>
    )
  }


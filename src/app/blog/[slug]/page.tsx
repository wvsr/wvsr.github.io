import { getPostData, getAllPostIds } from '@/lib/blogs'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const postData = await getPostData(params.slug)
  if (!postData) {
    return {
      title: 'Not Found',
    }
  }

  const siteUrl = 'https://wvsr.github.io'

  return {
    title: postData.title,
    description: postData.contentSnippet,
    openGraph: {
      title: postData.title,
      description: postData.contentSnippet,
      url: `${siteUrl}/blog/${params.slug}`,
      images: [
        {
          url: `${siteUrl}/preview.png`,
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.contentSnippet,
      images: [`${siteUrl}/preview.png`],
    },
  }
}

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)

  if (!postData) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert">
      {postData.thumbnail && (
        <img
          src={postData.thumbnail}
          alt={postData.title}
          className="w-full"
        />
      )}
      <h1>{postData.title}</h1>
      <div>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}

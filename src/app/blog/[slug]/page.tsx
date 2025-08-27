import { getPostData, getAllPostIds } from '@/lib/blogs'
import { notFound } from 'next/navigation'

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
      <h1>{postData.title}</h1>
      <div>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}

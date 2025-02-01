import { notFound } from 'next/navigation'
import { blogs } from '@/data/blogs'
import { slugify } from '@/lib/utils'

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => slugify(b.title) === params.slug)

  if (!blog) return notFound()

  return (
    <div className="space-y-5">
      <p>{blog.date}</p>
      <h1 className="mb-8 text-2xl font-medium sm:text-3xl">{blog.title}</h1>
      <blog.texts />
    </div>
  )
}

// Add generateStaticParams
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: slugify(blog.title), // Make sure the slug is generated from the blog title
  }))
}

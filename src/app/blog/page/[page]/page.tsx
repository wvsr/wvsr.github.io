import { getSortedPostsData } from '@/lib/blogs'
import Link from 'next/link'
import { slugify, formatRelativeDate } from '@/lib/utils'
import Pagination from '@/components/pagination'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  const numPages = Math.ceil(posts.length / 20)
  const paths = Array.from({ length: numPages }, (_, i) => ({ page: (i + 1).toString() }))
  return paths
}

export default function BlogPage({ params }: { params: { page: string } }) {
  const posts = getSortedPostsData()
  const page = params.page ? parseInt(params.page, 10) : 1
  const postsPerPage = 20
  const numPages = Math.ceil(posts.length / postsPerPage)
  const paginatedPosts = posts.slice((page - 1) * postsPerPage, page * postsPerPage)

  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Blog</h1>

      <div className="flex flex-col gap-5">
        {paginatedPosts.map((blog, id) => {
          const slug = slugify(blog.title)
          return (
            <Link
              href={`/blog/${slug}`}
              className="block"
              key={id}
            >
              <div className="mt-5 font-base text-text">
                <h2 className="text-xl font-heading sm:text-2xl">
                  {blog.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">{formatRelativeDate(blog.date)}</p>
                <p className="mt-2 text-base">{blog.contentSnippet}</p>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-8">
        <Pagination currentPage={page} numPages={numPages} />
      </div>
    </div>
  )
}

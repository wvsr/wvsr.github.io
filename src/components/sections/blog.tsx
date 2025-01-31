import React from 'react'
import { blogs } from '@/data/blogs'
import Link from 'next/link'
import { slugify } from '@/lib/utils'

function Blog() {
  return (
    <div className="pb-5 pt-14">
      <h1 className="mb-8 text-xl font-heading sm:text-2xl">Blog Posts</h1>
      <article className="space-y-7">
        {blogs.map((blog) => {
          const slug = 'blog/' + slugify(blog.title)
          return (
            <div className="space-y-2" key={slug}>
              <p className="text-sm">{blog.date}</p>
              <Link href={slug}>
                <h2 className=" w-fit border-black text-xl hover:border-b-[3px] hover:border-dashed">
                  {blog.title}
                </h2>
              </Link>
            </div>
          )
        })}
      </article>
    </div>
  )
}

export default Blog

import type { CollectionEntry } from 'astro:content';

type Props = {
  posts: CollectionEntry<'blog'>[];
}

function Blog({ posts }: Props) {
  return (
    <section>
      {posts.length > 0 && (
        <>
          <h1 className="mb-8 text-xl font-heading sm:text-2xl">Blog Posts</h1>
          <article className="space-y-7">
            {posts.map((blog) => {
              const slug = '/blog/' + blog.slug;
              return (
                <div className="space-y-2" key={slug}>
                  <p className="text-sm">{blog.data.date.toDateString()}</p>
                  <a href={slug}>
                    <h2 className=" w-fit border-black text-xl hover:border-b-[3px] hover:border-dashed">
                      {blog.data.title}
                    </h2>
                  </a>
                </div>
              )
            })}
          </article>
        </>
      )}
    </section>
  )
}

export default Blog;

'server-only'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { slugify } from '@/lib/utils'

const postsDirectory = path.join(process.cwd(), 'src', 'components', 'blogs')

let cachedPosts: any[] | null = null

export function getSortedPostsData() {
  if (cachedPosts) {
    return cachedPosts
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id and a content snippet
    const contentSnippet = matterResult.content.substring(0, 150) + '...' // Take first 150 characters as snippet
    return {
      id,
      contentSnippet,
      ...(matterResult.data as { title: string; date: string; thumbnail?: string }),
    }
  })
  // Sort posts by date
  cachedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return cachedPosts
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      slug: slugify(matterResult.data.title),
    }
  })
}

export async function getPostData(slug: string) {
  const fileNames = fs.readdirSync(postsDirectory)
  const post = fileNames.find((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return slugify(matterResult.data.title) === slug
  })

  if (!post) {
    return null
  }

  const fullPath = path.join(postsDirectory, post)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const contentSnippet = matterResult.content.substring(0, 150) + '...'

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    contentSnippet,
    ...(matterResult.data as { title: string; date: string; thumbnail?: string }),
  }
}

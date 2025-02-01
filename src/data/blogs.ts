import Alive from '@/components/blogs/alive.mdx'
import { MDXProps } from 'mdx/types'

type Blog = {
  title: string
  date: string
  texts: (props: MDXProps) => JSX.Element
}[]

const blogs: Blog = []

export { blogs }

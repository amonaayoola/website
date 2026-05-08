import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  readTime: string
}

export interface Post extends PostMeta {
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(f => f.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || '',
        excerpt: data.excerpt || '',
        readTime: data.readTime || '5 min read',
      } as PostMeta
    })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processed = await remark().use(remarkHtml).process(content)
  const contentHtml = processed.toString()
  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    category: data.category || '',
    excerpt: data.excerpt || '',
    readTime: data.readTime || '5 min read',
    contentHtml,
  }
}

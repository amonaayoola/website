import { getAllPosts } from '@/lib/posts'
import BlogClient from '@/components/BlogClient'

export const metadata = {
  title: 'The Notebook | Amona Ayoola',
  description: 'Product marketing, GTM strategy, zero-dollar growth, and everything I\'m learning by building in public.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* HEADER */}
      <div className="blog-header">
        <div className="grain" />
        <div className="blog-tag">Deep Thoughts &amp; Insights</div>
        <h1 className="blog-title">The<br /><em>Notebook.</em></h1>
        <p className="blog-desc">Product marketing, GTM strategy, zero-dollar growth, and everything I&apos;m learning by building in public. No fluff. No generic advice.</p>
      </div>

      <BlogClient posts={posts} />
    </>
  )
}

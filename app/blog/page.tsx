import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import NewsletterForm from '@/components/NewsletterForm'

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

      {/* POSTS */}
      <div className="posts-wrap">
        <div className="posts-header rv">
          <span className="posts-count">{posts.length} {posts.length === 1 ? 'POST' : 'POSTS'}</span>
        </div>

        <div className="posts-grid">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`post-card rv${i === 0 ? ' featured' : ''}`}
              style={{ textDecoration: 'none', color: 'inherit', transitionDelay: `${i * 0.1}s` }}
            >
              <div>
                {i === 0 && <span className="featured-badge">Featured</span>}
                <div className="post-meta">
                  <span className="post-date">{new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  <span className="post-dot2" />
                  <span className="post-tag2">{post.category}</span>
                </div>
                <h2 className="post-title2">{post.title}</h2>
              </div>
              <div>
                <p className="post-excerpt">{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                  <span className="post-read">Read Post →</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming Soon card */}
          <div className="post-card rv" style={{ transitionDelay: `${posts.length * 0.1}s` }}>
            <div className="post-meta">
              <span className="post-date">Coming Soon</span>
              <span className="post-dot2" />
              <span className="post-tag2">Web3 Growth</span>
            </div>
            <h2 className="post-title2" style={{ color: 'rgba(244,240,234,.3)' }}>Next Post Loading...</h2>
            <p className="post-excerpt">Deep thoughts in progress. Check back soon.</p>
            <span className="post-read" style={{ color: 'rgba(244,240,234,.2)', cursor: 'default' }}>Coming Soon</span>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-box rv">
          <div>
            <div className="nl-title2">Get the thinking first.</div>
            <div className="nl-desc2">New posts, GTM breakdowns, and insights, directly to your inbox.</div>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </>
  )
}

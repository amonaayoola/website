'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import NewsletterForm from '@/components/NewsletterForm'

const CATEGORIES = ['All', 'Work', 'Spirituality', 'Family', 'Personal Life', 'Education']

export default function BlogClient({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? posts
    : posts.filter(p => p.category === active)

  return (
    <div className="posts-wrap">
      {/* Category tabs */}
      <div style={{
        display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32,
        borderBottom: '1px solid rgba(244,240,234,.07)', paddingBottom: 20,
      }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '6px 16px',
              borderRadius: 2,
              border: active === cat
                ? '1px solid rgba(200,168,130,.5)'
                : '1px solid rgba(244,240,234,.1)',
              background: active === cat
                ? 'rgba(200,168,130,.08)'
                : 'transparent',
              color: active === cat
                ? 'var(--g)'
                : 'rgba(244,240,234,.34)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all .2s',
            }}
          >
            {cat}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: 11, color: 'rgba(244,240,234,.22)', alignSelf: 'center', letterSpacing: '.06em' }}>
          {filtered.length} {filtered.length === 1 ? 'POST' : 'POSTS'}
        </span>
      </div>

      <div className="posts-grid">
        {filtered.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`post-card${i === 0 && active === 'All' ? ' featured' : ''}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div>
              {i === 0 && active === 'All' && <span className="featured-badge">Featured</span>}
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

        {filtered.length === 0 && (
          <div className="post-card" style={{ gridColumn: '1 / -1' }}>
            <div className="post-meta">
              <span className="post-date">Nothing here yet</span>
            </div>
            <h2 className="post-title2" style={{ color: 'rgba(244,240,234,.3)' }}>Posts in {active} are coming.</h2>
            <p className="post-excerpt">Check back soon.</p>
          </div>
        )}

        {/* Coming Soon card — only show on All tab */}
        {active === 'All' && (
          <div className="post-card">
            <div className="post-meta">
              <span className="post-date">Coming Soon</span>
              <span className="post-dot2" />
              <span className="post-tag2">Web3 Growth</span>
            </div>
            <h2 className="post-title2" style={{ color: 'rgba(244,240,234,.3)' }}>Next Post Loading...</h2>
            <p className="post-excerpt">Deep thoughts in progress. Check back soon.</p>
            <span className="post-read" style={{ color: 'rgba(244,240,234,.2)', cursor: 'default' }}>Coming Soon</span>
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className="newsletter-box">
        <div>
          <div className="nl-title2">Get the thinking first.</div>
          <div className="nl-desc2">New posts, GTM breakdowns, and insights, directly to your inbox.</div>
        </div>
        <NewsletterForm />
      </div>
    </div>
  )
}

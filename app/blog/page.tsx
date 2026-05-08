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
      <section className="blog-header-section" style={{
        padding: '140px 44px 72px',
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        borderBottom: '1px solid rgba(244,240,234,.06)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 60%,rgba(200,168,130,.06),transparent 55%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 20, animation: 'fu .6s .1s both' }}>
            The Notebook
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px,6vw,80px)', fontWeight: 900,
            lineHeight: .9, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 20,
            animation: 'fu .8s .2s both',
          }}>
            Deep thoughts<br /><em style={{ color: 'var(--g)', fontStyle: 'italic' }}>& insights.</em>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.68, color: 'rgba(244,240,234,.44)', maxWidth: 500, animation: 'fu .7s .32s both' }}>
            Product marketing, GTM strategy, zero-dollar growth, and everything I&apos;m learning by building in public. No fluff. No generic advice.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="blog-posts-section" style={{
        background: 'linear-gradient(150deg,#0f0d09,#1c1610 40%,#0a0806)',
        padding: '80px 44px 120px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid rgba(244,240,234,.07)',
          }}>
            <span style={{ fontSize: 12, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} published
            </span>
          </div>

          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: 15, color: 'rgba(244,240,234,.3)', fontWeight: 300 }}>No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="blog-posts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }}>
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={i === 0 ? 'blog-featured' : ''}
                  style={{
                    display: i === 0 ? 'grid' : 'flex',
                    flexDirection: i === 0 ? undefined : 'column',
                    gridTemplateColumns: i === 0 ? '1fr 1fr' : undefined,
                    gap: i === 0 ? 48 : undefined,
                    alignItems: i === 0 ? 'start' : undefined,
                    gridColumn: i === 0 ? '1 / -1' : undefined,
                    background: 'rgba(14,10,7,.6)', border: '1px solid rgba(244,240,234,.07)',
                    padding: 40, transition: 'border-color .4s', position: 'relative', overflow: 'hidden',
                    textDecoration: 'none', color: 'inherit',
                  }}
                >
                  {/* Top gold bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, width: 0, height: 2,
                    background: 'linear-gradient(to right,var(--g),transparent)',
                    transition: 'width .6s cubic-bezier(.16,1,.3,1)',
                  }} />

                  <div>
                    {i === 0 && (
                      <div style={{ display: 'inline-block', fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--bg)', background: 'var(--g)', padding: '3px 10px', marginBottom: 16 }}>Featured</div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>
                        {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                      <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
                      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', opacity: .8 }}>{post.category}</span>
                    </div>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: i === 0 ? 'clamp(22px,3vw,36px)' : 'clamp(18px,2.5vw,26px)',
                      fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.1,
                      color: 'var(--fg)', marginBottom: 14, transition: 'color .3s',
                    }}>{post.title}</h2>
                    <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.4)', marginBottom: 24, flex: 1 }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>
                        Read →
                      </span>
                      <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Second column for featured (empty placeholder for now) */}
                  {i === 0 && <div />}
                </Link>
              ))}
            </div>
          )}

          {/* Newsletter */}
          <div style={{
            background: 'rgba(200,168,130,.04)', border: '1px solid rgba(200,168,130,.1)',
            padding: '52px 44px', marginTop: 72,
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center',
          }} className="newsletter-box">
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px,2.5vw,30px)', fontWeight: 700, color: 'var(--fg)', marginBottom: 8 }}>
                Stay in the loop.
              </div>
              <div style={{ fontSize: 14, color: 'rgba(244,240,234,.38)', fontWeight: 300 }}>
                New posts on GTM, Web3 growth, and building in public. No spam.
              </div>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}

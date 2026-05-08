import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'The Notebook | Amona Ayoola',
  description: 'Product marketing, GTM strategy, zero-dollar growth, and everything I\'m learning by building in public. No fluff. No generic advice.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* HEADER */}
      <section style={{
        padding: '140px 44px 72px',
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        borderBottom: '1px solid rgba(244,240,234,.06)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 60%,rgba(200,168,130,.06),transparent 55%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 20 }}>
            The Notebook
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px,6vw,80px)', fontWeight: 900,
            lineHeight: .9, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 20,
          }}>
            Deep thoughts<br /><em style={{ color: 'var(--g)', fontStyle: 'italic' }}>& insights.</em>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.68, color: 'rgba(244,240,234,.44)', maxWidth: 500 }}>
            Product marketing, GTM strategy, zero-dollar growth, and everything I&apos;m learning by building in public. No fluff. No generic advice.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section style={{
        background: 'linear-gradient(150deg,#0f0d09,#1c1610 40%,#0a0806)',
        padding: '80px 44px 120px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid rgba(244,240,234,.07)',
          }}>
            <div style={{ fontSize: 12, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} published
            </div>
          </div>

          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: 15, color: 'rgba(244,240,234,.3)', fontWeight: 300 }}>No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }}>
              {posts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                  display: 'flex', flexDirection: 'column',
                  background: 'rgba(14,10,7,.6)', border: '1px solid rgba(244,240,234,.07)',
                  padding: 40, transition: 'border-color .4s', position: 'relative', overflow: 'hidden',
                  gridColumn: i === 0 ? '1 / -1' : undefined,
                  textDecoration: 'none', color: 'inherit',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: 2,
                    background: 'linear-gradient(to right,var(--g),transparent)',
                  }} />
                  {i === 0 && (
                    <div style={{ display: 'inline-block', fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--bg)', background: 'var(--g)', padding: '3px 10px', marginBottom: 16 }}>Featured</div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                    <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
                    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', opacity: .8 }}>{post.category}</span>
                    <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)', marginLeft: 'auto' }}>{post.readTime}</span>
                  </div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: i === 0 ? 'clamp(22px,3vw,36px)' : 'clamp(18px,2.5vw,26px)',
                    fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.1,
                    color: 'var(--fg)', marginBottom: 14, transition: 'color .3s',
                  }}>{post.title}</h2>
                  <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.4)', marginBottom: 24, flex: 1 }}>{post.excerpt}</p>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    Read →
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

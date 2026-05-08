import Link from 'next/link'
import { getAllPosts, getPost } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return { title: `${post.title} | The Notebook`, description: post.excerpt }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const nextPost = allPosts[currentIndex + 1] || null

  return (
    <>
      {/* HERO */}
      <section style={{
        padding: '130px 44px 72px',
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        borderBottom: '1px solid rgba(244,240,234,.06)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 25% 55%,rgba(200,168,130,.06),transparent 55%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>← The Notebook</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>{post.category}</span>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>{post.readTime}</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px,5.5vw,72px)', fontWeight: 900, lineHeight: .92,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 28, maxWidth: 760,
          }}
            dangerouslySetInnerHTML={{ __html: post.title.replace(/\*(.*?)\*/g, '<em style="color:var(--g);font-style:italic">$1</em>') }}
          />
          <div style={{
            fontSize: 18, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.55)',
            maxWidth: 620, borderLeft: '2px solid var(--g)', paddingLeft: 24,
          }}>
            {post.excerpt}
          </div>
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: 680, margin: '0 auto', padding: '72px 44px 120px' }}>
        <style>{`
          .post-content h2 { font-family: 'Playfair Display', serif; font-size: clamp(22px,3vw,34px); font-weight: 700; letter-spacing: -.03em; line-height: 1.1; color: var(--fg); margin: 56px 0 20px; }
          .post-content p { font-size: 17px; font-weight: 300; line-height: 1.84; color: rgba(244,240,234,.58); margin-bottom: 22px; }
          .post-content p strong { color: var(--fg); font-weight: 500; }
          .post-content p em { font-style: italic; color: rgba(244,240,234,.72); }
          .post-content blockquote { border-left: 2px solid var(--g); padding: 20px 28px; margin: 40px 0; background: rgba(200,168,130,.04); }
          .post-content blockquote p { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(16px,2.2vw,22px); color: rgba(244,240,234,.68); line-height: 1.55; margin: 0; }
          .post-content ul, .post-content ol { padding-left: 24px; margin-bottom: 22px; }
          .post-content li { font-size: 17px; font-weight: 300; line-height: 1.84; color: rgba(244,240,234,.58); margin-bottom: 8px; }
          .post-content a { color: var(--g); text-decoration: underline; }
        `}</style>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div style={{ width: 40, height: 1, background: 'var(--g)', opacity: .4, margin: '48px 0' }} />

        <div style={{ borderTop: '1px solid rgba(244,240,234,.08)', marginTop: 72, paddingTop: 40 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>Amona Ayoola</div>
          <div style={{ fontSize: 11, color: 'var(--g)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>Web3 Marketer · GTM Strategist</div>
          <div style={{ fontSize: 14, color: 'rgba(244,240,234,.36)', fontWeight: 300, lineHeight: 1.65 }}>
            Six years building GTM strategies and communities inside Web3. Writing about what actually works.
          </div>
        </div>

        {nextPost && (
          <Link href={`/blog/${nextPost.slug}`} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
            flexWrap: 'wrap', background: 'rgba(14,10,7,.6)', border: '1px solid rgba(244,240,234,.07)',
            padding: 36, marginTop: 48, transition: 'border-color .3s', color: 'inherit',
          }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(244,240,234,.24)', marginBottom: 8 }}>Next Post</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'rgba(244,240,234,.5)' }}>{nextPost.title}</div>
            </div>
            <div style={{ fontSize: 24, color: 'var(--g)', flexShrink: 0 }}>→</div>
          </Link>
        )}
      </article>
    </>
  )
}

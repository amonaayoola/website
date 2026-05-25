import Link from 'next/link'

export const metadata = {
  title: 'Caught Between a Job, Three Products, and a Brand I\'m Still Building | The Notebook',
  description: 'Most people pick one thing. I haven\'t. Here is what it actually looks like to hold a job, build products, market them, and build a personal brand at the same time.',
}

export default function CaughtBetweenPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '56vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '120px 44px 72px',
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 65%,rgba(200,168,130,.07),transparent 55%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>← The Notebook</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>May 12, 2026</span>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>Work</span>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>5 min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px,6vw,80px)', fontWeight: 900, lineHeight: .9,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 32, maxWidth: 820,
          }}>
            Caught Between a Job,<br />
            Three Products,<br />
            and a Brand I&apos;m{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Still Building.</em>
          </h1>
          <div style={{
            fontSize: 18, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.5)',
            maxWidth: 580, borderLeft: '2px solid var(--g)', paddingLeft: 24,
          }}>
            Most people pick one thing. I haven&apos;t. Here is what it actually looks like to hold a job, build products, market them, and build a personal brand at the same time.
          </div>
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: 740, margin: '0 auto', padding: '88px 44px 128px' }}>

        <Body>Most people who tell you to &ldquo;focus on one thing&rdquo; have never had rent to pay while trying to build something from scratch. I have. So I didn&apos;t pick one thing. I picked all of them. And I&apos;m figuring out what that costs.</Body>
        <Body>Right now I hold a job. I&apos;m also building products. I&apos;m marketing those products. And I&apos;m building a personal brand while doing all three. Not sequentially. All at once. Every week.</Body>
        <Body style={{ fontStyle: 'italic', color: 'rgba(244,240,234,.38)', fontSize: 15 }}>This is not a motivational post. This is an honest one.</Body>

        <Section num="01" title={<>The job is not<br />the <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>enemy.</em></>}>
          <Body>The first thing people say when they find out you have a job and you&apos;re building: &ldquo;when are you going to quit?&rdquo;</Body>
          <Body>That question misunderstands what the job actually is. The job is infrastructure. It pays for the server costs, the domain, the tools, the headspace that comes from not worrying about how you&apos;re eating this month. Without it, I&apos;m not building slower. I&apos;m probably not building at all.</Body>
          <Body>The trap is not having a job. The trap is letting the job become an excuse. &ldquo;I would build more if I didn&apos;t have this job.&rdquo; No. You would find another reason. I&apos;ve seen people with full time to build who ship nothing for years.</Body>
          <Pull>The job is not what&apos;s slowing you down. Your relationship with the hours outside of it is.</Pull>
        </Section>

        <Section num="02" title={<>Building is easy.<br />Marketing it is <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>the hard part.</em></>}>
          <Body>I build things. That part I understand. The problem is that a product nobody knows about is just a project. And turning a project into something people talk about requires a completely different skill set than building it.</Body>
          <Body>Marketing a product you built yourself is uncomfortable in a specific way. You know every flaw. You know every shortcut you took. You know it isn&apos;t finished. And you have to stand in front of people and say it matters anyway.</Body>
          <Body>That discomfort is not a sign to wait. It&apos;s the work.</Body>
          <Pull>The builders who grow fast are not the ones who build the best product. They&apos;re the ones who learn to market before they feel ready.</Pull>
          <Body>I learned this the hard way. I built things in silence and waited for them to be &ldquo;good enough&rdquo; to talk about. They never felt good enough. And the silence cost me. People need to know something exists before they can care about it.</Body>
        </Section>

        <Section num="03" title={<>The brand is the work<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>made visible.</em></>}>
          <Body>A personal brand sounds like something you manufacture. A curated feed, a content calendar, a strategy. That&apos;s not what I&apos;m doing.</Body>
          <Body>What I&apos;m doing is building in public. Every product I&apos;m working on, every lesson I&apos;m learning, every mistake I&apos;m making: I&apos;m making it visible. Not because it&apos;s a marketing strategy. Because the people who end up caring about what I build need to understand how I think first.</Body>
          <Body>The brand is not separate from the job, the products, or the marketing. It&apos;s the connective tissue between all of them.</Body>
          <Pull>When someone reads what I write, watches what I build, follows how I think, and then sees a product I launch, they don&apos;t need convincing. They were already there.</Pull>
        </Section>

        <Section num="04" title={<>What it<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>actually costs.</em></>}>
          <Body>Holding all four at once means something is always underfed. There are weeks where the job takes everything and the products sit still. Weeks where I&apos;m deep in a launch and the brand goes quiet. Weeks where I&apos;m writing and building and neither feels like enough.</Body>
          <Body>The cost is not time. Time is fixed. The cost is attention. Every context switch is expensive. Every hour I spend in someone else&apos;s priority is an hour I&apos;m not in mine.</Body>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, margin: '36px 0' }}>
            {[
              { label: 'The System', desc: 'Protect mornings. The first two hours of the day belong to the work that compounds, not the inbox.' },
              { label: 'The Batch', desc: 'Marketing goes in sprints. One day of content creation covers a week of distribution.' },
              { label: 'The Write', desc: 'Write when the thought is hot, not when the calendar says to. Scheduled inspiration is dead inspiration.' },
              { label: 'The Mindset', desc: '"Behind" is a feeling, not a fact. The work is compounding even when it doesn\'t look like it.' },
            ].map(b => (
              <div key={b.label} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 28 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--g)', marginBottom: 10 }}>{b.label}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.42)', lineHeight: 1.72 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section num="05" title={<>One more thing<br />I just <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>decided.</em></>}>
          <Body>I&apos;m adding video editing to the list.</Body>
          <Body>Not because I needed something else to do. Because I keep watching the builders who move the fastest and they all have one thing in common: they can tell their own story across every medium. Text. Video. Design. They don&apos;t outsource the narrative.</Body>
          <Body>So I&apos;m learning. From scratch. I have no idea what I&apos;m doing yet, and I&apos;m going to share everything along the way. The bad cuts, the exports that didn&apos;t render, the moment it finally starts to click. All of it.</Body>
          <Pull>A new skill feels like chaos before it feels like leverage. I&apos;m in the chaos part. Follow along.</Pull>
        </Section>

        <Section num="06" title={<>Why I&apos;m<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>not stopping.</em></>}>
          <Body>Because the alternative is worse.</Body>
          <Body>The version of my life where I only have the job is a version where I&apos;m building someone else&apos;s vision with all of my best hours and hoping they reward me for it. I&apos;ve seen where that ends.</Body>
          <Body>The version where I only build and have no income is a version where survival pressure makes every decision desperate. I&apos;ve seen where that ends too.</Body>
          <Body>So I hold all of it. It&apos;s uncomfortable. It&apos;s messy. Some weeks it doesn&apos;t look like progress. But I&apos;m compounding. Slowly. Publicly. In the direction I chose.</Body>
          <Pull>That&apos;s enough for now.</Pull>
        </Section>

        {/* Author */}
        <div style={{ borderTop: '1px solid rgba(244,240,234,.08)', marginTop: 80, paddingTop: 40 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>Amona Ayoola</div>
          <div style={{ fontSize: 11, color: 'var(--g)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>Builder · Product Marketer · CMO</div>
          <div style={{ fontSize: 14, color: 'rgba(244,240,234,.36)', fontWeight: 300, lineHeight: 1.65 }}>
            Holding a job, building products, and figuring it out in public.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(244,240,234,.06)', flexWrap: 'wrap', gap: 16 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(244,240,234,.14)', color: 'rgba(244,240,234,.5)', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '12px 24px' }}>← The Notebook</Link>
        </div>
      </article>
    </>
  )
}

function Section({ num, title, children }: { num: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        {num}
        <div style={{ flex: 1, height: 1, background: 'rgba(200,168,130,.2)' }} />
      </div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px,3.8vw,44px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.02, color: 'var(--fg)', marginBottom: 24 }}>{title}</h2>
      {children}
    </div>
  )
}

function Body({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.84, color: 'rgba(244,240,234,.56)', marginBottom: 20, ...style }}>{children}</p>
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid var(--g)', padding: '22px 32px', margin: '36px 0', background: 'rgba(200,168,130,.04)' }}>
      <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(17px,2.4vw,26px)', color: 'rgba(244,240,234,.7)', lineHeight: 1.52, margin: 0 }}>{children}</p>
    </div>
  )
}

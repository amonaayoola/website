import Link from 'next/link'

export const metadata = {
  title: "Greatness Takes Time (And It's Driving Me Insane) | The Notebook",
  description: 'Nobody tells you about the waiting.',
}

export default function GreatnessPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '56vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '120px 44px 72px',
        background: 'linear-gradient(160deg,#080608,#10080e 40%,#070508)',
        position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 70%,rgba(200,168,130,.06),transparent 58%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>← The Notebook</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>June 1, 2026</span>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>Personal Life</span>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>3 min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px,6vw,80px)', fontWeight: 900, lineHeight: .9,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 32, maxWidth: 740,
          }}>
            Greatness<br />Takes{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Time.</em>
          </h1>
          <div style={{
            fontSize: 18, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.5)',
            maxWidth: 560, borderLeft: '2px solid var(--g)', paddingLeft: 24,
          }}>
            Nobody tells you about the waiting.
          </div>
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: 740, margin: '0 auto', padding: '88px 44px 128px' }}>

        <Section num="01" title={<>The part they<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>never talk about.</em></>}>
          <Body>I have done the work. I have poured myself into the things I am building. And now I am in the part they never talk about.</Body>
          <Pull>The part where you wait while the world moves at its own pace and does not care about your timeline or your feelings or how badly you need a sign that you are on the right path.</Pull>
          <Body style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: 'rgba(244,240,234,.72)', fontStyle: 'italic' }}>This is the hardest place I have ever been.</Body>
        </Section>

        <Section num="02" title={<>The loneliness<br />of <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>building early.</em></>}>
          <Body>There is a specific kind of loneliness in building something before the world is ready to see it. You cannot explain it to people who are not in it. You just carry it.</Body>
          <Body>Some mornings you wake up fired up and certain. Other mornings the doubt sits on your chest before you have even opened your eyes. Every day without a signal feels like evidence you were wrong. Every week without a breakthrough chips away at your confidence, and you start to question everything.</Body>
          <Pull>The idea. The timing. Yourself.</Pull>
        </Section>

        <Section num="03" title={<>Knowing it<br />versus <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>living it.</em></>}>
          <Body>Greatness takes time. I know this. I have always known this.</Body>
          <Body>But knowing something in your head and actually living it in your body, in your nervous system, in the silence of a Tuesday afternoon with nothing to show yet, are completely different things.</Body>
          <Pull>The gap between knowing and living is where most people quit. I am trying not to be one of them.</Pull>
        </Section>

        <Section num="04" title={<>Two things<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>at once.</em></>}>
          <Body>I am learning to hold two things at once right now. The deep certainty that what I am building matters. And the very real discomfort of not being able to rush it.</Body>
          <Body>The seeds are in the ground. The work is done. Now comes the part that separates the people who actually build something from the people who almost did.</Body>
          <Pull>The waiting. The trusting. The choosing not to quit on a slow Tuesday.</Pull>
          <Body>I am still figuring it out. But I am still here.</Body>
        </Section>

        {/* Author */}
        <div style={{ borderTop: '1px solid rgba(244,240,234,.08)', marginTop: 80, paddingTop: 40 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>Amona Ayoola</div>
          <div style={{ fontSize: 11, color: 'var(--g)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>Builder · Believer</div>
          <div style={{ fontSize: 14, color: 'rgba(244,240,234,.36)', fontWeight: 300, lineHeight: 1.65 }}>
            Writing about faith, work, and what it costs to build in public.
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

import Link from 'next/link'

export const metadata = {
  title: 'Validations | The Notebook',
  description: 'Say something. And when no one does, keep going anyway.',
}

export default function ValidationsPage() {
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 40%,rgba(200,168,130,.06),transparent 58%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>← The Notebook</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>July 7, 2026</span>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>Personal Life</span>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>3 min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px,6vw,80px)', fontWeight: 900, lineHeight: .9,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 32, maxWidth: 740,
          }}>
            Validations.
          </h1>
          <div style={{
            fontSize: 18, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.5)',
            maxWidth: 560, borderLeft: '2px solid var(--g)', paddingLeft: 24,
          }}>
            Say something. And when no one does, keep going anyway.
          </div>
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: 740, margin: '0 auto', padding: '88px 44px 128px' }}>

        <Section num="01" title={<>A small act<br />of <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>acknowledgment.</em></>}>
          <Body>A friend reached out to me this evening. She had read my last note and came to encourage me, and to be honest, it felt really, really good.</Body>
          <Body>That is the part I want to start with, because I think it is easy to underestimate what a small act of acknowledgment does to a person who is building in public, creating consistently, putting real thought and energy into work that goes out into the world without any guarantee of a return.</Body>
          <Pull>It does a lot. More than most people realize.</Pull>
        </Section>

        <Section num="02" title={<>It costs you<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>almost nothing.</em></>}>
          <Body>There is a version of encouragement that costs you almost nothing. A message. A voice note. A reply. An &ldquo;I read this and it stayed with me.&rdquo;</Body>
          <Body>And to the person on the other end, especially the one quietly showing up week after week without much signal that anyone is paying attention, that small thing can be the thing that keeps them going.</Body>
          <Pull>If you have been meaning to reach out to someone whose work you appreciate, do it tonight. Do not wait for a better moment or a more articulate thing to say. Just say something.</Pull>
          <Body>People are out here building and creating and wondering if any of it is landing, and your voice could be the one that answers that question for them.</Body>
        </Section>

        <Section num="03" title={<>If you are<br />the one <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>building.</em></>}>
          <Body>If you are the one building, and the messages do not come, and the silence stretches longer than you expected, and you start to wonder if you should just stop, I want to say something directly to you.</Body>
          <Body style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: 'rgba(244,240,234,.72)', fontStyle: 'italic' }}>Do not stop.</Body>
          <Body>The absence of validation is not evidence that the work is wrong. Some of the most important things ever built were ignored for a very long time before the world caught up.</Body>
          <Pull>Your timeline and the world&apos;s response are not always going to line up. That is a hard truth to sit with. But it is still the truth.</Pull>
        </Section>

        <Section num="04" title={<>The work is<br />still <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>real.</em></>}>
          <Body>Keep creating. Keep showing up. The work is not less real because no one said so yet.</Body>
          <Body>To everyone who reads what I put out and reaches out: thank you, genuinely, more than you probably know.</Body>
          <Pull>And to everyone quietly building with no applause: keep going. The journey is still far, and that is not a warning. It is just the truth.</Pull>
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

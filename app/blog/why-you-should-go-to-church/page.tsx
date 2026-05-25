import Link from 'next/link'

export const metadata = {
  title: 'The Coal and the Fire: Why You Cannot Afford to Skip Church | The Notebook',
  description: 'A coal removed from its fire does not just cool down. It dies. This is what the Holy Spirit showed me about the gathering of believers.',
}

export default function WhyChurchPage() {
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%,rgba(200,168,130,.06),transparent 58%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>← The Notebook</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>May 10, 2026</span>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>Spirituality</span>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>4 min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px,6vw,80px)', fontWeight: 900, lineHeight: .9,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 32, maxWidth: 740,
          }}>
            The Coal<br />and the{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Fire.</em>
          </h1>
          <div style={{
            fontSize: 18, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.5)',
            maxWidth: 560, borderLeft: '2px solid var(--g)', paddingLeft: 24,
          }}>
            A coal removed from its fire does not just cool down. It dies. This is what the Holy Spirit showed me about the gathering of believers.
          </div>
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: 740, margin: '0 auto', padding: '88px 44px 128px' }}>

        <Section num="01" title={<>A coal in a pot.<br />A coal <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>alone.</em></>}>
          <Body>Put a coal in a pot with other burning coals. It burns. Pour water on it. It struggles, dims, may even seem to go out. But the heat around it pulls it back.</Body>
          <Body>Now take that same coal out. Set it alone on the ground. Pour water on it.</Body>
          <Body style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: 'rgba(244,240,234,.72)', fontStyle: 'italic' }}>It dies.</Body>
          <Body>Same coal. Same water. Completely different outcome, because of what was around it.</Body>
          <Body>That is the picture the Holy Spirit gave me about the gathering of believers. And once you see it, it is hard to unsee.</Body>
        </Section>

        <Section num="02" title={<>The gathering was<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>never optional.</em></>}>
          <Body>There is a growing trend of people who love God but have quietly walked away from church. Some were hurt there. Some grew disillusioned. Some convinced themselves that private devotion was enough.</Body>
          <Body style={{ fontWeight: 500, color: 'rgba(244,240,234,.72)' }}>It is not enough.</Body>
          <Body>Hebrews 10:24-25 is direct: <em>&ldquo;Not giving up meeting together, as some are in the habit of doing, but encouraging one another, and all the more as you see the Day approaching.&rdquo;</em></Body>
          <Body>That instruction was written to people facing persecution. People with real reasons to stay home. The instruction did not soften. It got more urgent.</Body>
          <Pull>The gathering is not a supplement to your faith. It is load-bearing infrastructure.</Pull>
          <Body>Acts 2:42 shows what the early church devoted themselves to: teaching, fellowship, breaking of bread, prayer. Not three of those. All four. Fellowship was not the optional one.</Body>
        </Section>

        <Section num="03" title={<>The fire around you<br />is doing more than <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>you know.</em></>}>
          <Body>Matthew 18:20: <em>&ldquo;For where two or three gather in my name, there am I with them.&rdquo;</em></Body>
          <Body>There is a dimension of God&apos;s presence that is only accessible in the gathering. You cannot stream it. You cannot replicate it alone. Some encounters with God are reserved for when his people are together.</Body>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, margin: '36px 0' }}>
            {[
              { ref: 'Hebrews 10:25', truth: 'Do not give up meeting together. The urgency increases as the Day approaches.' },
              { ref: 'Acts 2:42', truth: 'The early church devoted themselves to fellowship. It was not optional. It was the structure.' },
              { ref: 'Matthew 18:20', truth: 'There is a presence of God that only shows up in the gathering. You cannot access it alone.' },
              { ref: 'Ecclesiastes 4:10', truth: 'If either of them falls down, one can help the other up. Pity anyone who falls with no one beside them.' },
            ].map(b => (
              <div key={b.ref} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 28 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: 'var(--g)', marginBottom: 12, fontStyle: 'italic' }}>{b.ref}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.44)', lineHeight: 1.72 }}>{b.truth}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section num="04" title={<>The water<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>is coming.</em></>}>
          <Body>You may feel fine right now. Your coal is burning. You do not feel the need.</Body>
          <Body>The question is not how you feel today. The question is what happens when the water comes, and it comes for everyone. Grief. Loss. A season where God feels distant. An attack you did not see coming.</Body>
          <Body>When that moment arrives, you will either have fire around you or you will not. You will either have people burning hot enough to revive you, or you will have cold ground.</Body>
          <Pull>Do not wait until you are going cold to discover that you have no coals beside you.</Pull>
          <Body>Proverbs 27:17: <em>&ldquo;As iron sharpens iron, so one person sharpens another.&rdquo;</em></Body>
          <Body>The sharpening only happens in proximity.</Body>
        </Section>

        <Section num="05" title={<><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Go.</em></>}>
          <Body>Not because the building is sacred. Not because a pastor told you to. Not out of obligation or routine.</Body>
          <Body>Go because you are a coal. Go because you were made to burn in community. Go because the fire around you is not separate from your fire. It is the same fire.</Body>
          <Pull>And the day the water comes, you will be grateful you stayed in the pot.</Pull>
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

import Link from 'next/link'

export const metadata = {
  title: 'What Exactly Do I Do at Nirvana and Blockfest? | The Notebook',
  description: 'I build things, I secure partnerships, and I make sure events actually work when the day comes. Here is the long version.',
}

export default function NirvanaBlockfestPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '56vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '120px 44px 72px',
        background: 'linear-gradient(160deg,#0a0d08,#10140a 40%,#080b06)',
        position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%,rgba(168,200,130,.04),transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 70%,rgba(200,168,130,.05),transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>← The Notebook</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>May 29, 2026</span>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>Work</span>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>5 min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(34px,5.5vw,78px)', fontWeight: 900, lineHeight: .9,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 32, maxWidth: 820,
          }}>
            What Exactly Do I Do<br />at Nirvana and{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Blockfest?</em>
          </h1>
          <div style={{
            fontSize: 18, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.5)',
            maxWidth: 580, borderLeft: '2px solid var(--g)', paddingLeft: 24,
          }}>
            Good question. I get asked this a lot, and I never quite give a clean answer in person. So here it is, written out properly.
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 40 }}>
            {[
              { label: 'Role', val: 'Partnerships & Growth' },
              { label: 'Events', val: 'Blockfest Lagos + Cape Town' },
              { label: 'Academy', val: 'Nirvana Academy' },
              { label: 'Spaces listeners', val: '10,000+' },
            ].map(m => (
              <div key={m.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(244,240,234,.28)' }}>{m.label}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: 740, margin: '0 auto', padding: '88px 44px 128px' }}>

        <Body>The short version: I build things, I secure partnerships, and I make sure events actually work when the day comes. The long version is everything below.</Body>

        <Section num="01" title={<>Blockfest Lagos.<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Where it started.</em></>}>
          <Body>Blockfest Lagos was where it started for me.</Body>
          <Body>I came in on the partnerships side, working on both brand partnerships and community partnerships for the event. That means conversations, negotiations, follow-ups, and making sure the right organizations were attached to the right stage at the right time.</Body>
          <Pull>It is quieter work than it sounds. And it matters more than most people realize.</Pull>
          <Body>On event day, I moved into operations. I worked with the programs team to manage the ground experience, from check-in all the way through to making sure every guest was properly received and taken care of. The first thing a person feels when they walk into an event tells them everything about how much the organizers care. I made sure that feeling was the right one.</Body>
        </Section>

        <Section num="02" title={<>Blockfest Cape Town.<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>A bigger lift.</em></>}>
          <Body>Cape Town was a bigger lift, and my role reflected that.</Body>
          <Body>I led community partnerships for the South Africa edition, and alongside my team, we brought in nearly all of the community partnerships for the event.</Body>
          <Pull>Community partnerships are not just logo placements. They determine who shows up, who feels like the event was made for them, and how far the ripple travels after everything wraps.</Pull>
          <Body>I also supported the programs team in securing speakers for the event. The right voices in the room shape everything. I helped make sure we had them.</Body>
        </Section>

        <Section num="03" title={<>Nirvana Academy.<br />Building from <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>the ground up.</em></>}>
          <Body>My work at Nirvana has been less about executing tasks and more about building something from scratch.</Body>

          <div style={{ margin: '36px 0' }}>
            {[
              { phase: 'The Events', title: 'NVS 1, NVS 2, and OG Labs', desc: 'Alongside my team, I have co-organized three major events for Nirvana. Each one has been a marker of where Nirvana is going, not just what Nirvana can do today.' },
              { phase: 'The Partnership', title: 'OG Labs', desc: 'One I am proud of. It did not happen by accident. It happened because someone put in the relationship work, and I was part of that.' },
              { phase: 'The Structure', title: 'Internal organization', desc: 'This one is harder to put on a flyer, but it might be the most important thing I have done at Nirvana. Putting the right people in the right places and building a team that is actively delivering results. A functioning team is not a given in early-stage organizations. It is built deliberately.' },
              { phase: 'The Community', title: '3,000 in one Space. 10,000+ across our last few.', desc: 'Community growth has been a core part of what I do. We hit close to 3,000 listeners in a single Space session, and across our last few we have crossed 10,000. The numbers are moving, and there is more in the pipeline.' },
            ].map(p => (
              <div key={p.phase} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 24, padding: '28px 0', borderTop: '1px solid rgba(244,240,234,.08)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', paddingTop: 3 }}>{p.phase}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--fg)', marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(244,240,234,.44)', lineHeight: 1.72 }}>{p.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(244,240,234,.08)' }} />
          </div>
        </Section>

        <Section num="04" title={<>So, what do<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>I actually do?</em></>}>
          <Body>I build partnerships, run operations, grow communities, and help organizations show up the way they are supposed to.</Body>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, margin: '36px 0' }}>
            {[
              { label: 'Partnerships', desc: 'Brand and community. Securing the right names, the right stages, the right relationships at the right time.' },
              { label: 'Operations', desc: 'Making sure the day actually works. From check-in to closing. The experience people walk away with.' },
              { label: 'Community', desc: 'Growing the rooms, filling the Spaces, building the audience that shows up because they genuinely want to be there.' },
              { label: 'Structure', desc: 'Building the team and internal systems that make everything else possible. The work nobody posts about.' },
            ].map(b => (
              <div key={b.label} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 28 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--g)', marginBottom: 10 }}>{b.label}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.42)', lineHeight: 1.72 }}>{b.desc}</div>
              </div>
            ))}
          </div>

          <Pull>That is what I do at Nirvana and Blockfest. Now you know.</Pull>
        </Section>

        {/* Author */}
        <div style={{ borderTop: '1px solid rgba(244,240,234,.08)', marginTop: 80, paddingTop: 40 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>Amona Ayoola</div>
          <div style={{ fontSize: 11, color: 'var(--g)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>Partnerships · Growth</div>
          <div style={{ fontSize: 14, color: 'rgba(244,240,234,.36)', fontWeight: 300, lineHeight: 1.65 }}>
            Building in public. Writing about what the work actually looks like.
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

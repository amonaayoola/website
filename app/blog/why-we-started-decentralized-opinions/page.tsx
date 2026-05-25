import Link from 'next/link'

export const metadata = {
  title: 'Why We Started Decentralized Opinions | The Notebook',
  description: 'Crypto was moving. Money was moving. And millions of young people across Africa were watching it happen with no idea how to get in. So we built the door.',
}

export default function DecentralizedOpinionsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '120px 44px 72px',
        background: 'linear-gradient(160deg,#06080d,#080e14 40%,#050810)',
        position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 55%,rgba(130,168,200,.05),transparent 58%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 70%,rgba(200,168,130,.05),transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>← The Notebook</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>May 25, 2026</span>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>Work</span>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>6 min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px,6vw,84px)', fontWeight: 900, lineHeight: .88,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 32, maxWidth: 860,
          }}>
            Decentralized<br />
            <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Opinions.</em>
          </h1>
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 28 }}>Where the everyday person meets crypto</div>
          <div style={{
            fontSize: 18, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.5)',
            maxWidth: 580, borderLeft: '2px solid var(--g)', paddingLeft: 24,
          }}>
            Crypto was moving. Money was moving. And millions of young people across Africa were watching it happen with no idea how to get in. So we built the door.
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 40 }}>
            {[
              { label: 'Hosts', val: 'Me & OhJay' },
              { label: 'Format', val: 'Podcast + Video' },
              { label: 'Focus', val: 'Nigeria & Africa' },
              { label: 'Sub-show', val: 'Table Manners' },
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

        <Section num="01" title={<>The problem we<br />kept <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>seeing everywhere.</em></>}>
          <Body>Crypto was moving. Money was moving. People were building real things, making real income, changing their lives inside this space. And on the other side of that wall, millions of young people, especially in Nigeria, especially across Africa, were watching it happen with no idea how to get in.</Body>
          <Body>Not because they were not smart enough. Not because the opportunity was not real. But because nobody was talking to them in a way that made sense.</Body>
          <Body>Most crypto content is made by insiders, for insiders. It assumes you already know the language. It jumps straight into the technical details, the jargon, the metrics. It talks to people who are already in and leaves everyone else feeling like the door is closed.</Body>
          <Pull>I know what it feels like to be on the outside of something and not know how to walk in. I know how much one real conversation with someone who has done it can change everything.</Pull>
          <Body>That is what Decentralized Opinions is.</Body>
        </Section>

        <Section num="02" title={<>Not a lecture.<br />A <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>door.</em></>}>
          <Body>Decentralized Opinions is a podcast and video show. But the way I think about it, it is a door.</Body>
          <Body>OhJay and I bring the everyday person into the Web3 space, not through tutorials, not through technical explainers, but through the lived stories of the people already inside it. The founders who built something from nothing. The creators who figured out how to turn their presence into income. The builders who saw an opportunity in Africa that the rest of the world had not found yet.</Body>
          <Body>We sit them down and let them talk. Their come-up. Their failures. The things that broke. The moments they almost quit. The processes and systems they built. The strategies that worked and the ones that cost them.</Body>
          <Pull>A chart does not change someone&apos;s mind. Seeing a real person who looks like you, who came from where you came from, who had the same doubts, and who made it work anyway, that is what changes someone&apos;s mind.</Pull>
          <Body>We also sit down with the founders and teams building the products shaping the African and Nigerian Web3 ecosystem. Nigeria has some of the most innovative builders on the continent. They deserve a platform that takes them seriously and an audience that actually wants to hear what they are building.</Body>
        </Section>

        <Section num="03" title={<>Why OhJay and I<br />built this <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>together.</em></>}>
          <Body>OhJay is the Creative Director of Decentralized Opinions and the founder of BH Labs. He handles the production, the post-production editing, and the creative direction that gives the show its identity. I handle the content strategy, the marketing angle, and the on-chain perspective.</Body>
          <Body>Together we bring something a solo show never could.</Body>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, margin: '36px 0' }}>
            {[
              { name: 'Me', role: 'Host & Content Strategist', desc: 'Content strategy, marketing, and the on-chain perspective. The vision behind why the show exists and who it is for.' },
              { name: 'OhJay', role: 'Creative Director, BH Labs', desc: 'Production, post-production editing, and the creative identity that makes Decentralized Opinions look and sound like nothing else.' },
            ].map(b => (
              <div key={b.name} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 28 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: 'var(--fg)', marginBottom: 6 }}>{b.name}</div>
                <div style={{ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 14 }}>{b.role}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.42)', lineHeight: 1.72 }}>{b.desc}</div>
              </div>
            ))}
          </div>

          <Body>We built this because we felt the gap ourselves. We are inside this space. We know what it takes to navigate it. And we know how different it would have been if we had found a show like this when we were starting out. So we made it.</Body>
        </Section>

        <Section num="04" title={<>What makes this<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>different.</em></>}>
          <Body>There are a lot of crypto podcasts. I want to be honest about that.</Body>
          <Body>But most of them are not doing what OhJay and I are doing. Most of them are market commentary. Most of them are technical explainers. Most of them are made for people who are already deep in the space. We are not competing with those shows. We are filling a different space entirely.</Body>

          <div style={{ margin: '36px 0' }}>
            {[
              { label: 'What they do', desc: 'Market commentary, price predictions, technical explainers. Content for people already inside the space.' },
              { label: 'What we do', desc: 'Lived stories, full journeys, real failures. Content that makes someone on the outside feel like the door is open for them too. That is the gap OhJay and I are filling.' },
            ].map(p => (
              <div key={p.label} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '28px 0', borderTop: '1px solid rgba(244,240,234,.08)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', paddingTop: 3 }}>{p.label}</div>
                <div style={{ fontSize: 15, fontWeight: 300, color: 'rgba(244,240,234,.5)', lineHeight: 1.72 }}>{p.desc}</div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(244,240,234,.08)' }} />
          </div>

          <Pull>Decentralized Opinions exists at the intersection of storytelling and Web3. It is the show that turns watching into doing.</Pull>
        </Section>

        <Section num="05" title={<>Table Manners.<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Season one is coming.</em></>}>
          <Body>Beyond the main show, OhJay and I are building something completely different from anything being done in the Nigerian Web3 space right now.</Body>
          <Body>The concept is simple. We bring together six to eight of Nigeria&apos;s most influential Web3 creators, founders, and builders. We put them at one table. We give them a full Nigerian fine dining experience prepared by a private chef. And we let the conversation run.</Body>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, margin: '32px 0' }}>
            {[
              { val: 'No script', sub: 'Unfiltered, unrehearsed.' },
              { val: 'No panel', sub: 'Every guest asks every other guest.' },
              { val: 'No host Q&A', sub: 'Cross-directional. Raw. Real.' },
            ].map(m => (
              <div key={m.val} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 24, textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--g)', marginBottom: 8 }}>{m.val}</div>
                <div style={{ fontSize: 12, color: 'rgba(244,240,234,.36)', lineHeight: 1.5, fontWeight: 300 }}>{m.sub}</div>
              </div>
            ))}
          </div>

          <Body>The things their communities have always wanted to know but never had the format to ask. The stories that have never been told because nobody has put these people in a room together and given them the space to tell them.</Body>
          <Pull>The format is built to produce content that feels like nothing else. The kind of conversation that creates moments people share and talk about for weeks.</Pull>
        </Section>

        <Section num="06" title={<>Who this<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>is for.</em></>}>
          <Body>Decentralized Opinions is for young people who are figuring it out. The person who is looking for a real source of income outside of traditional employment. The person switching careers who wants to know if Web3 has a place for them. The person starting from zero with no background in crypto who needs to see someone like them succeed first before they believe they can.</Body>
          <Body>This show is specifically for that person in Nigeria and across Africa, where the hustle is most real, the opportunity is most significant, and the mainstream crypto media still pays the least attention.</Body>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, margin: '36px 0' }}>
            {[
              { label: 'The Curious', desc: 'Has heard about Web3 but never found an entry point that felt real. Needs to see a face that looks like theirs first.' },
              { label: 'The Switcher', desc: 'Leaving traditional employment or career paths. Wants to know if this space has room for someone starting fresh.' },
              { label: 'The Builder', desc: 'Already inside the space. Wants perspective beyond their own corner, and the full stories behind the names they follow.' },
              { label: 'The Skeptic', desc: 'Has seen the hype before. Needs honesty. Wants the failures alongside the wins before they take a single step.' },
            ].map(b => (
              <div key={b.label} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 28 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--g)', marginBottom: 10 }}>{b.label}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.42)', lineHeight: 1.72 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section num="07" title={<>The goal is not<br />the biggest. It&apos;s the <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>most trusted.</em></>}>
          <Body>I want Decentralized Opinions to become the most trusted Web3 media brand in Africa. Not the biggest. The most trusted.</Body>
          <Body>There is a difference. The biggest show gets numbers. The most trusted show changes what people do. And what OhJay and I are building is a show that changes what people do.</Body>

          <div style={{ margin: '36px 0' }}>
            {[
              { phase: 'Near term', title: 'Table Manners Season One drops', desc: 'Establishes the format. The main show grows through the stories I tell. I want to build a community that enters the space because of what they saw on DO.' },
              { phase: 'Medium term', title: 'Pan-African expansion', desc: 'Beyond Nigeria to the rest of the continent. The same audience exists. The same gap is waiting to be filled.' },
              { phase: 'Long term', title: 'The reference point', desc: 'DO becomes the show that a generation points to when someone asks them how they found out about Web3. Not just content. A reference point for how a generation entered a new economy.' },
            ].map(p => (
              <div key={p.phase} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, padding: '28px 0', borderTop: '1px solid rgba(244,240,234,.08)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', paddingTop: 3 }}>{p.phase}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--fg)', marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(244,240,234,.44)', lineHeight: 1.72 }}>{p.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(244,240,234,.08)' }} />
          </div>

          <Pull>Decentralized Opinions. Where the everyday person meets crypto. Hosted by me and OhJay.</Pull>
        </Section>

        {/* Author */}
        <div style={{ borderTop: '1px solid rgba(244,240,234,.08)', marginTop: 80, paddingTop: 40 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>Amona Ayoola</div>
          <div style={{ fontSize: 11, color: 'var(--g)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>Host, Decentralized Opinions</div>
          <div style={{ fontSize: 14, color: 'rgba(244,240,234,.36)', fontWeight: 300, lineHeight: 1.65 }}>
Co-hosting Decentralized Opinions with OhJay. Building the show that brings the everyday person into Web3.
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

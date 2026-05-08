import Link from 'next/link'

export default function ChainForgePage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '52vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '120px 44px 64px',
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%,rgba(200,168,130,.06),transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32, transition: 'color .2s' }}>← Back to Work</Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(244,240,234,.4)', border: '1px solid rgba(244,240,234,.14)', padding: '6px 14px', marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(244,240,234,.3)' }} />
            Hypothetical GTM Case Study
          </div>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 20 }}>GTM 02 / ChainForge</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px,7vw,96px)', fontWeight: 900, lineHeight: .88, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 28 }}>
            Chain<em style={{ color: 'var(--g)', fontStyle: 'normal' }}>Forge</em>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.68, color: 'rgba(244,240,234,.5)', maxWidth: 560, marginBottom: 36 }}>
            Your Code. Your Rules. Full Stop. A decentralized, AI-powered code collaboration platform built to capitalize on the collapse of developer trust in centralized infrastructure.
          </p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { label: 'Sector', val: 'Developer Infrastructure / Web3' },
              { label: 'Stage', val: 'Pre-Launch GTM' },
              { label: 'Budget', val: 'Zero-Dollar Launch' },
              { label: 'Horizon', val: '12-Month Playbook' },
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
      <article style={{ maxWidth: 780, margin: '0 auto', padding: '80px 44px 120px' }}>

        <Section num="01" title={<>Three crises.<br />One <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>opening.</em></>}>
          <Body>In February 2026, GitHub had three separate infrastructure incidents. Actions went down on the 2nd. A multi-service disruption hit on the 9th. Code search latency dragged into the 23rd. For solo developers, that&apos;s annoying. For AI coding agents that depend on GitHub&apos;s uptime to function? It&apos;s existential.</Body>
          <Body><strong>43 million pull requests are being merged every month</strong> — up 23% year-over-year, and a growing percentage are AI-generated noise. The Godot team called it unsustainable. Burnout among maintainers is documented and rising.</Body>
          <Body>Underneath all of it is a slower, angrier resentment: developers watched their code get scraped to train AI models without consent, compensation, or credit. Some migrated to alternatives like Radicle. Most stayed and seethed.</Body>
        </Section>

        <Section num="02" title={<>Pain-first.<br />Not <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>product-first.</em></>}>
          <Body>The tagline — <strong>Your Code. Your Rules. Full Stop.</strong> — doesn&apos;t describe features. It describes a feeling that already exists in the market. Every developer who has watched GitHub go down mid-sprint, or seen their open-source work scraped without credit, already wants ownership. ChainForge is just naming that truth back to them.</Body>
          <Pull>&quot;Being a developer wanting to collaborate should not feel like handing your life&apos;s work over to a corporation that can lock you out, monetize your code without asking, or wipe years of effort with one policy change.&quot;</Pull>
          <Body>ChainForge is reclamation: commits on-chain (immutable, tamper-proof, forever yours), smart contracts auto-paying bounties fairly, NFTs for owning breakthroughs, AI that boosts without feeding black boxes, and a DAO where $FORGE holders decide the future.</Body>
        </Section>

        <Section num="03" title={<>Credible voices<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>first.</em></>}>
          <Body>Indie devs and OSS maintainers first, always. Going enterprise-first means slower activation cycles, procurement delays, and a community that feels corporate from day one. That&apos;s the exact vibe ChainForge needs to avoid.</Body>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, margin: '32px 0' }}>
            {[
              { n: '01', title: 'Indie Devs', desc: 'The early adopters. Already frustrated, already looking for alternatives. These are the people who will tell their Discord servers.' },
              { n: '02', title: 'OSS Maintainers', desc: 'Credibility vectors. If a respected maintainer migrates their project to ChainForge, it signals quality and permanence.' },
              { n: '03', title: 'Web3 Native Teams', desc: 'Already comfortable with wallets and on-chain tooling. Low onboarding friction, high brand alignment.' },
              { n: '04', title: 'Enterprise Later', desc: 'Once the community validates quality. Enterprise follows credibility, not the other way around.' },
            ].map(b => (
              <div key={b.n} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 28 }}>
                <div style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', opacity: .7, marginBottom: 10 }}>{b.n}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--fg)', marginBottom: 8 }}>{b.title}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.42)', lineHeight: 1.68 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section num="04" title={<>Five stages.<br />Every moment <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>earns trust.</em></>}>
          <div style={{ margin: '32px 0' }}>
            {[
              { phase: 'Pre-Launch', title: 'Build in public before the product exists', desc: 'Document the frustration. Post about GitHub outages when they happen. Get into the conversations in real time. The audience should feel like ChainForge has been watching the same thing they have.' },
              { phase: 'Soft Launch', title: 'Private beta for 100 maintainers', desc: 'Hand-selected. High-signal. The feedback from these 100 matters more than 10,000 sign-ups from a waitlist landing page.' },
              { phase: 'Community Launch', title: 'Open access with migration tooling', desc: 'Make moving from GitHub as frictionless as possible. One-click repo import. Commit history preserved. The barrier to trying it should feel like nothing.' },
              { phase: 'Public Launch', title: 'Press, podcast, and community moment', desc: 'Coordinate the announcement with a maintainer who has publicly complained about GitHub. Let them be the story, not the product.' },
              { phase: 'Governance Launch', title: '$FORGE goes live', desc: 'Give early community members governance power first. Real decisions, not theater. The DAO needs teeth within the first product cycle.' },
            ].map(p => (
              <div key={p.phase} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, padding: '28px 0', borderTop: '1px solid rgba(244,240,234,.08)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', paddingTop: 3 }}>{p.phase}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--fg)', marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(244,240,234,.44)', lineHeight: 1.72 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section num="05" title={<>The numbers that<br />actually <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>matter.</em></>}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, margin: '32px 0' }}>
            {[
              { val: '5K', accent: '', label: 'Beta users by end of month 3' },
              { val: '50K', accent: '', label: 'Active monthly contributors by month 12' },
              { val: '$2M', accent: '+', label: 'ARR target. Community-first, not enterprise-led' },
            ].map(m => (
              <div key={m.label} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 24 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, color: 'var(--fg)', lineHeight: 1, marginBottom: 8 }}>
                  <span style={{ color: 'var(--g)' }}>{m.val}</span>{m.accent}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(244,240,234,.36)', lineHeight: 1.5, fontWeight: 300 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section num="06" title={<>The structural bet<br />behind the <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>strategy.</em></>}>
          <Body>ChainForge is a case study in timing-aware positioning. Most GTM plans are written in a vacuum. The best ones are written with their hand on the pulse of what the market is feeling right now.</Body>
          <Body>The GitHub outages are not a marketing opportunity ChainForge manufactured. They&apos;re a real signal that the centralized dev infrastructure model has fragility developers are increasingly unwilling to tolerate. Radicle proved the demand exists. ChainForge adds the AI and economic layer that pure decentralized tools have always lacked.</Body>
          <Pull>&quot;Radicle proves the demand exists. ChainForge adds the AI and economic layer that pure decentralized tools have always lacked.&quot;</Pull>
          <Body><strong>The risk to watch:</strong> The Web3 onboarding tax is still real. Wallet connect has gotten easier, but skepticism remains for developers who have never touched crypto infrastructure. The &quot;AI-powered&quot; claim needs to be defensible on day one, not a roadmap promise. And governance needs teeth within the first product cycle, or the DAO feels like theater.</Body>
          <Body>None of these are deal-breakers. Get the wallet connect frictionless, ship AI features that actually work at launch, and give governance real power early. The GTM will hold.</Body>
        </Section>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 72, paddingTop: 40, borderTop: '1px solid rgba(244,240,234,.08)', flexWrap: 'wrap', gap: 24 }}>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(244,240,234,.14)', color: 'rgba(244,240,234,.5)', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '12px 24px' }}>← Back to Work</Link>
          <Link href="/work/medvault" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(244,240,234,.14)', color: 'rgba(244,240,234,.5)', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '12px 24px' }}>Next: MedVault →</Link>
        </div>
      </article>
    </>
  )
}

function Section({ num, title, children }: { num: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 72 }}>
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        {num}
        <div style={{ flex: 1, height: 1, background: 'rgba(200,168,130,.2)' }} />
      </div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.05, color: 'var(--fg)', marginBottom: 20 }}>{title}</h2>
      {children}
    </div>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.82, color: 'rgba(244,240,234,.56)', marginBottom: 18 }}>{children}</p>
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid var(--g)', padding: '20px 28px', margin: '32px 0', background: 'rgba(200,168,130,.04)' }}>
      <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(16px,2.2vw,24px)', color: 'rgba(244,240,234,.68)', lineHeight: 1.55 }}>{children}</p>
    </div>
  )
}

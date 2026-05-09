import Link from 'next/link'

const building = [
  {
    num: 'BUILD 01',
    badge: 'Live',
    badgeLive: true,
    title: 'Myndzprint',
    desc: 'AI minds platform. Build a version of any thinker and have real conversations with them. Historical figures, domain experts, yourself.',
    role: 'Founder. Building the product, the GTM, and the community simultaneously.',
    tags: ['AI', 'Product', 'Founder', 'Live'],
    link: 'https://myndzprint.com',
    linkLabel: 'Visit Myndzprint →',
    external: true,
  },
  {
    num: 'BUILD 02',
    badge: 'In Progress',
    badgeLive: false,
    title: 'Raxus',
    desc: 'A real estate product built for the Nigerian market. Started in 2024. The problem is real; the solution is in motion.',
    role: 'Founder. Handling product and go-to-market from scratch.',
    tags: ['Real Estate', 'Nigeria', 'Founder', '2024'],
    link: null,
    linkLabel: 'Coming Soon →',
    external: false,
  },
]

const marketing = [
  {
    num: 'GTM 01',
    badge: 'CMO',
    badgeLive: true,
    title: 'Nirvana Academy',
    desc: 'One of the most active Web3 education platforms. Brand, growth, community, events, and content — running the full marketing operation.',
    role: 'CMO since 2023. Grew from selling out events through direct outreach to leading the entire marketing function.',
    tags: ['Web3 Education', 'CMO', 'Community', 'Growth', 'Events'],
    link: null,
    linkLabel: 'In Execution →',
    external: false,
  },
  {
    num: 'GTM 02',
    badge: 'Live',
    badgeLive: true,
    title: 'Decane Wallet',
    desc: "A non-custodial Web3 wallet built around a Pockets system: intuitive savings compartments that separate spending from saving, automate disciplined transfers, and help traders keep what they make. Decane isn't competing on features. It's competing on behavior.",
    role: "Full GTM architecture. Brand strategy, 8-week pre-launch sprint, trader outreach playbook (1,000 traders + 200 influencers), launch day execution, and post-launch UGC flywheel. Zero ad spend. 5,000 waitlist target. 1,000 funded pockets on day one.",
    tags: ['Non-Custodial', 'Pocket System', 'Zero-Budget GTM', 'Trader-First', 'Account Abstraction'],
    link: null,
    linkLabel: 'Strategy in Execution →',
    external: false,
  },
  {
    num: 'GTM 03',
    badge: 'Hypothetical',
    badgeLive: false,
    title: 'ChainForge',
    desc: 'A decentralized, AI-powered code collaboration platform. Built for developers who are done waiting for GitHub to fix itself. Your Code. Your Rules. Full Stop.',
    role: 'GTM angle: developer sovereignty. Target: Web3 engineers already burned by centralized tooling. Channel: GitHub threads, Farcaster, Discord communities where the anger already lives.',
    tags: ['Developer Tools', 'Decentralized', 'AI-Powered', 'Web3', 'Open Source'],
    link: '/work/chainforge',
    linkLabel: 'Read Full Breakdown →',
    external: false,
  },
  {
    num: 'GTM 04',
    badge: 'Hypothetical',
    badgeLive: false,
    title: 'MedVault',
    desc: 'A health data platform that pays patients directly when their records are used by pharma companies and researchers. Tagline: The health app that pays you. Targeting a $70B addressable market where patients currently receive nothing for data that is already being sold.',
    role: 'GTM angle: financial sovereignty + data ownership. Beachhead: chronic illness patients in Facebook groups and Reddit communities. 6-month goal: 50,000 active users, 10 enterprise buyers, $1.5M marketplace volume.',
    tags: ['Health Data', 'Patient Sovereignty', 'HIPAA', 'B2B2C', 'Referral-Led'],
    link: '/work/medvault',
    linkLabel: 'Read Full Breakdown →',
    external: false,
  },
]

function Card({ c }: { c: typeof building[0] }) {
  // Truncate desc to first sentence for mobile
  const shortDesc = c.desc.split('.')[0] + '.'

  return (
    <div style={{
      background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)',
      padding: 36, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: 2,
        background: 'linear-gradient(to right,var(--g),transparent)',
      }} />
      <div style={{ marginBottom: 14 }}>
        <span style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', opacity: .8 }}>{c.num}</span>
        {c.badgeLive ? (
          <span style={{ display: 'inline-block', fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#0a0806', background: 'var(--g)', padding: '2px 8px', marginLeft: 8, borderRadius: 2 }}>{c.badge}</span>
        ) : (
          <span style={{ fontSize: 9, color: 'rgba(244,240,234,.3)', fontWeight: 400, marginLeft: 8 }}>{c.badge}</span>
        )}
      </div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px,2vw,26px)', fontWeight: 700, color: 'var(--fg)', marginBottom: 16 }}>{c.title}</h2>

      {/* Full desc — hidden on mobile */}
      <p className="card-desc-full" style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.46)', lineHeight: 1.72, marginBottom: 12 }}>{c.desc}</p>
      {/* Short desc — shown on mobile only */}
      <p className="card-desc-short" style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.46)', lineHeight: 1.72, marginBottom: 8 }}>{shortDesc}</p>

      {c.tags.length > 0 && (
        <div className="card-tags" style={{ marginBottom: 4 }}>
          {c.tags.slice(0, 2).map(t => <span key={t} className="tag-pill">{t}</span>)}
        </div>
      )}
      {c.link ? (
        c.external ? (
          <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 14, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', textDecoration: 'none' }}>{c.linkLabel}</a>
        ) : (
          <Link href={c.link} style={{ display: 'inline-block', marginTop: 14, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>{c.linkLabel}</Link>
        )
      ) : (
        <span style={{ display: 'inline-block', marginTop: 14, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.2)' }}>{c.linkLabel}</span>
      )}
    </div>
  )
}

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '52vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '90px 44px 44px',
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%,rgba(200,168,130,.06),transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 20, animation: 'fu .6s .1s both' }}>
            Chapter 03 / The Work
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(44px,7vw,96px)', fontWeight: 900, lineHeight: .88,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24, animation: 'fu .85s .2s both',
          }}>
            Building and<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>Marketing.</em>
          </h1>
          <p style={{
            fontSize: 16, fontWeight: 300, lineHeight: 1.68, color: 'rgba(244,240,234,.5)',
            maxWidth: 560, animation: 'fu .7s .36s both', marginBottom: 16,
          }}>
            Products I&apos;m building from scratch, and products I&apos;m taking to market. Both require the same thing: knowing what the customer actually wants before they say it.
          </p>
        </div>
      </section>

      {/* PRODUCTS I'M BUILDING */}
      <section style={{
        background: 'linear-gradient(150deg,#0f0d09,#1c1610 40%,#0a0806)',
        padding: '52px 44px 36px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 8 }}>Products I&apos;m Building</div>
            <div style={{ width: 32, height: 1, background: 'var(--g)', opacity: .4 }} />
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2,1fr)',
            gap: 2,
          }}>
            {building.map(c => <Card key={c.num} c={c} />)}
          </div>
        </div>
      </section>

      {/* PRODUCTS I'M MARKETING */}
      <section style={{
        background: 'linear-gradient(150deg,#0c0a07,#181410 40%,#0a0806)',
        padding: '36px 44px 80px', position: 'relative', overflow: 'hidden',
        borderTop: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 8 }}>Products I&apos;m Marketing</div>
            <div style={{ width: 32, height: 1, background: 'var(--g)', opacity: .4 }} />
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2,1fr)',
            gap: 2,
          }}>
            {marketing.map(c => <Card key={c.num} c={c} />)}
          </div>
        </div>
      </section>
    </>
  )
}

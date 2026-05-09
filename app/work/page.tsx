import Link from 'next/link'

const caseStudies = [
  {
    num: 'GTM 01',
    badge: 'Live Product',
    badgeLive: true,
    title: 'Decane Wallet',
    desc: "A non-custodial Web3 wallet built around a Pockets system — intuitive savings compartments that separate spending from saving, automate disciplined transfers, and help traders keep what they make. Decane isn't competing on features. It's competing on behavior.",
    role: "Full GTM architecture. Brand strategy, 8-week pre-launch sprint, trader outreach playbook (1,000 traders + 200 influencers), launch day execution, and post-launch UGC flywheel. Zero ad spend. 5,000 waitlist target. 1,000 funded pockets on day one.",
    tags: ['Non-Custodial', 'Pocket System', 'Zero-Budget GTM', 'Trader-First', 'Account Abstraction'],
    link: null,
    linkLabel: 'Strategy in Execution →',
  },
  {
    num: 'GTM 02',
    badge: 'Hypothetical',
    badgeLive: false,
    title: 'ChainForge',
    desc: 'A decentralized, AI-powered code collaboration platform. Built for developers who are done waiting for GitHub to fix itself. Your Code. Your Rules. Full Stop.',
    role: 'GTM angle: developer sovereignty. Target: Web3 engineers already burned by centralized tooling. Channel: GitHub threads, Farcaster, Discord communities where the anger already lives.',
    tags: ['Developer Tools', 'Decentralized', 'AI-Powered', 'Web3', 'Open Source'],
    link: '/work/chainforge',
    linkLabel: 'Read Full Breakdown →',
  },
  {
    num: 'GTM 03',
    badge: 'Hypothetical',
    badgeLive: false,
    title: 'MedVault',
    desc: 'A health data platform that pays patients directly when their records are used by pharma companies and researchers. Tagline: The health app that pays you. Targeting a $70B addressable market where patients currently receive nothing for data that is already being sold.',
    role: 'GTM angle: financial sovereignty + data ownership. Beachhead: chronic illness patients in Facebook groups and Reddit communities. 6-month goal: 50,000 active users, 10 enterprise buyers, $1.5M marketplace volume.',
    tags: ['Health Data', 'Patient Sovereignty', 'HIPAA', 'B2B2C', 'Referral-Led'],
    link: '/work/medvault',
    linkLabel: 'Read Full Breakdown →',
  },
  {
    num: 'GTM 04',
    badge: 'Coming Soon',
    badgeLive: false,
    title: 'Coming Soon',
    desc: 'The series ends when the thinking stops getting sharper. It hasn\'t.',
    role: '',
    tags: [],
    link: null,
    linkLabel: 'In Progress →',
  },
]

export default function WorkPage() {
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
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 20, animation: 'fu .6s .1s both' }}>
            Chapter 03 / The Work
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(44px,7vw,96px)', fontWeight: 900, lineHeight: .88,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24, animation: 'fu .85s .2s both',
          }}>
            Product<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>Marketing.</em>
          </h1>
          <p style={{
            fontSize: 16, fontWeight: 300, lineHeight: 1.68, color: 'rgba(244,240,234,.5)',
            maxWidth: 560, animation: 'fu .7s .36s both', marginBottom: 16,
          }}>
            GTM work from products I&apos;ve shipped or led. One live product. Three hypotheticals built to the same standard because thinking rigorously about problems you don&apos;t own is still useful.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{
        background: 'linear-gradient(150deg,#0f0d09,#1c1610 40%,#0a0806)',
        padding: '80px 44px 120px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2,1fr)',
          gap: 2, position: 'relative', zIndex: 2,
        }}>
          {caseStudies.map((c) => (
            <div key={c.num} style={{
              background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)',
              padding: 36, position: 'relative', overflow: 'hidden',
              transition: 'border-color .4s',
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
              <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.46)', lineHeight: 1.72, marginBottom: 12 }}>{c.desc}</p>
              {c.role && <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.38)', lineHeight: 1.72, marginBottom: 12 }}>{c.role}</p>}
              {c.tags.length > 0 && (
                <div style={{ marginBottom: 4 }}>
                  {c.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                </div>
              )}
              {c.link ? (
                <Link href={c.link} style={{ display: 'inline-block', marginTop: 14, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>{c.linkLabel}</Link>
              ) : (
                <span style={{ display: 'inline-block', marginTop: 14, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.2)' }}>{c.linkLabel}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

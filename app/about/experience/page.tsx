import Link from 'next/link'

const experience = [
  {
    role: 'Founder & GTM Lead',
    company: 'Ri-Mark',
    period: '2022 – 2026',
    desc: 'Founded and grew a Web3 marketing agency to ~$200K revenue over two years. Built GTM systems for Web3 founders, grew client X accounts (30K→120K in 90 days, 50K→150K+), and ran community and content operations. No paid acquisition.',
  },
  {
    role: 'Chief Marketing Officer',
    company: 'Nirvana Academy',
    period: '2023 – Present',
    desc: 'CMO at one of the most active Web3 education platforms. Leading brand, growth, community, and content. Started selling out events through direct outreach; now running the full marketing operation.',
  },
  {
    role: 'Founder',
    company: 'Myndzprint',
    period: '2026 – Present',
    desc: 'Building an AI minds platform that lets you have conversations with any thinker: historical figures, domain experts, or yourself. Doing the product, the GTM, and the community simultaneously.',
  },
  {
    role: 'Founder',
    company: 'Raxus',
    period: '2024 – Present',
    desc: 'Building a real estate product for the Nigerian market. Early stage. The problem is clear; the product is in motion.',
  },
  {
    role: 'Product Marketing Lead',
    company: 'Decane Wallet',
    period: '2025 – Present',
    desc: 'Full GTM architecture for a non-custodial Web3 wallet. Brand strategy, pre-launch sprint, trader outreach playbook, and launch execution. Not the founder, but I ship like one.',
  },
  {
    role: 'Content Creator',
    company: 'Dubai / UAE',
    period: '2023 – 2024',
    desc: 'Built and monetized a content presence in the Dubai creator economy. Developed organic growth playbooks that carried back into Web3 work.',
  },
  {
    role: 'Writer & Analyst',
    company: 'Cryptonary',
    period: '2021 – 2022',
    desc: 'Covered DeFi, NFTs, and blockchain infrastructure. Built foundational understanding of the crypto ecosystem and how to communicate complex ideas simply.',
  },
]

export const metadata = {
  title: 'Experience | Amona Ayoola',
}

export default function ExperiencePage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        padding: '100px 44px 52px', position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/about" style={{ fontSize: 11, color: 'var(--g)', letterSpacing: '.1em', textTransform: 'uppercase', opacity: .6, marginBottom: 24, display: 'inline-block' }}>
            ← Back to About
          </Link>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 20 }}>Chapter 05.5 / Experience</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px,6vw,72px)', fontWeight: 900, lineHeight: .92,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 16,
          }}>
            The full<br /><em style={{ color: 'var(--g)', fontStyle: 'italic' }}>record.</em>
          </h1>
        </div>
      </section>

      <section style={{
        background: 'linear-gradient(150deg,#0f0d09,#1a1610 45%,#0a0806)',
        padding: '52px 44px 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          {experience.map((e, i) => (
            <div key={e.company + i} style={{
              padding: '28px 0',
              borderBottom: '1px solid rgba(244,240,234,.07)',
              display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'start',
            }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: 'var(--fg)', marginBottom: 6 }}>{e.company}</div>
                <div style={{ fontSize: 10, color: 'var(--g)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>{e.role}</div>
                <div style={{ fontSize: 10, color: 'rgba(244,240,234,.28)', letterSpacing: '.04em' }}>{e.period}</div>
              </div>
              <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.78, color: 'rgba(244,240,234,.48)' }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

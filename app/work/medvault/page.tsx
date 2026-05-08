import Link from 'next/link'

export default function MedVaultPage() {
  return (
    <>
      <section style={{
        minHeight: '52vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '120px 44px 64px',
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%,rgba(200,168,130,.06),transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>← Back to Work</Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(244,240,234,.4)', border: '1px solid rgba(244,240,234,.14)', padding: '6px 14px', marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(244,240,234,.3)' }} />
            Hypothetical GTM Case Study
          </div>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 20 }}>GTM 03 / MedVault</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px,7vw,96px)', fontWeight: 900, lineHeight: .88, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 28 }}>
            Med<em style={{ color: 'var(--g)', fontStyle: 'normal' }}>Vault</em>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.68, color: 'rgba(244,240,234,.5)', maxWidth: 560, marginBottom: 36 }}>
            The health app that pays you. A data platform that pays patients directly when their records are used by pharma companies and researchers.
          </p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { label: 'Market', val: '$70B Addressable' },
              { label: 'Model', val: 'B2B2C' },
              { label: '6-Month Goal', val: '50K Users · 10 Enterprise Buyers' },
              { label: 'Launch Strategy', val: 'Referral-Led · Zero Paid Spend' },
            ].map(m => (
              <div key={m.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(244,240,234,.28)' }}>{m.label}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)' }}>{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article style={{ maxWidth: 780, margin: '0 auto', padding: '80px 44px 120px' }}>
        <div style={{ marginBottom: 72 }}>
          <SectionNum>01</SectionNum>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.05, color: 'var(--fg)', marginBottom: 20 }}>
            The market that&apos;s already selling<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>your data.</em>
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.82, color: 'rgba(244,240,234,.56)', marginBottom: 18 }}>The global health data market is worth $70 billion. Pharma companies, research institutions, and insurers are buying anonymized patient data every day. The patients generating that data receive nothing. MedVault changes the equation: patients opt in, data gets used, patients get paid directly.</p>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.82, color: 'rgba(244,240,234,.56)', marginBottom: 18 }}>The tagline — <strong>The health app that pays you</strong> — isn&apos;t a feature description. It&apos;s a complete repositioning of what health data ownership means. Every person who has ever wondered why their health information gets shared without their knowledge is already the target audience.</p>
        </div>

        <div style={{ marginBottom: 72 }}>
          <SectionNum>02</SectionNum>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.05, color: 'var(--fg)', marginBottom: 20 }}>
            Beachhead audience.<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Where the anger lives.</em>
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.82, color: 'rgba(244,240,234,.56)', marginBottom: 18 }}>Chronic illness patients in Facebook groups and Reddit communities. These are people who have spent years navigating a system that treats them as data points, not people. They understand medical terminology. They share resources obsessively. And when something genuinely helps them, they tell everyone.</p>
          <div style={{ borderLeft: '2px solid var(--g)', padding: '20px 28px', margin: '32px 0', background: 'rgba(200,168,130,.04)' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(16px,2.2vw,24px)', color: 'rgba(244,240,234,.68)', lineHeight: 1.55 }}>&quot;The beachhead audience has two qualities that make them invaluable: they are deeply motivated, and they are deeply connected to others who share their frustration.&quot;</p>
          </div>
        </div>

        <div style={{ marginBottom: 72 }}>
          <SectionNum>03</SectionNum>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.05, color: 'var(--fg)', marginBottom: 20 }}>
            The numbers that<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>matter.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, margin: '32px 0' }}>
            {[
              { val: '20K', label: 'Waitlist target before a single dollar of paid spend' },
              { val: '50K', label: 'Active users by month 6' },
              { val: '$1.5M', label: 'Marketplace volume target · Month 6' },
            ].map(m => (
              <div key={m.label} style={{ background: 'rgba(14,10,7,.94)', border: '1px solid rgba(244,240,234,.07)', padding: 24 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, color: 'var(--g)', lineHeight: 1, marginBottom: 8 }}>{m.val}</div>
                <div style={{ fontSize: 12, color: 'rgba(244,240,234,.36)', lineHeight: 1.5, fontWeight: 300 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '32px 0' }}>
          {['Health Data', 'Patient Sovereignty', 'HIPAA', 'B2B2C', 'Referral-Led', 'Zero-Budget Launch'].map(t => <span key={t} className="tag-pill">{t}</span>)}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 72, paddingTop: 40, borderTop: '1px solid rgba(244,240,234,.08)', flexWrap: 'wrap', gap: 24 }}>
          <Link href="/work/chainforge" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(244,240,234,.14)', color: 'rgba(244,240,234,.5)', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '12px 24px' }}>← ChainForge</Link>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(244,240,234,.14)', color: 'rgba(244,240,234,.5)', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '12px 24px' }}>Back to Work →</Link>
        </div>
      </article>
    </>
  )
}

function SectionNum({ children }: { children: string }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
      {children}
      <div style={{ flex: 1, height: 1, background: 'rgba(200,168,130,.2)' }} />
    </div>
  )
}

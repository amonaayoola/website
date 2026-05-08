'use client'

export default function NewsletterForm() {
  return (
    <form style={{ display: 'flex' }} onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        style={{
          background: 'rgba(10,8,6,.6)', border: '1px solid rgba(244,240,234,.14)',
          borderRight: 'none', color: 'var(--fg)', fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, padding: '14px 20px', width: 220, outline: 'none',
        }}
      />
      <button type="submit" style={{
        background: 'var(--g)', color: 'var(--bg)', border: 'none',
        fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
        padding: '14px 22px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
        whiteSpace: 'nowrap',
      }}>Subscribe</button>
    </form>
  )
}

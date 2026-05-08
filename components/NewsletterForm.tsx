'use client'

export default function NewsletterForm() {
  return (
    <div className="nl-form">
      <input
        className="nl-input"
        type="email"
        placeholder="your@email.com"
      />
      <button
        className="nl-btn"
        type="button"
        onClick={() => {}}
      >
        Subscribe
      </button>
    </div>
  )
}

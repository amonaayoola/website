import Link from 'next/link'

export const metadata = {
  title: 'Against All Odds, I Am Still Aiming for Greatness | The Notebook',
  description: 'Nothing is working. Literally nothing. And I am still aiming.',
}

export default function AgainstAllOddsPage() {
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
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(244,240,234,.3)', marginBottom: 32 }}>\u2190 The Notebook</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.28)', letterSpacing: '.08em' }}>July 13, 2026</span>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(244,240,234,.2)' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)' }}>Personal Life</span>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.22)' }}>4 min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px,6vw,80px)', fontWeight: 900, lineHeight: .9,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 32, maxWidth: 740,
          }}>
            Against All Odds,<br />I Am Still{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Aiming for Greatness.</em>
          </h1>
          <div style={{
            fontSize: 18, fontWeight: 300, lineHeight: 1.72, color: 'rgba(244,240,234,.5)',
            maxWidth: 560, borderLeft: '2px solid var(--g)', paddingLeft: 24,
          }}>
            The season is harder than expected. I am still aiming.
          </div>
        </div>
      </section>

      {/* BODY */}
      <article style={{ maxWidth: 740, margin: '0 auto', padding: '88px 44px 128px' }}>

        <Section num="01" title={<>A particular kind<br />of <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>pain.</em></>}>
          <Body>There is a particular kind of pain that does not come from one single wound. It comes from everywhere at once.</Body>
          <Body>It comes from checking your account balance and feeling your chest tighten. It comes from a relationship that used to feel like home and now feels like a foreign country. It comes from kneeling in prayer and feeling like the ceiling is made of concrete, like your words are bouncing right back down at you, unanswered.</Body>
          <Body>It comes from lying awake at 3am running through the list of things that should be working by now, and watching that list grow longer instead of shorter.</Body>
          <Pull>That is where I am right now. I want to be honest about that.</Pull>
        </Section>

        <Section num="02" title={<>Nothing<br />is <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>working.</em></>}>
          <Body>Not in the dramatic, cry-for-help kind of way. In the quieter, more exhausting kind of way. The kind where you show up every single day, do the right things, make the sacrifices, stay disciplined, stay faithful, stay patient, and still watch the door stay closed.</Body>
          <Body>Still watch the numbers refuse to move. Still watch the distance between you and the people you love grow a little wider. Still feel that unsettling silence from God, or the universe, or whatever you call the force you were counting on to show up for you.</Body>
          <Body>I know what people say in these moments. They say this is the test. They say the blessing is on the other side of the breaking. They say your breakthrough is near. And maybe all of that is true. But right now, in the middle of it, those words feel thin.</Body>
          <Pull>They feel like something people say when they do not know what else to say. So I am not going to say them.</Pull>
        </Section>

        <Section num="03" title={<>I am<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>still here.</em></>}>
          <Body>Not because everything is fine. Not because I have figured it out. Not because some morning I woke up and felt the shift.</Body>
          <Body>I am still here because something in me refuses to accept that this is how the story ends. Not because I am strong, not because my faith is unshakeable, not because I have some secret reserve of resilience that other people do not have.</Body>
          <Body>I am still here simply because I cannot bring myself to quit.</Body>
          <Pull>And I have decided that is enough for today.</Pull>
        </Section>

        <Section num="04" title={<>Two versions<br />of <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>ambition.</em></>}>
          <Body>There is a version of ambition that is loud. The kind that comes from momentum, from wins, from proof that the work is paying off. That version is easy to carry. It is light. It practically carries you.</Body>
          <Body>Then there is this version. The version that has no wind behind it. The version you carry uphill, alone, in silence, when nobody is watching and nothing is confirming that you are on the right path.</Body>
          <Body style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: 'rgba(244,240,234,.72)', fontStyle: 'italic' }}>This version is heavy.</Body>
          <Body>This version asks more of you than you thought you had. This version will hollow you out and ask you to keep going anyway.</Body>
          <Pull>I am carrying this version right now.</Pull>
        </Section>

        <Section num="05" title={<>The vision<br />has not <em style={{ fontStyle: 'italic', color: 'var(--g)' }}>shrunk.</em></>}>
          <Body>And the strangest thing has happened. In the middle of all of it, the vision has not shrunk. It should have. Logic says it should have. When everything is failing around you, the reasonable response is to lower your expectations, to adjust the dream to fit the reality, to be &ldquo;realistic.&rdquo;</Body>
          <Body>But I look at where I am going, and it still looks the same. Still enormous. Still almost laughable given where I&apos;m standing. Still completely, stubbornly, unreasonably mine.</Body>
          <Body>I do not know what that means. I do not know if it is faith or delusion. Honestly, some days the line between the two feels very thin. But I have decided to treat it as faith.</Body>
          <Pull>The persistence of the vision, even when nothing around me supports it, is not a symptom of naivety. It is a signal.</Pull>
          <Body>The people who eventually make it are almost never the ones who had the easiest path. They are the ones who kept moving when they had every legitimate reason to stop. They are the ones who looked at all the evidence that said quit, and chose not to believe it.</Body>
        </Section>

        <Section num="06" title={<><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Still aiming.</em></>}>
          <Body>Greatness is not built in the seasons when everything is working. It is built in seasons exactly like this one. In the quiet. In the grinding. In the praying when you do not feel like praying. In the trying when you do not feel like trying. In the showing up when everything in you wants to disappear.</Body>
          <Body>I am in that season right now.</Body>
          <Pull>And against all odds, I am still aiming.</Pull>
        </Section>

        {/* Author */}
        <div style={{ borderTop: '1px solid rgba(244,240,234,.08)', marginTop: 80, paddingTop: 40 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>Amona Ayoola</div>
          <div style={{ fontSize: 11, color: 'var(--g)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>Builder \u00b7 Believer</div>
          <div style={{ fontSize: 14, color: 'rgba(244,240,234,.36)', fontWeight: 300, lineHeight: 1.65 }}>
            Writing about faith, work, and what it costs to build in public.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(244,240,234,.06)', flexWrap: 'wrap', gap: 16 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(244,240,234,.14)', color: 'rgba(244,240,234,.5)', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '12px 24px' }}>\u2190 The Notebook</Link>
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

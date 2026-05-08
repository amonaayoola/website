'use client'
import { useEffect, useRef } from 'react'

export default function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')!
    const mouse = { x: -9999, y: -9999 }

    c.addEventListener('mousemove', (e) => {
      const rect = c.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })
    c.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999 })

    type Star = { x: number; y: number; r: number; base: number; speed: number; offset: number; gold: boolean; vx: number; vy: number; ox: number; oy: number }
    type Particle = { x: number; y: number; r: number; vx: number; vy: number; a: number; ma: number; life: number; ml: number }

    let stars: Star[] = []

    function initStars() {
      stars = []
      const count = Math.floor((c!.width * c!.height) / 2400)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * c!.width, y: Math.random() * c!.height,
          r: Math.random() < 0.08 ? 2.0 : Math.random() < 0.2 ? 1.4 : Math.random() < 0.5 ? 0.85 : 0.45,
          base: 0.18 + Math.random() * 0.45, speed: 0.004 + Math.random() * 0.012,
          offset: Math.random() * Math.PI * 2, gold: Math.random() < 0.32,
          vx: (Math.random() - .5) * 0.22, vy: (Math.random() - .5) * 0.14, ox: 0, oy: 0,
        })
      }
    }

    function mk(init: boolean): Particle {
      const ml = 280 + Math.random() * 400
      return {
        x: Math.random() * c!.width, y: init ? Math.random() * c!.height : c!.height + 5,
        r: 0.4 + Math.random() * 1.8, vx: (Math.random() - .5) * 0.18,
        vy: -(0.05 + Math.random() * 0.22), a: 0, ma: 0.12 + Math.random() * 0.55,
        life: init ? Math.floor(Math.random() * ml) : 0, ml,
      }
    }

    const pts: Particle[] = []
    for (let i = 0; i < 65; i++) pts.push(mk(true))

    function sz() {
      if (!c) return
      c.width = c.offsetWidth
      c.height = c.offsetHeight
      initStars()
    }

    sz()
    window.addEventListener('resize', sz)

    let t = 0
    let raf: number

    function loop() {
      t += 0.016
      ctx.clearRect(0, 0, c!.width, c!.height)

      if (mouse.x > 0 && mouse.x < c!.width) {
        const gr = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240)
        gr.addColorStop(0, 'rgba(200,168,130,0.14)')
        gr.addColorStop(0.45, 'rgba(200,168,130,0.05)')
        gr.addColorStop(1, 'rgba(200,168,130,0)')
        ctx.fillStyle = gr
        ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2); ctx.fill()
      }

      for (const s of stars) {
        const dx = s.x - mouse.x, dy = s.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 170 && dist > 0) {
          const force = (170 - dist) / 170
          s.ox += (dx / dist) * force * 1.6
          s.oy += (dy / dist) * force * 1.6
        }
        s.ox *= 0.91; s.oy *= 0.91
        s.x += s.vx; s.y += s.vy
        if (s.x < 0) s.x = c!.width; if (s.x > c!.width) s.x = 0
        if (s.y < 0) s.y = c!.height; if (s.y > c!.height) s.y = 0
        const rx = s.x + s.ox, ry = s.y + s.oy
        let twinkle = s.base + Math.sin(t * s.speed * 60 + s.offset) * 0.38
        twinkle = Math.max(0.08, Math.min(1, twinkle))
        if (dist < 210) twinkle = Math.min(1, twinkle + (1 - dist / 210) * 0.6)
        ctx.beginPath(); ctx.arc(rx, ry, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.gold ? `rgba(200,168,130,${twinkle})` : `rgba(244,240,234,${twinkle})`
        ctx.fill()
        if (s.r > 1.4) {
          ctx.strokeStyle = s.gold ? `rgba(200,168,130,${twinkle * 0.55})` : `rgba(244,240,234,${twinkle * 0.45})`
          ctx.lineWidth = 0.6
          ctx.beginPath(); ctx.moveTo(rx - s.r * 3.5, ry); ctx.lineTo(rx + s.r * 3.5, ry); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(rx, ry - s.r * 3.5); ctx.lineTo(rx, ry + s.r * 3.5); ctx.stroke()
        }
      }

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx; p.y += p.vy; p.life++
        const tt = p.life / p.ml
        p.a = tt < 0.2 ? (tt / 0.2) * p.ma : tt > 0.8 ? ((1 - tt) / 0.2) * p.ma : p.ma
        if (p.life >= p.ml || p.y < -10) pts[i] = mk(false)
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,168,130,${p.a})`; ctx.fill()
      }

      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', sz)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3 }}
    />
  )
}

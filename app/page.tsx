import Link from "next/link";

// ─── Icon Components ────────────────────────────────────────────────────────
const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7.5 3 12c0 3.5 2 6.5 5 8l1-4c-1.5-1-2.5-2.5-2.5-4 0-3 2.5-5.5 5.5-5.5S17.5 9 17.5 12c0 1.5-1 3-2.5 4l1 4c3-1.5 5-4.5 5-8 0-4.5-4-9-9-9z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.347-.193-2.649-.55-3.88a11.959 11.959 0 01-6.45-1.12z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400">
    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// ─── Trust Badges ────────────────────────────────────────────────────────────
const trustItems = [
  { icon: <LeafIcon />, label: "Eco-Friendly Products" },
  { icon: <ShieldIcon />, label: "Fully Insured & DBS-Checked" },
  { icon: <CheckIcon />, label: "Transparent Pricing" },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Homes Cleaned" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Eco Products" },
  { value: "5yr+", label: "Experience" },
];

// ─── Services ────────────────────────────────────────────────────────────────
const services = [
  {
    emoji: "🏠",
    title: "Residential Cleaning",
    desc: "Regular weekly/fortnightly cleaning and one-off deep cleans tailored to your home.",
    tag: "Most Popular",
  },
  {
    emoji: "🔑",
    title: "End of Tenancy",
    desc: "Deposit-compliant, full-property deep cleaning for landlords, tenants, and agents.",
    tag: "Landlord Favourite",
  },
  {
    emoji: "🧽",
    title: "Carpet & Upholstery",
    desc: "Professional hot-water extraction for stain and odour removal.",
    tag: null,
  },
];

// ─── Why Choose Us ───────────────────────────────────────────────────────────
const whyUs = [
  "Eco-friendly cleaning products",
  "Fully insured & DBS-checked staff",
  "Transparent pricing — no hidden fees",
  "Professional-grade equipment",
  "Digital booking & invoicing",
  "Trusted by landlords & letting agents",
];

// ─── Testimonials ────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Sarah M.",
    location: "Wallsend",
    text: "Absolutely spotless after their end-of-tenancy clean. Got my full deposit back — couldn't be happier!",
    stars: 5,
  },
  {
    name: "James T.",
    location: "Newcastle",
    text: "Reliable, professional, and they actually use eco-friendly products like they say. Highly recommend.",
    stars: 5,
  },
  {
    name: "Priya K.",
    location: "North Tyneside",
    text: "Booked online in 2 minutes and the team arrived right on time. The house smelled amazing afterwards.",
    stars: 5,
  },
];

// ─── Service Areas ────────────────────────────────────────────────────────────
const areas = ["Wallsend", "Newcastle upon Tyne", "North Tyneside", "Tyne & Wear"];

// ═══════════════════════════════════════════════════════════════════════════════
//  MAIN HOMEPAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export default function GreenSaharaHomepage() {
  return (
    <main className="font-sans antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,300&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --forest: #1a3d2b;
          --moss: #2d6a4f;
          --sage: #52b788;
          --mint: #95d5b2;
          --cream: #f8f5f0;
          --sand: #e9e4da;
          --charcoal: #1e1e1e;
          --warm-grey: #6b6560;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: var(--cream); color: var(--charcoal); }

        .font-display { font-family: 'Fraunces', Georgia, serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        @keyframes floatUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(1.06); }
        }

        .anim-1 { animation: floatUp 0.7s ease forwards; }
        .anim-2 { animation: floatUp 0.7s 0.12s ease both; }
        .anim-3 { animation: floatUp 0.7s 0.24s ease both; }
        .anim-4 { animation: floatUp 0.7s 0.36s ease both; }
        .anim-5 { animation: floatUp 0.7s 0.48s ease both; }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          animation: pulse-soft 7s ease-in-out infinite;
        }

        .underline-accent {
          position: relative;
          display: inline-block;
        }
        .underline-accent::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0;
          width: 100%; height: 6px;
          background: var(--mint);
          border-radius: 3px;
          z-index: -1;
          transform-origin: left;
          animation: slideRight 0.8s 0.6s ease both;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--forest);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          padding: 15px 32px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(26,61,43,0.25);
        }
        .btn-primary:hover {
          background: var(--moss);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(26,61,43,0.35);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--forest);
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          padding: 14px 32px;
          border-radius: 6px;
          border: 2px solid var(--forest);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .btn-secondary:hover {
          background: var(--forest);
          color: #fff;
          transform: translateY(-2px);
        }

        .stat-card {
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(82,183,136,0.2);
          border-radius: 12px;
          padding: 20px 16px;
          text-align: center;
          backdrop-filter: blur(6px);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(26,61,43,0.1);
        }

        .service-card {
          background: #fff;
          border: 1px solid var(--sand);
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: var(--sage);
          border-radius: 4px 0 0 4px;
          transform: scaleY(0);
          transition: transform 0.25s ease;
        }
        .service-card:hover::before { transform: scaleY(1); }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(26,61,43,0.12);
          border-color: var(--mint);
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(82,183,136,0.12);
          border: 1px solid rgba(82,183,136,0.3);
          color: var(--moss);
          border-radius: 100px;
          padding: 7px 16px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--sage);
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid var(--sand);
          font-family: 'DM Sans', sans-serif;
          color: var(--charcoal);
          font-size: 0.95rem;
        }
        .check-item:last-child { border-bottom: none; }

        .check-dot {
          width: 28px; height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background: var(--mint);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--forest);
        }

        .testimonial-card {
          background: #fff;
          border: 1px solid var(--sand);
          border-radius: 16px;
          padding: 28px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(26,61,43,0.08);
        }

        .area-chip {
          background: rgba(26,61,43,0.06);
          border: 1px solid rgba(26,61,43,0.12);
          color: var(--forest);
          border-radius: 8px;
          padding: 10px 18px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .footer-strip {
          background: var(--forest);
          color: rgba(255,255,255,0.75);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .why-why-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ─── NAVBAR ──────────────────────────────────────────────────────── */}
      <nav style={{
        background: 'var(--forest)',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 20px rgba(0,0,0,0.15)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.6rem' }}>🌿</span>
          <span className="font-display" style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 500 }}>
            Green Sahara
          </span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Services', 'About', 'Contact'].map(item => (
            <a key={item} href={`/${item.toLowerCase()}`}
              className="font-body"
              style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >{item}</a>
          ))}
          <a href="/booking" className="btn-primary" style={{
            padding: '9px 22px',
            fontSize: '0.875rem',
            background: 'var(--sage)',
            boxShadow: 'none',
          }}>Book Now</a>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 2rem 60px',
      }}>
        {/* Decorative blobs */}
        <div className="blob" style={{ width: 600, height: 600, background: 'rgba(82,183,136,0.18)', top: -150, right: -100 }} />
        <div className="blob" style={{ width: 400, height: 400, background: 'rgba(149,213,178,0.2)', bottom: -100, left: -80, animationDelay: '3s' }} />

        {/* Dot pattern */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(26,61,43,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}>

          {/* LEFT: Copy */}
          <div>
            <div className="anim-1" style={{ marginBottom: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {trustItems.map(t => (
                <span key={t.label} className="trust-pill font-body">
                  {t.icon} {t.label}
                </span>
              ))}
            </div>

            <h1 className="font-display anim-2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--charcoal)',
              marginBottom: '24px',
            }}>
              A Cleaner Home,<br />
              <span className="underline-accent" style={{ color: 'var(--forest)' }}>Naturally.</span>
            </h1>

            <p className="font-body anim-3" style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'var(--warm-grey)',
              maxWidth: 480,
              marginBottom: '16px',
            }}>
              Green Sahara Limited delivers professional residential and tenancy cleaning
              across the North East — using eco-friendly products, DBS-checked staff, and
              modern equipment.
            </p>

            <p className="font-body anim-3" style={{
              fontSize: '0.95rem',
              color: 'var(--sage)',
              fontWeight: 600,
              marginBottom: '36px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <MapPinIcon /> Serving Wallsend, Newcastle, North Tyneside & Tyne and Wear
            </p>

            <div className="anim-4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="/quote" className="btn-primary">
                Get a Free Quote <ArrowRightIcon />
              </a>
              <a href="/booking" className="btn-secondary">
                Book a Cleaning
              </a>
            </div>

            {/* Phone strip */}
            <div className="anim-5" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff',
              border: '1px solid var(--sand)',
              borderRadius: 8,
              padding: '12px 20px',
            }}>
              <span style={{ color: 'var(--sage)' }}><PhoneIcon /></span>
              <span className="font-body" style={{ color: 'var(--warm-grey)', fontSize: '0.875rem' }}>Call us anytime:</span>
              <a href="tel:+441234567890" className="font-body" style={{ color: 'var(--forest)', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
                +44 (0) 123 456 7890
              </a>
            </div>
          </div>

          {/* RIGHT: Visual card cluster */}
          <div className="anim-3" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {/* Main card */}
            <div style={{
              background: 'var(--forest)',
              borderRadius: 24,
              padding: '40px 36px',
              color: '#fff',
              width: '100%',
              maxWidth: 380,
              position: 'relative',
              boxShadow: '0 24px 64px rgba(26,61,43,0.3)',
            }}>
              <p className="font-body" style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: 16, fontWeight: 600 }}>
                Why Clients Choose Us
              </p>
              {whyUs.slice(0, 4).map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 22, height: 22, minWidth: 22,
                    borderRadius: '50%',
                    background: 'var(--sage)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="2.5" style={{ width: 12, height: 12 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-body" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                </div>
              ))}

              <div style={{
                marginTop: 28,
                paddingTop: 24,
                borderTop: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <div style={{ display: 'flex' }}>
                  {['🧑', '👩', '🧔', '👩‍🦱'].map((e, i) => (
                    <div key={i} style={{
                      width: 32, height: 32,
                      borderRadius: '50%',
                      border: '2px solid var(--forest)',
                      background: 'var(--moss)',
                      marginLeft: i > 0 ? -8 : 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.9rem',
                    }}>{e}</div>
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <span className="font-body" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>Trusted by 500+ households</span>
                </div>
              </div>
            </div>

            {/* Floating eco badge */}
            <div style={{
              position: 'absolute',
              top: -18, right: -18,
              background: 'var(--mint)',
              borderRadius: 12,
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 8px 24px rgba(82,183,136,0.3)',
              animation: 'floatUp 0.7s 0.5s ease both',
            }}>
              <span style={{ fontSize: '1.2rem' }}>🌿</span>
              <span className="font-body" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--forest)' }}>100% Eco Products</span>
            </div>

            {/* Floating booking badge */}
            <div style={{
              position: 'absolute',
              bottom: -18, left: -18,
              background: '#fff',
              border: '1px solid var(--sand)',
              borderRadius: 12,
              padding: '12px 18px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              animation: 'floatUp 0.7s 0.65s ease both',
            }}>
              <span className="font-body" style={{ fontSize: '0.78rem', color: 'var(--warm-grey)', display: 'block', marginBottom: 2 }}>Next available slot</span>
              <span className="font-body" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--forest)' }}>Tomorrow, 9:00 AM ✓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--forest)', padding: '48px 2rem' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }} className="stats-grid">
          {stats.map(s => (
            <div key={s.value} style={{ textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--mint)', lineHeight: 1 }}>
                {s.value}
              </div>
              <div className="font-body" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>What We Offer</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'var(--charcoal)' }}>
              Professional Cleaning, <span style={{ color: 'var(--moss)' }}>Every Time</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                {s.tag && (
                  <span className="font-body" style={{
                    display: 'inline-block',
                    background: 'var(--mint)',
                    color: 'var(--forest)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: 4,
                    padding: '3px 10px',
                    marginBottom: 16,
                  }}>{s.tag}</span>
                )}
                <div style={{ fontSize: '2.2rem', marginBottom: 16 }}>{s.emoji}</div>
                <h3 className="font-display" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p className="font-body" style={{ color: 'var(--warm-grey)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: 24 }}>
                  {s.desc}
                </p>
                <a href="/services" className="font-body" style={{
                  color: 'var(--moss)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  Learn more <ArrowRightIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section style={{ padding: '96px 2rem', background: '#fff' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }} className="why-why-grid">

          {/* Left: visual */}
          <div style={{
            background: 'var(--cream)',
            borderRadius: 20,
            padding: '48px 40px',
            border: '1px solid var(--sand)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 200, height: 200,
              borderRadius: '50%',
              background: 'rgba(82,183,136,0.12)',
            }} />
            <p className="section-label" style={{ marginBottom: 10 }}>Our Promise</p>
            <h3 className="font-display" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: 8, lineHeight: 1.2 }}>
              Cleaning You Can<br />
              <span style={{ color: 'var(--moss)' }}>Actually Trust</span>
            </h3>
            <p className="font-body" style={{ color: 'var(--warm-grey)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: 32 }}>
              Every member of our team is fully vetted, DBS-checked, and trained to our high standards.
              We use only certified eco-friendly products — safe for children, pets, and the planet.
            </p>
            <a href="/about" className="btn-primary" style={{ display: 'inline-flex' }}>
              About Us <ArrowRightIcon />
            </a>
          </div>

          {/* Right: checklist */}
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>Why Green Sahara</p>
            {whyUs.map(item => (
              <div key={item} className="check-item font-body">
                <div className="check-dot">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="2.5" style={{ width: 13, height: 13 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>Reviews</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: 'var(--charcoal)' }}>
              What Our Customers Say
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {Array(t.stars).fill(0).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="font-body" style={{ color: 'var(--charcoal)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: 20, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div>
                  <div className="font-body" style={{ fontWeight: 700, color: 'var(--forest)', fontSize: '0.9rem' }}>{t.name}</div>
                  <div className="font-body" style={{ color: 'var(--warm-grey)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                    <MapPinIcon /> {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body" style={{ textAlign: 'center', color: 'var(--warm-grey)', fontSize: '0.85rem', marginTop: 32 }}>
            ⭐ More reviews coming soon via Google — <a href="#" style={{ color: 'var(--sage)', textDecoration: 'underline' }}>leave yours here</a>
          </p>
        </div>
      </section>

      {/* ─── SERVICE AREAS ───────────────────────────────────────────────── */}
      <section style={{ padding: '80px 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Where We Work</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: 'var(--charcoal)', marginBottom: 36 }}>
            Proudly Serving the North East
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {areas.map(a => (
              <span key={a} className="area-chip font-body">
                <MapPinIcon /> {a}
              </span>
            ))}
          </div>
          <p className="font-body" style={{ marginTop: 24, color: 'var(--warm-grey)', fontSize: '0.9rem' }}>
            Not sure if we cover your area? <a href="/contact" style={{ color: 'var(--moss)', fontWeight: 600, textDecoration: 'none' }}>Get in touch →</a>
          </p>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--forest) 0%, var(--moss) 100%)',
        padding: '80px 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="blob" style={{ width: 400, height: 400, background: 'rgba(149,213,178,0.12)', top: -100, right: -80 }} />
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            Ready for a Fresher, <br />Healthier Home?
          </h2>
          <p className="font-body" style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 40, fontSize: '1.05rem', lineHeight: 1.65 }}>
            Book your cleaning today and let our team take care of the rest. Quick online booking, transparent pricing, eco-friendly results.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/quote" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: 'var(--forest)',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
              fontSize: '1rem', padding: '15px 32px', borderRadius: 6,
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)'; }}
            >
              Get a Free Quote <ArrowRightIcon />
            </a>
            <a href="/booking" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#fff',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: '1rem', padding: '14px 32px', borderRadius: 6,
              border: '2px solid rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
            >
              Book a Cleaning
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="footer-strip" style={{ padding: '24px 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span>© 2025 Green Sahara Limited · All rights reserved</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms', 'Contact'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import CTASection from '../components/CTASection';
import ProblemCard from '../components/ProblemCard';
import WhyCard from '../components/WhyCard';

const heroStats = [
  { val: '100K+', lbl: 'Students affected' },
  { val: '77%', lbl: 'MoMo penetration' },
  { val: '400+', lbl: 'Boarding schools' },
  { val: '0', lbl: 'Competitors in Rwanda' },
];

const problemCards = [
  { icon: '🏦', title: 'Cash held by admin', body: 'Students hand over all money to school administration. No receipt. No guarantee it will be returned in full.', accent: 'var(--red)' },
  { icon: '⏳', title: 'Access denied', body: '"I needed money on Wednesday. I got it on Friday." Students must justify every withdrawal to an administrator.', accent: 'var(--orange)' },
  { icon: '👁️', title: 'Parents are blind', body: 'Parents send money with no confirmation it arrived. No balance visibility. No spending transparency.', accent: 'var(--yellow)' },
  { icon: '🛑', title: 'Nowhere to spend', body: 'Even students with money can\'t easily buy basic items at school. No cashless infrastructure exists.', accent: 'var(--purple)' },
];

const pillars = [
  {
    num: '01', icon: '💳', cls: 'pillar-blue', title: 'Digital Student Wallet',
    body: 'Each student receives an RFID/NFC card linked to a digital wallet. PIN-protected. No smartphone needed. Works offline.',
    points: ['Real-time balance updates', 'PIN protection on every transaction', 'Card costs under $1 to issue'],
  },
  {
    num: '02', icon: '📱', cls: 'pillar-green', title: 'Parent Mobile Top-Up',
    body: 'Parents top up via MTN MoMo or Airtel Money from any phone. Instant. 24/7. From anywhere in Rwanda.',
    points: ['SMS confirmation both ways', 'Full transaction history', 'Daily spending limits'],
  },
  {
    num: '03', icon: '🏪', cls: 'pillar-orange', title: 'Campus Vending Machines',
    body: 'Custom-built machines deployed at schools. Tap card, enter PIN, receive product. No admin involvement.',
    points: ['Snacks, toiletries, supplies', '24/7 student access', 'Automated inventory management'],
  },
];

const stepFlow = [
  { n: '1', cls: 'step-blue', title: 'Parent tops up', sub: 'Via MTN MoMo or Airtel' },
  { n: '2', cls: 'step-green', title: 'Wallet credited', sub: 'Instantly. SMS sent.' },
  { n: '3', cls: 'step-orange', title: 'Student taps card', sub: 'At machine or canteen' },
  { n: '4', cls: 'step-purple', title: 'Parent notified', sub: 'Real-time transaction alert' },
  { n: '5', cls: 'step-blue', title: 'Admin gets reports', sub: 'No cash ever handled' },
];

const marketStrip = [
  { val: '$27M+', lbl: 'Annual pocket money flow in Rwanda boarding schools' },
  { val: '$750M', lbl: 'Africa vending machine market (2024)' },
  { val: '9.8M', lbl: 'Registered MoMo accounts in Rwanda' },
  { val: '0', lbl: 'Direct competitors operating in Rwanda today' },
];

const whyCards = [
  { icon: '📡', bg: 'var(--blue-l)', color: 'var(--blue)', title: 'Infrastructure ready', body: '77% of Rwandan adults have mobile money wallets. MTN MoMo API is open to third-party developers. No need to build the payment rails — they already exist.' },
  { icon: '🏛️', bg: 'var(--green-l)', color: 'var(--green)', title: 'Government alignment', body: "Rwanda's Vision 2050 and digital economy strategy actively support fintech innovation. BNR's 2023 payment regulation creates a clear licensing path." },
  { icon: '🚀', bg: 'var(--orange-l)', color: 'var(--orange)', title: 'No competition yet', body: 'Ugandan competitors (Kawallet, DesisPay, Xazu) have 62,000+ users but have not entered Rwanda. The window to be first is open — but it won\'t last.' },
  { icon: '💡', bg: 'var(--purple-l)', color: 'var(--purple)', title: 'Low MVP cost', body: 'The entire proof-of-concept can be built and deployed for under $1,250. RFID cards cost $0.50 each. The technology is accessible and proven.' },
];

export default function Home() {
  useFadeUp();

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="hero-glow hero-glow-2" />
        </div>
        <div className="hero-content container">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Rwanda &nbsp;·&nbsp; Fintech &nbsp;·&nbsp; EdTech</span>
          </div>
          <h1 className="hero-title">
            Student money.<br />
            <span className="gradient-text">Finally safe.</span>
          </h1>
          <p className="hero-sub">
            LooPeyi is the first closed-loop digital payment ecosystem for boarding school
            students in Rwanda — giving students financial autonomy, parents real-time
            transparency, and schools a cashless campus infrastructure.
          </p>
          <div className="hero-cta">
            <Link to="/solution" className="btn btn-primary">See the Solution</Link>
            <Link to="/problem" className="btn btn-ghost">The Problem We Solve →</Link>
          </div>
          <div className="hero-stats">
            {heroStats.map(({ val, lbl }, i) => (
              <Fragment key={val}>
                {i > 0 && <div className="stat-divider" />}
                <div className="stat-item">
                  <span className="stat-val">{val}</span>
                  <span className="stat-lbl">{lbl}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div>↓</div>
        </div>
      </section>

      {/* ── Problem Preview ── */}
      <section className="section-light">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--red)' }}>The Problem</div>
          <h2 className="section-title">A system that fails students every term</h2>
          <p className="section-sub">Today, boarding school students in Rwanda hand all their money to administrators on visiting days. What follows is a cascade of broken trust.</p>
          <div className="problem-cards">
            {problemCards.map(({ icon, title, body, accent }) => (
              <ProblemCard key={title} icon={icon} title={title} body={body} accentColor={accent} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/problem" className="btn btn-outline">Read the full problem analysis →</Link>
          </div>
        </div>
      </section>

      {/* ── Solution Preview ── */}
      <section className="section-dark">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--green)' }}>The Solution</div>
          <h2 className="section-title text-white">Three pillars. One ecosystem.</h2>
          <p className="section-sub text-muted-white">LooPeyi replaces the broken cash system with a connected digital payment infrastructure built on Rwanda's existing mobile money rails.</p>
          <div className="pillars">
            {pillars.map(({ num, icon, cls, title, body, points }) => (
              <div key={num} className={`pillar ${cls}`}>
                <div className="pillar-num">{num}</div>
                <div className="pillar-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
                <ul>
                  {points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/solution" className="btn btn-primary">Explore the full solution →</Link>
          </div>
        </div>
      </section>

      {/* ── How It Works Preview ── */}
      <section className="section-light">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>How It Works</div>
          <h2 className="section-title">From parent's phone to student's hands</h2>
          <p className="section-sub">Five steps. Built on infrastructure that already exists in Rwanda.</p>
          <div className="steps-flow">
            {stepFlow.map(({ n, cls, title, sub }, i) => (
              <Fragment key={n}>
                {i > 0 && <div className="step-arrow">→</div>}
                <div className="step-node">
                  <div className={`step-circle ${cls}`}>{n}</div>
                  <div className="step-body">
                    <h4>{title}</h4>
                    <p>{sub}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/how-it-works" className="btn btn-outline">See the full flow →</Link>
          </div>
        </div>
      </section>

      {/* ── Market Strip ── */}
      <section className="market-strip">
        <div className="container">
          <div className="market-strip-inner">
            {marketStrip.map(({ val, lbl }, i) => (
              <Fragment key={val}>
                {i > 0 && <div className="ms-sep" />}
                <div className="ms-item">
                  <span className="ms-val">{val}</span>
                  <span className="ms-lbl">{lbl}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Now ── */}
      <section className="section-light">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--purple)' }}>Why Rwanda. Why Now.</div>
          <h2 className="section-title">The conditions are perfect</h2>
          <div className="why-grid">
            {whyCards.map(({ icon, bg, color, title, body }) => (
              <WhyCard key={title} icon={icon} iconBg={bg} iconColor={color} title={title} body={body} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="big-quote">
            "I needed money on Wednesday.<br />I got it on <em>Friday</em>."
          </blockquote>
          <p className="quote-attr">— A Rwandan boarding school student describing their daily reality</p>
          <p className="quote-follow">This is the problem LooPeyi was built to solve.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        heading="Ready to learn more?"
        sub="We're currently seeking co-founders, school partners, and seed investors to bring LooPeyi to Rwanda's boarding schools in 2026."
        buttons={[
          { to: '/contact', label: 'Get in Touch', variant: 'primary' },
          { to: '/about', label: 'Meet the Team', variant: 'ghost' },
        ]}
      />
    </>
  );
}

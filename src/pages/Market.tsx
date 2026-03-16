import { useFadeUp } from '../hooks/useFadeUp';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import StatBox from '../components/StatBox';
import WhyCard from '../components/WhyCard';

const marketStats = [
  { value: '100K+', label: 'Boarding school students in Rwanda', color: 'var(--blue)' },
  { value: '400+', label: 'Boarding secondary schools', color: 'var(--green)' },
  { value: '$27M+', label: 'Annual pocket money flow', color: 'var(--orange)' },
  { value: '$810K', label: 'Revenue at 3% fee, full market', color: 'var(--purple)' },
];

const bars = [
  { label: 'Mobile money penetration', width: 77, val: '77%', style: { background: 'linear-gradient(90deg,var(--blue),var(--green))' } },
  { label: 'Active MoMo users (adults)', width: 56, val: '56%', style: { background: 'var(--green)' } },
  { label: 'Daily MoMo users', width: 19, val: '19%', style: { background: 'var(--orange)' } },
  { label: 'Rwanda market captured today', width: 0, val: '0%', valStyle: { color: 'var(--red)' }, style: { background: 'var(--red)' } },
];

const whyRwanda = [
  { icon: '📱', bg: 'var(--blue-l)', color: 'var(--blue)', title: '9.8M MoMo accounts', body: "Rwanda has 9.8 million registered mobile money accounts across MTN and Airtel. The payment rails your parents will use are already in place. MTN's API is open to developers." },
  { icon: '🏛️', bg: 'var(--green-l)', color: 'var(--green)', title: 'Pro-fintech government', body: "Rwanda's Vision 2050 and digital economy strategy support fintech innovation. BNR Regulation 74/2023 creates a clear licensing framework. Government wants solutions like this." },
  { icon: '🚀', bg: 'var(--orange-l)', color: 'var(--orange)', title: 'First mover advantage', body: 'Ugandan competitors (Kawallet with 62K users, DesisPay, Xazu) have not entered Rwanda. The window is open — but it will close once they raise funding and look beyond Uganda.' },
  { icon: '📈', bg: 'var(--purple-l)', color: 'var(--purple)', title: 'Growing digital literacy', body: '77% of adults use mobile money. 19% use it daily. The behavior is there. We are channeling existing habits — not creating new ones.' },
  { icon: '🎯', bg: 'var(--red-l)', color: 'var(--red)', title: 'Clear target market', body: 'Boarding school students are a concentrated, captive audience. 100-2,000 students per school. Easy to onboard. High daily engagement.' },
  { icon: '🌍', bg: 'var(--yellow-l)', color: 'var(--yellow)', title: 'East Africa expansion path', body: 'After Rwanda, the same model deploys in Burundi, DRC, Tanzania, Uganda, and Kenya — all with similar boarding school systems and mobile money infrastructure.' },
];

const revStreams = [
  { icon: '💸', title: 'Transaction Fee', body: '1.5–2.5% on every MTN MoMo or Airtel top-up. Zero friction for users. Scales linearly with student count.', tag: 'Primary · Recurring', color: 'var(--blue)', tagStyle: { background: 'rgba(26,107,255,.2)', color: '#7AA8FF' } },
  { icon: '🏪', title: 'Vending Margin', body: 'Buy wholesale, sell at retail through our machines. 30–50% gross margin per item. Fully automated revenue.', tag: 'High Margin · Passive', color: 'var(--green)', tagStyle: { background: 'rgba(0,196,140,.15)', color: 'var(--green)' } },
  { icon: '🏫', title: 'School Subscription', body: '$20–50/month per school for platform access, admin dashboard, and reporting tools. Predictable B2B SaaS.', tag: 'Predictable · B2B', color: 'var(--orange)', tagStyle: { background: 'rgba(255,112,67,.15)', color: '#FF8A65' } },
  { icon: '💳', title: 'Card Issuance', body: '$0.50–1.00 per student card. One-time per student, with replacements on loss or damage.', tag: 'One-time · Scalable', color: 'var(--purple)', tagStyle: { background: 'rgba(124,58,237,.15)', color: '#A78BFA' } },
];

const unitEcon = [
  { value: '$3.70', label: 'Avg monthly spend per student', color: 'var(--green)', dark: true },
  { value: '~10%', label: 'Blended take rate', color: 'var(--green)', dark: true },
  { value: '$4.40', label: 'Annual revenue per student', color: 'var(--green)', dark: true },
  { value: '$44K', label: 'ARR at 10,000 students', color: 'var(--green)', dark: true },
];

const swot = [
  {
    cls: 'sw-s', heading: '💪 Strengths',
    items: [
      'Real, painful problem — lived experience of the founder',
      'Rwanda has zero direct competitors today',
      '77% mobile money penetration — rails already exist',
      'Vending machines are a genuinely unique differentiator',
      'MVP buildable for under $1,250',
      'CMU Africa / Upanzi Network research support available',
    ],
  },
  {
    cls: 'sw-w', heading: '⚠️ Weaknesses',
    items: [
      'No existing brand recognition or customer base',
      'Hardware (vending machines) adds operational complexity',
      'Regulatory licensing may require capital (RWF 30M+)',
      'Small founding team at early stage',
      'Dependence on mobile money API uptime',
    ],
  },
  {
    cls: 'sw-o', heading: '🚀 Opportunities',
    items: [
      '400+ boarding schools in Rwanda — large captive market',
      'Expandable to TVET schools and universities',
      'Government is actively pro-fintech and pro-digital',
      'East Africa expansion (Burundi, DRC, Tanzania, Kenya)',
      'Future: MTN MoMo card partnership, prison systems',
      'Vending margin is a high-return independent revenue stream',
    ],
  },
  {
    cls: 'sw-t', heading: '⚡ Threats',
    items: [
      'Ugandan competitors (Kawallet, DesisPay) could enter Rwanda',
      'Schools may resist changing established processes',
      'MoMo transaction fees could compress margins',
      'Regulatory changes could increase compliance costs',
      'Power/connectivity challenges in rural schools',
    ],
  },
];

const roadmap = [
  { phase: 'Phase 1 · Months 1–3', title: 'Build & Validate', dot: 'active', items: ['Backend API + parent web app', 'MTN MoMo API integrated and tested', '100 RFID cards + 2 readers sourced', 'First pilot school partnership signed'] },
  { phase: 'Phase 2 · Months 4–6', title: 'Pilot Deployment', dot: '', items: ['Live pilot: 200 students at 1 school', 'First vending machine prototype deployed', 'Collect feedback, iterate rapidly', 'Generate first revenue'] },
  { phase: 'Phase 3 · Months 7–12', title: 'Scale to 10 Schools', dot: '', items: ['10 schools, 3,000–5,000 students', '5–10 vending machines deployed', 'Admin dashboard as standalone product', 'Norrsken / Visa accelerator application'] },
  { phase: 'Phase 4 · Months 13–18', title: 'Series A Preparation', dot: '', items: ['50+ schools, 20,000+ students', 'TVET and university expansion', 'East Africa footprint (Burundi, DRC)', 'Series A fundraise for hardware scale'] },
];

export default function Market() {
  useFadeUp();

  return (
    <>
      <PageHero
        label="Market Opportunity"
        labelColor="var(--orange)"
        title={<>A large, unserved market<br />with perfect infrastructure</>}
        sub="Rwanda is ready. The mobile money rails exist. The problem is real. And no competitor is operating here yet."
      />

      {/* Market Size */}
      <section className="section-white content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>Market Size</div>
          <h2 className="section-title">Total addressable market</h2>
          <div className="stats-row">
            {marketStats.map(({ value, label, color }) => (
              <StatBox key={label} value={value} label={label} color={color} />
            ))}
          </div>
          <p className="section-sub" style={{ marginTop: 32, marginBottom: 24 }}>
            At just 10% market penetration (10,000 students), BSWallet generates meaningful revenue. At full penetration, the transaction fee alone generates $810K+ annually — before vending machine margins and school subscriptions.
          </p>
          <div className="bar-chart fade-up">
            {bars.map(({ label, width, val, style, valStyle }) => (
              <div key={label} className="bar-row">
                <span className="bar-label">{label}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ ...style, width: `${width}%` }} />
                </div>
                <span className="bar-val" style={valStyle}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rwanda */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--green)' }}>Why Rwanda</div>
          <h2 className="section-title">The conditions are perfect. Right now.</h2>
          <div className="why-grid">
            {whyRwanda.map(({ icon, bg, color, title, body }) => (
              <WhyCard key={title} icon={icon} iconBg={bg} iconColor={color} title={title} body={body} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="section-dark content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--green)' }}>Business Model</div>
          <h2 className="section-title text-white">Four revenue streams</h2>
          <p className="section-sub text-muted-white">Diversified income from day one. Each stream reinforces the others.</p>
          <div className="rev-model-grid">
            {revStreams.map(({ icon, title, body, tag, color, tagStyle }) => (
              <div key={title} className="rev-card fade-up" style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', ['--rc-color' as string]: color }}>
                <div className="rc-icon">{icon}</div>
                <h3 style={{ color: 'var(--white)' }}>{title}</h3>
                <p>{body}</p>
                <span className="rc-tag" style={tagStyle}>{tag}</span>
              </div>
            ))}
          </div>
          <div className="stats-row" style={{ marginTop: 32 }}>
            {unitEcon.map(({ value, label, color, dark }) => (
              <StatBox key={label} value={value} label={label} color={color} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* SWOT */}
      <section className="section-white content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--purple)' }}>SWOT Analysis</div>
          <h2 className="section-title">Honest assessment</h2>
          <div className="swot-grid fade-up">
            {swot.map(({ cls, heading, items }) => (
              <div key={cls} className={`swot-cell ${cls}`}>
                <h3>{heading}</h3>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>Roadmap</div>
          <h2 className="section-title">From MVP to market leader in 18 months</h2>
          <div className="timeline fade-up">
            {roadmap.map(({ phase, title, dot, items }) => (
              <div key={phase} className="tl-item">
                <div className={`tl-dot${dot ? ` ${dot}` : ''}`} />
                <div className="tl-phase">{phase}</div>
                <div className="tl-title">{title}</div>
                <ul className="tl-list">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Invest in the future of campus payments"
        sub="We are seeking seed funding and strategic partners to deploy BSWallet across Rwanda's boarding schools in 2026."
        buttons={[
          { to: '/contact#investors', label: 'For Investors →', variant: 'primary' },
          { to: '/contact', label: 'Contact Us', variant: 'ghost' },
        ]}
      />
    </>
  );
}

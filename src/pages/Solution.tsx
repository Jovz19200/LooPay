import { useFadeUp } from '../hooks/useFadeUp';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Alert from '../components/Alert';

const pillars = [
  {
    num: 'PILLAR 01', icon: '💳', cls: 'pf-blue',
    title: 'Digital Student Wallet',
    sub: 'Each student receives a physical RFID/NFC card linked to a secure digital wallet account. The card is their key to the entire system — no smartphone required, no admin permission needed.',
    features: [
      { title: 'RFID/NFC Card', body: 'Tap-to-pay card costs under $1 to issue. Durable PVC. Personalised with student name and ID.' },
      { title: 'PIN Protection', body: 'Every transaction requires a 4-digit PIN. A lost card cannot be used without the PIN.' },
      { title: 'Real-Time Balance', body: 'Students check balance at any card reader. Parents see it in the app. Always up to date.' },
      { title: 'Works Offline', body: 'Card readers sync when connectivity is available. Transactions are stored locally and reconciled automatically.' },
    ],
  },
  {
    num: 'PILLAR 02', icon: '📱', cls: 'pf-green',
    title: 'Parent Mobile Top-Up & Visibility',
    sub: 'Parents top up their child\'s wallet using MTN MoMo or Airtel Money — platforms they already use. From any phone. Any time. From anywhere in Rwanda or abroad.',
    features: [
      { title: 'MTN MoMo / Airtel', body: 'Built on Rwanda\'s existing mobile money rails. Parents dial the same way they send money today.' },
      { title: 'Instant Confirmation', body: 'Both parent and student receive an SMS the moment a transfer completes. No more "did you receive it?"' },
      { title: 'Full Spending History', body: 'Parents view every transaction — what was bought, when, and how much — via the web app or USSD.' },
      { title: 'Spending Limits', body: 'Optional daily or weekly caps. Parents decide how much their child can spend per period.' },
    ],
  },
  {
    num: 'PILLAR 03', icon: '🏪', cls: 'pf-orange',
    title: 'Campus Vending Machines',
    sub: 'Custom-built vending machines deployed at schools, stocked with everyday student needs. Students tap their card, enter their PIN, and receive their item. No human interaction required.',
    features: [
      { title: 'Custom Hardware', body: 'Machines built locally by ECE engineers. Designed specifically for the boarding school context and Rwanda\'s environment.' },
      { title: 'Card-Integrated', body: 'The same RFID card used for the wallet works at the vending machine. One card, one ecosystem.' },
      { title: 'Product Range', body: 'Snacks, drinking water, soap, pens, notebooks, sanitary products — essentials that students buy every week.' },
      { title: '24/7 Access', body: 'Open always. No waiting for admin. No office hours. Students access products whenever they need them.' },
    ],
  },
];

const security = [
  { icon: '🔑', title: 'PIN on every transaction', body: 'No transaction executes without the student\'s personal PIN. A stolen or lost card has zero value without it.' },
  { icon: '💰', title: 'Admin has no access to funds', body: 'This is the core design principle. School administrators can view reports but cannot withdraw, redirect, or touch student money.' },
  { icon: '📋', title: 'Immutable transaction log', body: 'Every transaction is permanently recorded and cannot be edited or deleted. Full audit trail accessible to parents and the platform.' },
  { icon: '🎚️', title: 'Parent-set spending limits', body: 'Daily and weekly caps prevent any single event from draining a wallet. Parents stay in control of the budget.' },
  { icon: '🔒', title: 'Card loss protection', body: 'A card can be instantly frozen from the parent app or admin dashboard. Replacement cards preserve the full wallet balance.' },
  { icon: '📡', title: 'Encrypted communications', body: 'All data between card readers, vending machines, and the cloud backend is encrypted. No unprotected data transmission.' },
];

const compareRows = [
  { feature: 'Student digital wallet',         bsw: true,   kaw: true,  des: true,  trad: false },
  { feature: 'Mobile money top-up',            bsw: true,   kaw: true,  des: true,  trad: false },
  { feature: 'Parent real-time visibility',    bsw: true,   kaw: true,  des: true,  trad: false },
  { feature: 'Integrated vending machines',    bsw: 'unique', kaw: false, des: false, trad: false },
  { feature: 'Rwanda market presence',         bsw: 'only',  kaw: false, des: false, trad: false },
  { feature: 'Works without student smartphone', bsw: true, kaw: true,  des: true,  trad: false },
  { feature: 'Admin removed from cash flow',   bsw: true,   kaw: 'part', des: 'part', trad: false },
];

function CellVal({ val }: { val: boolean | string }) {
  if (val === true) return <span className="tick">✓</span>;
  if (val === false) return <span className="cross">✗</span>;
  if (val === 'part') return <span className="part">~</span>;
  if (val === 'unique') return <><span className="tick">✓</span> <strong>Unique</strong></>;
  if (val === 'only') return <><span className="tick">✓</span> <strong>Only one</strong></>;
  return null;
}

export default function Solution() {
  useFadeUp();

  return (
    <>
      <PageHero
        label="The Solution"
        labelColor="var(--green)"
        title={<>Three pillars.<br />One complete ecosystem.</>}
        sub="LooPeyi doesn't patch the broken cash system — it replaces it entirely with a connected digital payment infrastructure built on Rwanda's existing mobile money rails."
      />

      {/* Overview + Pillars */}
      <section className="section-white content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>Overview</div>
          <h2 className="section-title">What LooPeyi is</h2>
          <p className="section-sub">A closed-loop payment ecosystem — money enters via mobile money, lives in student wallets, and is spent inside the school. Transparent at every step.</p>
          <Alert variant="blue" icon="💡">
            <strong>Closed-loop design:</strong> Funds flow through a controlled digital environment. Students spend at school-connected points. Administrators never handle cash. Parents see everything in real time.
          </Alert>

          {pillars.map(({ num, icon, cls, title, sub, features }) => (
            <div key={num} className={`pillar-full ${cls} fade-up`}>
              <div className="pf-header">
                <div>
                  <div className="pf-num">{num}</div>
                  <div className="pf-icon">{icon}</div>
                </div>
                <div className="pf-title">{title}</div>
              </div>
              <p className="pf-sub">{sub}</p>
              <div className="pf-features">
                {features.map(({ title: ft, body }) => (
                  <div key={ft} className="pf-feat">
                    <h4>{ft}</h4>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--purple)' }}>Security</div>
          <h2 className="section-title">Built for trust</h2>
          <p className="section-sub">Security is not a feature — it is the foundation. Every design decision puts protection of student funds first.</p>
          <div className="security-grid">
            {security.map(({ icon, title, body }) => (
              <div key={title} className="sec-card fade-up">
                <div className="sec-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-dark content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--green)' }}>Competitive Edge</div>
          <h2 className="section-title text-white">How LooPeyi compares</h2>
          <p className="section-sub text-muted-white">Similar platforms exist in Uganda and Nigeria. None operate in Rwanda. None integrate vending machines.</p>
          <div className="comp-table-wrap fade-up">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="ours">LooPeyi ★</th>
                  <th>Kawallet (UG)</th>
                  <th>DesisPay (UG)</th>
                  <th>Traditional</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(({ feature, bsw, kaw, des, trad }) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td className="ours"><CellVal val={bsw} /></td>
                    <td><CellVal val={kaw} /></td>
                    <td><CellVal val={des} /></td>
                    <td><CellVal val={trad} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        heading="Want to see how it works?"
        sub="Walk through the full step-by-step flow from parent's phone to student's hands."
        buttons={[
          { to: '/how-it-works', label: 'See How It Works →', variant: 'primary' },
          { to: '/contact', label: 'Talk to Us', variant: 'ghost' },
        ]}
      />
    </>
  );
}

import { useState } from 'react';
import {
  Send, Zap, CreditCard, Bell, LayoutDashboard,
  Cloud, Wifi, Smartphone, Package, MessageSquare, Globe, BarChart2,
  Info,
} from 'lucide-react';
import { useFadeUp } from '../hooks/useFadeUp';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Alert from '../components/Alert';

const flowSteps = [
  {
    num: '1', circleStyle: {},
    title: 'Parent tops up via Mobile Money',
    body: "The parent dials MTN MoMo or Airtel Money from any phone. They enter their child's LooPeyi ID and send money. The process takes under 60 seconds and is available 24/7 from anywhere in Rwanda or abroad.",
    icon: <Send size={32} />,
    details: [
      'Works from any phone — no smartphone required for parents',
      'MTN MoMo and Airtel Money both supported',
      'Available 24/7 from anywhere in the world',
      'Minimum top-up can be as low as 500 RWF',
    ],
  },
  {
    num: '2', circleStyle: { background: 'linear-gradient(135deg,var(--green),var(--green-d))' },
    title: 'Wallet is credited instantly',
    body: "The student's digital wallet balance updates in real time the moment the mobile money transfer completes. Both the parent and the student receive an SMS confirmation immediately.",
    icon: <Zap size={32} />,
    details: [
      'Instant wallet credit — no delays',
      'SMS confirmation to both parent and student',
      'Parent app balance view updates immediately',
      'Admin dashboard reflects the new balance in real time',
    ],
  },
  {
    num: '3', circleStyle: { background: 'linear-gradient(135deg,var(--orange),#D84315)' },
    title: 'Student taps card to pay',
    body: "At the vending machine or school canteen POS, the student taps their RFID card, enters their 4-digit PIN, and the transaction is processed instantly. No admin involvement at any point.",
    icon: <CreditCard size={32} />,
    details: [
      'RFID tap — faster than cash',
      'PIN required for every transaction',
      'Works offline — syncs when internet is restored',
      'Vending machine dispenses product immediately on approval',
    ],
  },
  {
    num: '4', circleStyle: { background: 'linear-gradient(135deg,var(--purple),#5B21B6)' },
    title: 'Parent receives real-time notification',
    body: 'The moment a transaction completes, the parent receives a push notification and SMS showing what was purchased, the amount, the time, and the remaining balance.',
    icon: <Bell size={32} />,
    details: [
      'Push notification and SMS for every transaction',
      'Shows item, amount, timestamp, and new balance',
      'Viewable in full transaction history on parent web app',
      'Unusual spending patterns can be flagged automatically',
    ],
  },
  {
    num: '5', circleStyle: {},
    title: 'Admin gets automated dashboard reports',
    body: 'School administrators no longer touch student money. They access a clean dashboard showing wallet balances, transaction history, low-balance alerts, vending inventory, and financial summaries.',
    icon: <LayoutDashboard size={32} />,
    details: [
      'Zero cash handling by admin — no liability',
      'Automated monthly financial reports',
      'Low-balance alerts for individual students',
      'Vending inventory management and restock notifications',
    ],
  },
];

const archItems = [
  { icon: <Cloud          size={26} />, title: 'Cloud Backend',    body: 'Node.js or Python API. PostgreSQL database. Hosted on Render or Railway. Auto-scaling.' },
  { icon: <CreditCard     size={26} />, title: 'RFID/NFC Cards',   body: '13.56MHz MIFARE Classic cards. $0.05–$1.50 per card wholesale. PVC, durable, printable.' },
  { icon: <Wifi           size={26} />, title: 'Card Readers',     body: 'ESP32 + RC522 RFID module. ~$8–15 per unit. Works offline. Syncs over WiFi or mobile data.' },
  { icon: <Smartphone     size={26} />, title: 'MTN MoMo API',     body: 'Open API with sandbox, SDKs (Node.js, Java, PHP, Android). 9.8M registered accounts in Rwanda.' },
  { icon: <Package        size={26} />, title: 'Vending Machine',  body: 'Custom-built by ECE engineers. ESP32-based controller. Integrated card reader. 5–10 product slots.' },
  { icon: <MessageSquare  size={26} />, title: 'SMS Gateway',      body: 'Rwanda SMS gateway for instant parent notifications. Works on all phones, no app required.' },
  { icon: <Globe          size={26} />, title: 'Parent Web App',   body: 'Mobile-first React web app. Works on any smartphone browser. USSD fallback for feature phones.' },
  { icon: <BarChart2      size={26} />, title: 'Admin Dashboard',  body: 'Web dashboard for school administrators. Student wallets, transactions, reports, and alerts.' },
];

type PersonaId = 'student' | 'parent' | 'admin';

const personas: { id: PersonaId; label: string }[] = [
  { id: 'student', label: 'Student' },
  { id: 'parent',  label: 'Parent' },
  { id: 'admin',   label: 'School Admin' },
];

const personaContent: Record<PersonaId, {
  heading: string;
  steps: { bg: string; title: string; body: string }[];
  alertVariant: 'blue' | 'green' | 'orange';
  alertBody: string;
}> = {
  student: {
    heading: 'Life as a student with LooPeyi',
    steps: [
      { bg: 'var(--green)', title: 'Check your balance anytime',        body: 'Tap your card on any reader to see your current balance. No asking admin.' },
      { bg: 'var(--green)', title: 'Buy what you need, when you need it', body: 'Vending machine is open 24/7. Canteen POS accepts your card instantly. No paperwork, no waiting.' },
      { bg: 'var(--green)', title: 'Know your money is safe',            body: 'Your card needs your PIN. Even if lost, no one can access your funds without it.' },
      { bg: 'var(--green)', title: 'Full autonomy',                      body: "You decide what to buy and when. Within your parent's set limits, but with no admin gatekeeper." },
    ],
    alertVariant: 'green',
    alertBody: "Your card, your money, your choice. LooPeyi gives boarding school students something simple but powerful: financial autonomy within a safe system. You do not need to explain why you want soap on a Tuesday.",
  },
  parent: {
    heading: 'Peace of mind for parents',
    steps: [
      { bg: 'var(--blue)', title: 'Send money from anywhere',  body: 'Top up via MTN MoMo or Airtel from home, from work, or from abroad. No visiting day required.' },
      { bg: 'var(--blue)', title: 'Know it arrived',           body: 'Instant SMS confirmation when your payment lands.' },
      { bg: 'var(--blue)', title: 'See every purchase',        body: 'Real-time notifications for every transaction. Full history in the web app.' },
      { bg: 'var(--blue)', title: 'Set spending limits',       body: "Set daily or weekly caps. Your child spends freely within the limit you set." },
    ],
    alertVariant: 'blue',
    alertBody: "No more visiting day anxiety. You no longer need to travel to school just to give your child money, and you no longer need to wonder whether the administrator kept your child's funds. You see everything, from your phone, in real time.",
  },
  admin: {
    heading: 'Simpler operations for schools',
    steps: [
      { bg: 'var(--orange)', title: 'Zero cash to manage',          body: 'No cash boxes. No ledgers. No liability. Student funds never pass through your hands.' },
      { bg: 'var(--orange)', title: 'Automated reporting',          body: 'Monthly financial summaries generated automatically. No manual reconciliation.' },
      { bg: 'var(--orange)', title: 'Low-balance alerts',           body: "Get notified when a student's wallet is running low so you can inform parents proactively." },
      { bg: 'var(--orange)', title: 'Vending inventory management', body: 'Dashboard shows stock levels. Restock notifications sent automatically.' },
    ],
    alertVariant: 'orange',
    alertBody: "LooPeyi reduces your burden, not just theirs. Managing student cash manually is a thankless, liability-heavy job. LooPeyi removes that responsibility entirely and gives you better financial data about your school than you have ever had.",
  },
};

export default function HowItWorks() {
  useFadeUp();
  const [activePersona, setActivePersona] = useState<PersonaId>('student');
  const p = personaContent[activePersona];

  return (
    <>
      <PageHero
        label="How It Works"
        labelColor="var(--blue)"
        title={<>From parent's phone<br />to student's hands — in seconds</>}
        sub="Five simple steps. Built entirely on infrastructure that already exists in Rwanda. No new bank accounts. No smartphones for students. No cash."
      />

      {/* Full Flow */}
      <section className="section-white content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>The Full Flow</div>
          <h2 className="section-title">Step by step</h2>
          <div className="flow-diagram">
            {flowSteps.map(({ num, circleStyle, title, body, icon, details }, i) => (
              <div key={num} className="flow-step-full fade-up">
                <div className="fsf-left">
                  <div className="fsf-circle" style={circleStyle}>{num}</div>
                  {i < flowSteps.length - 1 && <div className="fsf-line" />}
                </div>
                <div className="fsf-body">
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <ul className="fsf-detail">
                    {details.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
                <div className="fsf-icon" style={{ color: 'var(--muted)' }}>{icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persona Experience */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--green)' }}>Experience by Role</div>
          <h2 className="section-title">Different for everyone. Better for everyone.</h2>
          <div className="persona-tabs">
            {personas.map(({ id, label }) => (
              <button
                key={id}
                className={`ptab${activePersona === id ? ' active' : ''}`}
                onClick={() => setActivePersona(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="two-col">
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
                {p.heading}
              </h3>
              <div className="step-list">
                {p.steps.map(({ bg, title, body }) => (
                  <div key={title} className="step-list-item">
                    <div className="sli-num" style={{ background: bg, fontSize: 14 }}>✓</div>
                    <div className="sli-body">
                      <h4>{title}</h4>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Alert variant={p.alertVariant} icon={<Info size={16} />} style={{ alignSelf: 'start', margin: 0 }}>
              {p.alertBody}
            </Alert>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-dark content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>Technical Architecture</div>
          <h2 className="section-title text-white">What's under the hood</h2>
          <p className="section-sub text-muted-white">Built on proven, accessible technology. No exotic infrastructure required.</p>
          <div className="arch-grid">
            {archItems.map(({ icon, title, body }) => (
              <div key={title} className="arch-box fade-up" style={{ background: 'rgba(255,255,255,.04)', borderColor: 'rgba(255,255,255,.08)' }}>
                <div className="ab-icon" style={{ color: 'var(--blue)' }}>{icon}</div>
                <h4 style={{ color: 'var(--white)' }}>{title}</h4>
                <p style={{ color: 'rgba(255,255,255,.45)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Explore the market opportunity"
        sub="See the data behind Rwanda's boarding school fintech gap and why the timing is right."
        buttons={[
          { to: '/market',  label: 'View the Market', variant: 'primary' },
          { to: '/contact', label: 'Partner with Us', variant: 'ghost' },
        ]}
      />
    </>
  );
}

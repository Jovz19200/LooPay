import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Alert from '../components/Alert';

const team = [
  { avatar: '🧑‍💼', avatarBg: 'var(--blue-l)', role: 'Founder / CEO', dept: 'Product & Strategy', bio: "Master's student at CMU Africa. Former boarding school student — this problem is personal. Leads product vision, investor relations, school partnerships, and business strategy." },
  { avatar: '👨‍💻', avatarBg: 'var(--green-l)', role: 'Co-Founder / CTO', dept: 'Software Engineering', bio: 'Full-stack engineer. Builds the backend API, mobile money integration, parent web app, and admin dashboard. Owns all software architecture decisions.' },
  { avatar: '⚙️', avatarBg: 'var(--orange-l)', role: 'Hardware Lead', dept: 'Electrical & Computer Engineering', bio: 'ECE student. Designs and builds the RFID card readers and custom vending machine hardware prototypes. Bridges the physical and digital worlds.' },
];

const values = [
  { icon: '🔒', title: 'Student autonomy first', body: "Every design decision starts with one question: does this give the student more control over their own money? If not, we don't build it." },
  { icon: '👁️', title: 'Radical transparency', body: 'Parents see everything. Schools see everything. No hidden fees, no opaque processes. The whole platform is built on the premise that transparency is protection.' },
  { icon: '📡', title: 'Built for real conditions', body: "We design for low connectivity, feature phones, and constrained budgets. BSWallet must work in a rural Rwandan boarding school, not a San Francisco co-working space." },
  { icon: '🌍', title: 'Africa-native design', body: 'We are not adapting a Western product for Africa. We are building from Africa, on African infrastructure, for African realities.' },
];

export default function About() {
  useFadeUp();

  return (
    <>
      <PageHero
        label="About BSWallet"
        labelColor="var(--purple)"
        title={<>Built by people who<br />understand the problem</>}
        sub="We are Rwandan students and engineers. We have lived inside this system. We are building the solution it deserves."
      />

      {/* Mission */}
      <section className="section-white content-section">
        <div className="container">
          <div className="mission-block fade-up">
            <h2>Our Mission</h2>
            <p>To give every boarding school student in Rwanda financial dignity, autonomy, and safety — not as a privilege, but as a right — by building the digital payment infrastructure that the education system has always needed.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>The Story</div>
          <h2 className="section-title">Why we're building this</h2>
          <div className="two-col">
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text)', marginBottom: 20 }}>
                BSWallet started with a simple, frustrating reality: boarding school students in Rwanda hand all their money to school administrators and then wait — sometimes days — to access their own funds.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text)', marginBottom: 20 }}>
                The problem is not a lack of technology. Rwanda has one of Africa's most advanced mobile money ecosystems. 77% of adults have MoMo wallets. The infrastructure exists. What was missing was a bridge between that infrastructure and the boarding school campus.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text)', marginBottom: 20 }}>
                We started with the boarding school use case because it is the most immediate and most painful. But the vision is broader: a platform for any closed environment where financial transparency and student autonomy are needed.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--muted)' }}>
                We are a master's student at CMU Africa, engineers, and builders. We have access to one of Africa's premier research and technology ecosystems — and we intend to use it.
              </p>
            </div>
            <div>
              <Alert variant="blue" icon="🏛️" style={{ marginBottom: 20 }}>
                <strong>CMU Africa connection.</strong> We are based at Carnegie Mellon University Africa in Kigali, giving us access to the Upanzi Network (Gates Foundation-funded fintech research), CyLab-Africa (cybersecurity for African financial systems), and a global network of researchers and investors.
              </Alert>
              <Alert variant="green" icon="🌍">
                <strong>Rwanda-first, Africa-next.</strong> We are starting in Rwanda because we know it best and because the gap is clearest here. The same infrastructure deploys in Uganda, Kenya, Tanzania, Burundi, and DRC — all markets with the same problem and similar mobile money rails.
              </Alert>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-white content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--green)' }}>The Team</div>
          <h2 className="section-title">Who's building BSWallet</h2>
          <p className="section-sub">A small, focused team with the right skills and the deepest possible understanding of the problem.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 32 }}>
            {team.map(({ avatar, avatarBg, role, dept, bio }) => (
              <div key={role} className="approach-card fade-up">
                <div className="approach-avatar" style={{ background: avatarBg }}>{avatar}</div>
                <h3>{role}</h3>
                <div className="role">{dept}</div>
                <p>{bio}</p>
              </div>
            ))}
          </div>
          <div className="seeking-card fade-up">
            <h3>🔍 We are actively seeking co-founders</h3>
            <p>If you have experience in fintech, hardware, school operations, or African startup ecosystems — and you believe in this mission — we want to hear from you.</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch →</Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--purple)' }}>Our Values</div>
          <h2 className="section-title">What we stand for</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {values.map(({ icon, title, body }) => (
              <div key={title} className="value-card fade-up">
                <div className="vc-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Join the mission"
        sub="Whether you're a potential co-founder, school partner, investor, or researcher — there is a role for you in building BSWallet."
        buttons={[
          { to: '/contact', label: 'Get in Touch →', variant: 'primary' },
          { to: '/market', label: 'View the Market', variant: 'ghost' },
        ]}
      />
    </>
  );
}

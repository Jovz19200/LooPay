import { Link } from 'react-router-dom';
import { Lock, Eye, Signal, Globe2, Info } from 'lucide-react';
import { useFadeUp } from '../hooks/useFadeUp';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Alert from '../components/Alert';

type TeamMember = {
  photo?: string;
  avatarBg: string;
  initials?: string;
  name?: string;
  role: string;
  dept: string;
  bio: string;
};

const team: TeamMember[] = [
  {
    photo: '/founder.png',
    avatarBg: 'var(--blue-l)',
    name: 'Johovanis Niyogisubizo',
    role: 'Founder / CEO',
    dept: 'Product & Strategy',
    bio: "Master's student at CMU Africa. Former boarding school student. This problem is personal. Leads product vision, investor relations, school partnerships, and business strategy.",
  },
  {
    initials: 'CTO',
    avatarBg: 'var(--green-l)',
    role: 'Co-Founder / CTO',
    dept: 'Software Engineering',
    bio: 'Full-stack engineer. Builds the backend API, mobile money integration, parent web app, and admin dashboard. Owns all software architecture decisions.',
  },
  {
    initials: 'ECE',
    avatarBg: 'var(--orange-l)',
    role: 'Hardware Lead',
    dept: 'Electrical & Computer Engineering',
    bio: 'ECE engineer. Designs and builds the RFID card readers and custom vending machine hardware prototypes. Bridges the physical and digital worlds.',
  },
];

const values = [
  { icon: <Lock    size={22} />, iconBg: 'var(--blue-l)',   iconColor: 'var(--blue)',   title: 'Student autonomy first',    body: "Every design decision starts with one question: does this give the student more control over their own money? If not, we do not build it." },
  { icon: <Eye     size={22} />, iconBg: 'var(--green-l)',  iconColor: 'var(--green)',  title: 'Radical transparency',      body: 'Parents see everything. Schools see everything. No hidden fees, no opaque processes. The platform is built on the premise that transparency is protection.' },
  { icon: <Signal  size={22} />, iconBg: 'var(--orange-l)', iconColor: 'var(--orange)', title: 'Built for real conditions',  body: "We design for low connectivity, feature phones, and constrained budgets. LooPeyi must work in a rural Rwandan boarding school, not a San Francisco office." },
  { icon: <Globe2  size={22} />, iconBg: 'var(--purple-l)', iconColor: 'var(--purple)', title: 'Africa-native design',       body: 'We are not adapting a Western product for Africa. We are building from Africa, on African infrastructure, for African realities.' },
];

export default function About() {
  useFadeUp();

  return (
    <>
      <PageHero
        label="About LooPeyi"
        labelColor="var(--purple)"
        title={<>Built by people who<br />understand the problem</>}
        sub="We are Rwandan students and engineers. We have lived inside this system. We are building the solution it deserves."
      />

      {/* Mission */}
      <section className="section-white content-section">
        <div className="container">
          <div className="mission-block fade-up">
            <h2>Our Mission</h2>
            <p>To give every boarding school student in Rwanda the financial dignity, autonomy, and safety they deserve, by building the digital payment infrastructure the education system has always needed.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>The Story</div>
          <h2 className="section-title">Why we are building this</h2>
          <div className="two-col">
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text)', marginBottom: 20 }}>
                LooPeyi started with a simple, frustrating reality: boarding school students in Rwanda hand all their money to school administrators and then wait, sometimes for days, to access their own funds.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text)', marginBottom: 20 }}>
                The problem is not a lack of technology. Rwanda has one of Africa's most advanced mobile money ecosystems. 77% of adults have MoMo wallets. The infrastructure exists. What was missing was a bridge between that infrastructure and the boarding school campus.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text)', marginBottom: 20 }}>
                We started with the boarding school use case because it is the most immediate and most painful. The vision is broader: a platform for any closed environment where financial transparency and individual autonomy are needed.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--muted)' }}>
                We are a master's student at CMU Africa, engineers, and builders with access to one of Africa's premier research and technology ecosystems.
              </p>
            </div>
            <div>
              <Alert variant="blue" icon={<Info size={16} />} style={{ marginBottom: 20 }}>
                <strong>CMU Africa connection.</strong> We are based at Carnegie Mellon University Africa in Kigali, giving us access to the Upanzi Network (Gates Foundation-funded fintech research), CyLab-Africa (cybersecurity for African financial systems), and a global network of researchers and investors.
              </Alert>
              <Alert variant="green" icon={<Globe2 size={16} />}>
                <strong>Rwanda-first, Africa-next.</strong> We are starting in Rwanda because we know it best and the gap is clearest here. The same infrastructure deploys in Uganda, Kenya, Tanzania, Burundi, and DRC. All share the same problem and operate on similar mobile money rails.
              </Alert>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-white content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--green)' }}>The Team</div>
          <h2 className="section-title">Who is building LooPeyi</h2>
          <p className="section-sub">A focused team with the right skills and the deepest possible understanding of the problem.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 32 }}>
            {team.map(({ photo, initials, avatarBg, name, role, dept, bio }) => (
              <div key={role} className="approach-card fade-up">
                {photo ? (
                  <img
                    src={photo}
                    alt={name ?? role}
                    style={{
                      width: 96, height: 96, borderRadius: '50%',
                      objectFit: 'cover', objectPosition: 'top',
                      margin: '0 auto 20px',
                      border: '3px solid var(--blue-l)',
                      boxShadow: '0 4px 16px rgba(26,107,255,.15)',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div
                    className="approach-avatar"
                    style={{
                      background: avatarBg,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: 'var(--text)',
                      letterSpacing: '.05em',
                    }}
                  >
                    {initials}
                  </div>
                )}
                {name && <h3 style={{ marginBottom: 2 }}>{name}</h3>}
                <div className="role" style={{ marginBottom: name ? 4 : 12 }}>{role}</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8, fontWeight: 500 }}>{dept}</p>
                <p>{bio}</p>
              </div>
            ))}
          </div>
          <div className="seeking-card fade-up">
            <h3>We are actively seeking co-founders</h3>
            <p>If you have experience in fintech, hardware, school operations, or African startup ecosystems, and you believe in this mission, we want to hear from you.</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--purple)' }}>Our Values</div>
          <h2 className="section-title">What we stand for</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {values.map(({ icon, iconBg, iconColor, title, body }) => (
              <div key={title} className="value-card fade-up">
                <div className="why-icon" style={{ background: iconBg, color: iconColor, marginBottom: 16 }}>{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Join the mission"
        sub="Whether you are a potential co-founder, school partner, investor, or researcher, there is a role for you in building LooPeyi."
        buttons={[
          { to: '/contact', label: 'Get in Touch',    variant: 'primary' },
          { to: '/market',  label: 'View the Market', variant: 'ghost' },
        ]}
      />
    </>
  );
}

import React, { useState, useEffect, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, GraduationCap, Info } from 'lucide-react';
import { useFadeUp } from '../hooks/useFadeUp';
import PageHero from '../components/PageHero';
import Alert from '../components/Alert';
import RichCard from '../components/RichCard';

type AudienceTab = 'general' | 'investor' | 'school' | 'cofounder' | 'researcher';

const tabs: { id: AudienceTab; label: string }[] = [
  { id: 'general',    label: 'General' },
  { id: 'investor',   label: 'Investor' },
  { id: 'school',     label: 'School' },
  { id: 'cofounder',  label: 'Co-Founder' },
  { id: 'researcher', label: 'Researcher' },
];

function useFormSubmit() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setSubmitted(true); setLoading(false); }, 1000);
  }

  return { submitted, loading, handleSubmit };
}

function SuccessMessage({ heading = 'Message sent!', body = "We'll be in touch within 24 hours." }) {
  return (
    <div className="success-message">
      <h3>{heading}</h3>
      <p>{body}</p>
    </div>
  );
}

function GeneralForm() {
  const { submitted, loading, handleSubmit } = useFormSubmit();
  if (submitted) return <SuccessMessage />;
  return (
    <div className="contact-form fade-up">
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Send us a message</h3>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24 }}>We read every message and respond within 24 hours.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>First Name *</label><input type="text" required placeholder="Your first name" /></div>
          <div className="form-group"><label>Last Name *</label><input type="text" required placeholder="Your last name" /></div>
        </div>
        <div className="form-group"><label>Email *</label><input type="email" required placeholder="you@example.com" /></div>
        <div className="form-group"><label>Organisation</label><input type="text" placeholder="Company, school, or university" /></div>
        <div className="form-group"><label>Message *</label><textarea required placeholder="Tell us about yourself and how you would like to connect..." /></div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>
          {loading ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

function InvestorForm() {
  const { submitted, loading, handleSubmit } = useFormSubmit();
  if (submitted) return <SuccessMessage heading="Request received!" body="We will send the pitch deck and financials within 24 hours." />;
  return (
    <div className="contact-form fade-up">
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Investor Inquiry</h3>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>We are raising a $50,000 seed round. Pitch deck and financial model available on request.</p>
      <Alert variant="blue" icon={<Info size={15} />} style={{ marginBottom: 20 }}>
        Pre-seed stage. Target raise: $50,000. Use: hardware, software, operations, regulatory. Timeline: 18 months to 1,000 active student wallets.
      </Alert>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Name *</label><input type="text" required placeholder="Your full name" /></div>
          <div className="form-group"><label>Fund / Organisation *</label><input type="text" required placeholder="Fund or company name" /></div>
        </div>
        <div className="form-group"><label>Email *</label><input type="email" required placeholder="you@fund.com" /></div>
        <div className="form-group">
          <label>Investment Stage</label>
          <select><option>Pre-seed</option><option>Seed</option><option>Grant / Accelerator</option><option>Strategic Partnership</option></select>
        </div>
        <div className="form-group"><label>What would you like to know?</label><textarea placeholder="Questions about the business model, market size, team, or pitch deck..." /></div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>
          {loading ? 'Sending…' : 'Request Pitch Deck'}
        </button>
      </form>
    </div>
  );
}

function SchoolForm() {
  const { submitted, loading, handleSubmit } = useFormSubmit();
  if (submitted) return <SuccessMessage heading="Application received!" body="We will contact you within 48 hours to schedule a visit." />;
  return (
    <div className="contact-form fade-up">
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>School Partnership</h3>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>Be one of the first schools to deploy LooPeyi. Pilot schools get free setup and priority support.</p>
      <Alert variant="green" icon={<Info size={15} />} style={{ marginBottom: 20 }}>
        First 3 pilot schools receive free card issuance, free platform setup, dedicated support, and input into the product roadmap.
      </Alert>
      <form onSubmit={handleSubmit}>
        <div className="form-group"><label>Your Name *</label><input type="text" required placeholder="Principal or administrator name" /></div>
        <div className="form-group"><label>School Name *</label><input type="text" required placeholder="Name of your school" /></div>
        <div className="form-row">
          <div className="form-group"><label>District</label><input type="text" placeholder="e.g. Gasabo, Huye" /></div>
          <div className="form-group"><label>Number of Boarding Students</label><input type="number" placeholder="e.g. 400" /></div>
        </div>
        <div className="form-group"><label>Email *</label><input type="email" required placeholder="school@example.rw" /></div>
        <div className="form-group"><label>Current challenge with student money management</label><textarea placeholder="Describe how you currently handle student pocket money..." /></div>
        <button type="submit" className="btn btn-green" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>
          {loading ? 'Sending…' : 'Apply for Pilot'}
        </button>
      </form>
    </div>
  );
}

function CoFounderForm() {
  const { submitted, loading, handleSubmit } = useFormSubmit();
  if (submitted) return <SuccessMessage heading="Application received!" body="We will schedule a call within 48 hours." />;
  return (
    <div className="contact-form fade-up">
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Co-Founder Application</h3>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>We are looking for builders who care deeply about this problem and want to own a piece of the solution.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group"><label>Name *</label><input type="text" required placeholder="Your full name" /></div>
        <div className="form-group"><label>Email *</label><input type="email" required placeholder="you@example.com" /></div>
        <div className="form-group">
          <label>Primary Skill Set *</label>
          <select required>
            <option value="">Select your area</option>
            <option>Software Engineering (Full-stack)</option>
            <option>Hardware / ECE</option>
            <option>Business Operations</option>
            <option>Fintech / Finance</option>
            <option>School / Education Sector</option>
            <option>Marketing / Growth</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group"><label>LinkedIn or GitHub</label><input type="url" placeholder="https://" /></div>
        <div className="form-group"><label>Why LooPeyi? *</label><textarea required placeholder="What draws you to this specific problem and project?" /></div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>
          {loading ? 'Sending…' : 'Apply to Join'}
        </button>
      </form>
    </div>
  );
}

function ResearcherForm() {
  const { submitted, loading, handleSubmit } = useFormSubmit();
  if (submitted) return <SuccessMessage heading="Proposal received!" body="We will respond within 48 hours." />;
  return (
    <div className="contact-form fade-up">
      <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Research Partnership</h3>
      <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>LooPeyi is a live deployment of closed-loop fintech for financial inclusion. We welcome academic collaboration.</p>
      <Alert variant="blue" icon={<Info size={15} />} style={{ marginBottom: 20 }}>
        We have existing connections to CMU Africa's Upanzi Network (Gates Foundation-funded) and are open to joint research on mobile money security, financial inclusion, and IoT in education.
      </Alert>
      <form onSubmit={handleSubmit}>
        <div className="form-group"><label>Name *</label><input type="text" required placeholder="Your full name" /></div>
        <div className="form-row">
          <div className="form-group"><label>Institution *</label><input type="text" required placeholder="University or research lab" /></div>
          <div className="form-group"><label>Email *</label><input type="email" required placeholder="you@university.edu" /></div>
        </div>
        <div className="form-group"><label>Research Area</label><input type="text" placeholder="e.g. Mobile money security, financial inclusion, IoT" /></div>
        <div className="form-group"><label>Proposed collaboration</label><textarea placeholder="How would you like to work together?" /></div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>
          {loading ? 'Sending…' : 'Propose Collaboration'}
        </button>
      </form>
    </div>
  );
}

const formComponents: Record<AudienceTab, React.ReactElement> = {
  general:    <GeneralForm />,
  investor:   <InvestorForm />,
  school:     <SchoolForm />,
  cofounder:  <CoFounderForm />,
  researcher: <ResearcherForm />,
};

export default function Contact() {
  useFadeUp();
  const location = useLocation();
  const [active, setActive] = useState<AudienceTab>('general');

  useEffect(() => {
    if (location.hash === '#investors') setActive('investor');
    else if (location.hash === '#schools') setActive('school');
  }, [location.hash]);

  return (
    <>
      <PageHero
        label="Get in Touch"
        labelColor="var(--green)"
        title={<>Let's build something<br />that actually matters</>}
        sub="Whether you are an investor, a school, a co-founder, or a researcher — we want to hear from you."
      />

      <section className="section-white content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="ci-card fade-up">
                <div className="ci-icon" style={{ background: 'var(--blue-l)', color: 'var(--blue)' }}><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hello@loopeyi.com">hello@loopeyi.com</a>
                  <p>We respond within 24 hours</p>
                </div>
              </div>
              <div className="ci-card fade-up">
                <div className="ci-icon" style={{ background: 'var(--green-l)', color: 'var(--green)' }}><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Kigali, Rwanda</p>
                  <p>Carnegie Mellon University Africa</p>
                </div>
              </div>
              <div className="ci-card fade-up">
                <div className="ci-icon" style={{ background: 'var(--orange-l)', color: 'var(--orange)' }}><GraduationCap size={20} /></div>
                <div>
                  <h4>Research Affiliation</h4>
                  <p>CMU Africa / Upanzi Network</p>
                  <p>Kigali Innovation City</p>
                </div>
              </div>

              <div style={{ marginTop: 8 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
                  Who we want to hear from
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <RichCard id="schools"    accentColor="var(--green)"  title="Boarding Schools" body="Looking to remove cash management from your administration and give students a better experience? Let's pilot LooPeyi at your school."   style={{ padding: '18px 18px 18px 24px' }} />
                  <RichCard id="investors"  accentColor="var(--blue)"   title="Investors"        body="Pre-seed stage. Seeking $50K to build and deploy a pilot at 3 schools. Full pitch deck and financial model available."                style={{ padding: '18px 18px 18px 24px' }} />
                  <RichCard                 accentColor="var(--purple)"  title="Co-Founders"      body="We are looking for a technical co-founder and an operations lead. If you understand African fintech or school operations, let's talk." style={{ padding: '18px 18px 18px 24px' }} />
                  <RichCard                 accentColor="var(--orange)"  title="Researchers"      body="We welcome research partnerships, especially with CMU Upanzi Network, MIT D-Lab, and AFReLA. LooPeyi is a live deployment of closed-loop fintech." style={{ padding: '18px 18px 18px 24px' }} />
                </div>
              </div>
            </div>

            <div>
              <div className="audience-tabs">
                {tabs.map(({ id, label }) => (
                  <button key={id} className={`atab${active === id ? ' active' : ''}`} onClick={() => setActive(id)}>
                    {label}
                  </button>
                ))}
              </div>
              {formComponents[active]}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

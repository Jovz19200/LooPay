import { useFadeUp } from '../hooks/useFadeUp';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import ProblemCard from '../components/ProblemCard';
import StepListItem from '../components/StepListItem';
import StatBox from '../components/StatBox';
import Alert from '../components/Alert';

const brokenCycle = [
  { num: 1, bg: 'var(--muted)', title: 'Visiting day arrives', body: 'Parents travel to school — often from far away. They hand cash to their child or directly to the school administration. There is no official record, no receipt, no confirmation of the amount received.', icon: '🚌' },
  { num: 2, bg: 'var(--orange)', title: 'Admin takes custody of all funds', body: 'The school administration collects student money and holds it in a cash box or informal ledger. Students cannot access it independently. There is no audit trail.', icon: '🏦' },
  { num: 3, bg: 'var(--red)', title: 'Student needs money. Bureaucracy begins.', body: 'When a student needs funds — for soap, a pen, medical needs — they must formally request it from an administrator. The administrator decides whether the need is "valid." The student is often told to come back later.', icon: '⏳' },
  { num: 4, bg: 'var(--red)', title: '"Come back Friday."', body: 'Request Wednesday. Receive Friday. This is not hypothetical — it is the lived experience of boarding school students across Rwanda. Urgent needs (medicine, sanitary products, emergency items) simply go unmet.', icon: '😔' },
  { num: 5, bg: 'var(--muted)', title: 'Parents remain completely blind', body: 'The parent who sent money has no idea if it was received, how much remains, or how it was spent. If they cannot attend visiting day, they send money through third parties — with no tracking whatsoever.', icon: '👁️' },
];

const painPoints = [
  { icon: '🏦', title: 'Embezzlement risk', body: 'Administrators have run away with students\' money — with no accountability or legal recourse available to parents. Cash held by a third party with no receipts is vulnerable by design.', accent: 'var(--red)' },
  { icon: '⏳', title: 'Arbitrary delays', body: 'Students wait days for access to their own money. Administrators control when funds are released based on their availability and judgement — not the student\'s actual need.', accent: 'var(--orange)' },
  { icon: '😤', title: 'Dignity violation', body: 'Students must justify every request to an authority figure. "I need soap." "I need a new pen." "I need medicine." This is humiliating, exhausting, and completely unnecessary.', accent: 'var(--yellow)' },
  { icon: '👁️', title: 'Zero parental visibility', body: 'Parents send money without confirmation it arrived. They have no balance visibility, no spending history, and no way to know if their child is financially okay between visits.', accent: 'var(--purple)' },
  { icon: '🛑', title: 'No spending infrastructure', body: 'Even when students have money, there is nowhere cashless to spend it on campus. No vending machines. No canteen POS. Every purchase requires cash, which means going through admin again.', accent: 'var(--blue)' },
  { icon: '📵', title: 'No mobile access', body: 'Students in boarding schools are prohibited from carrying mobile phones. This cuts them off from all existing mobile money solutions — making digital financial inclusion impossible without a card-based alternative.', accent: 'var(--green)' },
];

const scaleStats = [
  { value: '100,000+', label: 'Students affected in Rwanda\'s boarding schools', color: 'var(--red)' },
  { value: '400+', label: 'Boarding secondary schools in Rwanda', color: 'var(--orange)' },
  { value: '3×', label: 'Terms per year — problem repeats every term', color: 'var(--purple)' },
  { value: '$0', label: 'Technology currently deployed to fix this', color: 'var(--blue)' },
];

export default function Problem() {
  useFadeUp();

  return (
    <>
      <PageHero
        label="The Problem"
        labelColor="var(--red)"
        title={<>A system that fails students<br />every single term</>}
        sub="Rwanda's boarding schools run on visiting-day cash and blind trust in administration. The consequences are real, daily, and avoidable."
      />

      {/* Broken cycle */}
      <section className="section-white content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--red)' }}>How it works today</div>
          <h2 className="section-title">The broken cash cycle</h2>
          <p className="section-sub">Every term, the same broken process repeats in hundreds of boarding schools across Rwanda.</p>
          <div className="step-list">
            {brokenCycle.map(({ num, bg, title, body, icon }) => (
              <StepListItem key={num} num={num} numBg={bg} title={title} body={body} icon={icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-light content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--red)' }}>Core Pain Points</div>
          <h2 className="section-title">Five failures. One broken system.</h2>
          <div className="problem-cards">
            {painPoints.map(({ icon, title, body, accent }) => (
              <ProblemCard key={title} icon={icon} title={title} body={body} accentColor={accent} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="big-quote">
            "I needed money on Wednesday.<br />I got it on <em>Friday</em>."
          </blockquote>
          <p className="quote-attr">— A Rwandan boarding school student</p>
          <p className="quote-follow">100,000+ students experience this every single term.</p>
        </div>
      </section>

      {/* Scale */}
      <section className="section-white content-section">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--blue)' }}>The Scale</div>
          <h2 className="section-title">This is not a small problem</h2>
          <div className="stats-row">
            {scaleStats.map(({ value, label, color }) => (
              <StatBox key={label} value={value} label={label} color={color} />
            ))}
          </div>
          <Alert variant="orange" icon="⚠️">
            <strong>The administration is not always the enemy.</strong> Most school administrators are overwhelmed. They manage dozens of students' cash with no tools, no systems, and no training. LooPeyi solves the problem for them too — removing the burden and liability of holding student funds entirely.
          </Alert>
        </div>
      </section>

      <CTASection
        heading="There is a better way."
        sub="LooPeyi replaces this entire broken system with a digital payment ecosystem that works for students, parents, and schools simultaneously."
        buttons={[
          { to: '/solution', label: 'See the Solution →', variant: 'primary' },
          { to: '/how-it-works', label: 'How It Works', variant: 'ghost' },
        ]}
      />
    </>
  );
}

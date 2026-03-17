import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        background: 'var(--bg)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            background: 'var(--blue-l)',
            color: 'var(--blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 28px',
          }}
        >
          <FileQuestion size={32} />
        </div>

        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1,
            background: 'linear-gradient(135deg, var(--blue), var(--purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 16,
          }}
        >
          404
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 24,
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: 12,
          }}
        >
          Page not found
        </h1>

        <p
          style={{
            fontSize: 15,
            color: 'var(--muted)',
            lineHeight: 1.7,
            marginBottom: 36,
          }}
        >
          The page you are looking for does not exist or may have been moved.
          Head back to the homepage and continue from there.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            className="btn btn-primary"
            style={{ gap: 8 }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

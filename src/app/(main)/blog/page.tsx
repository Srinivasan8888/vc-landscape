import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Opinion — IndianVCs',
  description: 'Insights, guides and news for the venture capital community.',
}

export default function BlogPage() {
  return (
    <div className="page" style={{ padding: '24px 24px 64px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">·</span>
        <span style={{ color: 'var(--ink)' }}>Opinion</span>
      </div>

      <header
        style={{
          borderTop: '2px solid var(--ink)',
          borderBottom: '1px solid var(--ink)',
          padding: '20px 0',
          marginBottom: 28,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 'var(--fs-tag)',
            textTransform: 'uppercase',
            letterSpacing: '0.24em',
            color: 'var(--red)',
            marginBottom: 8,
          }}
        >
          Op-Ed Desk
        </div>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 900,
            fontSize: 'var(--fs-name)',
            color: 'var(--ink)',
            lineHeight: 1.1,
          }}
        >
          Opinion
        </h1>
      </header>

      <div className="empty" style={{ padding: 64 }}>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.4rem',
            color: 'var(--ink)',
            fontStyle: 'italic',
            marginBottom: 10,
          }}
        >
          The column goes to press shortly.
        </p>
        <p style={{ fontSize: 'var(--fs-body)' }}>
          Insights, guides, and commentary for the venture capital community.
          Subscribe to The Dispatch to be notified when it runs.
        </p>
        <div style={{ marginTop: 20 }}>
          <Link href="/newsletter" className="btn btn--primary">
            Subscribe to The Dispatch
          </Link>
        </div>
      </div>
    </div>
  )
}

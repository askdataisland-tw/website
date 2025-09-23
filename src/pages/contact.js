import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact" description="聯絡我們">
      <main style={{padding: '4rem 0', maxWidth: 600, margin: '0 auto', textAlign: 'center'}}>
        <h1 style={{color: '#1976d2', fontWeight: 700, marginBottom: '2rem'}}>聯絡我們</h1>
        <p style={{fontSize: '1.1rem', color: '#333', marginBottom: '2rem'}}>有任何合作或技術需求，歡迎與我們聯絡！</p>
        <div style={{background: '#f7f7f7', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(44,62,80,0.08)', display: 'inline-block'}}>
          <div style={{fontWeight: 700, color: '#2e7d32', fontSize: '1.1rem', marginBottom: '1rem'}}>Email</div>
          <a href="mailto:info@example.com" style={{color: '#1976d2', fontSize: '1.1rem'}}>info@example.com</a>
        </div>
      </main>
    </Layout>
  );
}

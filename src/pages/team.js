import React from 'react';
import Layout from '@theme/Layout';

const members = [
  { name: '王小明', role: '執行長', img: require('../../static/img/docusaurus.png').default },
  { name: '李美麗', role: '技術總監', img: require('../../static/img/undraw_docusaurus_tree.svg').default },
  { name: '陳大志', role: '產品經理', img: require('../../static/img/undraw_docusaurus_mountain.svg').default },
];

export default function Team() {
  return (
    <Layout title="Our Team" description="團隊成員">
      <main style={{padding: '4rem 0', maxWidth: 900, margin: '0 auto'}}>
        <h1 style={{color: '#1976d2', fontWeight: 700, marginBottom: '2rem'}}>團隊成員</h1>
        <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
          {members.map((m, i) => (
            <div key={i} style={{background: '#f7f7f7', borderRadius: '16px', boxShadow: '0 2px 12px rgba(44,62,80,0.08)', padding: '2rem', width: '220px', textAlign: 'center'}}>
              <img src={m.img} alt={m.name} style={{width: '80px', borderRadius: '50%', marginBottom: '1rem'}} />
              <div style={{fontWeight: 700, color: '#2e7d32', fontSize: '1.2rem'}}>{m.name}</div>
              <div style={{color: '#333', fontSize: '1rem'}}>{m.role}</div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

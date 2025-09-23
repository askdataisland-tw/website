import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="關於我們">
      <main style={{padding: '4rem 0', maxWidth: 900, margin: '0 auto'}}>
        <h1 style={{color: '#1976d2', fontWeight: 700, marginBottom: '2rem'}}>關於我們</h1>
        <p style={{fontSize: '1.2rem', color: '#333', lineHeight: 1.7, marginBottom: '2rem'}}>
          數嶼科技致力於推動環境資料的收集與分析，讓每個人都能參與生態保育與科學研究。
          透過開放平台，分享聲音、影像與環境數據，促進社群交流與知識傳遞。
        </p>
        <h2 style={{color: '#2e7d32', fontWeight: 700, marginTop: '2rem'}}>我們的願景</h2>
        <ul style={{fontSize: '1.1rem', color: '#333', lineHeight: 2}}>
          <li>串連生態、環境與社群</li>
          <li>推動資料開放與共享</li>
          <li>促進跨領域合作與創新</li>
        </ul>
      </main>
    </Layout>
  );
}

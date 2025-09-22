import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * props
 * - title: 文字標題
 * - text: 文字內容（string 或 JSX）
 * - img: 圖片路徑（放 /static/img，這裡填 '/img/xxx.jpg'）
 * - imgAlt: 圖片替代文字
 * - reverse: 是否左右交換（true 時：右圖左文）
 * - ctas: [{label, to|href}] 產 CTA 按鈕
 */
export default function SplitSection({ title, text, img, imgAlt, reverse=false, ctas=[] }) {
  const imgUrl = useBaseUrl(img); // 確保在 GitHub Pages 的 baseUrl 下也能正確載圖
  return (
    <section className={clsx(styles.split, reverse && styles.reverse)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6', styles.colImg)}>
            <img className={styles.img} src={imgUrl} alt={imgAlt || ''} loading="lazy" />
          </div>
          <div className={clsx('col col--6', styles.colText)}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {typeof text === 'string' ? <p className={styles.text}>{text}</p> : text}
            {ctas.length > 0 && (
              <div className={styles.ctaRow}>
                {ctas.map((c, i) =>
                  c.to ? (
                    <Link key={i} className="button button--primary button--sm" to={c.to}>{c.label}</Link>
                  ) : (
                    <a key={i} className="button button--primary button--sm" href={c.href} target="_blank" rel="noreferrer">{c.label}</a>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

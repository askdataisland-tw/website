import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

/** 新增：四張卡片的資料 */
const CardsList = [
  {
    title: 'Remote Cameras',
    text: '管理與標記相機影像集，快速完成物種驗證與篩選。',
    to: '/docs/category/remote-cameras',
    // Icon: require('@site/static/img/icon-camera.svg').default, // 若有圖示可打開
  },
  {
    title: 'Acoustic Data',
    text: '標註頻譜、批次處理音檔，協助加速辨識與審核。',
    to: '/docs/category/acoustic',
    // Icon: require('@site/static/img/icon-audio.svg').default,
  },
  {
    title: 'Avian Point Counts',
    text: '整合聽覺計數與聲學資料，瀏覽、下載並彙整分析。',
    to: '/docs/category/avian-point-counts',
    // Icon: require('@site/static/img/icon-bird.svg').default,
  },
  {
    title: 'Metadata',
    text: '集中管理站點、設備、時間等中繼資料。',
    to: '/docs/category/metadata',
    // Icon: require('@site/static/img/icon-metadata.svg').default,
  },
];

/** 新增：卡片元件 */
function Card({ title, text, to, href, Icon }) {
  const hasLink = Boolean(to || href);
  const Cmp = to ? Link : 'a';
  const cmpProps = to ? { to } : { href, target: '_blank', rel: 'noreferrer' };

  return (
    <div className={clsx('col col--3')}>
      <div className={clsx('card', styles.card)}>
        {Icon ? (
          <div className="text--center">
            <Icon className={styles.cardIcon} role="img" />
          </div>
        ) : null}
        <div className="padding-horiz--md">
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardText}>{text}</p>
          {hasLink && (
            <Cmp className={clsx('button button--sm button--outline', styles.cardCta)} {...cmpProps}>
              Learn more
            </Cmp>
          )}
        </div>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>   
      
      {/* 新增的四卡片 Section */}
      <section className={styles.cardsSection}>
        <div className="container">
          <Heading as="h2" className="text--center">What you can do</Heading>
          <p className={clsx('text--center', styles.cardsSub)}>
            快速進入各模組的教學與文件。
          </p>
          <div className="row">
            {CardsList.map((props, idx) => (
              <Card key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

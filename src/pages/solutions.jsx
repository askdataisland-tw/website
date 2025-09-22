import Layout from '@theme/Layout';
import SplitSection from '@site/src/components/SplitSection';

export default function SolutionsPage() {
  return (
    <Layout title="Solutions" description="Our environmental data solutions">
      <SplitSection
        title="All your sensor data, one platform"
        text="Manage, store, process, and share environmental sensor data."
        img="/img/hero.jpg"
        imgAlt="Sensors in the field"
        ctas={[{label: 'Get Started', to: '/docs/intro'}, {label: 'Contact', href: 'mailto:info@example.com'}]}
      />

      <SplitSection
        reverse
        title="Process acoustics faster"
        text="Tag spectrograms and review species efficiently across large datasets."
        img="/img/acoustic.jpg"
        imgAlt="Acoustic spectrogram"
        ctas={[{label: 'Learn more', to: '/docs/category/acoustic'}]}
      />
    </Layout>
  );
}

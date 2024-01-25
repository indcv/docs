import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Industrial ready',
    Svg: require('@site/static/img/undraw_maker_launch_re_rq81.svg').default,
    description: (
      <>
        The library was designed to meet the needs of the industry, with all features in mind.
      </>
    ),
  },
  {
    title: 'Many backends',
    Svg: require('@site/static/img/undraw_dev_productivity_re_fylf.svg').default,
    description: (
      <>
        Use powerful computer vision libraries without manually tuning them.
      </>
    ),
  },
  {
    title: 'CV pipelines',
    Svg: require('@site/static/img/undraw_software_engineer_re_tnjc.svg').default,
    description: (
      <>
        Build your processing pipelines without headaches.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

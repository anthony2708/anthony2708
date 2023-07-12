import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/index.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import HomepageFeatures from '../components/HomepageFeatures';
import ContactFeatures from '../components/ContactFeatures';

function HomepageHeader() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => { setDateState(new Date()); }, 1000);
    return () => { clearInterval(timer); };
  });
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {
            dateState.toLocaleTimeString('vi-VN', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })
          }
        </h1>
        <p className="hero__subtitle">
          {
            dateState.toLocaleDateString('vi-VN', {
              weekday: 'long',
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
          } ({
            dateState.toLocaleDateString('en-US', {
              weekday: 'long',
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })
          })
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id='homepage.button'>Giới thiệu - 5 phút ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Trang chủ',
      })}
      description={translate({
        id: 'homepage.desc',
        message: 'Anthony Bùi Lê Tuấn Anh',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ContactFeatures />
      </main>
    </ Layout>
  );
}

// import React from 'react';
import styles from '../../css/HomepageFeatures.module.css';
import gallery from '../../css/GalleryFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

type FeatureItem = {
    image: string;
    description: string;
}

const FeatureList: FeatureItem[] = [
    {
        image: "/img/graduation/1.jpg",
        description: "Picture 1"
    },
    {
        image: "/img/graduation/2.jpg",
        description: "Picture 2"
    },
    {
        image: "/img/graduation/3.jpg",
        description: "Picture 3"
    },
    {
        image: "/img/graduation/pexels-quang-nguyen-vinh-6877795.jpg",
        description: "Picture 4"
    }
]

function Feature({ image, description }: FeatureItem) {
    return (
        <div className={clsx('col col--3')}>
            <div className="text--center">
                <img
                    className={gallery.pictures}
                    alt={description}
                    src={useBaseUrl(image)}
                />
            </div>
        </div>
    );
}

export default function GalleryFeatures(): JSX.Element {
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
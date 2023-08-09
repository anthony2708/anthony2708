import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from '../../css/HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
    link: string;
};


const FeatureList: FeatureItem[] = [
    {
        title: "Youtube Downloader",
        image: "/img/english/youtube_logo.svg",
        description: (
            <>
                Dịch vụ tải xuống các video từ YouTube, một cách đơn giản và an toàn.
            </>
        ),
        link: "/services/youtube"
    },
    {
        title: "URL Shortener",
        image: "/img/english/url_logo.jpg",
        description: (
            <>
                Dịch vụ rút gọn URL, giúp chia sẻ đường dẫn với người khác.
            </>
        ),
        link: "/services/url"
    },
    {
        title: "Scoreboard Review",
        image: "img/english/scoreboard.jpg",
        description: (
            <>
                Dịch vụ theo dõi điểm thi Tốt nghiệp THPT năm 2023,
                giúp bạn đưa ra quyết định chính xác nhất.
            </>
        ),
        link: "/services/scoreboard"
    },
    {
        title: "English L&T",
        image: "img/english/english_logo.jpg",
        description: (
            <>
                Dịch vụ dạy và học tiếng Anh trực tuyến, phục vụ nhu cầu của
                giáo viên và học viên. Hiện đang được xây dựng trên hệ thống chính.
            </>
        ),
        link: "/services/courses"
    },
    {
        title: "Images Gallery",
        image: "img/english/gallery.jpg",
        description: (
            <>
                Dịch vụ lưu trữ ảnh trực tuyến, giúp bạn dễ dàng lưu trữ những tấm ảnh tuyệt đẹp.
                Hiện đang tích hợp về hệ thống chính.
            </>
        ),
        link: "https://services.builetuananh.name.vn/gallery"
    },
    {
        title: "2048 Game",
        image: "img/english/2048_logo.svg",
        description: (
            <>
                Dịch vụ chơi game 2048 trực tuyến, giúp bạn giải trí sau giờ làm việc, học tập.
                Hiện đang được xây dựng dưới dạng ứng dụng.
            </>
        ),
        link: "https://services.builetuananh.name.vn/games"
    }
]

function Feature({ title, image, description, link }: FeatureItem) {
    return (
        <div className={clsx('col col--4 margin-vert--md')}>
            <div className="text--center">
                <img
                    className={styles.featureSvg}
                    alt={title}
                    src={useBaseUrl(image)}
                />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="button button--primary button--md "
                    href={link}>Truy cập</Link>
            </div>
        </div>
    );
}

export default function ServicesFeatures(): JSX.Element {
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
    )
}
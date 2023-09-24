// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Anthony Bùi Lê Tuấn Anh",
  tagline: "❤ Hữu xạ tự nhiên hương ❤",
  url: "https://www.builetuananh.name.vn",
  baseUrl: "/",
  staticDirectories: ["public"],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.png",
  organizationName: "anthony2708", // Usually your GitHub org/user name.
  projectName: "webapp", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
    localeConfigs: {
      vi: {
        htmlLang: "vi-VN",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "blog",
          path: "./blog/tech",
          authorsMapPath: "../authors.yml",
          feedOptions: {
            type: "all",
            language: "vi-VN",
            title: "Tech Blog",
            description: "Tech Blog từ Anthony Bùi Lê Tuấn Anh.",
            copyright: `Copyright © ${new Date().getFullYear()} Anthony Bui Le Tuan Anh.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 5 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 5),
                ...rest,
              });
            }
          }
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "second-blog",
        routeBasePath: "collab",
        path: "./blog/collaboration",
        authorsMapPath: "../authors.yml",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "third-blog",
        routeBasePath: "hlk",
        path: "./blog/HLK_MyYouth",
        authorsMapPath: "../authors.yml",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "fourth-blog",
        routeBasePath: "spring",
        path: "./blog/SpringStories",
        authorsMapPath: "../authors.yml",
      },
    ],
    [require.resolve('docusaurus-lunr-search'), {
      languages: ['vi', 'en'],
    }]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "Bùi Lê Tuấn Anh",
        logo: {
          alt: "Logo",
          src: "img/favicon/ET_Logo.png",
        },
        items: [
          {
            type: "localeDropdown",
            position: "left",
          },
          {
            label: "Giới thiệu",
            type: "doc",
            docId: "intro",
            position: "left",
          },
          {
            type: "dropdown",
            label: "Blog",
            position: "left",
            items: [
              {
                label: "Tech Blog",
                to: "/blog",
              },
              {
                label: "The Collab Team",
                to: "/collab",
              },
              {
                label: "Hồi ký Hoàng chuyên",
                to: "/hlk",
              },
              {
                label: "Câu chuyện mùa xuân",
                to: "/spring",
              },
            ],
          },
          {
            label: "Dịch vụ",
            position: "left",
            to: "/services",
          },
          {
            href: "https://www.builetuananh.name.vn/blog/atom.xml",
            position: "right",
            className: "header-rss-link", // custom logo in custom.css
            "aria-label": "RSS",
          },
        ],
      },
      announcementBar: {
        id: "announcement-bar",
        content:
          "⭐ <b>Thông báo</b>: Ra mắt Cổng trạng thái mới (A brand new Status Check is here): <a href='https://status.builetuananh.name.vn/' target='_blank' rel='noopener noreferrer'><b>Truy cập/Access</b></a> ⭐",
        backgroundColor: "#a4e4dc",
        textColor: "#222",
        // backgroundColor: "#222",
        // textColor: "#fff",
        isCloseable: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Trang chủ",
            items: [
              {
                label: "Giới thiệu cá nhân",
                to: "/docs/intro",
              },
              {
                label: "Tài liệu tham khảo",
                to: "/docs/resources",
              },
              {
                label: "Cổng dịch vụ",
                to: "/services",
              },
            ],
          },
          {
            title: "Blog",
            items: [
              {
                label: "Tech Blog",
                to: "/blog",
              },
              {
                label: "The Collab Team",
                to: "/collab",
              },
              {
                label: "Hồi ký Hoàng chuyên",
                to: "/hlk",
              },
              {
                label: "Câu chuyện mùa xuân",
                to: "/spring",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anthony Bùi Lê Tuấn Anh. Built with ❤ & <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["docker"],
      },
    }),
};

module.exports = config;

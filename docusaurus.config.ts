import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
  title: "Anthony Bùi Lê Tuấn Anh",
  tagline: "❤ Hữu xạ tự nhiên hương ❤",
  url: "https://portal.builetuananh.name.vn",
  baseUrl: "/",
  staticDirectories: ["public"],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.png",
  organizationName: "anthony2708", // Usually your GitHub org/user name.
  projectName: "anthony2708", // Usually your repo name.
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
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        // docs: false,
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
            },
          },
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      } satisfies Preset.Options,
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
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        language: ["vi", "en"],
        hashed: true,
        blogRouteBasePath: ["/blog", "/hlk", "/collab", "/spring"],
        searchResultLimits: 5,
        searchBarShortcutHint: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "BLTA",
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
          to: "/docs/intro",
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
        "⭐ <b>Thông báo</b>: Theo dõi series 90 ngày DevOps trên website <b>90days.builetuananh.name.vn</b> (Catch up with 90Days on our official website.) ⭐",
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
      additionalLanguages: ["docker", "csharp", "bash", "java"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

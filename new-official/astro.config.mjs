// Main configuration file for Astro project
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";

// Importing Starlight and its plugins
import starlight from "@astrojs/starlight";
import expressiveCode from 'astro-expressive-code';
import starlightImageZoom from 'starlight-image-zoom';
import starlightCoolerCredit from 'starlight-cooler-credit'

let highlighter;
async function getHighlighter() {
  if (!highlighter) {
    const { getHighlighter } = await import("shiki");
    highlighter = await getHighlighter({ theme: "one-dark-pro" });
  }
  return highlighter;
}

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://www.builetuananh.name.vn",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  vite: { plugins: [tailwindcss()] },
  integrations: [
    react(),
    sitemap(),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        {
          "@/shortcodes/Tabs": [[ "default", "NewTabs" ]],
        },
        {
          "@/shortcodes/Tab": [[ "default", "NewTab" ]]
        }
      ],
    }),
  expressiveCode(),
  mdx(), 
  starlight({
  plugins: [
    starlightCoolerCredit({
          // credit: 'Made with ❤️ by Anthony Bùi Lê Tuấn Anh',
          credit: {
            title: '© Copyright 2025',
            href: 'https://www.builetuananh.name.vn',
            description: 'Bản quyền thuộc về Bùi Lê Tuấn Anh. Thực hiện năm 2025',
          }
        }),
    starlightImageZoom({
      showCaptions: false
    }),
  ],  
  title: "Anthony Bùi Lê Tuấn Anh",
  logo: {
    src: './public/ET_Logo.png',
    replacesTitle: true
  },
  favicon: '/favicon.png',
  social: [
        {icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/buile.tuananh'},
        {icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/yourlove.anthony2708/'},
        {icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/anthony2708/'},
        {icon: 'github', label: 'Github', href: 'https://github.com/anthony2708'},
        {icon: 'youtube', label: 'Youtube', href: 'https://www.youtube.com/@yourlove.anthony2708'},
        {icon: 'bitbucket', label: 'Bitbucket', href: 'https://bitbucket.org/19120163/'},
        {icon: 'email', label: 'Email', href: 'mailto:builetuananh2708@gmail.com'},
        {icon: 'phone', label: 'Phone', href: 'tel:+84937826135'},
	  ],
  //  expressiveCode: false,
   defaultLocale: 'root',
       locales: {
          root: {
              label: 'Việt ngữ',
              lang: 'vi'
          }
       },
   disable404Route: true, 
   sidebar: [
  {
        label: 'Trở về Trang chủ',
        link: '/',
	  },{
        label: '90 ngày DevOps',
        items: [
          { label: 'Trang nhà', link: '/90days' },
          { label: 'Ngày 0 - Khởi đầu', link: '/90days/day0' },
          {
              label: 'Ngày 1 - Giới thiệu',
              link: '/90days/day1',
          },
          {
              label: 'Giai đoạn 1 - Tại sao lại phải DevOps?',
              link: '90days/devops' 
          },
          {
              label: 'Giai đoạn 2 - Học lập trình với DevOps',
              link: '90days/golang' 
          },
          {
              label: 'Giai đoạn 3 - Linux và DevOps',
              link: '90days/linux', 
          },
          {
              label: 'Giai đoạn 4 - Mạng máy tính',
              link: '90days/network' 
          },
          {
              label: 'Giai đoạn 5 - Điện toán đám mây',
              link: '90days/cloud' 
          },
          {
              label: 'Giai đoạn 6 - Quản lý phiên bản',
              link: '/90days/git',
          },
          {
              label: 'Giai đoạn 7 - Bộ chứa và Ảo hóa',
              link: '/90days/containers',
              badge: { text: 'Mới', variant: 'tip' },
              // badge: { text: 'Chưa hoàn thiện', variant: 'caution' },
          },
          {
              label: 'Tài liệu tham khảo',
              autogenerate: { directory: '90days/reference' },
          }
      ]
      },]
}), 
],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
    highlighter: getHighlighter,
  },
  
});
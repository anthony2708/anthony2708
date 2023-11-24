import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	integrations: [
		// starlightBlog({
		// 	postCount: 10,
		// 	recentPostCount: 5,
		// 	authors: {
		// 		anthony: {
		// 			name: "Anthony Bùi Lê Tuấn Anh",
		// 			title: "VNUHCM-ITUS Alumnus/Tech Blog",
		// 			url: "https://www.facebook.com/buile.tuananh",
		// 			picture: "https://github.com/anthony2708.png"
		// 		}
		// 	}
		// }),
		starlight({
			title: 'Bùi Lê Tuấn Anh',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			logo: {
				src: './public/ET_Logo.png'
			},
			favicon: '/favicon.png',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Việt ngữ',
					lang: 'vi',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: {
				facebook: 'https://www.facebook.com/buile.tuananh/',
				instagram: 'https://www.instagram.com/yourlove.anthony2708/',
				github: 'https://github.com/anthony2708/',
				linkedin: 'https://www.linkedin.com/in/anthony2708/',
				youtube: 'https://www.youtube.com/@yourlove.anthony2708/',
				telegram: 'tel:+84937826135',
				email: 'mailto:builetuananh2708@gmail.com',
				bitbucket: 'https://bitbucket.org/19120163/',
			},
			// components: {
			// 	MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
			// 	Sidebar: 'starlight-blog/overrides/Sidebar.astro',
			// 	ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro',
			// 	Navbar: 'starlight-blog/overrides/Navbar.astro',
			// 	Tabs: 'starlight-blog/overrides/Tabs.astro',
			// 	Tab: 'starlight-blog/overrides/Tab.astro',
			// 	TabPanels: 'starlight-blog/overrides/TabPanels.astro',
			// 	TabPanel: 'starlight-blog/overrides/TabPanel.astro',
			// 	PostList: 'starlight-blog/overrides/PostList.astro',
			// 	RecentPostList: 'starlight-blog/overrides/RecentPostList.astro',
			// 	Post: 'starlight-blog/overrides/Post.astro',
			// 	PostContent: 'starlight-blog/overrides/PostContent.astro',
			// 	PostListContent: 'starlight-blog/overrides/PostListContent.astro',
			// 	RecentPostListContent: 'starlight-blog/overrides/RecentPostListContent.astro',
			// },
			sidebar: [
				{
					label: '🏡 Thông tin tổng hợp',
					link: '/guides/intro/',
					translations: {
						'en': '🏡 Getting Started',
					},
				},
				{
					label: '📄 Tài liệu tham khảo',
					link: '/guides/resources/',
					translations: {
						'en': '📄 All Resources',
					},
				},
				{
					label: 'Hướng dẫn Cổng dịch vụ',
					collapsed: true,
					autogenerate: { directory: 'portal' },
					translations: {
						'en': 'Services Portal User Guide',
					},
				},
			],
		}),
	],
});

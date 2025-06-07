// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightSidebarTopics from 'starlight-sidebar-topics';
// import starlightBlog from 'starlight-blog'
// import starlightVideos from 'starlight-videos'
// import catppuccin from "starlight-theme-catppuccin";
import starlightCoolerCredit from 'starlight-cooler-credit'

// https://astro.build/config
export default defineConfig({
  // base: 'anthony2708',
  site: 'https://www.builetuananh.name.vn',
  image: {
	service: passthroughImageService(),
  },
  redirects: {
	'/': '/home',
  },
  integrations: [starlight({
	plugins: [
		// catppuccin({ dark: 'mocha-yellow', light: 'latte-green' }),
		// starlightBlog(),
		// starlightVideos(),
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
		starlightSidebarTopics([
			{
				label: "Trang chủ",
				link: '/home',
				icon: 'heart',
				items: [
					{
						label: "🌟 Giao diện mới!",
						items: ['home']
					}, 
					{
						label: "Thử nghiệm Giao diện 2026",
						link: 'https://beta.builetuananh.name.vn',
					}
				]
			},
			{
				label: "Wiki & Resources",
				link: 'https://github.com/anthony2708/anthony2708/wiki',
				icon: 'document',
			},
			{
				label: "Portal/Station",
				link: 'https://portal.builetuananh.name.vn',
				icon: 'open-book',
			}, 
			{
				label: "Status by Upptime",
				link: 'https://status.builetuananh.name.vn',
				icon: 'random',
			}
		],{
		exclude: ['/videos','/videos/**/*', '/blog', '/blog/**/*'],
	})],
    title: "Anthony Bùi Lê Tuấn Anh",
    customCss: ['./src/tailwind.css'],
    logo: {
    	src: './public/ET_Logo.png',
		replacesTitle: true
    },
    favicon: './favicon.png',
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
    defaultLocale: 'root',
		locales: {
			root: {
				label: 'Việt ngữ',
				lang: 'vi'
			}
		},
    disable404Route: true,
	}),
	tailwind({
		applyBaseStyles: false,
  	}),
],});
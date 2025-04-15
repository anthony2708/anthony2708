// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightSidebarTopics from 'starlight-sidebar-topics';
// import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
  // base: 'anthony2708',
  site: 'https://www.builetuananh.name.vn',
  image: {
	service: passthroughImageService(),
  },
  integrations: [starlight({
	plugins: [
		// catppuccin({ dark: 'mocha-yellow', light: 'latte-green' }),
		starlightImageZoom({
			showCaptions: false
		}),
		starlightSidebarTopics([
			{
				label: "Trang chủ",
				link: '/',
				icon: 'heart',
			},
			{
				label: "Wiki & Resources",
				link: 'https://github.com/anthony2708/anthony2708/wiki',
				icon: 'document',
			},
			{
				label: '90 ngày cùng DevOps',
				link: '/90days',
				icon: 'confluence',
				items:[
					{
						label: 'Trang nhà',
						items: ['90days'],
					},
					{ 
						label: 'Nội dung chính',
					  	items: ['90days/day0', '90days/day1', '90days/devops', '90days/golang', '90days/linux', '90days/network', '90days/cloud', '90days/git', 
							'90days/containers', '90days/kubernetes'],
					},
					{
						label: 'Tài liệu tham khảo',
					  	autogenerate: { directory: '90days/reference' },
					}
				]
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
		])
	],
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
    // sidebar: [{
	// 	label: 'Trở về Trang chủ',
	// 	link: '/90days',
	// },{
	// 	label: '90 ngày DevOps',
	// 	items: [
	// 		{ label: 'Ngày 0 - Khởi đầu', link: '/90days/day0' },
	// 		{
	// 			label: 'Ngày 1 - Giới thiệu',
	// 			link: '/90days/day1',
	// 		},
	// 		{
	// 			label: 'Giai đoạn 1 - Tại sao lại phải DevOps?',
	// 			link: '90days/devops' 
	// 		},
	// 		{
	// 			label: 'Giai đoạn 2 - Học lập trình với DevOps',
	// 			link: '90days/golang' 
	// 		},
	// 		{
	// 			label: 'Giai đoạn 3 - Linux và DevOps',
	// 			link: '90days/linux', 
	// 		},
	// 		{
	// 			label: 'Giai đoạn 4 - Mạng máy tính',
	// 			link: '90days/network' 
	// 		},
	// 		{
	// 			label: 'Giai đoạn 5 - Điện toán đám mây',
	// 			link: '90days/cloud' 
	// 		},
	// 		{
	// 			label: 'Giai đoạn 6 - Quản lý phiên bản',
	// 			link: '/90days/git',
	// 		},
	// 		{
	// 			label: 'Giai đoạn 7 - Bộ chứa và Ảo hóa',
	// 			link: '/90days/containers',
	// 			badge: { text: 'Mới', variant: 'tip' },
	// 			// badge: { text: 'Chưa hoàn thiện', variant: 'caution' },
	// 		},
	// 		{
	// 			label: 'Tài liệu tham khảo',
	// 			autogenerate: { directory: '90days/reference' },
	// 		}
	// 	]
	// 	},]
	}),
	tailwind({
		applyBaseStyles: false,
  	})
],});
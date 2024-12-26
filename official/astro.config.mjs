// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // base: 'anthony2708',
  site: 'https://www.builetuananh.name.vn',

  integrations: [starlight({
    title: "BLTA",
    customCss: ['./src/tailwind.css'],
    logo: {
    	src: './public/ET_Logo.png',
		replacesTitle: true
    },
    favicon: './favicon.png',
    social: {
		facebook: 'https://www.facebook.com/buile.tuananh',
		instagram: 'https://www.instagram.com/yourlove.anthony2708/',
		linkedin: 'https://www.linkedin.com/in/anthony2708/',
		github: 'https://github.com/anthony2708',
		youtube: 'https://www.youtube.com/@yourlove.anthony2708',
		bitbucket: 'https://bitbucket.org/19120163/',
		email: 'mailto:builetuananh2708@gmail.com'
	},
    defaultLocale: 'root',
		locales: {
			root: {
				label: 'Việt ngữ',
				lang: 'vi'
			}
		},
    disable404Route: true,
    sidebar: [{
		label: 'Trở về Trang chủ',
		link: '/90days',
	},{
		label: '90 ngày DevOps',
		items: [
			{ label: 'Ngày 0 - Khởi đầu', link: '/90days/day0' },
			{
				label: 'Ngày 1 - Giới thiệu',
				link: '/90days/day1',
			},
			{
				label: 'Tại sao lại phải DevOps?',
				autogenerate: { directory: '90days/devops' }
			},
			{
				label: 'Học lập trình với DevOps',
				autogenerate: { directory: '90days/golang' }
			},
			{
				label: 'Linux và DevOps',
				autogenerate: { directory: '90days/linux' }
			},
			{
				label: 'Mạng máy tính',
				autogenerate: { directory: '90days/network' }
			},
			{
				label: 'Điện toán đám mây',
				autogenerate: { directory: '90days/cloud' }
			},
			{
				label: 'Giai đoạn 6 - Quản lý phiên bản',
				link: '/90days/git',
				badge: { text: 'Mới', variant: 'tip' },
			},
			{
				label: 'Giai đoạn 7 - Bộ chứa và Ảo hóa',
				link: '/90days/containers',
				badge: { text: 'Chưa hoàn thiện', variant: 'caution' },
			}
		]
		}, {
		label: 'Tài liệu tham khảo',
		items: [
			{
				label: 'Ngày 1 - Giới thiệu',
				link: '/90days/reference/day1',
			},
			{
				label: 'Tại sao lại phải DevOps?',
				autogenerate: { directory: '90days/reference/devops' }
			},
			{
				label: 'Học lập trình với DevOps',
				autogenerate: { directory: '90days/reference/golang' }
			},
			{
				label: 'Linux và DevOps',
				autogenerate: { directory: '90days/reference/linux' }
			},
			{
				label: 'Mạng máy tính',
				autogenerate: { directory: '90days/reference/network' }
			},
			{
				label: 'Điện toán đám mây',
				autogenerate: { directory: '90days/reference/cloud' }
			},
			{
				label: 'Giai đoạn 6 - Quản lý phiên bản',
				link: '/90days/reference/git',
				badge: { text: 'Mới', variant: 'tip' },
			}
		]}]
	}),
	tailwind({
		applyBaseStyles: false,
  })],
});
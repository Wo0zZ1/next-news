import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'

const geistSans = Roboto({
	variable: '--font-roboto',
	subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
	title: 'Новости Вики',
	description: 'Новостной портал Вики',
}

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode
	modal: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={`${geistSans.className} antialiased my-8`}>
				{children}
				{modal}
			</body>
		</html>
	)
}

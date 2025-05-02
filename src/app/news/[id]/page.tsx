import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { fetchNews, fetchNewsById } from '@/data'
import { getImage, parseDate } from '@/utils'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
	const data = await fetchNews()
	return data.map(item => ({ id: item.id.toString() }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params

	const newsData = await fetchNewsById(+id)

	if (!newsData) notFound()

	return (
		<div className='container mx-auto flex flex-col my-16'>
			<Image
				className='rounded-2xl self-center'
				width={864}
				height={600}
				src={getImage(newsData.attachments)}
				alt='preview'
			/>
			<div className='max-w-[864px] w-full mx-auto'>
				<p className='text-xl font-semibold mt-4 mb-2'>{newsData.type}</p>
				<h1 className='text-3xl font-semibold mt-4 mb-2'>{newsData.text.split('\n')[0]}</h1>
				<hr className='text-slate-600/30 mb-2' />
				{newsData.text
					.split('\n')
					.slice(1)
					.map((el, i) => (
						<p className='text-lg tracking-tight my-2' key={i}>
							{el}
						</p>
					))}
				<p>
					{newsData.attachments
						.filter(attachment => attachment.type === 'LINK')
						.map((attachment, i) => (
							<div key={i}>
								<p>{attachment.description}</p>
							</div>
						))}
				</p>
				<div className='flex gap-4 items-center justify-between'>
					<time className='block tracking-tighter py-4'>{parseDate(newsData.date)}</time>
					<Link
						href='/'
						className='text-xl font-medium px-4 py-2 transition-colors bg-cyan-600/50 hover:bg-cyan-600/65 active:bg-cyan-600/70 rounded-md'>
						На главную
					</Link>
				</div>
			</div>
		</div>
	)
}

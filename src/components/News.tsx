import { INews } from '@/data'
import { getImage, parseDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function News({ news: { attachments, date, id, text, type } }: { news: INews }) {
	const imagePreviewSrc = getImage(attachments)

	return (
		<Link
			className='transition-transform group hover:scale-102'
			href={`/news/${id}`}
			scroll={false}>
			<div className='bg-amber-300/10 shadow-2xl rounded-2xl h-full w-full flex flex-col justify-between p-4'>
				<div className=''>
					<Image
						className='transition-transform group-hover:scale-102 rounded-2xl aspect-video object-cover'
						width={800}
						height={100}
						src={imagePreviewSrc}
						alt='preview'
					/>
					<h2 className='text-xl font-semibold mt-4 mb-2'>{type}</h2>
					<p className='tracking-tight'>
						{text.length > 100 ? text.substring(0, 100) + '...' : text}
					</p>
				</div>
				<div>
					<time className='block tracking-tighter'>{parseDate(date)}</time>
				</div>
			</div>
		</Link>
	)
}

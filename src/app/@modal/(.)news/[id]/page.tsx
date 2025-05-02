'use client'

import { useParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { fetchNewsById, INews } from '@/data'
import { getImage, parseDate } from '@/utils'
import Image from 'next/image'

export default function NewsModal() {
	const router = useRouter()
	const { id } = useParams()

	const [newsData, setNewsData] = useState<INews | null>(null)

	const fetchData = useCallback(
		async (id: number) => {
			const data = await fetchNewsById(id)
			if (!data) return router.back()
			setNewsData(data)
		},
		[router],
	)

	useEffect(() => {
		if (typeof id === 'string' && typeof parseInt(id) === 'number') fetchData(parseInt(id))
	}, [id, fetchData])

	return (
		<div
			onClick={() => {
				router.back()
			}}
			className='fixed inset-0 bg-slate-600/40 backdrop-blur-xs flex items-center justify-center'>
			<div
				onClick={e => e.stopPropagation()}
				className='relative p-8 w-160 h-140 bg-white rounded-xl'>
				<button
					onClick={() => router.back()}
					className='top-2 right-2 cursor-pointer text-slate-400 hover:text-slate-600 active:hover:text-slate-800 transition-colors absolute'>
					<svg
						width='28'
						height='28'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M18 6L6 18M6 6L18 18'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
				</button>

				<div className='w-full h-full overflow-y-auto'>
					{!newsData ? (
						<span className='flex w-full h-full items-center justify-center text-xl'>
							Идёт загрузка...
						</span>
					) : (
						<>
							<Image
								className='rounded-2xl aspect-video object-cover'
								width={576}
								height={400}
								src={getImage(newsData.attachments)}
								alt='preview'
							/>
							<h2 className='text-xl font-semibold mt-4 mb-2'>{newsData.type}</h2>
							<p className='tracking-tight'>
								{newsData.text.length > 200
									? newsData.text.substring(0, 200) + '...'
									: newsData.text}
							</p>
							<div className='flex items-center justify-between gap-4 mt-4'>
								<time className='block tracking-tighter'>{parseDate(newsData.date)}</time>
								<button
									className='cursor-pointer px-4 py-2 transition-colors bg-cyan-600/50 hover:bg-cyan-600/65 active:bg-cyan-600/70 rounded-md'
									onClick={() => (window.location.href = `/news/${id}`)}>
									Подробнее
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

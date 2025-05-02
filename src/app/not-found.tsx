import Link from 'next/link'

export default async function NotFound() {
	return (
		<div className='w-screen h-screen flex items-center justify-center flex-col gap-4'>
			<h1 className='text-3xl font-semibold tracking-wide'>404 | Страница не найдена</h1>
			<Link
				className='text-2xl px-6 py-4 transition-colors bg-cyan-600/50 hover:bg-cyan-600/65 active:bg-cyan-600/70 rounded-md'
				href='/'
				scroll={false}>
				На главную
			</Link>
		</div>
	)
}

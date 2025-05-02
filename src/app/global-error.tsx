'use client'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<div className='h-screen w-screen flex flex-col items-center justify-center'>
			<h1 className='text-3xl font-semibold'>Ошибка: {error.message}</h1>
			<p className='text-xl mt-4 mb-8'>Произошла ошибка при загрузке данных.</p>
			<button
				className='text-2xl px-6 py-4 transition-colors bg-cyan-600/50 hover:bg-cyan-600/65 active:bg-cyan-600/70 rounded-md'
				onClick={() => reset()}>
				Попробовать снова
			</button>
		</div>
	)
}

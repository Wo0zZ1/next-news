import { fetchNews } from '@/data'
import News from '@/components/News'

export default async function Home() {
	const data = await fetchNews()

	return (
		<>
			<h1 className='text-3xl text-center font-bold mb-4'>Новостной хаб от Вики</h1>
			<div className='container mx-auto'>
				<div className='mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
					{data.map(news => (
						<News key={news.id} news={news} />
					))}
				</div>
			</div>
		</>
	)
}

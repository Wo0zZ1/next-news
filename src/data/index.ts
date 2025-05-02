import { sleep } from '@/utils'
import data from './data.json'

export interface IImage {
	src: string
	width: number
	height: number
}

export type IAttachmentType = 'PHOTO' | 'LINK'

export interface IAttachment {
	type: IAttachmentType
	image: IImage
	link?: string
	caption?: string
	titleLink?: string
	description?: string
}

export interface INews {
	id: number
	text: string
	date: number
	type: string
	attachments: IAttachment[]
}

export async function fetchNews(): Promise<INews[]> {
	await sleep(1000)
	return data.map(el => ({ ...el, type: el.type.replaceAll('_', ' ') })) as INews[]
}

export async function fetchNewsById(id: number): Promise<INews | undefined> {
	const data = await fetchNews()
	return data.find(data => data.id === id)
}

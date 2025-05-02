import { IAttachment } from '@/data'

export const sleep = async (ms: number) => new Promise(res => setTimeout(res, ms))

export const getImage = (attachments: IAttachment[]): string => {
	let imagePreviewSrc = attachments.find(attachment => attachment.type === 'PHOTO')?.image.src
	if (!imagePreviewSrc)
		imagePreviewSrc = attachments.find(attachment => attachment.type === 'LINK')?.image.src
	if (!imagePreviewSrc)
		imagePreviewSrc = 'https://vika-it.rtuitlab.dev/_next/static/media/LoadingImage.f78f5ca2.webp'
	return imagePreviewSrc
}

const dateFormatter = Intl.DateTimeFormat('ru-RU', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
})

export const parseDate = (date: number): string => {
	return dateFormatter.format(new Date(date * 1000))
}

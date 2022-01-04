export const ifEmoji = emoji => {
	const ctx = document.createElement('canvas').getContext('2d')
	ctx.canvas.width = ctx.canvas.height = 1
	ctx.fillText(emoji, -4, 4)
	return ctx.getImageData(0, 0, 1, 1).data[3] > 0
}

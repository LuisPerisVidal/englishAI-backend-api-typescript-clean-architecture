function slugify(text : string) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Reemplaza espacios en blanco con guiones
        .replace(/[^\w\-]+/g, '')       // Elimina caracteres especiales
        .replace(/\-\-+/g, '-')         // Reemplaza múltiples guiones seguidos por uno solo
        .replace(/^-+/, '')             // Elimina guiones al principio del slug
        .replace(/-+$/, '');            // Elimina guiones al final del slug
}

export const formatSitemap = (data : Array<any>) => {
	if(!Array.isArray(data)){ return []; }

	return data.map((item) => {
		return {
			...item,
			uri: slugify(item.topic)
		}
	})

}
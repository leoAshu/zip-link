const removeHttps = (url: string): string => {
    return url.replace(/^https?:\/\//, '').replace(/^www\./, '')
}

export { removeHttps }

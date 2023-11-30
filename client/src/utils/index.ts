const removeHttps = (url: string): string => {
    return url.replace(/^https?:\/\//, '')
}

export { removeHttps }

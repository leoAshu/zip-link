const cleanURL = (url: string): string => {
    return url.replace(/^https?:\/\//, '').replace(/^www\./, '')
}

export { cleanURL }

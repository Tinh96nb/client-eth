import { DateTime } from 'luxon'
DateTime.local()

export function convertTimeStampToString (timestamp) {
  const date = DateTime.fromISO(timestamp)
  return date.toFormat('yyyy-LL-dd T')
}

export const getUrlParams = () => {
  const search = window.location.search
  if (!search.trim().length) return {}
  const hashes = search.slice(search.indexOf('?') + 1).split('&')
  const params = {}
  hashes.map((hash) => {
    const [ key, val ] = hash.split('=')
    params[key] = decodeURIComponent(val)
  })

  return params
}

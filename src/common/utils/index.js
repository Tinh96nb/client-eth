export function convertTimeStampToString (timestamp) {
  const date = new Date(parseInt(timestamp) * 1000)
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  const yy = date.getFullYear()
  const ddmmyy = [
    (dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    yy
  ].join('-')
  const hours = date.getHours()
  const minutes = '0' + date.getMinutes()
  const seconds = '0' + date.getSeconds()

  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' ' + ddmmyy
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

export default function sortToDate(data) {
  const list = data
  list.sort((a,b) => (new Date(a.date).getTime()) - (new Date(b.date).getTime()))
  return list
}
export default function sortToDate(list) {
  list.sort((a,b) => (new Date(a.date).getTime()) - (new Date(b.date).getTime()))
  return list
}
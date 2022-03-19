export default function groupToMonth(list) {
  list.sort((a,b) => (new Date(b.amount).getTime()) - (new Date(a.amount).getTime()))
  .map((el) => {
    return {
      month: new Date(el.date).toLocaleString('en', { month: 'short' }),
      amount: el.amount
    }
  })
  return list
}
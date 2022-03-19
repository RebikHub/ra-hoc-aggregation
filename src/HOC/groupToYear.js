export default function groupToYear(list) {
  list.sort((a,b) => (new Date(b.amount).getTime()) - (new Date(a.amount).getTime()))
      .map((el) => {
        return {
          year: new Date(el.date).getFullYear(),
          amount: el.amount
        }
      })
  return list
}
export default function groupToYear(data) {
  const list = data.sort((a,b) => (b.amount - a.amount))
      .map((el) => {
        return {
          year: new Date(el.date).getFullYear(),
          amount: el.amount
        }
      })
  return list
}
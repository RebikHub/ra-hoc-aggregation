export default function groupToMonth(data) {
  const list = data.sort((a,b) => (b.amount - a.amount))
      .map((el) => {
        return {
          month: new Date(el.date).toLocaleString('en', { month: 'short' }),
          amount: el.amount
        }
      })
      console.log(list);
  return list
}
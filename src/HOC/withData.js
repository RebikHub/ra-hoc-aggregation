export default function withData(Component, data, funcData) {
  return (props) => {
    const list = funcData(data)
    return <Component {...props} list={list}/>
  }
}
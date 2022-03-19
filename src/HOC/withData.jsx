import React, { useEffect, useState } from "react"

export default function WithData(Component, url, funcData) {
  console.log(funcData);
  const [list, setList] = useState([])

  async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data
  }

  useEffect(() => {
    const data = fetchData(url)
    const sortData = funcData(data.list)
    setList(sortData)
  }, [])

  return <Component list={list}/>
}
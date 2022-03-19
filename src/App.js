import React, { useEffect, useState } from 'react';
import MonthTable from './components/MonthTable';
import SortTable from './components/SortTable';
import YearTable from './components/YearTable';
import groupToMonth from './HOC/groupToMonth';
import groupToYear from './HOC/groupToYear';
import sortToDate from './HOC/sortToDate';
import withData from './HOC/withData';

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
export default function App() {
    const [list, setList] = useState([]);
    const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json'
    async function fetchData(url) {
        const response = await fetch(url)
        const data = await response.json()
        setList(data.list);
    }

    useEffect(() => {
        fetchData(url)
    }, [])

    const TableMonthWithData = withData(MonthTable, list, groupToMonth)
    const TableYearhWithData = withData(YearTable, list, groupToYear)
    const TableSorthWithData = withData(SortTable, list, sortToDate)

    return (
        <div id="app">
            <TableMonthWithData/>
            <TableYearhWithData/>
            <TableSorthWithData/>
        </div>
    );
}
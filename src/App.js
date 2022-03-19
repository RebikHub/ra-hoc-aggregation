import React from 'react';
import MonthTable from './components/MonthTable';
import SortTable from './components/SortTable';
import YearTable from './components/YearTable';
import groupToMonth from './HOC/groupToMonth';
import groupToYear from './HOC/groupToYear';
import sortToDate from './HOC/sortToDate';
import WithData from './HOC/withData';

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
export default function App() {
//     const [list, setList] = useState([]);
//     async function fetchData() {
        const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json'
//         const response = await fetch(url)
//         const data = await response.json()
//         dateToStringMonth(data.list)
//         setList(data.list)
//     }

// useEffect(() => {
//     fetchData()
// }, [])
    const TableMonthWithData = WithData(MonthTable, url, groupToMonth)
    const TableYearhWithData = WithData(YearTable, url, groupToYear)
    const TableSorthWithData = WithData(SortTable, url, sortToDate)

    return (
        <div id="app">
            <TableMonthWithData/>
            <TableYearhWithData/>
            <TableSorthWithData/>
        </div>
    );
}
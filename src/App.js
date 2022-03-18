import React, { useEffect, useState } from 'react';

function YearTable(props) {
    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function SortTable(props) {
    console.log('SortTable', props);

    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function MonthTable(props) {
    console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

async function fetchData() {
    const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json'
    const response = await fetch(url)
    return response.json()
}
// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
export default function App() {
    const [list, setList] = useState({});

    useEffect(async () => {
        const data = await fetchData()
        setList(data)
        console.log(data);
        console.log(list);
    }, []);

    return (
        <div id="app">
            <MonthTable list={list} />
            <YearTable list={list} />
            <SortTable list={list} />
        </div>
    );
}
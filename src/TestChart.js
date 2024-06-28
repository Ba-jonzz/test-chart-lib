import Chart from 'library-chart';

const TestChart = () => {

const data = [
    {name: "100", value: 60, category: 'bobi'},
    {name: "120", value: 20, category: 'bobi'},
    {name: "150", value: 12, category: 'bobi'},
    {name: "200", value: 24, category: 'bobi'},
    {name: "100", value: 33, category: 'paul'},
    {name: "120", value: 56, category: 'paul'},
    {name: "150", value: 13, category: 'paul'},
    {name: "200", value: 60, category: 'paul'},
    {name: "100", value: 12, category: 'bernadette'},
    {name: "120", value: 24, category: 'bernadette'},
    {name: "150", value: 6, category: 'bernadette'},
    {name: "200", value: 30, category: 'bernadette'},
  ]
  
  const charts = [
      {
        type: 'lines',
        categories: ['bernadette', 'paul']
      }
    ]
  return (
    <Chart data={data} charts={charts}></Chart>
  )
}

export default TestChart
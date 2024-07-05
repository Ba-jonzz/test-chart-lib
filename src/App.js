import Chart from 'library-chart';

function App() {
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
    <div style={{padding: '20px'}}>
      <h2>Code </h2>
      <pre style={{border: '1px solid black', padding: '0 20px', margin: '0 40px'}}>
      {`
import Chart from 'library-chart';

function App() {
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
    <div>
    <Chart data={data} charts={charts}></Chart>
    </div>
  );
}
`
    }
      </pre>
      <h2>Result </h2>

   <div style={{border: '1px solid black', padding: '20px', margin: '40px'}}>
   <Chart data={data} charts={charts}></Chart>
   </div>
    </div>
  );
}

export default App;

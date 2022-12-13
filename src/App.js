import './App.css';
import './components/ExpenseItem'
import ExpenseItem from './components/ExpenseItem';
const App=()=> {
  const data=[{id:1,Date:new Date(2022,12,14),title:"Car Insurance",Amount:'$100',location:"hyderabad"},
  {id:2,Date:new Date(2022,1,27),title:"Movies",Amount:'$200',location:"bangalore"},
  {id:3,Date:new Date(2022,3,8),title:"Pizza",Amount:'$300',location:"mumbai"},
  {id:4,Date:new Date(2022,11,15),title:"Cricket",Amount:'$400',location:"chennai"}]
  return (
    <div>
      <h2> Lets get Started</h2>
      <ExpenseItem
       date={data[0].Date}
       description={data[0].title}
       Amount={data[0].Amount}
       location={data[0].location}       
       ></ExpenseItem>
      <ExpenseItem
      date={data[1].Date}
      description={data[1].title}
      Amount={data[1].Amount}
      location={data[1].location}       
      ></ExpenseItem>
      <ExpenseItem
      date={data[2].Date}
      description={data[2].title}
      Amount={data[2].Amount}
      location={data[2].location}       
      ></ExpenseItem>
      <ExpenseItem
      date={data[3].Date}
      description={data[3].title}
      Amount={data[3].Amount}
      location={data[3].location}       
      ></ExpenseItem>
    </div> 
  );
}


export default App;

import './App.css'
import ExportExcel from './ExportExcel'

function App() {
  return (

    <ExportExcel data={[{name:"Saurabh",age:21,isPass:"Yes"}]} fileName={"StudentData"}/>
  )
}

export default App

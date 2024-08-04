import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
    <div className='h-screen'>
      <div className='grid grid-rows-[64px_1fr] grid-cols-[64px_1fr] h-full'>
       <Header></Header>
       <Sidebar></Sidebar>
       <Dashboard></Dashboard>
      </div>
    </div>
     
    </>
  )
}

export default App

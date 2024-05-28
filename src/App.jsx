import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyFirstComponent } from './components/MyFirstComponent'
import { SecondComponent } from './components/SecondComponent'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>Hook useState</h2>
        <div>
          <hr />
          <MyFirstComponent />
          <hr />
          <SecondComponent />
        </div>

      </div>
    </>
  )
}

export default App

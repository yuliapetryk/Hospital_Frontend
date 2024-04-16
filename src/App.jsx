import './App.css'
import Auth from './Auth'; 



function App() {

  return (
    <div className="App">
    <div>
        <img src="/icon-medicine.png" className="logo" alt=" logo" />
        <img src="/icon-doctor.png" className="logo doctor" alt="doctor logo" />
    
    </div>
  <h3 class ="subtitle">Приватна поліклініка</h3>
  <h1 class="title">ProfiMed</h1>
  <h3 class ="subtitle">Увійти як:</h3>
  <button class="button">Лікар</button>
  <button class="button">Пацієнт</button>
    <div className="card">
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <div>
        <Auth />
      </div>
  </div>
    
  )
}

export default App

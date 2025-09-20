
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

// const bottlePromise = fetch("./bottles.json").then(res => res.json())
// const bottlePromise2 = fetch("https://raw.githubusercontent.com/Antushil11/memorable-water-bottles/refs/heads/main/bolttle.json")
// .then(res =>res.json());


const bottlesPromise  = fetch("bottles.json").then(res => res.json());

function App() {

  // const bottels =  [
  //   {id: 1, name: "Pink Nike Bottle", price: 250, color: "pink"},
  //   {id: 2, name: "Pink Nike Bottle", price: 250, color: "pink"},
  //   {id: 3, name: "Pink Nike Bottle", price: 250, color: "pink"},
  //   {id: 4, name: "Pink Nike Bottle", price: 250, color: "pink"},
  // ]

  return (
    <>

      <h1>Buy Awsome Water Botol</h1>

      <Suspense fallback={<h3>Bottle is lodding ......</h3>}>
        <Bottles bottlesPromise ={bottlesPromise }></Bottles>
      </Suspense>

    </>
  )
}

export default App

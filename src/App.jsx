
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlePromise = fetch("./bottles.json")
.then(res => res.json())



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
        <Bottles bottlePromise ={bottlePromise }></Bottles>
      </Suspense>
      
    </>
  )
}

export default App

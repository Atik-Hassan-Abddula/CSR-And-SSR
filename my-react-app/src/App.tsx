
import './App.css'
import type { ProductType } from './type'

const productPromise = async ():Promise <ProductType[]>=>{
  const res= await fetch("https://fakestoreapi.com/products")
  const date = await res.json()
  return date

}

function App() {


  return (
    <>
   
    </>
  )
}

export default App

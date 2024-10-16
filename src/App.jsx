import { useState, useEffect } from 'react'
import Header from './components/Heder'
import Guitar from './components/Guitar'
import { db } from './data/db'

function App() {
  const [auth, setAuth] = useState([])
  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState([])

  const[data, setData] = useState([])

  useEffect( () =>{
    setData(db)
  })

  return (
    <>
    <Header/>
   

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitarra)=>(
              <Guitar 
              key={guitarra.id}
              info={guitarra}
              setCart={setCart}
              />
            ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App

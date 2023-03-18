import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyProduits from './components/ManyProduits'
import AjoutProduit from './components/AjoutProduit'
import UpdateProduit from './components/UpdateProduit'
import Footer from './components/Footer'
import About from './components/About'


function App() {

  const [produits, setProduits] = useState ([])
  const [productToUpdate, setProductToUpdate] = useState ([])
  const [showAjoutProduit, setShowAjoutProduit] = useState(false)
  const [showUpdateProduit, setShowUpdateProduit] = useState(false)

useEffect(()=>  {
    const getProduits = async () => {
      const produitsFromServer = await fetchProduits()
      setProduits(produitsFromServer)
    }
    getProduits()
},[])

const fetchProduits = async () => {
  const res = await fetch('http://localhost:5000/produits')
  const data = await res.json()
  //console.log(data)
  return data
}

//Delete
const deleteProduct = async (id) => {
  await fetch(`http://localhost:5000/produits/${id}`, {
    method: 'DELETE',
  })
  setProduits(produits.filter((task) => task.id !== id))
}

//updateProduct
const updateProduct = async (id, task) => {
  await fetch(`http://localhost:5000/produits/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
  })
  const produitsFromServer = await fetchProduits()
  setProduits(produitsFromServer)
  setShowUpdateProduit(!showUpdateProduit);
}

//Add
const addProduit =  async (task) => {
  const res = await fetch('http://localhost:5000/produits', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const produitsFromServer = await fetchProduits()
  setProduits(produitsFromServer)
  setShowAjoutProduit(!showAjoutProduit);
}

  return (
    <BrowserRouter>
        <Header onAdd={() => setShowAjoutProduit(!showAjoutProduit)} showAdd={showAjoutProduit} />
        
        { showAjoutProduit && <AjoutProduit onAdd={addProduit}/> }
        { showUpdateProduit && <UpdateProduit productToUpdate={productToUpdate} onUpdate={updateProduct} showUpdateProduit={showUpdateProduit} /> }
        {produits.length > 0 ? (
          <Routes>
            <Route path="/produits" element={<ManyProduits produits={produits} onDeleteMany={deleteProduct} onUpdateMany={ (id)=>{ setProductToUpdate(produits[id-1]); setShowUpdateProduit(!showUpdateProduit)} }/>}/>
          </Routes>
          ):(
            'Aucun produit'
          )}
        <Routes>
          <Route path='/' element={<About/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

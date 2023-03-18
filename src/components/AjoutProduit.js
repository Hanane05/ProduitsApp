import { useState } from 'react'

const AjoutProduit = ({onAdd}) => {
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [categorie, setCategorie] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!nom || !description || !prix || !categorie){
            alert("entrer toute l'info svp")
            return
        }
        onAdd({nom, description, prix, categorie})
        setNom('')
        setDescription('')
        setPrix('')
        setCategorie('')
        
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Nom du produit:</label>
                <input
                type='text'
                placeholder="ajouter produit"
                value={nom}
                onChange = {(e) => setNom(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Prix:</label>
                <input
                type='number'
                placeholder="Prix de produit"
                value={prix}
                min="0"
                onChange = {(e) => setPrix(e.target.value)}
                />
            </div>
            
            <div className="form-control">
                <label>Description:</label>
                <textarea rows="4"
                placeholder="Description du produit"
                value={description}
                onChange = {(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div className="form-control">
                <label>Catégorie:</label>
                <select value={categorie} onChange = {(e) => setCategorie(e.target.value)}>
                <option value="" selected disabled></option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="appliance">Home appliance</option>
                </select>
                
            </div>

            <button className="btn">ajouter produit</button>
        </form>
    )
}

export default AjoutProduit
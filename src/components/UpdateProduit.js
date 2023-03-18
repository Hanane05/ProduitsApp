import { useState } from 'react'

const Update = ({productToUpdate, onUpdate}) => {
    const [nom, setNom] = useState(productToUpdate.nom)
    const [description, setDescription] = useState(productToUpdate.description)
    const [prix, setPrix] = useState(productToUpdate.prix)
    const [categorie, setCategorie] = useState(productToUpdate.categorie)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!nom || !description || !prix || !categorie){
            alert("entrer toute l'info svp")
            return
        }
        onUpdate(productToUpdate.id, {nom, description, prix, categorie})
        setNom('')
        setDescription('')
        setPrix('')
        setCategorie('')
        
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Nom produit</label>
                <input
                type='text'
                placeholder="ajouter produit"
                value={nom}
                onChange = {(e) => setNom(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Prix</label>
                <input
                type='number'
                placeholder="Prix de produit"
                value={prix}
                min="0"
                onChange = {(e) => setPrix(e.target.value)}
                />
            </div>
            
            <div className="form-control">
                <label>Déscription</label>
                <textarea rows="4"
                placeholder="Déscription de produit"
                value={description}
                onChange = {(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div className="form-control">
                <label>Catégorie</label>
                <select value={categorie} onChange = {(e) => setCategorie(e.target.value)}>
                <option value="" selected disabled></option>
                <option value="Informatique">Informatique</option>
                <option value="Logiciel">Logiciel</option>
                </select>
                
            </div>

            <button className="btn">mettre à jour produit</button>
        </form>
    )
}

export default Update

const Produit = ({produit, onDelete, onUpdate}) => {
    return(
        
        <tr>
            <td>{produit.nom}</td>
            <td>{produit.categorie}</td>
            <td>{produit.prix}</td>
            <td>{produit.description}</td>
            <td>
                <button className="modifier" onClick = {() => onUpdate(produit.id)}>modifier</button>
                <button className="supprimer" onClick = {() => onDelete(produit.id)}>supprimer</button>
            </td>
        </tr>
    )
}

export default Produit
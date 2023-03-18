import Produit from './Produit'

const ManyProduits = ({produits, onDeleteMany, onUpdateMany}) => {
    return(
        <section className={`content`}>
             <table>
             <thead>
                    <tr>
                    <th>nom</th>
                    <th>catégorie</th>
                    <th>prix</th>
                    <th>description</th>
                    <th>gestion</th>
                    </tr>
                </thead>
            {produits.map((produit)=>(
                <Produit key={produit.id} produit={produit} onDelete={onDeleteMany} onUpdate={onUpdateMany}/>
            ))}
        </table>
        </section>
    )
}

export default ManyProduits
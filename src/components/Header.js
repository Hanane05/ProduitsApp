import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
const Header = (props) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Link to="/">Accueil</Link>
            <Link to="/produits">Produits</Link>
            
            { location.pathname === '/produits' &&(
                <Button 
                text={props.showAdd ? 'Fermer' : 'Ajouter'} 
                color={props.showAdd ? 'red' : 'green'}
                onClick={props.onAdd}/>
            )}
        </header>
    )
}

Header.defaultProps = {
    title: "Produits App"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
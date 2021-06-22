import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title ,onToggle, show }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* <Button color="blue" text="add"/>
            <Button color="red" text="add"/> */}
            {location.pathname === '/' &&
                <Button color={show ? 'red' : 'green'} text={show ? 'Close' : 'Add'} onClick={onToggle} />
            }
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string ,
}
export default Header

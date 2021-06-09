import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title ,onToggle, show }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* <Button color="blue" text="add"/>
            <Button color="red" text="add"/> */}
            <Button color={show ? 'red' : 'green'} text={show ? 'Close' : 'Add'} onClick={onToggle} />
            
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

const React = require('react');
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import Copyright from 'material-ui-icons/Copyright';
const FontAwesome = require('react-fontawesome');

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer_info"><FontAwesome name="copyright" className="customeFontAwesome" />ABM</p>
            <p className="footer_info"><FontAwesome name="phone" className="customeFontAwesome" />+33 650915474</p>
            <p className="footer_info"><FontAwesome name="envelope" className="customeFontAwesome" />mbaye.alioune.badara@gmail.com</p>
        </div>
    );
};

module.exports = Footer;
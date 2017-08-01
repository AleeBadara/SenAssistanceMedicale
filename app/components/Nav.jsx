const React = require('react');
const { AppBar, Toolbar, Typography } = require('material-ui');
const FontAwesome = require('react-fontawesome');


const Nav = () => {
    return (
        <div className="nav_container">
            <AppBar position="static" className="nav_appbar">
                <Toolbar>
                    <Typography type="title" color="inherit" >S.A.M</Typography>
                    <div className="menu_container">
                        <Typography type="body1" className="menu_info"><FontAwesome name="phone" size="2x" className="customeFontAwesome" />(+221) 777063140</Typography>
                        <Typography type="body1" className="menu_info"><FontAwesome name="envelope" size="2x" className="customeFontAwesome" />sen.assistance.medicale@gmail.com</Typography>
                        <Typography type="body1" className="menu_info"><FontAwesome name="map-marker" size="2x" className="customeFontAwesome" />Liberté 6 Extension N°90, Dakar, Sénégal</Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )

};

module.exports = Nav;
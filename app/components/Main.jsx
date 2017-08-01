var React = require('react');

var Nav = require('Nav');
const Nous = require('Nous');
const Interim = require('Interim');
const ConsultationSoin = require('ConsultationSoin');
const Evacuation = require('Evacuation');
const PriseEnCharge = require('PriseEnCharge');
const Mutuelle = require('Mutuelle');
const Footer = require('Footer');

const Main = () => {
    return (
        <div>
            <Nav />
            <Nous />
            <Interim />
            <ConsultationSoin />
            <Evacuation />
            <PriseEnCharge />
            <Mutuelle />
            <Footer />
        </div>
    );
}

module.exports = Main;
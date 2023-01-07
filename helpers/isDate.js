const moment = require('moment');

const isDate = ( value, { reg, location, path }) => {

    if ( !value ){
        return false;
    }

    return moment(value).isValid()
}


module.exports = { isDate}
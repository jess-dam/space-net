

var moment = require('moment');
  require('moment-timezone');
  moment().format();


export const initialState = {
    today: (moment().tz("America/New_York")).subtract(7,'d').format("YYYY-MM-DD"),
    sevenDaysAgo: moment().tz("America/New_York").format("YYYY-MM-DD")
}

export const dateReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATES':
            return state
    }
}
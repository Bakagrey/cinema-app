const defaultState = {
    username: "DMITRY MEDYANTSEV",
    ticketsToBuy: [],
    boughtTickets: []
};

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case "PERSON_CHANGE":
          return {
              ...state,
              username: action.value
          }
        case "TICKETS_ADD_TO_CART":
              return{
                  ...state,
                  ticketsToBuy: action.value
              }
        case "TICKETS_BUY":
              return {
                  ...state,
                  boughtTickets: action.value
              }
          default:
              return state;
    }
}

export default reducer;
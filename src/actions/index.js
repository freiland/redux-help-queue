import ADD_TICKET from './ActionTypes';
import DELETE_TICKET from './ActionTypes';
import TOGGLE_FORM from './ActionTypes';

export const deleteTicket = id => ({
  type: 'DELETE_TICKET', id 
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: 'ADD_TICKET',
    names: names,
    location: location,
    issue: issue,
    id: id
  };
};
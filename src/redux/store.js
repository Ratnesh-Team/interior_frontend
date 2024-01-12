// src/redux/store.js
import { createStore } from 'redux';
import sidebarReducer from './sidebarReducer';

const store = createStore(sidebarReducer);
const initialState = {
    formData: {
      projectStatus: 'Painting',
      projectStartDate: '2024-01-20',
      timelineDate: '2024-01-20',
      projectBudget: '5000',
      receivedBudget: '2000',
      remainingBudget: '3000',
    },
  };
  
  // Reducer to manage form data
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          formData: action.payload,
        };
      default:
        return state;
    }
  };
  
  // Create the Redux store
  export const store1 = createStore(formReducer);
  
 

export default store;

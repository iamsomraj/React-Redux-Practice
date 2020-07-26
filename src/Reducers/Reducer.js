import { SHOW_PERSONS, ADD_PERSONS, DEL_PERSONS } from './actionTypes';

const initialState = { persons: [], showPerson: false };
const personName = 'Somraj';

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PERSONS:
      if (state.persons.length === 0) {
        return state;
      } else {
        return {
          ...state,
          showPerson: !state.showPerson,
        };
      }
    case ADD_PERSONS:
      return {
        ...state,
        persons: [
          ...state.persons,
          {
            id: Math.random(),
            name: personName,
          },
        ],
      };

    case DEL_PERSONS:
      const newPersons = state.persons.filter(
        (person) => person.id !== action.value
      );

      return {
        ...state,
        persons: newPersons,
      };
    default:
      return state;
  }
};

export default Reducer;

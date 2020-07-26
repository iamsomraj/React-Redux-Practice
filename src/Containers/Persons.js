import React from 'react';
import { connect } from 'react-redux';
import {
  SHOW_PERSONS,
  ADD_PERSONS,
  DEL_PERSONS,
} from '../Reducers/actionTypes';
import Person from '../Components/Person';
import Button from '../Components/Button';

const Persons = (props) => {
  return (
    <div
      style={{
        padding: '2rem',
        margin: '1rem',
      }}
    >
      <header>Create Persons and then kill them by tapping</header>
      <Button
        disabled={!!props.persons}
        clicked={props.showPersonsHandler}
        label={'Click To Add Persons'}
      />
      <Button clicked={props.addPersonsHandler} label={'Add Persons'} />
      {props.showPerson ? (
        <Person
          personList={props.persons}
          delHandler={props.delPersonHandler}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showPerson: state.showPerson,
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPersonsHandler: () => dispatch({ type: SHOW_PERSONS }),
    addPersonsHandler: () => dispatch({ type: ADD_PERSONS }),
    delPersonHandler: (id) => dispatch({ type: DEL_PERSONS, value: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

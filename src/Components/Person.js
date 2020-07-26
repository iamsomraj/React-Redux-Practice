import React from 'react';

const Person = (props) => {
  return (
    <div>
      {props.personList.map((person) => {
        return (
          <div
            style={{
              padding: '2rem',
              margin: '1rem',
              fontWeight: 'bold',
              border: '2px solid black',
            }}
            onClick={() => props.delHandler(person.id)}
            key={person.id}
          >
            {person.name + '  ' + person.id}
          </div>
        );
      })}
    </div>
  );
};

export default Person;

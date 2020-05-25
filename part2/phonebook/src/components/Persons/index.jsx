import React from "react";
import personsService from "../../services/persons";

const Persons = (props) => {
  const { filterTerm, persons, setPersons } = props;

  const list = persons.filter((p) =>
    p.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  const deletePerson = (id) => {
    if (window.confirm("Do you really want to delete"))
      personsService.del(id).then((returnedPerson) => {
        const temp = persons.filter((item) => item.id !== id);
        setPersons(temp);
      });
  };

  return (
    <ul>
      {list.map((person, i) => (
        <li key={i}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;

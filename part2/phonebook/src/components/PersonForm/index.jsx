import React from "react";
import personsService from "../../services/persons";

const PersonForm = (props) => {
  const {
    persons,
    newName,
    newNumber,
    setNewName,
    setNewNumber,
    setPersons,
    setMessage,
  } = props;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((e) => e.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with new one?`
        )
      ) {
        const ID = persons.find((item) => item.name === newName).id;
        personsService
          .update(ID, person)
          .then(() => {
            const temp = persons.filter((item) => item.name !== newName);
            setPersons([...temp, person]);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setMessage({
              msg: `Information of ${person.name} has already been removed from server`,
              color: "red",
            });
          });
      }
    } else {
      personsService.create(person).then(() => {
        setPersons([...persons, person]);
        setMessage({ msg: `Added ${person.name}`, color: "green" });
        setNewNumber("");
        setNewName("");
      });
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;

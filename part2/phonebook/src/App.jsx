import React, { useState, useEffect } from "react";

import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [message, setMessage] = useState({ msg: "", color: "" });

  useEffect(() => {
    personsService.getAll().then((initalPersons) => {
      setPersons(initalPersons);
    });
  }, []);

  const PersonFormProps = {
    persons,
    newName,
    newNumber,
    setNewName,
    setNewNumber,
    setPersons,
    setMessage,
  };

  const PersonsProps = {
    filterTerm,
    persons,
    setPersons,
  };

  const FilterProps = {
    filterTerm,
    setFilterTerm,
  };

  const NotificationProps = {
    message: {
      msg: message.msg,
      color: message.color,
    },
    setMessage,
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification {...NotificationProps} />
      <Filter {...FilterProps} />

      <h2>add new</h2>

      <PersonForm {...PersonFormProps} />

      <h2>Numbers</h2>
      <Persons {...PersonsProps} />
    </div>
  );
};

export default App;

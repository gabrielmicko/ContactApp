const setSearchValue = value => {
  return {
    type: 'SETTINGS_SET_SEARCH_VALUE',
    value: value,
  };
};

const setNumberOfContacts = value => {
  return {
    type: 'SETTINGS_SET_NUMBER_OF_CONTACTS',
    value: value,
  };
};

export { setSearchValue, setNumberOfContacts };

let defSettings = {
  search: '',
  numberOfContacts: 0,
};

const Settings = (state = defSettings, action) => {
  switch (action.type) {
    case 'SETTINGS_SET_SEARCH_VALUE':
      let searchVal = { search: action.value };
      return { ...state, ...searchVal };
      break;
    case 'SETTINGS_SET_NUMBER_OF_CONTACTS':
      let numOfContacts = { numberOfContacts: action.value };
      return { ...state, ...numOfContacts };
      break;
    default:
      return state;
  }
};

export default Settings;

import people from '../db/people.json';

const getPeople = searchStr => {
  return people.filter(person => {
    if (searchStr) {
      searchStr = searchStr.toLowerCase();
      if (
        person.name.toLowerCase().indexOf(searchStr) !== -1 ||
        person.title.toLowerCase().indexOf(searchStr) !== -1 ||
        person.job.toLowerCase().indexOf(searchStr) !== -1 ||
        person.address.toLowerCase().indexOf(searchStr) !== -1 ||
        person.tel.indexOf(searchStr) !== -1
      ) {
        return true;
      }
      return false;
    }
    return true;
  });
};

export { getPeople };

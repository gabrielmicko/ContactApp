import faker from 'faker';

const person = {
  name: faker.name.findName(),
  title: faker.name.title(),
  job: faker.name.jobTitle(),
  photo: faker.image.avatar(),
  address: faker.address.city(),
};

console.log(person);

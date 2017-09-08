import faker from 'faker';
import fs from 'fs';
let people = [];
for (var i = 0; i < 100; i++) {
  people.push({
    id: i + 1,
    name: faker.name.findName(),
    title: faker.name.title(),
    job: faker.name.jobTitle(),
    photo: faker.image.avatar(),
    tel: faker.phone.phoneNumber(),
    address: faker.address.city(),
  });
}

fs.writeFile('./src/API/db/people.json', JSON.stringify(people), function(err) {
  if (err) {
    console.log('Creating people.json has been failed with error: ' + err);
  }
  console.log('People.json has been created.');
});

console.log('Hello, TypeScript!');

type PersonalInfo = {
    name: string;
    birthYear: number;
  };
  
function printPersonalInfo(data: PersonalInfo) {
    console.log(`${data.name} was born in ${data.birthYear}.`);
  }
  
  printPersonalInfo({ name: 'Rogerinho', birthYear: 1978});
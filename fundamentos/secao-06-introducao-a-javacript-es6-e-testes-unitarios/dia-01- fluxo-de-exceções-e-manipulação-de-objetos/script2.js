const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addNewKey (obj, key, value) {
    obj.key = value;
  }
  addNewKey (lesson2, 'turno', 'noite');
  console.log(lesson2);

  const listKeys = (obj) => Object.keys(obj);
  console.log(listKeys(lesson1));

  const sizeObj = (obj) => Object.keys(obj).length;
  console.log(sizeObj(lesson1));

  const listValues = (obj) => Object.values(obj);
  console.log(listValues(lesson1));

  const allLessons = Object.assign({}, {lesson1,lesson2,lesson3});


  function getNumberOfStudents (obj) {
    let total = 0;

    const keys = Object.keys(obj);
    for (index in keys) {
        total += obj[keys[index]].numeroEstudantes;
    }
    return total;
  }
  console.log(getNumberOfStudents(allLessons));

  const getValueByNumber = (obj, number) => Object.values(obj)[number];
  console.log(getValueByNumber(lesson1, 2));

  const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));

function getNumberOfStudentsMath (obj) {
    let total = 0;
    const keys = Object.keys(obj);
    for (let index in keys) {
        if (obj[keys[index]].materia === "Matemática") {
            total += obj[keys[index]].numeroEstudantes;
        }
    }
    return total;
}
console.log(getNumberOfStudentsMath(allLessons));

function getInfo (obj, name) {
    const allLessons = [];
    let allStudents = 0;
    const values = Object.values(obj);
    for (let index in values) {
        if (values[index].professor === name) {
            allLessons.push(values[index].materia)
            allStudents += values[index].numeroEstudantes;
        }
    }
    return {aulas: allLessons, estudantes: allStudents};
}

function createReport (allLessons, name) {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
}
console.log(createReport(allLessons, 'Maria Clara'));

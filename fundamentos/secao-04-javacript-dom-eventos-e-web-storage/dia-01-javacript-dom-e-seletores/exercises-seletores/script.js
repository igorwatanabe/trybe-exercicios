const titulo = document.getElementById('header-container');
titulo.style.backgroundColor = 'green';

const tasks = document.getElementsByClassName('emergency-tasks')[0];
tasks.style.backgroundColor = 'orange';

const notasks = document.getElementsByClassName('no-emergency-tasks')[0];
notasks.style.backgroundColor = 'yellow';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

//const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
//noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}


const rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'green';
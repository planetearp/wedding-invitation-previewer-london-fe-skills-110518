//initials bride groom date local

const types = document.getElementsByClassName('nav-item');

function changeClass(newClass) {
  document.getElementById("inv").className = newClass;
}

for (let i = 0; i < types.length; i++) {
  const design = types[i].attributes['design'].value;
  types[i].addEventListener('click', function() {
    changeClass(design);
  })
}

// Adding event listener to inputs


const fixedInvite = document.getElementById('fixed-invite');
const brideName = document.getElementById('bride');
const groomName = document.getElementById('groom');
const lastName = document.getElementById('lastname');
const date = document.getElementById('date');
const place = document.getElementById('location');

// const inputs = document.getElementsByClassName('inputs');

brideName.oninput = updateNames;
groomName.oninput = updateNames;
lastName.oninput = updateNames;
date.oninput = updateNames;
place.oninput = updateNames;

const invInitials = document.getElementById('inv-initials');
const invNames = document.getElementById('inv-names');
const invSurname = document.getElementById('inv-surname');
const invDate = document.getElementById('inv-date');
const invLocation = document.getElementById('inv-location');

function updateNames() {
  invInitials.textContent = brideName.value.charAt(0).toUpperCase() + " & " + groomName.value.charAt(0).toUpperCase();
  fixedInvite.style.display = "block";
  invNames.textContent = brideName.value + " & " + groomName.value;
  invSurname.textContent = lastName.value;
  invDate.textContent = date.value;
  invLocation.textContent = place.value;
}

// bridename.oninput = updateNames




let players = [];
let currentSortColumn = '';
let currentSortDirection = 'asc';

function addPlayer() {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const atpRanking = document.getElementById('atpRanking').value;
  const backend = document.getElementById('backend').value;
  const sponsorBrand = document.getElementById('sponsorBrand').value;
  const moneyEarned = document.getElementById('moneyEarned').value;

  if (name && surname && atpRanking && backend && sponsorBrand && moneyEarned) {
    const player = {
      name: name,
      surname: surname,
      atpRanking: parseInt(atpRanking, 10),
      backend: backend,
      sponsorBrand: sponsorBrand,
      moneyEarned: parseInt(moneyEarned, 10)
    };
    players.push(player);

    updateTable();
    document.getElementById('playerForm').reset();
  } else {
    alert('Please fill out all fields.');
  }
}

function updateTable() {
  const tableBody = document.getElementById('playerData');
  tableBody.innerHTML = '';

  players.forEach((player, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${player.name}</td>
      <td>${player.surname}</td>
      <td>${player.atpRanking}</td>
      <td>${player.backend}</td>
      <td>${player.sponsorBrand}</td>
      <td>${player.moneyEarned}</td>
      <td>
        <span class="editButton" onclick="editPlayer(${index})">&#9998;</span>
        <span class="deleteButton" onclick="deletePlayer(${index})">&#10006;</span>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function editPlayer(index) {
  const player = players[index];
  // Set form values to player's information for editing
  document.getElementById('name').value = player.name;
  document.getElementById('surname').value = player.surname;
  document.getElementById('atpRanking').value = player.atpRanking;
  document.getElementById('backend').value = player.backend;
  document.getElementById('sponsorBrand').value = player.sponsorBrand;
  document.getElementById('moneyEarned').value = player.moneyEarned;

  // Remove the player from the array
  players.splice(index, 1);

  // Update the table
  updateTable();
}

function deletePlayer(index) {
  players.splice(index, 1);
  updateTable();
}

function sortTable(column) {
  if (currentSortColumn === column) {
    currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    currentSortColumn = column;
    currentSortDirection = 'asc';
  }

  players.sort((a, b) => {
    if (a[column] < b[column]) {
      return currentSortDirection === 'asc' ? -1 : 1;
    }
    if (a[column] > b[column]) {
      return currentSortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  updateTable();
}

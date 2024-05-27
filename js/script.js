function addPlayer() {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const atpRanking = document.getElementById('atpRanking').value;
  const backend = document.getElementById('backend').value;
  const sponsorBrand = document.getElementById('sponsorBrand').value;
  const moneyEarned = document.getElementById('moneyEarned').value;

  if (name && surname && atpRanking && backend && sponsorBrand && moneyEarned) {
    const table = document.getElementById('playerTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.textContent = name;
    cell2.textContent = surname;
    cell3.textContent = atpRanking;
    cell4.textContent = backend;
    cell5.textContent = sponsorBrand;
    cell6.textContent = moneyEarned;

    document.getElementById('playerForm').reset();
  } else {
    alert('Please fill out all fields.');
  }
}
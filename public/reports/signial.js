let tripList = [];

function createTripRow(driver, date, passenger, reason) {
  // Create a new table row
  const row = document.createElement("tr");

  // Set the inner HTML content for each cell
  row.innerHTML = `
        <td class="psg">${driver}</td>
        <td class="date">${date}</td>
        <td class="passager">${passenger}</td>
        <td class="motif">${reason}</td>
        <td class="action">
            <button class="ban-btn">Bannir</button>
            <button class="ignore-btn">Ignorer</button>
        </td>
    `;

  // Return the created table row
  return row;
}

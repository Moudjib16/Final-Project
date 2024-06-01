
let banButtons = document.querySelectorAll('.ban-btn');


let confirmationContainer = document.querySelector('.container');


let blurBackground = document.getElementById('blur-background');





let cancelButton = document.querySelector('.Annuler');

cancelButton.addEventListener('click', function() {
    confirmationContainer.style.display = 'none';
    blurBackground.style.display = 'none';
});


function appendTripsToTable(reportList) {
    const tbody = document.getElementById('reports');

    
    reportList.forEach(trip => {
        
        const newRow = createTripRow(trip.driver, trip.date, trip.passenger, trip.reason);
        
       
        tbody.appendChild(newRow);

      
        newRow.querySelector('.ignore-btn').addEventListener('click', () => {
            
            newRow.remove();
        });
        const ouiButton = document.querySelector('.oui');


              newRow.querySelector('.ban-btn').addEventListener('click', () => {
                confirmationContainer.style.display = 'flex';
                blurBackground.style.display = 'block';


                    ouiButton.addEventListener('click', function() {
                    
            
                    newRow.remove();
                    
                    confirmationContainer.style.display = 'none';
                     blurBackground.style.display = 'none';
                });
          
        });

        
 
    });
}

// Call the function to append trips to the table
appendTripsToTable(reportList);






// Selecting the search input
const searchInput = document.getElementById('search-input');


searchInput.addEventListener('input', function() {
    
    const searchTerm = searchInput.value.toLowerCase();

   
    const rows = document.querySelectorAll('#reports tr');

    
    rows.forEach(row => {
        const driverName = row.querySelector('.psg').textContent.toLowerCase();

      
        if (driverName.startsWith(searchTerm)) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    });
});

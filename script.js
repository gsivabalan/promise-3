let url = 'https://brasilapi.com.br/api/banks/v1';
let tbody = document.querySelector('.table tbody');
let fetchData = (url) => {
 return fetch(url)
.then(response => response.json())
.then(data => {
data.forEach(bank => {
let row = document.createElement('tr');
row.innerHTML = `<td>${bank.code}</td>
                <td>${bank.name}</td>
                <td>${bank.ispb}</td>
                <td>${bank.fullName}</td>
                <td>${bank.complimentaryName}</td>
                <td>${bank.homepage}</td> `;
              tbody.appendChild(row);
            });
          })
          .catch(error => console.log(error));
      }
      
fetchData(url);
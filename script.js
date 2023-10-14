const tableBody = document.querySelector('#customer-table tbody');
const sortButton = document.querySelector('#sort-button');
let isAscending = true;

const customers = [
    { country: 'USA', name: 'John' },
    { country: 'Canada', name: 'Alice' },
    { country: 'UK', name: 'Bob' },
    { country: 'Australia', name: 'Eva' },
    { country: 'France', name: 'Daniel' },
    { country: 'Germany', name: 'Sophia' },
    { country: 'Japan', name: 'Liam' },
    { country: 'Mexico', name: 'Olivia' },
    { country: 'Brazil', name: 'Noah' },
    { country: 'Italy', name: 'Ava' },
    { country: 'China', name: 'William' },
    { country: 'India', name: 'Mia' },
    { country: 'Spain', name: 'James' }
];

function renderTable(customers) {
    tableBody.innerHTML = '';
    customers.forEach(customer => {
        const row = `<tr>
                        <td>${customer.country}</td>
                        <td>${customer.name}</td>
                    </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function sortTable() {
    const sortedCustomers = [...customers];
    sortedCustomers.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (isAscending) {
            return nameA < nameB ? -1 : 1;
        } else {
            return nameA > nameB ? -1 : 1;
        }
    });
    renderTable(sortedCustomers);
    isAscending = !isAscending;
}

sortButton.addEventListener('click', sortTable);
renderTable(customers);


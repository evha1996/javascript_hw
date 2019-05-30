// from data.js
var tableData = data;

// YOUR CODE HERE!
let filterButton = document.getElementById('filter-btn')
filterButton.addEventListener('click', function(e){
    e.preventDefault()

let preferredDate = document.getElementById('datetime');

    return alienTable(preferredDate.value)
})



function alienTable(userDate) {


 document.getElementById('table-body').innerHTML = "";

 let ufoData = document.getElementById('table-body')

 filterData = tableData.filter(x => x.datetime == userDate)




 filterData.forEach(results => {
    console.log(results)
    let tr = document.createElement('tr');
    ufoData.appendChild(tr)
    Object.values(results).forEach(x => {
        let td = document.createElement('td')
        td.innerHTML = x;
        tr.appendChild(td)
        }
    )
}
 )
}
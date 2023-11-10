function registerClick() {
    document.getElementById('detailsContainer').style.display = 'block';
    document.getElementById('registercontainer').style.display = 'none';
    document.getElementById('lblName').innerHTML = document.getElementById('Name').value
    document.getElementById('lblPrice').innerHTML = document.getElementById('Price').value
    document.getElementById('lblCity').innerHTML = document.getElementById('City').value
    document.getElementById('lblMgfDate').innerHTML = document.getElementById('mgfdate').value

    let stockStatus = ''
    const stockCheckbox = document.getElementById('Stock')
    if (stockCheckbox.checked) {
        stockStatus = 'Available'
    } else {
        stockStatus = 'Out of Stock'
    }
    document.getElementById('lblStock').innerHTML = stockStatus
}

function editClick(){
    document.getElementById('register-btn').innerHTML ="Save"
    document.getElementById('register-btn').className ="btn btn-sm btn-info"
}

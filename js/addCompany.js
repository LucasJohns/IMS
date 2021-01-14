function showNewCompanyPopup() {
    document.getElementById("newCompanyPopup").setAttribute("class", "");
}

function resetPopup() {
    var companyNumber = document.getElementById("stationNumber");
    var companyVehicleType = document.getElementById("stationVehicleType");
    companyNumber.value = "";
    companyVehicleType.value = "AMB";
    document.getElementById("newCompanyPopup").setAttribute("class", "hidden")
}

function closeWindow() {
    resetPopup();
}

function addCompany(ev) {
    console.log(ev.target.value);
    var tgt = ev.target;
    var companyNumber = document.getElementById("stationNumber").value;
    var companyVehicleType = document.getElementById("stationVehicleType").value;
    if (companyNumber == "") { alert("Please enter a station number"); return; }
    var county = document.getElementById("countySelect").value;
    var sidebar = document.getElementById("sidebar");
    var clonedButton = document.getElementById("24ENG").cloneNode();
    clonedButton.setAttribute("data-county", county);
    clonedButton.setAttribute("id", companyNumber + "" + companyVehicleType + "ENG");
    clonedButton.setAttribute("style", "display: block !important;");
    clonedButton.textContent = companyNumber + " " + companyVehicleType;
    sidebar.prepend(clonedButton);
    resetPopup();
}
// =========================
// Fiber Work Manager Pro
// =========================

let records = JSON.parse(localStorage.getItem("records")) || [];

// ---------- Open Forms ----------

function openTravel(){
document.getElementById("content").innerHTML=`

<div class="form-card">

<h2>🚗 Travel</h2>

<input id="from" placeholder="From Location">

<input id="to" placeholder="To Location">

<input id="travelKmInput" type="number" placeholder="Travel KM">

<textarea id="travelRemark" placeholder="Remarks"></textarea>

<button class="save-btn" onclick="saveTravel()">Save Travel</button>

</div>

`;
}

function openInstallation(){

document.getElementById("content").innerHTML=`

<div class="form-card">

<h2>🛠 Installation</h2>

<input id="customer" placeholder="Customer Name">

<input id="mobile" placeholder="Mobile Number">

<input id="address" placeholder="Address">

<input id="flat" placeholder="Flat No">

<input id="society" placeholder="Society Name">

<select id="company">

<option>Airtel</option>

<option>Jio</option>

<option>GTPL</option>

<option>BSNL</option>

<option>ACT</option>

<option>Other</option>

</select>

<input id="ra" placeholder="RA Number">

<input id="power" placeholder="Power Reading">

<textarea id="remark" placeholder="Remarks"></textarea>

<button class="save-btn" onclick="saveInstallation()">

Save Installation

</button>

</div>

`;

}

function openSR(){

document.getElementById("content").innerHTML=`

<div class="form-card">

<h2>📞 SR</h2>

<input id="srNumber" placeholder="SR Number">

<input id="customer" placeholder="Customer Name">

<input id="mobile" placeholder="Mobile">

<select id="company">

<option>Airtel</option>

<option>Jio</option>

<option>GTPL</option>

<option>BSNL</option>

</select>

<textarea id="remark" placeholder="Complaint Details"></textarea>

<button class="save-btn" onclick="saveSR()">

Save SR

</button>

</div>

`;

}
// ================= SAVE FUNCTIONS =================

function saveTravel() {

let row = {
type: "Travel",
date: new Date().toLocaleString(),
from: document.getElementById("from").value,
to: document.getElementById("to").value,
km: document.getElementById("travelKmInput").value,
remark: document.getElementById("travelRemark").value
};

records.push(row);

localStorage.setItem("records", JSON.stringify(records));

alert("🚗 Travel Saved");

updateDashboard();

}

function saveInstallation() {

let row = {
type: "Installation",
date: new Date().toLocaleString(),
customer: customer.value,
mobile: mobile.value,
address: address.value,
flat: flat.value,
society: society.value,
company: company.value,
ra: ra.value,
power: power.value,
remark: remark.value
};

records.push(row);

localStorage.setItem("records", JSON.stringify(records));

alert("🛠 Installation Saved");

updateDashboard();

}

function saveSR() {

let row = {
type: "SR",
date: new Date().toLocaleString(),
srNumber: srNumber.value,
customer: customer.value,
mobile: mobile.value,
company: company.value,
remark: remark.value
};

records.push(row);

localStorage.setItem("records", JSON.stringify(records));

alert("📞 SR Saved");

updateDashboard();

}

// ================= DASHBOARD =================

function updateDashboard() {

document.getElementById("installationCount").innerHTML =
records.filter(x => x.type === "Installation").length;

document.getElementById("srCount").innerHTML =
records.filter(x => x.type === "SR").length;

document.getElementById("visitCount").innerHTML =
records.filter(x => x.type === "Site Visit").length;

let km = 0;

records.forEach(r => {

if (r.km) km += Number(r.km);

});

document.getElementById("travelKm").innerHTML = km;

}

updateDashboard();
// ================= GPS =================

function getCurrentLocation(callback){

if(!navigator.geolocation){
alert("GPS Not Supported");
return;
}

navigator.geolocation.getCurrentPosition(function(pos){

callback(
pos.coords.latitude,
pos.coords.longitude
);

},function(err){

alert("GPS Error : "+err.message);

},{
enableHighAccuracy:true,
timeout:10000,
maximumAge:0
});

}

// ================= CAMERA =================

function openCamera(){

let input=document.createElement("input");

input.type="file";

input.accept="image/*";

input.capture="environment";

input.onchange=function(){

if(this.files.length){

alert("📷 Photo Selected : "+this.files[0].name);

}

}

input.click();

}

// ================= SITE VISIT =================

function openVisit(){

document.getElementById("content").innerHTML=`

<div class="form-card">

<h2>🏢 Site Visit</h2>

<input id="siteName" placeholder="Site Name">

<input id="engineer" placeholder="Engineer Name">

<input id="purpose" placeholder="Purpose">

<textarea id="visitRemark"
placeholder="Remarks"></textarea>

<button class="save-btn"
onclick="saveVisit()">

Save Visit

</button>

</div>

`;

}

function saveVisit(){

records.push({

type:"Site Visit",

date:new Date().toLocaleString(),

site:siteName.value,

engineer:engineer.value,

purpose:purpose.value,

remark:visitRemark.value

});

localStorage.setItem("records",
JSON.stringify(records));

alert("🏢 Site Visit Saved");

updateDashboard();

}

// ================= SITE RESTORE =================

function openRestore(){

document.getElementById("content").innerHTML=`

<div class="form-card">

<h2>🔧 Site Restore</h2>

<input id="restoreSite"
placeholder="Site Name">

<input id="restoreCompany"
placeholder="ISP Company">

<input id="fault"
placeholder="Fault">

<textarea id="restoreRemark"
placeholder="Remarks"></textarea>

<button class="save-btn"
onclick="saveRestore()">

Save Restore

</button>

</div>

`;

}

function saveRestore(){

records.push({

type:"Site Restore",

date:new Date().toLocaleString(),

site:restoreSite.value,

company:restoreCompany.value,

fault:fault.value,

remark:restoreRemark.value

});

localStorage.setItem("records",
JSON.stringify(records));

alert("🔧 Site Restore Saved");

updateDashboard();

}

// ================= REPORT =================

function showReport(){

let html="<h2>Daily Report</h2>";

records.forEach(function(r){

html+=`

<div class="card">

<b>${r.type}</b><br>

${r.customer||r.site||""}<br>

${r.company||""}<br>

${r.date}

</div>

`;

});

document.getElementById("content").innerHTML=html;

}

// ================= EXPORT CSV =================

function exportExcel(){

let csv="Type,Date,Customer,Company,Site,KM\\n";

records.forEach(function(r){

csv+=`${r.type},
${r.date},
${r.customer||""},
${r.company||""},
${r.site||""},
${r.km||""}
\\n`;

});

let blob=new Blob([csv],
{type:"text/csv"});

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="Fiber_Work_Report.csv";

a.click();

}

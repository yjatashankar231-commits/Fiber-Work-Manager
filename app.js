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

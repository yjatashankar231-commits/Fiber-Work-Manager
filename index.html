<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Fiber Work Manager</title>
<style>
body{margin:0;font-family:Arial,sans-serif;background:#eef3ff}
header{background:#1565c0;color:#fff;padding:16px;text-align:center;font-size:22px;font-weight:bold}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;padding:14px}
.card{background:#fff;border-radius:16px;padding:20px;text-align:center;box-shadow:0 3px 10px rgba(0,0,0,.12);cursor:pointer}
#form{margin:14px;background:#fff;border-radius:16px;padding:15px;box-shadow:0 3px 10px rgba(0,0,0,.12)}
input,select,textarea,button{width:100%;padding:10px;margin:6px 0;border-radius:10px;border:1px solid #ccc;box-sizing:border-box}
button{background:#1565c0;color:#fff;border:none}
#list{padding:14px}
</style>
</head>
<body>
<header>📡 Fiber Work Manager</header>

<div class="grid">
<div class="card">🚗<br>Travel</div>
<div class="card">🛠<br>Installation</div>
<div class="card">🔧<br>SR</div>
<div class="card">📍<br>Site Visit</div>
<div class="card">🏗<br>Site Restore</div>
<div class="card" onclick="exportCSV()">📊<br>Export Excel</div>
</div>

<div id="form">
<select id="type">
<option>Installation</option>
<option>SR</option>
<option>Site Visit</option>
<option>Site Restore</option>
<option>Travel</option>
</select>
<input id="customer" placeholder="Customer Name">
<input id="mobile" placeholder="Mobile Number">
<input id="company" placeholder="ISP">
<input id="site" placeholder="Site / Address">
<input id="km" placeholder="Travel KM">
<input type="file" id="photo" accept="image/*">
<textarea id="remark" placeholder="Remarks"></textarea>
<button onclick="saveEntry()">💾 Save Entry</button>
</div>

<div id="list"></div>

<script>
let data=JSON.parse(localStorage.getItem("workData")||"[]");
render();
function saveEntry(){
data.push({
date:new Date().toLocaleString(),
type:type.value,
customer:customer.value,
mobile:mobile.value,
company:company.value,
site:site.value,
km:km.value,
remark:remark.value,
photo:photo.files.length?photo.files[0].name:""
});
localStorage.setItem("workData",JSON.stringify(data));
alert("Saved");
render();
}
function render(){
list.innerHTML="<h3>Saved Entries</h3>"+(data.map((r,i)=>`${i+1}. ${r.date} | ${r.type} | ${r.customer} | ${r.company}<br>`).join("")||"No Data");
}
function exportCSV(){
let csv="Date,Type,Customer,Mobile,ISP,Site,KM,Photo,Remark\n";
data.forEach(r=>csv+=`"${r.date}","${r.type}","${r.customer}","${r.mobile}","${r.company}","${r.site}","${r.km}","${r.photo}","${r.remark}"\n`);
let a=document.createElement("a");
a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
a.download="Fiber_Report.csv";
a.click();
}
</script>
</body>
</html>

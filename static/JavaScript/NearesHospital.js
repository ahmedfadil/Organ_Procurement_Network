var ListofNearbyHospital = [];
var ListOfDistance = [];







const Hospitals = document.getElementById("Hospitals");
function AddHospitals() {
    OrderedList.forEach(Hos=>{
        if (Hos[0] != undefined) {
            ListofNearbyHospital.push(Hos[0]);
        }
    });
    SortList.forEach(Hos=>{
        if (Hos != undefined) {
            ListOfDistance.push(Hos[1]);
        }
    });
    console.log(ListofNearbyHospital.length);
    for (let index = 0; index < ListofNearbyHospital.length; index++) {
        var div = document.createElement("div");
        div.setAttribute("class","card");
        Hospitals.appendChild(div);
        var div1 = document.createElement("div");
        div1.setAttribute("class","content");
        div.appendChild(div1);
        var div = document.createElement("div");
        div.setAttribute("class","contentBx");
        div1.appendChild(div);
        var i = document.createElement("i");
        i.setAttribute("class","fa-solid fa-hospital");
        div.appendChild(i);
        var h3 = document.createElement("h3");
        h3.innerHTML="Hospital Name <br>"+ListofNearbyHospital[index]+"<br><br><br>Distance: "+ListOfDistance[index]+" Km";
        div.appendChild(h3);
    }

   const cards = document.querySelectorAll(".card");
   const popup = document.getElementById("popup");
   const ConfirmSubmit = document.getElementById("ConfirmSubmit");
   cards.forEach(card=>{
    card.addEventListener("click",()=>{
        popup.style.display="block";
    });
   });
   ConfirmSubmit.addEventListener("click",()=>{
    window.location.href="{{ url_for('welcome') }}";
   });








}
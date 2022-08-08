const Organ_Select_List = document.getElementById("Organ_Select_List");
const ListOfOrgan=["Lung", "Liver","Kidney","Pancreas", "Heart", "Cornea"];
ListOfOrgan.forEach(Organ =>{
    var div = document.createElement("div");
    div.setAttribute("class", "card");
    Organ_Select_List.appendChild(div);
    var div1 = document.createElement("div");
    div1.setAttribute("class", "content");
    div.appendChild(div1);
    var div2 = document.createElement("div");
    div2.setAttribute("class", "icon");
    div1.appendChild(div2);
    var img = document.createElement("img");
    img.setAttribute("src","./Img/"+Organ+".png");
    div2.appendChild(img);
    var div2 = document.createElement("div");
    div2.setAttribute("class", "contentBx");
    div1.appendChild(div2);
    var h3 = document.createElement("h3");
    h3.innerHTML=Organ;
    div2.appendChild(h3);

});
document.querySelector("#majors").addEventListener('click', (e) => {
    if (document.querySelector(".majors-list").innerHTML == ""){
    document.querySelector(".majors-list").innerHTML = `
    <ul>
        <li><a href="#">Agribusiness & Food Industry Management/ Agricultural Science</a></li>
        <li><a href="#">Animal & Veterinary Sciences</a></li>
        <li><a href="#">Apparel Merchandising & Management</a></li>
        <li><a href="#">Nutrition & food Science</a></li>
        <li><a href="#">Plant Science</a></li>
    </ul>`;
    e.target.style.background = "white";
    document.querySelector(".carrot").style.transform = "rotate(0)";
    }else{
        document.querySelector(".majors-list").innerHTML = "";
        e.target.style.background = "none";
        document.querySelector(".carrot").style.transform = "rotate(180deg)";

    }
})

const teachers = [
    { id: 1, name:"T Lin", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 2, name:"S Bawer", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 3, name:"N Schultz", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 4, name:"J Kelley", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 5, name:"F Peterson", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 6, name:"S Newman", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 7, name:"H Lee", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 8, name:"T Greensworth", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 9, name:"P Logan", major: "Agribusiness & Food Industry Management/ Agricultural Science", rank: 5},
    { id: 10, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
    { id: 11, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
    { id: 11, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
    { id: 11, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
    { id: 11, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
    { id: 11, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
    { id: 11, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
    { id: 11, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
    { id: 11, name:"T Lin", major: "Animal & Veterinary Sciences", rank: 5},
]
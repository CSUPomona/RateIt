//SEARCH BAR EVENT
document.querySelector("#majors").addEventListener('click', (e) => {
    if (document.querySelector(".majors-list").innerHTML == ""){
    document.querySelector(".majors-list").innerHTML = `
    <ul class="anime">
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
        e.target.style.background = "";
        document.querySelector(".carrot").style.transform = "rotate(180deg)";

    }
})

//TEACHER RESULT of searchbar EVENT
document.body.addEventListener('click', teacherPop);
    
function teacherPop(e) {
    console.log(e.target.classList)
    var name;
    if (e.target.classList.contains("pop")){//if blank space of entire solo result is clicked
        name = e.target.children[0].innerHTML;
    }
    if (e.target.classList.contains("name")){//If div of professor name is clicked
        name = e.target.innerHTML;
    } 
    if (e.target.classList.contains("follow")){//If professor's MAJOR is clicked
        name = e.target.previousElementSibling.innerHTML;
    }
    teachersArr.forEach((curr) => {
        if (name === curr.name){
            document.querySelector(".hero").innerHTML = `
                <img class="school" src="./img/school.png">
                <div class="overlay">
                    <div>
                        <img class= "exit" src="./img/exit.png">
                    </div>
                    <div class="card">
                        <div class="photo">
                            <img src="img/teachers/${name}.png">
                        </div>
                        <div class="info">
                            <h1>No Ratings /<span class="grey"> 5.0</span></h1>
                            <h2>Prof. ${name}<h2>
                            <div class="attributes">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="contain-btns">
                        <input type="button" class="round" id="comments" value="Rating & Comments">
                        <input type="button" class="round" id="rate" value="Rate This Professor">
                    </div>
                </div>
            `;
        }
    })  
}

//EXIT TEACHER CARD
document.body.addEventListener('click', cardExit);
    
function cardExit(e) {
    if (e.target.classList == "exit"){
        location.reload();
    }
}

/*--------------INTERFACE FOR SEARCHBAR RESULTS--------------*/
class ui {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    showResults(teacher){
        document.getElementById('search-bar').classList.add('resultsOn');
        var output = ''
        teacher.forEach((curr)=>{
            output += `
                <div class="solo-result pop">    
                    <h2 class="name">${curr.name}</h2>
                    <h3 class="follow">${curr.major}</h3>
                </div>
            `
        })
        this.profile.innerHTML = `
            <div class="full-results">
                ${output}
            </div>
        `;
    }

    clearResults(){
        document.getElementById('search-bar').classList.remove('resultsOn');
        this.profile.innerHTML = '';
    }

    noResults(){
        document.getElementById('search-bar').classList.add('resultsOn');
        this.profile.innerHTML = `
            <div class="full-results">
                    <div class="solo-result">
                    <h2><i>No Results</i></h2>
                    </div>
                </div>
        `;
    }
};


/*-----------------------DECLARE SUBJECTS-------------------------*/
const subjectOne = 'Agribusiness & Food Industry Management/ Agricultural Science';
const subjectTwo = 'Animal & Veterinary Sciences';
const subjectThree = 'Apparel Merchandising & Management';
const subjectFour = 'Food & Nutrition Science';
const subjectFive = 'Plant Science';

/*------------------------TEACHER INFO-------------------------*/
const teachersArr = [
    { id: 1, name:"A Anderson", major: subjectOne, rank: 0},
    { id: 2, name:"S Archambault", major: subjectOne, rank: 0},
    { id: 3, name:"D Farias", major: subjectOne, rank: 0},
    { id: 4, name:"K Horvart", major: subjectOne, rank: 0},
    { id: 5, name:"B Lehan", major: subjectOne, rank: 0},
    { id: 6, name:"K Miller", major: subjectOne, rank: 0},
    { id: 7, name:"M Mulhall", major: subjectOne, rank: 0},
    { id: 8, name:"J Phillips", major: subjectOne, rank: 0},
    { id: 9, name:"N Hammack", major: subjectOne, rank: 0},
    { id: 10, name:"E At-Tara", major: subjectTwo, rank: 0},
    { id: 11, name:"O Gekara", major: subjectTwo, rank: 0},
    { id: 12, name:"M Haag", major: subjectTwo, rank: 0},
    { id: 13, name:"A Watson", major: subjectTwo, rank: 0},
    { id: 14, name:"C Brundage", major: subjectTwo, rank: 0},
    { id: 15, name:"M Tngrian", major: subjectTwo, rank: 0},
    { id: 16, name:"E Fonda", major: subjectTwo, rank: 0},
    { id: 17, name:"K Earle", major: subjectTwo, rank: 0},
    { id: 18, name:"S Murinda", major: subjectTwo, rank: 0},
    { id: 19, name:"K Toerque", major: subjectThree, rank: 0},
    { id: 20, name:"J Gipe", major: subjectThree, rank: 0},
    { id: 21, name:"P Kilduff", major: subjectThree, rank: 0},
    { id: 22, name:"K Kwok", major: subjectThree, rank: 0},
    { id: 23, name:"S Min", major: subjectThree, rank: 0},
    { id: 24, name:"H Trejo", major: subjectThree, rank: 0},
    { id: 25, name:"C Whang", major: subjectThree, rank: 0},
    { id: 26, name:"C Dabas", major: subjectThree, rank: 0},
    { id: 27, name:"J Che", major: subjectThree, rank: 0},
    { id: 28, name:"E Froyen", major: subjectFour, rank: 0},
    { id: 29, name:"G Davido-Pardo", major: subjectFour, rank: 0},
    { id: 30, name:"O Li", major: subjectFour, rank: 0},
    { id: 31, name:"H Singh", major: subjectFour, rank: 0},
    { id: 32, name:"H Wu", major: subjectFour, rank: 0},
    { id: 33, name:"L Kessler", major: subjectFour, rank: 0},
    { id: 34, name:"D Trinh", major: subjectFour, rank: 0},
    { id: 35, name:"M Elam", major: subjectFour, rank: 0},
    { id: 36, name:"R Flores", major: subjectFour, rank: 0},
    { id: 37, name:"T Takeuchi", major: subjectFive, rank: 0},
    { id: 38, name:"R Chachi", major: subjectFive, rank: 0},
    { id: 39, name:"G Bender", major: subjectFive, rank: 0},
    { id: 40, name:"A Fox", major: subjectFive, rank: 0},
    { id: 41, name:"E Cullen", major: subjectFive, rank: 0},
    { id: 42, name:"M Pina", major: subjectFive, rank: 0},
    { id: 43, name:"R Surls", major: subjectFive, rank: 0},
    { id: 44, name:"R Kumar", major: subjectFive, rank: 0},
    { id: 45, name:"D McKee", major: subjectFive, rank: 0}

]

const searchTeacher = document.getElementById('search');
const searchItems = new ui;

searchTeacher.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    const teachers = teachersArr.map((curr) => {
        var re = new RegExp(curr.name, "i");
        return re
    })
    if(userText !== ''){
        let userSearch = new RegExp(userText, "i");
        let results = []
        teachersArr.forEach((curr)=>{
            let record = curr.name.match(userSearch)
            if (record){
                results.push(curr)
            }
        })
            if(results.length >= 1) { //if results exist from search
                //Show results
                searchItems.showResults(results); 
            } else{
                //clear results 
                searchItems.noResults();
            }
    }else {
        //clear profile
        searchItems.clearResults();
    }
});
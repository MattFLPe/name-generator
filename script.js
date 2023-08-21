
   const maleNameList = ["James", "Steven", "Kenny", 
   "Carl", "Matthew", "Terence", 
   "Gary", "Paul", "Jason", "Peter"]
   
   const femaleNameList = ["Mary", "Julie", "Stacey",
   "Lindsay", "Abby", "Ann", "Patricia",
"Gracie", "Kathreen", "Courtney" ]

   const LastNameList = ["Johnson", "Smith", "Pearson", 
   "Jefferson", "Stephenson", "Goodman",  
   "Harris", "Porter", "Willis", "Hills" ]

const maleBtn = document.querySelector("[data-male]")
const femaleBtn = document.querySelector("[data-female]")
const lastNamebtn = document.querySelector("[data-lastname]")
const nameOutput = document.querySelector("#name-random")

function generateFirstName() {
maleBtn.addEventListener('click', () => {
   let randomName = "";
   randomName = maleNameList[Math.floor(Math.random() * maleNameList.length)];    
   nameOutput.textContent = randomName;
   console.log(randomName)
})

femaleBtn.addEventListener('click', () => {
   let randomFemaleName = "";
   randomFemaleName = femaleNameList[Math.floor(Math.random() * femaleNameList.length)];    
   nameOutput.textContent = randomFemaleName;
   console.log(randomFemaleName)
})
}

function generateLastName() {

}


   
      
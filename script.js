
   const maleNameList = ["James", "Steven", "Kenny", 
   "Carl", "Matthew", "Terence", 
   "Gary", "Paul", "Jason", "Peter"]
   
   const femaleNameList = ["Mary", "Julie", "Stacey",
   "Lindsay", "Abby", "Ann", "Patricia",
"Gracie", "Kathreen", "Courtney" ]

   const lastNameList = ["Johnson", "Smith", "Pearson", 
   "Jefferson", "Stephenson", "Goodman",  
   "Harris", "Porter", "Willis", "Hills"]

const maleBtn = document.querySelector("[data-male]")
const femaleBtn = document.querySelector("[data-female]")
const lastNamebtn = document.querySelector("[data-lastname]")
const nameOutput = document.querySelector("#name-random")

function generateFirstMaleName() {
maleBtn.addEventListener('click', () => {
   let randomName = "";
   randomName = maleNameList[Math.floor(Math.random() * maleNameList.length)];    
   nameOutput.textContent = randomName;

lastNamebtn.addEventListener('click', () => {
   let randomLastName = "";
   randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];  
   nameOutput.textContent = randomName + " " + randomLastName;
    });
});
};
generateFirstMaleName();

function generateFirstFemaleName() {
femaleBtn.addEventListener('click', () => {
   let randomFemaleName = "";
   randomFemaleName = femaleNameList[Math.floor(Math.random() * femaleNameList.length)];    
   nameOutput.textContent = randomFemaleName;

lastNamebtn.addEventListener('click', () => {
   let randomLastName = "";
   randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];  
   nameOutput.textContent = randomFemaleName + " " + randomLastName;
    });
});
};
generateFirstFemaleName();

lastNamebtn.addEventListener('click', () => {
   let randomLastName = "";
   randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];  
   nameOutput.textContent = randomLastName;
});





   
      
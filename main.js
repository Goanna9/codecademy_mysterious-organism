// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

let specimenNumsArray = [];
// ____START____
const pAequorFactory = (number, array) => {
  // Check if number is already taken
  if (specimenNumsArray.includes(number)) {
    do {
      number = Math.floor(Math.random() * 10000);
    } while (specimenNumsArray.includes(number));
      console.log(`Sorry Number is already taken, New Number is: ${number}`)
  }
  specimenNumsArray.push(number);
// Create a Monster
  return {
    specimenNum: number,
    dna: array,
    // Mutate a Monster
    mutate() {
      const randomNumber = Math.floor(Math.random() * array.length - 1);
      let newBase = returnRandBase();

      while (this.dna[randomNumber] === newBase) {
        newBase = returnRandBase();
      }

      this.dna[randomNumber] = newBase;      
    },
    //Compare DNA
    compareDNA(pAequor) {
      let sameDna = [];
      let inCommon = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          sameDna.push(` ${this.dna[i]} ${i} `);
          inCommon++;
        }
      }
      return `specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ` + 
              Math.round(inCommon / this.dna.length * 100) + ` % DNA in common\n` +
              `The DNA of the two Species share the same values: ${sameDna}`;
    },
    // Likeliness to survive
    willLikelySurvive() {
      let survivalCounter = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          survivalCounter++;
        }
      }
      if ((survivalCounter / this.dna.length * 100) >= 60) {
        return true;
      } else {
          return false;
      }
    }
  }
}
// ____END____

console.log('ALIEN 1:');
let AlienOne = pAequorFactory(5, mockUpStrand(returnRandBase));
console.log(AlienOne);
console.log('');

console.log('ALIEN 1 MUTATION');
AlienOne.mutate();
console.log(AlienOne);
console.log('');

console.log('ALIEN 2:');
let AlienTwo = pAequorFactory(5, mockUpStrand(returnRandBase));
console.log(AlienTwo);
console.log('');

console.log('ALIEN DNA COMPARISON:');
console.log(AlienOne.compareDNA(AlienTwo));
console.log('');

console.log('ALIEN NUMBERS:');
console.log(specimenNumsArray);
console.log('');

console.log('ALIEN Survival:');
console.log(AlienOne.willLikelySurvive());

console.log(specimenNumsArray);

let AlienArray = [];
for (i = 0; i < 30; i++) {
  AlienArray.push(pAequorFactory(i, mockUpStrand(returnRandBase)));
}
console.log(AlienArray);

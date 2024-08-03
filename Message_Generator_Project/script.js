function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  } // Generates a number from 0 -> num - 1

const warriorBuild = {
    warriorType: ['Spartan', 'Persian Immortal', 'Ninja', 'Centurion Officer', 'Samurai', 'Medieval Knight',
        'Amazon Warrior', 'Hashassin', 'Knights Templar', 'Teutonic Knight', 'Archer', 'Dual Swordsman'],
    specialPower: ['Super Strength', 'Ultimate accuracy', 'Trickery', 'Cat-like Reflexes', 'Leadership',
         'Stealth', 'Wisdom of the Gods', 'Persuasion', 'Intimidation', 'Critical Striking'],
    warriorReason: ['to find true love', 'to find the person who killed your lover', 'to find your purpose',
         'to protect your King and Queen at all costs', 'to serve and protect those who can\'t protect themselves',
          'to become Immortal', 'to build up strength and slay a dragon'],
    kingdom: ['Aetolia', 'Crete', 'Locris', 'Arcadian', 'Meropis', 'Tartaros', 'Greek', 'Underworld', 'Heavenly',
         'Asgard', 'Kvenland', 'Valhalla', 'Shangri-La', 'Xangdu']
}

//Store the 'build' in an array
let yourWarrior = []

//Iterate over the object
for (let x in warriorBuild) {
    let warriorOptions = generateRandomNumber(warriorBuild[x].length) 

    //use the object's properties to customize the message being added to personalWisdom  
    switch (x) {
        case 'warriorType': 
            yourWarrior.push(`You are a "${warriorBuild[x][warriorOptions]}".`)
        break
        case 'specialPower':
            yourWarrior.push(`Your special power is "${warriorBuild[x][warriorOptions]}".`)
        break
        case 'warriorReason':
            yourWarrior.push(`You became a warrior "${warriorBuild[x][warriorOptions]}".`)
        break
        case 'kingdom':
            yourWarrior.push(`You fight for the "${warriorBuild[x][warriorOptions]}" Kingdom.`)
        break
        default:
            yourWarrior.push('You are Not a warrior...')
    }
}

function formatWarrior(warrior) {
    const formatted = yourWarrior.join('\n')
    console.log(formatted)
  }
  
  formatWarrior(yourWarrior);




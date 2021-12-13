let subject = ['you', 'she', 'him', 'they']
let adjectives = ['generous', 'funny', 'weird', 'cool']
function createPhrase(){
    return `${subject[Math.floor(Math.random() * 4)]} are/is ${adjectives[Math.floor(Math.random() * 4)]}`
}
console.log(createPhrase())
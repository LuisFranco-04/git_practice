let salaries = [134000, 164000, 192000, 250000]
let stockSalaries = [108000, 240000, 405000, 594000]

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

function calculateGrowth(initial, yearlyReturn, salaries, years){
    const monthlyReturn = (yearlyReturn / 12) + 1
    let months = years * 12
    let currentCap = initial
    let x = 0
    for (let i = 0; i <= months; i++){
        let currentYear = i / 12
        let salaryIndex = 0
        if (currentYear < 3){
            salaryIndex = 0
        } else if (currentYear < 7){
            salaryIndex = 1
            currentYear === 3 ? console.log(`Year 3: ${formatter.format(currentCap)} Age: ${25 + currentYear}`) : currentCap = currentCap
        } else if (currentYear < 11){
            salaryIndex = 2
            currentYear === 7 ? console.log(`Year 7: ${formatter.format(currentCap)} Age: ${25 + currentYear}`) : currentCap = currentCap 
        } else if (currentYear >= 12){
            salaryIndex = 3
            currentYear === 15 ? console.log(`Year 15: ${formatter.format(currentCap)} Age: ${25 + currentYear}`) : currentCap = currentCap
            currentYear === 17 ? console.log(`Year 17: ${formatter.format(currentCap)} Age: ${25 + currentYear}`) : currentCap = currentCap
            currentYear === 12 ? console.log(`Year 12: ${formatter.format(currentCap)} Age: ${25 + currentYear}`) : currentCap = currentCap
        }
        let currentMonthFinal = (currentCap * monthlyReturn) + ((salaries[salaryIndex] / 36))
        currentCap = currentMonthFinal
        if (currentCap >= 1250000000 && x === 0){
            console.log(`You are a billionaire!! Age: ${25 + currentYear}, year ${currentYear}`)
            x = 1
        }
    }
    console.log(`Final cap: ${formatter.format(currentCap)}`)
}

calculateGrowth(0, 0.5, salaries, 21)
console.log(' ')
calculateGrowth(0, 0.35, stockSalaries, 21)


// while (num > something)
// coinCounts = [quarterCount, dimeCount]
// coinValues = [25, 10]

function changeFromAmount(change) {
  
  let quartersValue = 25
  let quarters = 0

  quarters = Math.floor(change/quartersValue)
  
  change -= quarters * quartersValue
  
  let dimesValue = 10
  let dimes = 0
  dimes = Math.floor(change/dimesValue)
  
  
}

console.log(changeFromAmount(50), "[2]")
changeFromAmount(25)


const arrayChange = [
  { name: 'quarter', value: 25},
  { name: 'dime', value: 10},
  { name: 'nickel', value: 5},
  { name: 'penny', value: 1}
]



// def initialize()
// @penny_counter = 0
// @nickel_counter = 0
// @dime_counter = 0
// @quarter_counter = 0
// end

// def coin(value)
// until (value == 0) do
//   if value >= 25
//     value -= 25
//     @quarter_counter += 1
//   elsif value >= 10
//     value -= 10
//     @dime_counter += 1
//   elsif value >= 5
//     value -= 5
//     @nickel_counter += 1
//   elsif value < 5
//     value -= 1
//     @penny_counter += 1
//   end
// end
// coin_bank = "
// Pennies: #{@penny_counter}
// Nickel: #{@nickel_counter}
// Dime: #{@dime_counter}
// Quarter: #{@quarter_counter}
// "
// end 
// end

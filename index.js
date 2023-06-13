// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks -42)
  }


function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(blocks) * feetPerBlock;
}
function distanceTravelledInFeet(num1 , num2){
    const feetPerBlock =  264; 
    return Math.abs(num1 - num2) * feetPerBlock 
  
}    
console.log(distanceTravelledInFeet(34, 42))

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)

    let farePrice;

    if (distance <= 400){
        farePrice = 0;
    }
    if (distance <= 2000){
        farePrice = (disatnce - 400) * 0.02;
    }
    if (distance <= 2500){
        farePrice = 25;
    }
    if (distance > 2500){
        return 'cannot travel that far';
    }

}

console.log(calculatesFarePrice(34, 32))
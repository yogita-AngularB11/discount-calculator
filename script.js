// var bill = document.getElementById("billAmount").value;
// console.log(bill);
// var disc = document.getElementById("percentage").value;
// console.log(disc);
// const calculateButton = document.querySelector('#calc');
// calculateButton.addEventListener('click', ()=>{
//     const result=bill*disc/100;
//     console.log(result);
//   const elementPara = document.createElement('p');
//   const textNodeSquare = document.createTextNode(`${result}`)
//   elementPara.style.color= 'orange';
//   elementPara.appendChild(textNodeSquare)
//   const squareResultElement = document.querySelector('#bottom');
//   squareResultElement.appendChild(elementPara);
//   console.log(result);
// });
var calcBtn = document.getElementById('calc');
    calcBtn.addEventListener('click', function() {
        var billAmount = document.getElementById('billAmount').value;
        var discountPercentage = document.getElementById('percentage').value;
        
        if (!isNaN(billAmount) && !isNaN(discountPercentage)) {
            var discountAmount = (billAmount * (discountPercentage / 100));
            document.getElementById('bottom').textContent = "Total Discount Amount: " + discountAmount;
        } else {
            document.getElementById('bottom').textContent = "Please enter valid numbers for bill amount and discount percentage.";
        }
    });
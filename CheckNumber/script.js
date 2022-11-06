
// = 30;
// console.log(document.querySelector(".number").value);



document.querySelector(".check").addEventListener("click", function(){
    let number = Number(document.querySelector(".number").value);

    if(number % 2 === 0){
        document.querySelector(".message").textContent = `${number} IS AN EVEN NUMBER`;

    }else{
        document.querySelector(".message").textContent = `${number} IS A ODD NUMBER`;

    }
});
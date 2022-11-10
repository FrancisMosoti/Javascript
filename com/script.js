
// = 30;
// console.log(document.querySelector(".number").value);



document.querySelector(".check").addEventListener("click", function(){
    let number = Number(document.querySelector(".number").value);

    if(number >= 500){
        document.querySelector(".message").textContent = `YOU HAVE Ksh.${number}. TAKE A MEAL AT KFC `;

    }else if(number>= 200){
        document.querySelector(".message").textContent = `YOU HAVE Ksh.${number}. KULA KWA MESS`;

    }else if(number>= 100){
        document.querySelector(".message").textContent = `YOU HAVE Ksh.${number}. KULA NYAMA CHOMA KWA MATHE `;

    }else if(number>= 50){
        document.querySelector(".message").textContent = `YOU HAVE Ksh.${number}. KIMBIA UKULE CORNER TANO😂😂`;

    }else if(number < 50){
        document.querySelector(".message").textContent = `YOU HAVE Ksh.${number}. UNATESEKA KWELI KWELI😂😂. WEE INAMA TU`;

    }else{
        document.querySelector(".message").textContent = ` ENTER VALID MPESA BALANCE`;
    }
});


// document.getElementById("mybutton").onclick = function(){
    let harga = prompt("Masukkan total pembelian anda: ");

            if (harga >= 100000){
                console.log("anda mendapat diskon sebesar 10%");
            }
            else if (harga < 100000 && harga>=50000){
                console.log("Anda mendapat diskon 5%");
            }
            else
                console.log("anda tidak mendapat diskon");

//  }


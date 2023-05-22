function hitungDiskon() {
    const jumlahInput = document.getElementById('jumlah');
    const jumlah = parseFloat(jumlahInput.value);
    
    let disk = 0;
    let total = 0;
    
    if (jumlah >= 100000) {
      disk = 10;
    } else if (jumlah >= 50000) {
      disk = 5;
    }
    else
      disk=0;
    
    total = jumlah - ((disk/100) *jumlah);
    
    const Display = document.getElementById('disk');

    const jumlahDisplay = document.getElementById('total');
    

    Display.textContent = `Anda mendapat diskon sebesar: ${disk}%`;
    jumlahDisplay.textContent = `Jumlah total belanjaan anda: Rp ${total}`;
    }
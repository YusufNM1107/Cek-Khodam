function generateRandomData() {
    const nama = document.getElementById('namaInput').value;
    if (nama.trim() === '') {
        alert('Silakan masukkan nama!');
        return;
    }

    // Mengambil pesan secara acak dari file JSON
    fetch("script/data.json")  
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const messages = data.messages;
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            const hasilCek = document.getElementById('hasilCek');
            hasilCek.innerHTML = `<div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>`
           
            // Menunda pembaruan hasil cek
            setTimeout(() => {
                hasilCek.innerText = `Hallo ${nama}, Khodam Anda Adalah ${randomMessage}`;
                hasilCek.style.fontFamily = 'Creepster, system-ui'; 
                hasilCek.style.fontSize = '24px'; 
                hasilCek.style.color = 'red'; 
                hasilCek.style.backgroundColor = 'white';
                hasilCek.style.textAlign = 'center';
                hasilCek.style.padding = "20px";
            }, 2000); 
        })
        .catch(error => {
            console.error('Error loading the messages:', error);
            alert('Gagal memuat data, periksa konsol untuk detailnya.');
        });
}

function resetForm() {
    document.getElementById('namaInput').value = ''; 
    document.getElementById('hasilCek').innerHTML = ''; 
}

// Input pendapatan dari penjualan
const pendapatan = 600000; // Ganti dengan jumlah pendapatan yang sesuai

// Inisialisasi variabel uangJasa dan komisi
let uangJasa, komisi;

// Menentukan uang jasa berdasarkan pendapatan
if (pendapatan <= 200000) {
    uangJasa = 10000;
} else if (pendapatan <= 500000) {
    uangJasa = 20000;
} else {
    uangJasa = 30000;
}

// Menghitung komisi berdasarkan pendapatan
switch (true) {
    case pendapatan <= 200000:
        komisi = pendapatan * 0.1;
        break;
    case pendapatan <= 500000:
        komisi = pendapatan * 0.15;
        break;
    default:
        komisi = pendapatan * 0.2;
}

// Menghitung total pembayaran
const totalPembayaran = uangJasa + komisi;

// Menampilkan hasil
console.log(`Pendapatan: Rp. ${pendapatan}`);
console.log(`Uang Jasa: Rp. ${uangJasa}`);
console.log(`Komisi: Rp. ${komisi}`);
console.log(`Total Pembayaran: Rp. ${totalPembayaran}`);

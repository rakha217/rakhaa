const daftarProduk = [
{
  nama: "Minyak Goreng",
  harga: 42000,
  stock: 46,
   },
{
  nama: "Beras",
  harga: 15000,
  stock: 50,
  },
 {
 nama: "Gulaku",
 harga: 18000,
 stock: 36,
  },
];


console.log(daftarProduk);


// if : menghitung discound
//const = totalBelanja = 120000;
function menghitungDiscound(totalBelanja) {
  let discound = 0;
  if (totalBelanja >= 100000) {
  discound = totalBelanja * 0.1;
 } else if (totalBelanja >= 50000) {
  discound = totalBelanja * 0.05;
 } else {
  discound = 0;
 }
  return discound;
}


console.log(
 `Harga Beli 130.000 dapat discound : ${menghitungDiscound(130000)}`,
);
console.log(`Harga Beli 75.000 dapat discound : ${menghitungDiscound(75000)}`);
// switch : nyari tau metode pembayaran
//let metodeBayar = "qris";
function metodeBayar(metode) {
  let biayaAdmin = 0;
 switch (metode) {
 case "cash":
 biayaAdmin = 0;
 break;
 case "transfer":
 biayaAdmin = 3000;
 break;
 case "qris":
 biayaAdmin = 2500;
 break;
 default:
 biayaAdmin = "Biaya admin tidak di temukan";
 }
 return biayaAdmin;
}
//console.log(`Metode Bayar ${metodeBayar}, biaya admin adalah ${biayaAdmin}`);
console.log(
 `Biaya Admin ${metodeBayar("cash")} dengan metode bayar adalah cash`,
);
console.log(
 `Biaya Admin ${metodeBayar("transfer")} dengan metode bayar adalah transfer`,
);
console.log(
 `Biaya Admin ${metodeBayar("qris")} dengan metode bayar adalah qris`,
);
console.log(
 `Biaya Admin ${metodeBayar("not found")} dengan metode bayar adalah not found"`,
);
// for..of:hitung satu total
let totalHarga = 0;
for (const produk of daftarProduk) {
totalHarga += produk.harga * produk.stock;
totalHarga += produk.harga * produk.stock;
}


console.log(totalHarga);

function myFunction() {
   arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
   date = new Date();
   tanggal = date.getDate();
   bulan = date.getMonth();
   tahun = date.getFullYear();
   alert(tanggal+" "+arrbulan[bulan]+" "+tahun);
}

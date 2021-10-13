function hesapla(){
    //text kutusu içindeki değeri okuyup sayi değişkenine aktarıyoruz.
    var kk=document.getElementById("kisa").value;
    var uk=document.getElementById("uzun").value;
     
    //text kutusuna girilen değerler metinsel türdedir. Hesaplama yapabilmek için sayıya çeviriyoruz.
    kk=Number(kk);
    uk=Number(uk);
     
    var alan=kk*uk;
    var cevre=(kk+uk)*2;
    alert("Dikdörtgen alanı:"+alan+" \n Dikdörtgen çevresi:"+cevre);
     
     
    }
     
     
    //hesaplama yapması için hesap butonunu seçiyoruz.
    var hesapBtn=document.getElementById("hesapla");
     
    //fonksiyonu olaya bağlıyoruz.
    hesapBtn.onclick=hesapla;
     

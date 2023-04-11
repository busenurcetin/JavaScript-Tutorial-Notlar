/* 
*JavaScript sayesinde dinamik yapılar oluştururuz. JavaScript kullanmadan yapılan web siteleri statiktir. Web uygulamaları kullanmak isteyen herkes öğrenmeli.
*Auto rename, better comments, javascript console utils, javascript(ES6) code snippets indirmemiz JavaScript projeleri yaparken ve JavaScript öğrenirken bize fazlasıyla yardımcı olacaktır.

*JavaScript’i html sayfasına dahil etmek için head veya body tagları içine <script></script> olarak yazarız. JavaScript’in istediğimizi yapması için html etiketlerinin en altına body’nin içine koymamız daha iyi olur. Console.log(“”) konsola şunu yaz bunu yaz gibi bir işe yarıyor. App.js’te kodları yazdıktan sonra index’ten ulaşmak istiyorsak index.html içine yine body’nin en alt kısmına <script src=“app.js”></script> yazarız.

*JavaScript’te çıktı vermek için console.log(), document.write() veya alert() kullanırız. 

*Yan yana gelmesini istiyorsak document.write istemiyorsak arada boşluk istiyorsak document.writeln yazarız.

*Console.clear(); kullanırsak konsolu temizlemiş oluruz.

Let a=5;
Let b= 10;
console.log(a+b); yazarsak konsolda 15 yazar.

*Window objesi js’nin en geniş objesidir.

*Console.log(document.location.host); dediğimizde uygulamayı kurduğumuz host’u konsoldan alabiliriz.

*alert(“merhaba”); yazarsak sayfamızda merhaba adlı uyarı yazısı çıkar.

*Window tüm web sayfasını kapsar document objesi de window objesi içerisinde tanımılanmış bir objedir. Document. Veya window. Diyerek içindeki her şeyi görebiliriz. console.error(“”HATA OLUŞTU) dersek hata oluştuyu konsolda kırmızı bir arkaplanla görürüz. Warn dersek sarı bir şekilde uyarı olarak gelir.

*Konsol çıktı işlemlerini almak için kullandığımız yerdir. Konsoldan’da kodlarımızı yazabiliriz.

*Debugger; kullanarak yazdığımız yüzlerde kod içinden hatanın nerede olduğunu bulacağız source kısmından.

*Bazen bulunduğumuz proje üzerinden dışarıdaki sunucuların API adreslerine post-get istekleri yapacağız bunu network üzerinden görebileceğiz.

*Local Storage’leri yönetebilmek ve görebilmek için application kısmını kullanacağız.

*JavaScript’te // veya *//* kullanarak yorum satırı kullanabiliriz. Komut Ö’ye basarak hepsini yorum satırı haline getirebiliriz. Better Comment eklentisi sayesinde ! ? TODO: * koyduğumuzda yorum satırının rengi değişir */

/*

*Scope *

scope kapsam anlamına gelir. Global scope,funvtion scop ve block scope
olarak 3'e ayrılır. JavaScript'te değişken tanımlamak istiyorsak var let ve const ile tanımlayabiliriz.
Global scope en geniş scope'tur hiçbir sınırı engeli yoktur örneğin:

var a= 5;
while(a>3){

}
if(true){
console.log(a);
}
function method1(){

}

yazdık a'nın değerini her iki kısımda da alabiliriz. her yerden erişilebilir.
global scope'te bir değişken tanımlamak için tanımlanan değişkenin hiçbir kıvırcık parantez içinde olmamalı. en üstte olmalı.


Funciton Scope function içerisinde erişilebilen scope'tur tanımlanan değişken function'ın içinde olmalıdır. Dışarıda görülmez function'dan erişilir.

Block Scope ise function'un içinde for while if do gibi döngüler açarsak bunlar block scope olur.
Fonksiyonun dışında bir yerde tanımlarsak bu block scope olur.

*VAR LET CONST*

Geliştirdiğimiz uygulamada bazı değerleri tutmak isteyeceğiz ve ihtiyacımıza göre kullanmak isteyeceğiz değişkenler bu işe yarar.
JavaScrip'te değişken tanımlamak için var let ya da const kullanırız.
let sayi=10; şeklinde. 

Var ile tanımlanan her şey function scope olur. if else for gibi şeylerin içine tanımladıklarımız da var'la tanımlıyorsak function scope olur. Bunun eksisi ram bellekte çok fazla yer kaplamasıdır.

Let ve Const block scope özelliğne sahiptir. sadece if else vs gibi blokların içinden erişilebilir. 

var a=5;
var a=10;
Yazdık konsolda en son yazdığımız 10 gözükür. Aynısını let ve const'ta kullanamayız. Var'da tek değişken üzerinde birden fazla değer alabilirken let ve const alamaz.

*Let ve Const arasındaki farkta const'un değişmez sabit değiştirilemez olmasıdır. Const'un değeri değiştirilemez. Ler'in değiştirilebilir. COnst'la tanımladığımız şeyleri objelerde de değiştiremeyiz ama objenin içindekileri değiştirebiliriz. Hepsi için geçerli.

string veri tipinde bir değişken tanımlamak istiyorsak tek ya da çift rınak içinde yazmamız gerekir.
let isim= "Buse";
console.log(isim);
console.log(typeof isim); //değişkenin tipi

sayı,rakam yazmak istiyorsak tırnak kullanmamamız gerek.
let sayi1= 6;
rakamı tırnak içeriinde yazarsak string olarak algılar ve tınrak içindeki iki rakamı toplarsak yan yana yazdırır.
int'i int'le string'i string'le toplayabiliriz.

boolen true ve false'tan oluşur.
console.log(5>2); yazarsak konsolde true değeri döner. boolen'da true ve false olmak üzere 2 ihtimal döner.

null boş demektir.
let a=null;
console.log(a); dersek konsolda null yani boş döner. Bir değişkeni ilk önce null yaparak sonrasında içine değer atayabiliriz.

undefined 
let a;
console.log(typeof a);
oluşturulmuş ama değişken atanmamış olanlara undefined denir.

oject veri tipi
let insan={
    bu object veri tipinde olmuştur.
    isim:"Buse";
    soyisim: "Çetin";
    yas: 18;
}
object veri tipi gelişmiş bir veri tipidir.

primit,ve ilkel refereans tipler modern veri tipleridir.

dizi tanımlamak istiyorsak let rakamlar=[1,2,3];
şeklinde tanımlanır.

*ARİTMETİK OPERATÖRLER*

=  = Atama Operatörü
+  = Toplama Operatörü
-  = Çıkarma Operatörü
*  = Çarpma Operatörü
/  = Bölme Operatörü
%  = Mod Alma Operatörü (Kalan Hesaplama- Bir Sayıyı Başka Bir Sayıya Böldüğümzde Kalanı Hesaplamak İçin Kullanılır.)
++  = Bir Arttırma Operatörü
--  = Bir Eksiltme Operatörü
**  = Üs Alma Operatörü

! İşlem yaparken işlem önceliği için parantezlere dikkat edin!!!
! Türkçe karakter kullanmamaya dikkat edin.

let sayi1=5;
let sayi2=10;
console.log(sayi1+sayi2);
ya da console.log(sayi2/sayi1);
console.log(sayi1*sayi2/(sayi1));

let a= 10;
a++;
console.log(a);
yazarsak konsolde 11 yazar.

console.log(5**2);
yazarsak konsolda 25 yazar.


*ATAMA OPERATÖRLERİ*

=       = Atama Operatörü. Sağdaki değeri soldaki değere atar.
==      = Eşittir Operatörü. 5==5 gibi. İçindeki değerler eşitse veri tiplerinin bir önemi yoktur.
===     = Hem tiplerinin hem de değerlerinin eşit olup olmadığına bakar. Tiplere de baktığı için =='ten faklıdır.
+=      = Sayı değerini arttırır.
let sayi=4;
sayi+=2;
console.log(sayi);
dersek konsolda 6 sayısını görürüz

-=      = Sayı değerini eksiltir.
let sayi=4;
sayi-=2;
console.log(sayi);
dersek konsolda 2 sayısını görürüz. Bölü de aynı şekilde çalışır.

! Alt+Shift+S ile kodlarınızı otomatik toplayabilirsiniz.
    
*=      = Sayı değerinin üssünü alır ve atar.
/=      = Sayı değerinin bölümünü sayıya atar
%=      = Kalanı(Modu) sayıya atar.
**=     = Sayının kuvvetini alıp sayının içine yazdırır.


*MANTIKSAL OPERATÖRLER*

&& = Ve    = Birden çok ihtimal varsa ve hepsinin aynı true ya da false değerini almak istiyorsak kullanırız.
|| = Veya  = Birden çok ihtimal varsa ve sadece birinin koşulu sağlaması yeterli oluyorsa veya operatörünü kullanırız.
!  = Değil = Bir değerin zıttını almak için kullanılır.

Tüm bu operatörleri kullanarak bir örnek yapacak olursak kısaca şöyle yapabiliriz:
let yas=20;
let para=3500;
let saglikliMi=false;
let hakSayisi=3;
console.log((para>3000&& hakSayisi>1) || (yas>18 && saglikliMi))



*KARŞILAŞTIRMA OPERATÖRLERİ*

== : Eşit Mi
! = : Eşit Değil Mi?
>  : Büyük Mü?
<  : Küçük Mü?
>= : Büyük Veya Eşit Mi?
<= : Küçük Veya Eşit Mi?

console.log(12<=12);
yazarsak 12 12'ye küçük olmadığı fakat eşit olduğu için konsolda true değerini alırız.



      *DİYALOG KUTULARI*
          -Alert
          -Prompt
          -Confirm

    Bu 3 metotta aslında window objesi içerisinde tanımlanmış 3 metottur. Bir metot window objesi içerisinde tanımlanmışsa başına window yazmamıza gerek yok.
    Kullanıcıya uyarı vermek istiyorsak Alert, kullanıcıdan değer almak istiyorsak Prompt, kullanıcıdan onay ya da iptal olmak istiyorsak Confirm kullanırız.

    alert("F5'e Basmayınız!");

    eğer aldığımız isim değerini konsolda yazdırmak istiyorsak aşağıdaki şekilde kullanırız:
    let isim = propmt("İsminizi Giriniz!");
    console.log(isim);
    Kullanıcıdan aldığımız değerler her zaman boolen'da olsa number'da olsa string döner.

    confirm("Silmek istediğinize emin misiniz?");


    *KOŞUL YAPILARI*

if(koşul){
    kodlar
}
else(koşul sağlanmazsa parantez yok süslü parantezler sadece){

}

Örneğin notunuz 50'den büyükse (if) bunu yazdır değilse (else) bu kodları çalıştır.
Koşul true olursa if false dönerse else çalışır. İkisi aynı anda çalışmaz. If olmak zorundadır ama Else'e gerek yoktur kullanmak zorunda değilsiniz

   *KOŞUL YAPILARI - PRATİK

let not=65;
if(not>50){
    console.log("Geçtiniz! Tebrikler! Notunuz:" +not);
}
else{
    console.log("Kaldınız. Notunuz: " +not);
}

    *KOŞUL YAPILARI - PRATİK Ortalama Bulma Örneği

    String değerleri sayısal değerlere dönüştürebilmek için Number metodunu kullanırız.
    vize1 %30, vize2 %30, final %40

    let vize1= Number(prompt("Vize 1 Notunuzu Giriniz:"));
    let vize2= Number(prompt("Vize 2 Notunuzu Giriniz:"));
    let final= Number(prompt("Final Notunuzu Giriniz:"));

    let ortalama = (vize1*0.3) + (vize1*0.3) + (final*0.4)

    if(ortalama>=60){
        alert("Dersten Geçtiniz " + ortalama);
        console.log("Dersten Geçtiniz ");
    }
    else{
        alert("Kaldınız..." +ortalama);
        console.log("Dersten Kaldınız...");
    }


    *IF & Else If & Else Yapısı

    Birden fazla ihtimal ve koşulun olduğu durumlarda kullanılır. Hepsi birlite çalışmaz.
    Yalnızca bir tanesi çalışır.

    if(koşul){
    }
    else if(koşul){
    }
    else if (koşul){
    }
    else{
    }

    *IF & Else If & Else Yapısı - Yol Ayrımı Uygulaması - 1. Yol /2. Yol /3. Yol

let secim= prompt("Lütfen gitmek istediğiniz rotayı seçiniz.");

if(secim==1){
alert("Seçilen rota"+ "secim"+". rotadır.");
}
else if(secim==2){
alert("Seçilen rota"+ "secim"+". rotadır.");
}
else if{
alert("Seçilen rota"+ "secim"+". rotadır.");
}
else{
alert("Seçilen rota"+ "secim"+". rotadır.");
}


     *Birden Fazla If Kullanmak
    
Derleyici ilk if'e bakar ilk if sağlıyorsa 2. if'e gidiyor ve son olarak 3. koşula bakıyor.
Bunların her biri ayrı bir koşul sağlanmayan koşul çalışmaz.

if(koşul){

}
if(koşul){

}
if(koşul){

}


      *Çoklu If Yapısı

-Kullanıcının adını ve tckimlik numarasını isteyeceğiz kimlik numarası 11 karakterden oluşsun.

let ad= prompt("İsminizi Giriniz :")
let teckn= prompt("TC'nizi Giriniz :")
console.log(isim);

funciton kontrol(ad, tckn){
    if(ad!=""){
        if(tckn.length==11){
            console.log("İsim ve TCKN girildi.");

        }
        else{
            console.log("Lütfen geçerli bir kimlik numarası giriniz.");

        }

    }else{
        console.log("İsim Alanını Boş Bırakmayınız!");
    }
}

Kod çalıştırıldıktan sonra metodu sonlandırmak istiyorsak Return anahtar kelimesini kullanabiliriz.

Örnek-2

kontrol2(ad,tckn);

function kontrol2(ad,tckn){
    if(ad==""){
        console.log("Lütfen isminizi giriniz!");
        return;
    }
    if(tckn.length!=11){
        console.log("Lütfen geçerli bir kimlik numarası giriniz!");
        return;
    }
    console.log("Başarıyla giriş yapıldı.")
}


   *Beden Kitle Endeksi Bulma*

Kiloyu boyun karesine bölerek beden kitle endeksini bulabiliriz.

let boy= Number(prompt("Boyunuzu Giriniz :"));
let kilo= Number(prompt("Kilonuzu Giriniz :"));
let sonuc= kilo/(boy*2);

if (sonuc<18.5){

console.log("İdeal Kilonun Altındasınız");

}
else if(sonuc>=18.5 && sonuc<=24.9){

console.log("İdeal Kilodasınız");

}else if(sonuc>=25 && sonuc<=29.9){

console.log("İdeal Kilonun Üstündesiniz");

}else if(sonuc>=30 && sonuc<=39.9){

  console.log("Obezsiniz");  

}else if(sonuc>=40){
    
     console.log("Morbiz Obezsiniz"); 
}

    *BENZİN İSTASYONU UYGULAMASI*

1-Dizel : 24.53
2-Benzin : 22.25
3-LPG : 11.1

Gelen müşteriden alacağımız bilgiler:
1-Yakıt Tipi
2- Yüklenecek Yakıt Litresi

let dizel= 24.53 , benzin= 22.25, lpg= 11.1;
const yeniSatir= "/r/n"

const yakitMetni = "1-Dizel"+yeniSatir
+ "2-Benzin"+ yeniSatir
+"3-LPG" +yeniSatir
+ "Yakıt Türünüzü Seçiniz: ";

/r/n kullanırsak alt alta yazdırır.

let yakitTipi = prompt(yakitMetni);
yakit tipi 1-2-3 değilse kodlar çalışmayacak aşağıdaki kod bloğu bu işe yarıyor.
if(yakitTipi=="1"|| yakitTipi== "2"|| yakitTipi==3){
if (yakitMetni=="1"){

    matematiksel işlem yapacaksak Number'a çevirmemiz gerek.
    let yakitLitresi = Number(prompt("Yakıt Litresini Giriniz :"));
let bakiye= Number(propmt("Lütfen Bakiyenizi Giriniz: "));
   let odenecekTutar= dizel*yakitLitresi;
   if (odenecekTutar> bakiye){
    alert("Bakiyeniz Yetersiz, Fakirsiniz.")
}
else{
    alert("Bakiyeniz Yeterlidir.")
}
}else if(yakitTipi=="2"){
      let odenecekTutar= benzin*yakitLitresi;
   if (odenecekTutar> bakiye){
    alert("Bakiyeniz Yetersiz, Fakirsiniz.")
}
else{
    alert("Bakiyeniz Yeterlidir.")
}
}else if(yakitTipi=="3"){
      let odenecekTutar= lpg*yakitLitresi;
   if (odenecekTutar> bakiye){
    alert("Bakiyeniz Yetersiz, Fakirsiniz.")
}
else{
    alert("Bakiyeniz Yeterlidir.")
}
}

}else {
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}

    *Switch Case*


switch(deger){
    case 1:
        kodlar
        break;
    case 2:
        kodlar
        break;
    case 3:
        kodlar
        break;
    default:
        kodlar
        break;
}

      *Switch Case Örnek Haftanın Günleri

If-Else gibi caselerdan yalnızca biri çalışır. Break koymazsak diğer caselerda çalışır kodumuzda komplike hatalar olur.
Bir case'e girdikten sonra diğerine girmesini istemiyorsak break koymalıyız.
    
let deger= Number((prompt("Seçiminizi Giriniz :")));

switch(deger){
case 1:
    alert("Pazartesi")
    break;
case 2:
    alert("Salı")
    break;
case 3:
    alert("Çarşamba")
    break;
case 4:
    alert("Perşembe")
    break;
case 5:
    alert("Cuma")
    break;
case 6:
    alert("Cumartesi")
    break;
case 7:
    alert("Pazar")
    break;
    
default:
    alert("1 İle 7 Arasında Geçerli Bir Değer Giriniz")
    break;

}

     *Switch Case ATM Örneği*

1- Bakiye Görüntüleme
2- Para Çekme
3- Para Yatırma
4- Çıkış

let bakiye=1000;
let yeni= "/r/n"
    
let metin= "1-Bakiye Görüntüleme"+yeni
+"2-Para Çekme"+yeni
+"3-Para Yatırma"+yeni
+"4-Çıkış"+yeni
+"Lütfen Bir Değer Seçiniz!"

let secim=prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz :"+bakiye);
        break;
    case "2":
        let cekilecekTutar=Number(prompt("Çekmek İstediğiniz Tutarı Giriniz :"));
        if(cekilecekTutar<bakiye){
            bakiye= bakiye- cekilecekTutar;
            alert("Kalan Bakiye :"+bakiye);
        }else{
            alert("O kadar zengin değilsiniz"+ yeni+ "Bakiyeniz :" +bakiye +" "+ "Çekilecek Tutar: "+ cekilecekTutar);
        }
        break;

        case "3":
            let yatirilacakTutar= Number(prompt("Yatırılacak Tutarı Giriniz: "));
            bakiye= bakiye+ yatirilacakTutar;
            alert("Güncel Bakiyeniz :"+ bakiye);
        break;

        case "4":
            alert("Sistemden Başarıyla Çıkış Yapılmıştır...");
        break;

        default:
            alert("Lütfen 1 - 4 Arasında Değer Giriniz !!!");
            break;
}


         *Switch Case -Son Örnek- TYT Puan Hesaplama

1- Türkçe 40  -4 puan
2-Matematik 40
3- Sosyal Bilimler 20
4- Fen Bilimleri 20

   -------> 100 Puanı ÖSYM Veriyor.
   -------> Okul Puanı Max 60 Veriyor.

   Başlangıç değeri olarak hepsine 0 veriyoruz.

   let turkcedogru, turkceyanlis =0;
   let matematikdogru, matematikyanlis =0;
   let sosyaldogru, sosyalyanlis =0;
   let fendogru, fenyanlis =0;
   let puan= 0;
   let okulpuani;

   let yeni= "/r/n";
   let mesaj= "TYT Puan Hesaplamasına Hoşgeldiniz..."+yeni
   +"1- Puan Hesapla"+yeni
   +"2- Çıkış Yap";

   let secim= propmt(mesaj);

   switch(secim){
    case "1":

        okulpuani= Number(prompt("Okul Puanınızı Giriniz :"))

        turkcedogru= Number(prompt("Türkçe Doğru Sayısı :"));
        turkceyanlis= Number(prompt("Türkçe Yanlış Sayısı :"));

        matematikdogru= Number(prompt("Matematik Doğru Sayısı :"));
        matematikyanlis= Number(prompt("Matematik Yanlış Sayısı :"));

        sosyaldogru= Number(prompt("Sosyal Doğru Sayısı :"));
        sosyalyanlis= Number(prompt("Sosyal Yanlış Sayısı :"));

        fendogru= Number(prompt("Fen Doğru Sayısı :"));
        fenyanlis= Number(prompt("Fen Yanlış Sayısı :"));

        ! 4 yanlış bir doğruyu götürüyor !
        let dogruNet= turkcedogru+matematikdogru+sosyaldogru+fendogru;
        let YanlisNet= turkceyanlis+matematikyanlis+sosyalyanlis+fenyanlis;
        let kalandogru= dogrunet- (YanlisNet/4);
        puan= (kalandogru*4)+ 100+ okulpuani ;
        alert("TYT Puanınız: "+puan);

        break;

    case "2":
        alert("Uygulamadan Başarılı Bir Şekilde Çıkış Yaptınız.");
        break;
    
        default:
            alert("Geçerli Bir Değer Giriniz");
            break;



            *Tür Dönüşümleri*

  strings,numbers,boolens,undefined and null. == Primitive
  object,function    == Modern

  Örneğin bir veri tabanımız var ve veritabanından değer almak istiyoruz değer number olarak geldi ama biz string'e dönüştürmek istiyorsak
  tür dönüşümlerini kullanmamız gerekir. Bir tipten bir tipe dönüştürmeye denilir.

let a =5;
let b= "10";

console.log(a+b); yazarsak 510 değeri gelir. Türler aynı olmadığı için toplanamaz.

   ! String Veri Tipinden Number Veri Tipine Dönüştürme

let c= Number(b);
console.log(typeof c);
console.log(a+c);  dersek 15 cevabını alırız.

ya da 

let a =5;
let b= Number("10");
console.log(a+b);  şeklinde yaparsak da 15 cevabını alırız.

veya

parseInt() kullanırız. parseInt window objesi içinde tanımlanmış bir metottur. parseInt yerine parseFloat da kullanılabilir.
parseInt ve parseFloat arasındaki fark parseInt kullanırsak virgüllü sayının noktadan sonrasını atıp tam sayı olarak verir. parseFloat ise virgülüyle birlikte alır.

let a =8;
let b= parseInt("12");
console.log(a+b);  şeklinde kullanılır.


   }

   ! Number Veri Tipinden String Veri Tipine Çevirme


let x= 55;  Örneğin bunu string veri tipine çevirmek istiyoruz.
let x= String(55);  olarak yazmamız gerekir. ya da:
let x= (55).toString();  yazarak kullanabiliriz.

   ! Boolen Tipindeki Değeri String'e Çevirme

let sonuc= String(true);
console.log(typeof sonuc);
console.log(sonuc);

   ! Sayı Olmayan Bir Şeyi Number'a Çevirmeye Çalışırsak NaN (Not a Number) Adlı Bir Hata Alırız.


   ! Bir Objeyi Ya Da Array'i String'e Çevirme

let rakamlar = String([1,2,3,4]);


   ! Proje Yaparken Veya Hata Alınca Breakpoint(Debugger) Kullanmayı Unutmayın. Ayrıca Tooltip'leri Okumanızda Kodu Anlamanız Konusunda Size Hayli Yardımcı Olacaktır.
   ! Tooltip Açıklama Satırı Gibidir. Yazılımcıyı Bilgilendiren Küçük Yorum Satırlarıdır Diyebiliriz.
   ! Breakpoint (Debugger)' Bir Hata Aldığımızda Veya Bir Kod Bloğunu Anlamadığımızda Kodları Adım Adım Çalıştırmak İçin Kullanırız. Bunu Kullanabilmek İçin debuger; Denilen Bir 
   !  Anahtar Kelime Kullanmamız Gerek. Adım Adım Çalıştırmak İstediğimiz Projede NErden BAşlamak İStiyorsak O Kod Blogu Öncesi debugger; Yazarız. Debugger'ı Nereye Koyarsak Orada
   !  Çalışmaya Başlar.



      *Döngülere Giriş For/While/Do-While/ForEach*

Bir şeylerin sürekli tekrarlanmasını istediğimiz yerlerde kullanırız. Tek satırda yazdığımız kodu istediğimiz kadar çalıştıran kod parçalarıdır.
ForEach dizilerle birlikte kullanılır o yüzden şimdilik ForEach'i üstünkörü göreceğiz.

      *For Döngüsü Çalışma Yapısı

    for(degişken; koşul; arttırma-azaltma){
        kodlar
    }

    Bu Kodları Çalıştırdıktan Sonra Alttaki Kodları Çalıştırıyor.

    for(let i=1;i<10;i++){
        console.log(i);
    }

      *For Döngüsü Örnek

    1'den 10!a Kadar Yazdıralım

for (let i=1;i<=10;i++){
    console.log(i)
}

      *For Döngüsü Örnek - 2

    1'den 10'a Kadar Olan Çift Sayıları Yazdıralım

    +=2 i'nin üzerine 2 koy her seferinde 2 arttır demektir.

for (let i=0; i<=10;i+=2){
console.log(i);
}

    Tekleri Yazdıramk İsteseydik i'yi 1'den Başlatırdık:

for (let i=1; i<=10;i+=2){
console.log(i);
}

     İ Çift Sayı Olunca Buse Tek Sayı Olunca Berat Yazdıran Kod:

for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log("Buse");
    }
    else{
        console.log("Berat");
    }
}

      50'den 1'e Kadar Olan Sayıların Toplamı:

let toplam=0;
for(let i=1;i<=50;i++)
{
    toplam+=i;
    console.log(i);
}
console.log("Toplam :" ,toplam);
For Döngüsünün İçine Değil Dışına Yazmamızın Sebebi Her Döngü Döndükten Sonra Toplamı Görmek Yerine Döngü Bitince Toplamı Görmek İstememiz.


              * Break Ve Contiune Anahtar Kelimeleri *

        1'den 10'a Kadar Olan Sayıları Yazdıralım 8'e Geldiğimizde Döngüden Çıkalım.

for (int i=1;i<=10;i++)
{
    if(i==8){
        break;
    }
}

 ya da

let sayac=1;

while(sayac<=10)
{
    console.log(sayac);
    if(sayac==8)
    {
        break;
    }
    sayac++;
}

Bu Gibi Döngülerde Break Kullanılır. Yani Break'i Dilediğimiz Zaman Döngüden Çıkmak İçin Kullanırız.
Contiune İse Döngüyü 1 Kere Kırmak İçin Kulanılır. Örneğin Konsolda 1-10 Arası Sayıları Yazdırmak İstiyoruz
Fakat 8'in Yazmasını İstemiyorsak Contiune Kullanırız:

while(sayac<=10)
{
    sayac++;
    if(sayac==8)
    {
        contiune;
    }
    console.log(sayac);
}

       * Çarpım Tablosu Uygulaması *

1*1=1
1*2=2
1*3=3 gibi gibi gidecek 

for (let i=1;i<=10;i++){
    for (let j=1;j<=10;j++){
        console.log(i+"x"+j+"="+(i*j));
    }
    console.log(">>>>>>>>>>>>>");
}

Dıştaki Döngü 1 Kere İçteki Döngü 10 Kere Dönüyor. 1'i 10'a Kadar Çarptıktan Sonra Koşul Sağlamadığı İçin Çizgiye Çekti Ve
Bir Daha Döngünün İçine Girerek 2'den Devam Etti Ve Aynı Şekilde 10'a Kadar Devam Edip Durdu.

         * Asal Sayı Bulma Uygulaması *

Asal Sayı: 1'e Ve Kendisinden Başka Böleni Olmayan Sayıdır.
Math Sınıfının İÇinde Floor Diye Bir Sınıf Var Bu Sınıf Bizim Sayımızı En Yakın Int Değerine Yuvarlar.
7.7 Veya 7.9 Yazdığımızda Sayıyı Direkt 7'ye Çekiyor.

    let sayi= Number(prompt("Sayı Giriniz : "));
    let sonuc= true;

        for(let i=2;i<= Math.floor(sayi/2);i++){  
            if(sayi%i==0){
                Asal Değildir
                sonuc= false;
                break;
            }
        }
        if(sonuc){
            alert(sayi + "asaldır.");
        }
        else{
            alert(sayi + "asal değildir.");
        }

*/
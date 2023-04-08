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
!Türkçe karakter kullanmamaya dikkat edin.

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

!Alt+Shift+S ile kodlarınızı otomatik toplayabilirsiniz.
    
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
!= : Eşit Değil Mi?
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

*/


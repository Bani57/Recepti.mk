/**
 * Created by Stefan on 6/24/2016.
 */
$(document).ready(function () {
    $('#bigquatro1').on('click', function () {
        $("html, body").delay(100).animate({
            scrollTop: $("#hr1").offset().top
        }, 1000);
    });

    $('#bigquatro2').on('click', function () {
        $("html, body").delay(100).animate({
            scrollTop: $("#hr2").offset().top
        }, 1000);
    });

    $('.totop').on('click', function () {
        $("html, body").delay(100).animate({
            scrollTop: $("#wlcm").offset().top
        }, 1000);
    });

    $('.checkall').change(function() {
        if(document.getElementById('shopska').style.display=='block')
            $(".sostojki1").prop("checked", this.checked);
        if(document.getElementById('ruska').style.display=='block')
            $(".sostojki2").prop("checked", this.checked);
        if(document.getElementById('bombici').style.display=='block')
            $(".sostojki3").prop("checked", this.checked);
        if(document.getElementById('palacinki').style.display=='block')
            $(".sostojki4").prop("checked", this.checked);
        if(document.getElementById('shpageti').style.display=='block')
            $(".sostojki5").prop("checked", this.checked);
        if(document.getElementById('pica').style.display=='block')
            $(".sostojki6").prop("checked", this.checked);
        if(document.getElementById('musaka').style.display=='block')
            $(".sostojki7").prop("checked", this.checked);
        if(document.getElementById('grav').style.display=='block')
            $(".sostojki8").prop("checked", this.checked);
    });
});




$(window).scroll(function(){
    $("#bg").css('background-position', "-" + (1920 - $(window).width()) / 2 + "px " + -(Math.max(document.body.scrollTop, document.documentElement.scrollTop) / 4) + "px");
});


function changeImage(a, b) {
    var image = document.getElementById('bigquatro'+b);
    image.src = a;
    image.style.display = 'inline-block';
    if (a == "img/shop.jpg") {
        document.getElementById('podnaslov2').innerHTML = "Шопска салата";
    }
    if (a == "img/pi.jpg") {
        document.getElementById('podnaslov2').innerHTML = "Пица Vezuvio";
    }
    if (a == "img/pal.jpg") {
        document.getElementById('podnaslov2').innerHTML = "Палачинки";
    }
    if (a == "img/bomb.jpg") {
        document.getElementById('podnaslov2').innerHTML = "Бомбици";
    }
    if (a == "img/shpag.jpg") {
        document.getElementById('podnaslov2').innerHTML = "Шпагети Bolognese";
    }
    if (a == "img/rus.jpg") {
        document.getElementById('podnaslov2').innerHTML = "Руска салата";
    }
    if (a == "img/mus.jpg") {
        document.getElementById('podnaslov2').innerHTML = "Мусака";
    }
    if (a == "img/gra.jpg") {
        document.getElementById('podnaslov2').innerHTML = "Тавче гравче";
    }
}
function mouseOutImg(b) {
    document.getElementById('bigquatro'+b).style.display = 'none';
    document.getElementById('podnaslov2').innerHTML = "Изберете рецепт";
}
function displayRecept(b) {
    var image = document.getElementById('bigquatro'+b);
    var slika = image.getAttribute("src");
    var recept1 = document.getElementById('shopska');
    var recept2 = document.getElementById('ruska');
    var recept3 = document.getElementById('bombici');
    var recept4 = document.getElementById('palacinki');
    var recept5 = document.getElementById('shpageti');
    var recept6 = document.getElementById('pica');
    var recept7 = document.getElementById('musaka');
    var recept8 = document.getElementById('grav');
    var displaySetting1 = recept1.style.display;
    var displaySetting2 = recept2.style.display;
    var displaySetting3 = recept3.style.display;
    var displaySetting4 = recept4.style.display;
    var displaySetting5 = recept5.style.display;
    var displaySetting6 = recept6.style.display;
    var displaySetting7 = recept7.style.display;
    var displaySetting8 = recept8.style.display;
    if (slika == 'img/shop.jpg') {
        if (displaySetting1 == 'block') {
            recept1.style.display = 'none';
            document.getElementById('naslov_recept').innerHTML = "";
        }
        else {
            recept1.style.display = 'block';
            recept2.style.display = 'none';
            recept3.style.display = 'none';
            recept4.style.display = 'none';
            recept5.style.display = 'none';
            recept6.style.display = 'none';
            recept7.style.display = 'none';
            recept8.style.display = 'none';
            document.getElementById('podnaslov2').innerHTML = "Шопска салата";
            document.getElementById('naslov_recept').innerHTML = "Шопска салата";
        }
    }
    if (slika == 'img/rus.jpg') {
        if (displaySetting2 == 'block') {
            recept2.style.display = 'none';
            document.getElementById('naslov_recept').innerHTML = "";
        }
        else {
            recept1.style.display = 'none';
            recept2.style.display = 'block';
            recept3.style.display = 'none';
            recept4.style.display = 'none';
            recept5.style.display = 'none';
            recept6.style.display = 'none';
            recept7.style.display = 'none';
            recept8.style.display = 'none';
            document.getElementById('podnaslov2').innerHTML = "Руска салата";
            document.getElementById('naslov_recept').innerHTML = "Руска салата";
        }
    }
    if (slika == 'img/bomb.jpg') {
        if (displaySetting3 == 'block') {
            recept3.style.display = 'none';
            document.getElementById('naslov_recept').innerHTML = "";
        }
        else {
            recept1.style.display = 'none';
            recept2.style.display = 'none';
            recept3.style.display = 'block';
            recept4.style.display = 'none';
            recept5.style.display = 'none';
            recept6.style.display = 'none';
            recept7.style.display = 'none';
            recept8.style.display = 'none';
            document.getElementById('podnaslov2').innerHTML = "Бомбици";
            document.getElementById('naslov_recept').innerHTML = "Бомбици";
        }
    }
    if (slika == 'img/pal.jpg') {
        if (displaySetting4 == 'block') {
            recept4.style.display = 'none';
            document.getElementById('naslov_recept').innerHTML = "";
        }
        else {
            recept1.style.display = 'none';
            recept2.style.display = 'none';
            recept3.style.display = 'none';
            recept4.style.display = 'block';
            recept5.style.display = 'none';
            recept6.style.display = 'none';
            recept7.style.display = 'none';
            recept8.style.display = 'none';
            document.getElementById('podnaslov2').innerHTML = "Палачинки";
            document.getElementById('naslov_recept').innerHTML = "Палачинки";
        }
    }
    if (slika == 'img/shpag.jpg') {
        if (displaySetting5 == 'block') {
            recept5.style.display = 'none';
            document.getElementById('naslov_recept').innerHTML = "";
        }
        else {
            recept5.style.display = 'block';
            recept6.style.display = 'none';
            recept7.style.display = 'none';
            recept8.style.display = 'none';
            recept1.style.display = 'none';
            recept2.style.display = 'none';
            recept3.style.display = 'none';
            recept4.style.display = 'none';
            document.getElementById('podnaslov2').innerHTML = "Шпагети Bolognese";
            document.getElementById('naslov_recept').innerHTML = "Шпагети Bolognese";
        }
    }
    if (slika == 'img/pi.jpg') {
        if (displaySetting6 == 'block') {
            recept6.style.display = 'none';
            document.getElementById('naslov_recept').innerHTML = "";
        }
        else {
            recept5.style.display = 'none';
            recept6.style.display = 'block';
            recept7.style.display = 'none';
            recept8.style.display = 'none';
            recept1.style.display = 'none';
            recept2.style.display = 'none';
            recept3.style.display = 'none';
            recept4.style.display = 'none';
            document.getElementById('podnaslov2').innerHTML = "Пица Vezuvio";
            document.getElementById('naslov_recept').innerHTML = "Пица Vezuvio";
        }
    }
    if (slika == 'img/mus.jpg') {
        if (displaySetting7 == 'block') {
            recept7.style.display = 'none';
            document.getElementById('naslov_recept').innerHTML = "";
        }
        else {
            recept5.style.display = 'none';
            recept6.style.display = 'none';
            recept7.style.display = 'block';
            recept8.style.display = 'none';
            recept1.style.display = 'none';
            recept2.style.display = 'none';
            recept3.style.display = 'none';
            recept4.style.display = 'none';
            document.getElementById('podnaslov2').innerHTML = "Мусака";
            document.getElementById('naslov_recept').innerHTML = "Мусака";
        }
    }
    if (slika == 'img/gra.jpg') {
        if (displaySetting8 == 'block') {
            recept8.style.display = 'none';
            document.getElementById('naslov_recept').innerHTML = "";
        }
        else {
            recept5.style.display = 'none';
            recept6.style.display = 'none';
            recept7.style.display = 'none';
            recept8.style.display = 'block';
            recept1.style.display = 'none';
            recept2.style.display = 'none';
            recept3.style.display = 'none';
            recept4.style.display = 'none';
            document.getElementById('podnaslov2').innerHTML = "Тавче гравче";
            document.getElementById('naslov_recept').innerHTML = "Тавче гравче";
        }
    }
}
function display1()
{
    $('#izbor').animate({'padding-top': '0'}, 500);
    document.getElementById("q1").style.display= 'block';
    document.getElementById("q2").style.display= 'none';
    document.getElementById("podnaslov2").style.display='block';
}
function display2()
{
    $('#izbor').animate({'padding-top': '0'}, 500);
    document.getElementById("q2").style.display= 'block';
    document.getElementById("q1").style.display= 'none';
    document.getElementById("podnaslov2").style.display='block';
}
function levaStrelka()
{
    var lista;
    if(document.getElementById('shopska').style.display=='block')
        lista=document.getElementsByClassName('cekori1');
    if(document.getElementById('ruska').style.display=='block')
        lista=document.getElementsByClassName('cekori2');
    if(document.getElementById('bombici').style.display=='block')
        lista=document.getElementsByClassName('cekori3');
    if(document.getElementById('palacinki').style.display=='block')
        lista=document.getElementsByClassName('cekori4');
    if(document.getElementById('shpageti').style.display=='block')
        lista=document.getElementsByClassName('cekori5');
    if(document.getElementById('pica').style.display=='block')
        lista=document.getElementsByClassName('cekori6');
    if(document.getElementById('musaka').style.display=='block')
        lista=document.getElementsByClassName('cekori7');
    if(document.getElementById('grav').style.display=='block')
        lista=document.getElementsByClassName('cekori8');
    var n=lista.length;
    var i;
    var previousLi;
    var ind;
    for(i=0;i<n;i++)
    {
        if(lista[i].style.display==''||lista[i].style.display=='block')
        {
            previousLi=lista[i-1];
            ind=i;
            break;
        }
    }
    if(ind-1>=0)
    {
        ind--;
        $(previousLi).animate({width: 'toggle'},750);
        for (i = 0; i < n; i++) {
            if (i == ind)
                lista[i].style.display = 'block';
            else lista[i].style.display = 'none';
        }
    }
}
function desnaStrelka()
{
    var lista;
    if(document.getElementById('shopska').style.display=='block')
        lista=document.getElementsByClassName('cekori1');
    if(document.getElementById('ruska').style.display=='block')
        lista=document.getElementsByClassName('cekori2');
    if(document.getElementById('bombici').style.display=='block')
        lista=document.getElementsByClassName('cekori3');
    if(document.getElementById('palacinki').style.display=='block')
        lista=document.getElementsByClassName('cekori4');
    if(document.getElementById('shpageti').style.display=='block')
        lista=document.getElementsByClassName('cekori5');
    if(document.getElementById('pica').style.display=='block')
        lista=document.getElementsByClassName('cekori6');
    if(document.getElementById('musaka').style.display=='block')
        lista=document.getElementsByClassName('cekori7');
    if(document.getElementById('grav').style.display=='block')
        lista=document.getElementsByClassName('cekori8');
    var n=lista.length;
    var i;
    var nextLi;
    var ind;
    for(i=0;i<n;i++)
    {
        if(lista[i].style.display==''||lista[i].style.display=='block')
        {
            nextLi=lista[i+1];
            ind=i;
            break;
        }
    }
    if(ind+1<n) {
        ind++;
        $(nextLi).animate({width: 'toggle'},750);
        for (i = 0; i < n; i++) {
            if (i == ind)
                lista[i].style.display = 'block';
            else lista[i].style.display = 'none';
        }
    }
}
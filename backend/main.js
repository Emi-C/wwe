//get articoli
$(document).ready(function(){
    getart();
});

function getart(){
    $.ajax({
        method: 'post',
        url: "get.php",
        dataType:"json"
    })

    .done(function(data) {
        var res="";
        $.each(data, function(i, e) {
            //res+='<div class="articolo"><h3 class="titolo">'+e.tit+'</h3><br><img style="max-width:300px; display:inline-block;margin:20px;" src="'+e.img+'"><p><b>Categoria: </b>'+e.cat+'</p><btn class="del" id="'+e.id+'">elimina</btn></div>';
            res+='<div class="articolo"><h3 class="titolo">'+e.tit+'</h3><br><img style="max-width:300px; display:inline-block;margin:20px;" src="'+e.img+'"><br>'+e.img1+e.img2+e.img3+'<br><p><b>Categoria: </b>'+e.cat+'</p><p>'+e.testo+'</p><div class="modpos"><label>Posizione: </label><select id="pos'+e.id+'">'+e.posbloc+'</select></div><br><btn class="del" id="'+e.id+'">elimina</btn></div>';
        });
        $("#results").html(res);
    })
    .fail(function() {
        alert('ko');
    });
}



//del articoli
$("#results").on('click','.del',function() {
    delart($(this).attr("id"));
});

function delart(artid){
    $.ajax({
        method: 'post',
        url: "del.php",
        data: {id:artid}
    })

    .done(function(){
        getart();
    })
    .fail(function() {
        alert('ko');
    });
}



//put articoli
$(".formin input").keyup(function(){
   checkform();
});
$(".formin select").change(function(){
    checkform();
});
CKEDITOR.instances.txt.on('key', function(e) {
    var self = this;

    setTimeout(function() {
        checkform();
    }, 10);
});

function checkform(){
    var txtval=CKEDITOR.instances.txt.getData();
    var err=0;
    if ($("#tit").val()==""){err=1}
    if (txtval==""){err=1}
    if ($("[id*='imgflag']").val()==1){err=1}
    if ($("#cat").val()==""){err=1}

    //anno sempre valorizzato

    if (err!=1){$("#sbm").addClass("sbmok")}else{$("#sbm").removeClass("sbmok")}
}

$(".formin").on("click",".sbmok",function(){
    putart();
});


function putart(){
    var fd = new FormData();
    fd.append('tit', $('#tit').val());
    fd.append('txt', CKEDITOR.instances.txt.getData());
    fd.append('img', $('#img')[0].files[0]);
    fd.append('cat', $('#cat').val());
    fd.append('img1', $('#img1')[0].files[0]);
    fd.append('img2', $('#img2')[0].files[0]);
    fd.append('img3', $('#img3')[0].files[0]);
    //fd.append('anno', $('#anno').val());

    $.ajax({
        method: 'post',
        url: "up.php",
        data:fd,
        processData: false,
        contentType: false
    })

    .done(function() {
        alert('Articolo inserito con successo!');
        $('#tit').val("");
        CKEDITOR.instances.txt.setData("");
        $('[id*="img"]').val("");
        $('[id*="imgflag"]').val(1);
        $('[class*="imgupload"]').not('[class*="imguploadstop"]').show("slow");
        $('[class*="imguploadok"]').hide("slow");
        $('[id*="namefile"]').html("");
        $('#cat').val("");

        getart();
    })
    .fail(function() {
        alert('Qualcosa è andato storto...');
    });
}



//upload principale
$('#img').change(function(){
//here we assign tu our text field #fileup the name of the selected file
    var res=$(this).val();
    var arr = res.split("\\");
    var filename=arr.slice(-1)[0];
    filextension=filename.split(".");
    filext="."+filextension.slice(-1)[0];
    valid=[".jpg",".png",".jpeg",".bmp"];
//if file is not valid we show the error icon and the red alert
    if (valid.indexOf(filext.toLowerCase())==-1){
        $( ".imgupload" ).hide("slow");
        $( ".imguploadok" ).hide("slow");
        $( ".imguploadstop" ).show("slow");
        $('#namefile').css({"color":"red","font-weight":700});
        $('#namefile').html("Il file "+filename+" non è un'immagine!");
        $( "#imgflag" ).val(1);
    }else{
        //if file is valid we show the green alert
        $( ".imgupload" ).hide("slow");
        $( ".imguploadstop" ).hide("slow");
        $( ".imguploadok" ).show("slow");
        $('#namefile').css({"color":"green","font-weight":700});
        $('#namefile').html(filename);
        $('#imgflag').val(0);
    }
    checkform();
});

//upload1
$('#img1').change(function(){
//here we assign tu our text field #fileup the name of the selected file
    var res=$(this).val();
    var arr = res.split("\\");
    var filename=arr.slice(-1)[0];
    filextension=filename.split(".");
    filext="."+filextension.slice(-1)[0];
    valid=[".jpg",".png",".jpeg",".bmp"];
//if file is not valid we show the error icon and the red alert
    if (valid.indexOf(filext.toLowerCase())==-1){
        $( ".imgupload1" ).hide("slow");
        $( ".imguploadok1" ).hide("slow");
        $( ".imguploadstop1" ).show("slow");
        $('#namefile1').css({"color":"red","font-weight":700});
        $('#namefile1').html("Il file "+filename+" non è un'immagine!");
        $( "#imgflag1" ).val(1);
    }else{
        //if file is valid we show the green alert
        $( ".imgupload1" ).hide("slow");
        $( ".imguploadstop1" ).hide("slow");
        $( ".imguploadok1" ).show("slow");
        $('#namefile1').css({"color":"green","font-weight":700});
        $('#namefile1').html(filename);
        $('#imgflag1').val(0);
    }
    checkform();
});

//upload 2
$('#img2').change(function(){
//here we assign tu our text field #fileup the name of the selected file
    var res=$(this).val();
    var arr = res.split("\\");
    var filename=arr.slice(-1)[0];
    filextension=filename.split(".");
    filext="."+filextension.slice(-1)[0];
    valid=[".jpg",".png",".jpeg",".bmp"];
//if file is not valid we show the error icon and the red alert
    if (valid.indexOf(filext.toLowerCase())==-1){
        $( ".imgupload2" ).hide("slow");
        $( ".imguploadok2" ).hide("slow");
        $( ".imguploadstop2" ).show("slow");
        $('#namefile2').css({"color":"red","font-weight":700});
        $('#namefile2').html("Il file "+filename+" non è un'immagine!");
        $( "#imgflag2" ).val(1);
    }else{
        //if file is valid we show the green alert
        $( ".imgupload2" ).hide("slow");
        $( ".imguploadstop2" ).hide("slow");
        $( ".imguploadok2" ).show("slow");
        $('#namefile2').css({"color":"green","font-weight":700});
        $('#namefile2').html(filename);
        $('#imgflag2').val(0);
    }
    checkform();
});

//upload 3
$('#img3').change(function(){
//here we assign tu our text field #fileup the name of the selected file
    var res=$(this).val();
    var arr = res.split("\\");
    var filename=arr.slice(-1)[0];
    filextension=filename.split(".");
    filext="."+filextension.slice(-1)[0];
    valid=[".jpg",".png",".jpeg",".bmp"];
//if file is not valid we show the error icon and the red alert
    if (valid.indexOf(filext.toLowerCase())==-1){
        $( ".imgupload3" ).hide("slow");
        $( ".imguploadok3" ).hide("slow");
        $( ".imguploadstop3" ).show("slow");
        $('#namefile3').css({"color":"red","font-weight":700});
        $('#namefile3').html("Il file "+filename+" non è un'immagine!");
        $( "#imgflag3" ).val(1);
    }else{
        //if file is valid we show the green alert
        $( ".imgupload3" ).hide("slow");
        $( ".imguploadstop3" ).hide("slow");
        $( ".imguploadok3" ).show("slow");
        $('#namefile3').css({"color":"green","font-weight":700});
        $('#namefile3').html(filename);
        $('#imgflag3').val(0);
    }
    checkform();
});



//modpos articoli
$("#results").on('change','.modpos select',function(){
     modpos($(this).attr("id").replace("pos", ""),$(this).val());
});
function modpos(artid,pos){
    $.ajax({
        method: 'post',
        url: "modpos.php",
        data: {artid:artid,pos:pos}
    })

    .done(function(data) {
        getart();
    })
    .fail(function() {
        alert('ko');
    });
}

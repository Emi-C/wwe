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
            //res+='<div class="articolo"><h3 class="titolo">'+e.tit+'</h3><br><img style="max-width:300px; display:inline-block;margin:20px;" src="'+e.img+'"><p><b>Categoria: </b>'+e.cat+'&nbsp; <b>Anno: </b>'+e.anno+'</p><btn class="del" id="'+e.id+'">elimina</btn></div>';
            res+='<div class="articolo"><h3 class="titolo">'+e.tit+'</h3><br><img style="max-width:300px; display:inline-block;margin:20px;" src="'+e.img+'"><p><b>Categoria: </b>'+e.cat+'</p><btn class="del" id="'+e.id+'">elimina</btn></div>';
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
    if ($("#imgflag").val()==1){err=1}
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
        $('#img').val("");
        $('#imgflag').val(1);
        $('.imgupload').show("slow");
        $('.imguploadok').hide("slow");
        $('#namefile').html("");
        $('#cat').val("");

        getart();
    })
    .fail(function() {
        alert('Qualcosa è andato storto...');
    });
}



//upload
$('#img').change(function(){
//here we assign tu our text field #fileup the name of the selected file
    var res=$('#img').val();
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

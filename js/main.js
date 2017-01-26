//chiama padding top body
$(document).ready(function(){
    toppad();
});
$(window).resize(function() {
    toppad();
});

function toppad(){
    var ptop=$('.menu').css('height');
    $('#landing').css('padding-top',ptop);
    return parseInt(ptop.replace("px", ""));
}


//cambio colore scroll menu
$(document).ready(function(){
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('.menu').css('background', 'rgba(158,148,144,.6)');
        } else {
            $('.menu').css('background', 'rgba(158,148,144,.1)');
        }
    });
});


//menu
$(".menu a:not('#conthelper')").click(function(){
	var target=$(this).attr('target');

	$('html,body').animate({
        scrollTop: $("#"+target).offset().top-toppad()
    }, 700);
});

//helper per contatti
$('#conthelper').click(function(){
  $('#conthelptrg').click();
});


//SCROLLSPY
$(window).scroll(function() {
	//get the divs offsets
	var divs=[];
	$( ".menu a:not('#conthelper')" ).each(function(i) { //eccezione per helper contatti...
		var appo=$(this).attr("target");
		divs[i]=$("#"+appo).offset().top;
	});

	//gets actual scroll and adds vh/2
	var pos=($(window).scrollTop())-toppad();
	var off=($(window).height())/4;

	//if scroll is < vh/2 then we remove active class
	if (pos<off){$( ".menu a" ).removeClass("active"); return;}

	pos=pos+off;

	//gets the first div on actual scroll > div and sets its menu voice as active
	var index=0;
	for (index = 0; index < divs.length; index++) {
		if (pos>divs[index]){
			$(".menu a").removeClass("active");
		}else{
			break;
		}
	}
	$( ".menu a:not('#conthelper'):eq("+index+")" ).addClass("active");
});



//altezza div servizi
$(document).ready(function(){
    var ht=$(".seract").css("height");
	$(".serimg").css("height",ht);
});

//toggle servizi
$(".tgserv").click(function(){
	var id=$(this).attr("id");
	id=id.replace("ser","");
	id="serv"+id;
	if ($("#"+id).hasClass("collapsed")){
		$("#"+id).css("max-height","10000px");//workaround
	}else{
		$("#"+id).css("max-height","5px");
	}
	$("#"+id).toggleClass("collapsed");
});


//servizi immagini
$(document).ready(function(){
	$.ajax({
		method: 'get',
		url: "foto.php",
		dataType:"json"
	})

	.done(function(data) {
		$.each(data, function(i, e) {
			//var $item=$('<div class="col-md-3 col-sm-6 '+e.anno+'"><div class="picevent" style="background:url(\''+e.img+'\') no-repeat center center;background-size:cover;"><a id="foto'+e.id+'" class="picover center" data-toggle="modal" data-target="#modServ"><p>'+e.tit+'</p></a></div></div>');
			var $item=$('<div class="col-md-3 col-sm-6"><div class="picevent" style="background:url(\''+e.img+'\') no-repeat center center;background-size:cover;"><a id="foto'+e.id+'" class="picover center" data-toggle="modal" data-target="#modServ"><p>'+e.tit+'</p></a></div></div>');
			//$('#serv'+e.cat+' .griglia').isotope().append( $item ).isotope( 'appended', $item );
			$('#serv'+e.cat+' .griglia').append( $item );
		});
	})

	.fail(function() {
		alert('ko');
	});
});


//sales scroll
$(".gotocontact").click(function(){
	$('html,body').animate({
        scrollTop: $("#contacts").offset().top
    }, 700);
});


//modal foto
$(".griglia").on('click','.picover',function() {
	var fotoid=$(this).attr('id').replace("foto", "");
	$.ajax({
		method: 'get',
		url: "foto.php",
		data: {id:fotoid},
		dataType: "json"
	})

		.done(function(data) {
			$.each(data, function(i, e) {
				$('.modal-title').html(e.tit);
				//$('.modal-subtitle').html(e.anno+' - '+$('.ser'+e.cat).html());
				$('.modal-subtitle').html($('.ser'+e.cat).html());
				$('#modfoto').html('<img class="img-responsive" src="'+e.img+'">');
				$('#modtxt').html(e.txt);
			});
		})

		.fail(function() {
			alert('ko');
		});
});

//isotope
/*
var $grid1 = $('#serv1 .griglia').isotope();
var $grid2 = $('#serv2 .griglia').isotope();
var $grid3 = $('#serv3 .griglia').isotope();
var $grid4 = $('#serv4 .griglia').isotope();
var $grid5 = $('#serv5 .griglia').isotope();

$('.banda.uno').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid1.isotope({filter: filterValue});
  $(".banda.uno li").removeClass("active");
  $(this).addClass("active");
});
$('.banda.due').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid2.isotope({filter: filterValue});
  $(".banda.due li").removeClass("active");
  $(this).addClass("active");
});
$('.banda.tre').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid3.isotope({filter: filterValue});
  $(".banda.tre li").removeClass("active");
  $(this).addClass("active");
});
$('.banda.qua').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid4.isotope({filter: filterValue});
  $(".banda.qua li").removeClass("active");
  $(this).addClass("active");
});
$('.banda.cin').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid5.isotope({filter: filterValue});
  $(".banda.cin li").removeClass("active");
  $(this).addClass("active");
});
*/

//torna su
var scrollTrigger = 200 // px
function backToTop() {
	var scrollH = $(window).scrollTop();
	if (scrollH > scrollTrigger) {
		$('#totop').addClass('show');
	} else {
		$('#totop').removeClass('show');
	}
};
backToTop(); //@document ready
$(window).on('scroll', function () { //@each scroll
	backToTop();
});

$('#totop').on('click', function() {
	$('html,body').animate({scrollTop: 0}, 700,function(){$('#totop').removeClass('show');});
});



//contatti
$(".form #name").keyup(function() {
  checkForm();
});
$(".form #cog").keyup(function() {
  checkForm();
});
$(".form #mail").keyup(function() {
  checkForm();
});
$(".form #msg").keyup(function() {
  checkForm();
});

function checkForm(){
	if ($(".form #name").val()==""){
		$("#sbm").removeClass("ok");
		return 0;
	}
	if ($(".form #cog").val()==""){
		$("#sbm").removeClass("ok");
		return 0;
	}
	if ($(".form #mail").val()==""){
		$("#sbm").removeClass("ok");
		return 0;
	}
	if ($(".form #msg").val()==""){
		$("#sbm").removeClass("ok");
		return 0;
	}
	if (!$("#sbm").hasClass("ok")){
		$("#sbm").addClass("ok");
	}
	if ($("#sbm").hasClass("error")){
		$("#sbm").removeClass("error");
	}
}

$(".form").on("click",".btnform.ok",function(){
	$.ajax({
		url: "mailer.php",
		method: "post",
    data:{name:$(".form #name").val(),cog:$(".form #cog").val(),mail:$(".form #mail").val(),msg:$(".form #msg").val()}
	})
	.done(function() {
		$(this).removeClass("ok");
		$(this).addClass("done");
		$(this).html("Message sent!");
	})
	.fail(function() {
		$(this).removeClass("ok");
		$(this).addClass("error");
		$(this).html("Error! Refresh the page");
	});
});

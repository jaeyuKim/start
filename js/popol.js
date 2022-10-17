$('#open').click(function(){
    $('#open').css('display','none');
    $('#header').css('display','block');
});

$('.stage_right img').click(function(){
    $('.stage_1').css('display','none');
    $('.stage_2').css('display','block');
});

$('.stage_left img').click(function(){
    $('.stage_1').css('display','block');
    $('.stage_2').css('display','none');
});

$('.sup_right img').click(function(){
    $('.sup_1').css('display','none');
    $('.sup_2').css('display','block');
});

$('.sup_left img').click(function(){
    $('.sup_1').css('display','block');
    $('.sup_2').css('display','none');
});
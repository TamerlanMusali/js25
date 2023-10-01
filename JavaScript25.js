$('.btn').click(function () {
    let text = $(this).text()
    $('input').val($('input').val() + text)
})

$('#plus').click(function () {
    let text = $(this).text()
    $('input').val($('input').val() + text)
})

$('#plus2').click(function () {
    let text = $(this).text()
    $('input').val($('input').val() + text)
})

$('#minus').click(function () {
    let text = $(this).text()
    $('input').val($('input').val() + text)
})

$('#minus2').click(function () {
    let text = $(this).text()
    $('input').val($('input').val() + text)
})

$('#empty').click(function () {
    $('input').val('')
})

$('#remove').click(function () {
    let valu = $('input').val()
    $('input').val(valu.substring(0, valu.length - 1))
})

$('#equal').click(function () {
    let valu = $('input').val()
    $('input').val(eval(valu))
})

$('#podkoren').click(function(){
    let valu = $('input').val()
    $('input').val(Math.sqrt(valu))
})

$('#koren').click(function(){
    let valu = $('input').val()
    $('input').val(valu ** 2)
})

$('#procent').click(function(){
    let valu = $('input').val()
    $('input').val(valu / 100)
})

$('#plmi').click(function(){
    let valu = $('input').val()
    $('input').val(valu * (1))
    $('input').val(valu * (-1))
})

$('#delet').click(function(){
    let valu = $('input').val()
    $('input').val(1/(valu))
})
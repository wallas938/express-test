
const path = document.getElementById('path')
const sendBtn = document.getElementById('send')

$(document).ready(function(){
  console.log(typeof $('#verb').val())
    $('#send').click(function(){
      $.ajax({url: $('#path').val(), async: true, success: function(result){
        $("#status").html('Status code: ' + result);
      }});
    });
  });
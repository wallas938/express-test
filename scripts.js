const verb = document.getElementById('verb')
const path = document.getElementById('path')
const sendBtn = document.getElementById('send')

$(document).ready(function(){

    $('#send').click(function(){
      $.ajax({url: "./server.js", async: true, success: function(result){
        $("#statusCode").html(result);
      }});
    });
  });


  sendBtn.addEventListener('click', function() {
    const verbVal = verb.value;
    const pathVal = path.value;

    $.ajax({
        type: verbVal,
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });
})
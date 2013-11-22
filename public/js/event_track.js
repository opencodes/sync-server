var host = "http://10.207.66.120:3000";
$(function(){
    var socket = io.connect(host);
    socket.on('connect', function () {
      var ordercount = 0;
      socket.on('message', function(message) {
        console.log(message);
        $('#notification').show();
        $('#notification').attr('class','').addClass('alert alert-info').text(message.note);
        setTimeout(function(){$('#notification').hide();},3000);
      });
	  /////////////////////////////////////
      socket.on('onPageLoad', function(message) {
        console.log(message);
        var html = message.time+' - '+message.url+'<br/>';
        
    	$('#urlhits').append(html);  
    	$("#urlhits").animate({ scrollTop: document.getElementById('urlhits').scrollHeight}, "fast"); 
        $('#seo-stats-hits').text(parseInt($('#seo-stats-hits').text())+1);
      });
	  /////////////////////////////////////
      socket.on('onCLP', function(message) {
        console.log(message);
        var html = '<tr><td>'+message.category.id+'</td><td >'+message.category.name+'</td><td>0</td></tr>';                
    	$('#categoryhits').append(html);  
    	$("#categoryhits").animate({ scrollTop: document.getElementById('categoryhits').scrollHeight}, "fast"); 
      });
      //////////////////////////////////
      socket.on('disconnect', function() {
    	  $('#notification').show();
          $('#notification').attr('class','').addClass('alert alert-warning').text(message.note);
          setTimeout(function(){$('#notification').hide();},3000);
      });
    });           
  });
function sendMsg() {
  var msg = document.getElementById("msg").value;
  if (msg.replace(/\s/g, '').length) {
    msg = msg.replace(/\r?\n/g, '<br/>');
    var new_msg = `<div class="chat self">
                      <div class="user-photo"><img src="man.png"></div>
                      <p class="chat-message">${msg}</p>
                  </div>`;
    document.getElementById("chat_logs").innerHTML += (new_msg);
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var new_msg = '<div class="chat self"><div class="user-photo"><img src="bot.png"></div><p class="chat-message">'+this.responseText+'</p></div>';
	 alert(new_msg)
    document.getElementById("chat_logs").innerHTML += (new_msg);
    }
  };
  url='http://127.0.0.1:5000/ans/'+msg;
  xhttp.open("GET", url, true);
  xhttp.send();
  
  document.getElementById("msg").value = "";
}

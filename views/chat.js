$(function(){
var socket = io.connect('http://localhost:3000');
$(".register-form").on("submit", function(){   
var name=$('#name').val();
var pinno=$('#pinno').val();
var email=$('#email').val();
var pswd=$('#password').val();
var address=$('#address').val();
socket.emit("add-user",name,pinno,email,pswd,address);
 });
});

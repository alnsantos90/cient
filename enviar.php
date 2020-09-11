<?php
require_once('PHPMailer_5.2.1/class.phpmailer.php'); /* classe PHPMailer */
 
/* Recebe os dados do cliente ajax via POST */
$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$msg = $_POST['msg'];
 
try {
$mail = new PHPMailer(true); //New instance, with exceptions enabled
$mail->CharSet = "UTF-8";
/* CORPO DO E-MAIL */
$body .= "<div
style='width: 100%; height: 100vh; background: #f8f8f8;  padding: 30px; box-sizing: border-box; scroll-behavior: unset;'>
<div style='width: 100%; text-align: center;'><img style='margin: 40px;'
    src='http://ncode.com.br/cient/assets/images/logo/logo-dark.png' alt='' />
    <h1>Clientes precisam da <span style='color: #286ad8;'>Cient</span>!</h1>
  <h4 style='color: #606060; text-transform: uppercase; font-family: Courier New, Courier, monospace;'>ASSUNTO: <span
      style='text-decoration: underline; margin-top:20px;'>" . $assunto . "</span></h4>
</div>
<div style='margin: 30px; background: #fff; border-radius: 10px; width: 99%; padding: 40px; box-sizing: border-box;'>
  <h3 style='display: inline; margin-right: 20px;'>" . $nome . "</h3>
  <h3 style='display: inline; margin-right: 20px;'>/</h3>
  <h3 style='display: inline; color: #606060;'>" . $email . "</h3>
  <h4 style='color: #606060; margin-top: 40px;'>" . $msg . "</h4>
</div>";
$body .= "<center> Enviado em <strong>" .date("d/m/Y"). "</center>"; //mostra a data e o IP
$body .= "</div>"; //mostra a data e o IP

$mail->IsSMTP(); //tell the class to use SMTP
$mail->SMTPAuth = true; // enable SMTP authentication
$mail->Port = 587; //SMTP porta (as mais utilizadas são '25' e '587'
$mail->Host = "smtp.gmail.com"; // SMTP servidor
$mail->Username = "alnsantos90@gmail.com";  // SMTP  usuário
$mail->Password = "allan251090";  // SMTP senha
 
$mail->IsSendmail();  
 
$mail->AddReplyTo($email, $nome); //Responder para..
$mail->From = $email; //e-mail fornecido pelo cliente
$mail->FromName   = $nome; //nome fornecido pelo cliente
 
$to = "allan.santos@ncode.com.br"; //Enviar para
$mail->AddAddress($to); 
$mail->Subject  = "Contato - " . $assunto; //Assunto
$mail->WordWrap   = 80; // set word wrap
 
$mail->MsgHTML($body);
 
$mail->IsHTML(true); // send as HTML
 
$mail->Send();
echo '<center><h4>Mensagem enviada com sucesso.</h4><br> <h5>Em breve retornaremos seu contato!</h5></center>'; //retorno devolvido para o ajax caso sucesso

} catch (phpmailerException $e) {
echo $e->errorMessage(); //retorno devolvido para o ajax caso erro
}
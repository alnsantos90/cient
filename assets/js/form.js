$(document).ready(function () { //Quando documento estiver pronto
  $('#btn').click(function () {
      /* Quando clicar em #btn */
      /* Coletando dados */
      var nome = $('#nome').val();
      var email = $('#email').val();
      var assunto = $('#assunto').val();
      var msg = $('#msg').val();

      /* Validando */
      if (nome.length <= 3) {
          alert('Você precisa informar um nome com mais de 3 caracteres!');
          return false;
      }
      if (email.length <= 5) {
          alert('Você precisa informar um e-mail válido!');
          return false;
      }
      if (assunto.length <= 5) {
          alert('Você precisa informar um assunto com mais de 5 caracteres');
          return false;
      }
      if (msg.length <= 5) {
          alert('Você precisa informar uma mensagem com mais de 5 caracteres');
          return false;
      }
  

      /* construindo url */
      var urlData = "&nome=" + nome + "&email=" + email + "&msg=" +
          msg + "&assunto=" +
          assunto;

      /* Ajax */
      $.ajax({
          type: "POST",
          url: "enviar.php",
          /* endereço do phpmailer */
          async: true,
          data: urlData,
          /* informa Url */
          success: function (data) {
              /* sucesso */
              $('#retornoHTML').html(data);
          },
          beforeSend: function () {
              /* antes de enviar */
              $('.loading').fadeIn('fast');
          },
          complete: function () {
              /* completo */
              $('.loading').fadeOut('fast');
          }
      });
  });
});
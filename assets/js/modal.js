  const textModalBox = document.querySelector("[textModal]")

  function getTextSaibaMais() {
    const getEventInternet = event.target.getAttribute('internet');

    switch (getEventInternet) {
      case '30':
        textModalBox.innerHTML = `
          <h6 class="my-3">Internet CIENT Lite 30M</h6>
          <ul class="list-unstyled mt-3 mb-4 tew">
              <li>R$ 69,90 Por mês</li>
              <li>30Mb de Download</li> 
              <li>15Mb de Upload</li>
          </ul>
        `
        break;
      case '60':
        textModalBox.innerHTML = `
             <h6 class="my-3">Internet CIENT 60M</h6>
             <ul class="list-unstyled mt-3 mb-4 tew">
                <li>R$ 79,90 Por mês</li>
                <li>60Mb de Download</li> 
                <li>30Mb de Upload</li>
             </ul>
           `
        break;

      case '100':
        textModalBox.innerHTML = `
            <h6 class="my-3">Internet CIENT 100M</h6>
            <ul class="list-unstyled mt-3 mb-4 tew">
                <li>R$ 89,90 Por mês</li>
                <li>100Mb de Download</li> 
                <li>50Mb de Upload</li>
            </ul>
          `
        break;

      default:
        break;
    }

  }

  function getFoneSaibaMais() {
    const getEventFone = event.target.getAttribute('fone');

    switch (getEventFone) {
      case 'flex':
        textModalBox.innerHTML = `
          <h6 class="my-3">Fone CIENT Flex</h6>
          <ul class="list-unstyled mt-3 mb-4 tew">
              <li>R$ 14,9 Por mês</li>
              <li>Ligação ilimitada de CIENT para CIENT</li>
              <li>Sem taxa de adesão se adquirido junto com plano de Internet.</li>
              <li>Plano de Telefonia Fixa com cobrança por minuto de ligação, em chamadas de saída para números fixo e móvel em todo território nacional. </li>
              <li>Será cobrado R$ 0,17 o minuto para terminais fixos e R$ 0,70 o minuto para terminais móveis.</li>
              <li>Este plano implica em comprometimento de 12 meses de permanência.</li>
              <li>Sem taxa de adesão se adquirido junto com plano de Internet.</li>
          </ul>
          <p>Suporte Técnico <br>
          Seg à Sab 08:30 as 20:00hrs e Dom e Feriados das 08:30 as 13:00hrs
          </p>
        `
        break;

      case 'gold':
        textModalBox.innerHTML = `
            <h6 class="my-3">Fone CIENT Gold</h6>
            <ul class="list-unstyled mt-3 mb-4 tew">
                <li>R$ 34,90 Por mês</li>

                <li>Sem taxa de adesão se adquirido junto com plano de Internet.</li>

                <li>Plano de Telefonia Fixa Ilimitada para ligações Locais e DDD para telefones Fixo para qualquer operadora  em todo território nacional, e cobrança por minuto de ligação para telefones Móvel Local e DDD.</li>

                <li>Será cobrado R$ 0,70 o minuto para terminais móveis.</li>

                <li>Este plano implica em comprometimento de 12 meses de permanência.</li>
            </ul>
            <p>Suporte Técnico <br>
            Seg à Sab 08:30 as 20:00hrs e Dom e Feriados das 08:30 as 13:00hrs
            </p>
          `
        break;

      case 'ilimitado':
        textModalBox.innerHTML = `
              <h6 class="my-3">Fone CIENT Ilimitado</h6>
              <ul class="list-unstyled mt-3 mb-4 tew">
                  <li>R$ 49,90 Por mês</li>
  
                  <li>Sem taxa de adesão se adquirido junto com plano de Internet.</li>
  
                  <li>Plano de Telefonia Fixa Ilimitada para ligações Locais e DDD para telefones Fixo e Móvel para qualquer operadora  em todo território nacional.</li>
  
                  <li>Este plano implica em comprometimento de 12 meses de permanência.</li>
              </ul>
              <p>Suporte Técnico <br>
              Seg à Sab 08:30 as 20:00hrs e Dom e Feriados das 08:30 as 13:00hrs
              </p>
            `
        break;

        case 'corp':
        textModalBox.innerHTML = `
              <h6 class="my-3">Fone CIENT Cooporativo</h6>
              <ul class="list-unstyled mt-3 mb-4 tew">
                  <li>R$ 99,90 Por mês</li>
              </ul>
              <p>Plano de telefonia Fixa Empresarial ilimitada para ligações Local ou DDD com destino à qualquer operadora Fixo ou Móvel em todo território nacional. Disponibilidade para atendimento simultâneo de chamadas até 5 canais de entrada, e 1 canal de saída, conferencia, identificador de chamadas.</p>
              <br>
              <p>Suporte Técnico <br>
              Seg à Sab 08:30 as 20:00hrs e Dom e Feriados das 08:30 as 13:00hrs
              </p>
            `
        break;

      default:
        'plano não selecionado'
        break;
    }

  }
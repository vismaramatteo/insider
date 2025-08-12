let playerNames = [];
let roles = [];
const paroleSegrete = [
"SAPONE",
"SPUGNA",
"SPAZZOLINO",
"ASCIUGAMANO",
"LAVATRICE",
"ASILO",
"ELEMENTARI (scuole)",
"MEDIE (scuole)",
"SUPERIORI (scuole)",
"UNIVERSITÀ",
"TESTA",
"COLLO",
"SPALLA",
"CORPO",
"MANO",
"GAMBA",
"METEO",
"TELEGIORNALE",
"CONDUTTORE",
"PUBBLICITÀ",
"ATTRICE",
"COMICO",
"ELETTRICITÀ",
"MAGNETE",
"GRAVITÀ",
"TUONO",
"ENERGIA NUCLEARE",
"CALORE",
"OLIMPIADI",
"MONDIALI DI CALCIO",
"MARATONA",
"NUOTARE",
"TRIATHLON",
"CALENDARIO",
"SVEGLIA",
"CLESSIDRA",
"BUSSOLA",
"OMBRA",
"STAGIONE",
"PENNA",
"PENNELLO",
"POST-IT",
"MATITA",
"VERNICE",
"RIGHELLO",
"ZOO",
"PARCO DIVERTIMENTI",
"PICNIC",
"ARRAMPICATA",
"SPIAGGIA",
"KARAOKE",
"SOLE",
"LUNA",
"TERRA (pianeta)",
"ASTRONAUTA",
"NAVICELLA SPAZIALE",
"ISOLE GALAPAGOS",
"ANTARTICA",
"HAWAII",
"NUOVA ZELANDA",
"EVEREST",
"FANTASMA",
"CANDELA",
"ZOMBIE",
"PIRAMIDE",
"VAMPIRO",
"SANGUE",
"VIGILI DEL FUOCO",
"POLIZIA",
"GRU",
"TRATTORE",
"TIR",
"MULINO",
"PANNELLO SOLARE",
"CHITARRA",
"PIANO",
"BATTERIA (strumento musicale)",
"FLAUTO",
"VIOLINO",
"TROMBA (strumento musicale)",
"RISCALDAMENTO GLOBALE",
"RIUNIONE",
"STORIA",
"CULTURA",
"CIVILTÀ",
"AVVOCATO",
"ARCHITETTO",
"INFERMIERE",
"INSEGNANTE",
"PILOTA",
"MACCHINA",
"BICICLETTA",
"TRICICLO",
"MOTO",
"TRENO",
"AEREO",
"DADO",
"SCACCHI",
"CARTA (da gioco)",
"GIOCO DA TAVOLA",
"PUZZLE",
"CASINÒ",
"CAFFÈ",
"TAZZA",
"BIRRA",
"VINO",
"POPCORN",
"BICCHIERE DI PLASTICA",
"GRANO",
"MAIS",
"ARACHIDI",
"LATTE",
"RISO",
"DINAMITE",
"PISTOLA",
"BOOMERANG",
"FRECCIA",
"KATANA",
"CARRO ARMATO",
"CAPPELLO",
"OCCHIALI",
"T-SHIRT",
"MUTANDE",
"CALZE",
"SCARPE",
"PADRE",
"MADRE",
"NONNO",
"NONNA",
"NIPOTE",
"ANIMALE DOMESTICO",
"SALE",
"PEPE",
"PEPERONCINO",
"KETCHUP",
"BASILICO",
"ZUCCHERO",
"TENNIS",
"BASEBALL",
"CALCIO",
"PING-PONG",
"GOLF",
"WRESTLING",
"PARCHEGGIO",
"CAMPO DA TENNIS",
"CAMPO",
"CIOCCOLATO",
"TRONCO",
"CANNUCCIA",
"TELESCOPIO",
"BASTONE",
"OMBRELLO",
"SEGA",
"MARTELLO",
"FORBICI",
"TAGLIERINO",
"ASCIA",
"PICCONE",
"MURO",
"COLONNA",
"PAVIMENTO",
"SOFFITTO",
"TETTO",
"TERRAZZO",
"COMPLEANNO",
"REGALO",
"NATALE",
"FESTA",
"MATRIMONIO",
"TOMBA",
"MONTAGNA",
"FIUME",
"FORESTA",
"VULCANO",
"MARE",
"LAGO",
"CARTELLO STRADALE",
"PALO DELLA CORRENTE",
"RECINZIONE",
"PANNELLO PUBBLICITARIO",
"AUTOSTRADA",
"LEGNO",
"FUOCO",
"TERRA",
"ORO",
"ACQUA",
"ARIA",
"FUMETTO",
"ROMANZO",
"DIZIONARIO",
"DIARIO",
"QUOTIDIANO",
"LIBRO",
"SCOLAPASTA",
"VASO",
"SECCHIO",
"CESTO",
"TAZZA",
"CESTINO",
"CAMERA DA LETTO",
"CUCINA",
"TAVOLO",
"BAGNO",
"VASCA",
"GIARDINO",
"MARCIAPIEDE",
"PONTE",
"TUNNEL",
"GUARDRAIL",
"STRISCE PEDONALI",
"CARTELLO",
"CUCCHIAIO",
"FORCHETTA",
"COLTELLO",
"BACCHETTE",
"BICCHIERE",
"CIBO",
"TENDA",
"LAMPADA",
"SACCO A PELO",
"ZAINO",
"CORDA",
"CAMPEGGIO",
"APPARTAMENTO",
"NEGOZIO",
"FAST FOOD",
"BAR",
"RISTORANTE",
"PUB",
"GENITORE",
"FRATELLO",
"SORELLA",
"GEMELLI",
"COPPIA",
"COMPAGNO DI CLASSE"
];
let selectedWord;
let timerInterval; 
document.getElementById('start-button').addEventListener('click', () => {
  // Nascondo la home
  document.getElementById('home-screen').style.display = 'none';

  // Creo la schermata per inserire numero giocatori
  const playerScreen = document.createElement('div');
  playerScreen.id = 'player-screen';
  playerScreen.innerHTML = `
    <h2>Quanti giocatori siete?</h2>
    <input type="number" id="player-count" min="3" max="8" value="4" />
    <button id="confirm-players">Conferma</button>
  `;

  document.body.appendChild(playerScreen);

  document.getElementById('confirm-players').addEventListener('click', () => {
    const count = parseInt(document.getElementById('player-count').value);
    if (count >= 3 && count <= 8) {
      // Rimuovo la schermata del numero giocatori
      playerScreen.remove();
      // Creo la schermata per inserire i nomi
      const nameScreen = document.createElement('div');
      nameScreen.id = 'name-screen';
      document.getElementsByName('body').backgroundImage = '';
      let inputsHtml = '<h2>Inserisci il nome dei giocatori</h2>';
      for (let i = 1; i <= count; i++) {
        inputsHtml += `
          <label for="player${i}">Giocatore ${i}:</label>
          <input type="text" id="player${i}" required placeholder="Nome giocatore ${i}" /><br/>
        `;
      }
      inputsHtml += `<button id="confirm-names">Conferma</button>`;
      
      nameScreen.innerHTML = inputsHtml;
      document.body.appendChild(nameScreen);

      document.getElementById('confirm-names').addEventListener('click', () => {
        // Raccolgo i nomi in un array
        playerNames = [];
        let allFilled = true;
        for (let i = 1; i <= count; i++) {
          const name = document.getElementById(`player${i}`).value.trim();
          if (!name) {
            allFilled = false;
            break;
          }
          playerNames.push(name);
        }
        roles = ['Master', 'Insider'];
        while (roles.length < playerNames.length) {
          roles.push('Giocatore normale');
        }
        if (!allFilled) {
          alert('Per favore, inserisci tutti i nomi');
          return;
        }

        // Qui puoi procedere con la fase successiva (es. assegnazione ruoli)
        shuffle(roles);
        selectedWord = pickWord();
        nameScreen.remove();
        showPlayerRoleScreen(0, selectedWord);
      });
    } else {
      alert('Inserisci un numero tra 3 e 8');
    }
  });

  function showTimer() {
    const timerScreen = document.createElement('div');
    timerScreen.id = 'timer-screen';
    timerScreen.style.textAlign = 'center';
    timerScreen.style.marginTop = '40px';
    timerScreen.innerHTML = `
      <h2>Il gioco è iniziato!</h2>
      <p>Tempo rimanente:</p><span id="time">5:00</span>
      <p><em>Buona fortuna!</em></p>
      <button id="btn-indovinato">Indovinato</button>
    `;

    document.getElementById('app-container').appendChild(timerScreen);

    const display = document.getElementById('time');
    startTimer(300, display, () => expiredTimer());

    document.getElementById('btn-indovinato').addEventListener('click', () => {
      clearInterval(timerInterval); // stop timer
      showWhoGuessed();
    });
  }

  function showWhoGuessed() {
    clearScreen();

    const screen = document.createElement('div');
    screen.id = 'guessed-screen';
    screen.style.textAlign = 'center';

    let html = `<h2>Chi ha indovinato la parola?</h2>`;
    playerNames.forEach((name, index) => {
      if (roles[index] !== "Master") {
        html += `<button class="player-btn" data-index="${index}">${name}</button><br/>`;
      }
    });

    screen.innerHTML = html;
    document.getElementById('app-container').appendChild(screen);

    document.querySelectorAll('.player-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index, 10);
        const guessedPlayer = {
          name: playerNames[index],
          index: index
        };
        showVoting(guessedPlayer);
      });
    });
  }

  function showVoting(guessedPlayer) {
    clearScreen();

    const screen = document.createElement('div');
    screen.id = 'voting-screen';
    screen.style.textAlign = 'center';

    screen.innerHTML = `
      <h2>${guessedPlayer.name} ha indovinato la parola.</h2>
      <p>Secondo voi è l'Insider?</p>
      <button id="vote-yes">Sì</button>
      <button id="vote-no">No</button>
    `;

    document.getElementById('app-container').appendChild(screen);

    // Se il gruppo vota "Sì"
    document.getElementById('vote-yes').addEventListener('click', () => {
      if (roles[guessedPlayer.index] === "Insider") {
        showEndScreen(`Avete votato Sì ✅ ed era davvero l'Insider! Insider perde 🎉`);
      } else {
        showEndScreen(`Avete votato Sì ❌ ma ${guessedPlayer.name} non era l'Insider. Insider Vince!`);
      }
    });

    // Se il gruppo vota "No"
    document.getElementById('vote-no').addEventListener('click', () => {
      showFinalInsiderVote(guessedPlayer);
    });
  }

  function showFinalInsiderVote(guessedPlayer) {
    clearScreen();

    const screen = document.createElement('div');
    screen.id = 'final-vote-screen';
    screen.style.textAlign = 'center';

    let html = `<h2>Chi pensate allora sia l'Insider?</h2>`;
    playerNames.forEach((name, index) => {
      // Escludo chi ha indovinato, perché già escluso dal voto
      // if (index !== guessedPlayer.index) {
        if (roles[index] !== "Master" /* && index !== guessedPlayer.index */) {
            html += `<button class="vote-btn" data-index="${index}">${name}</button><br/>`;
        }
      //}
    });

    screen.innerHTML = html;
    document.getElementById('app-container').appendChild(screen);

    document.querySelectorAll('.vote-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        const chosen = playerNames[index];

        if (roles[index] === "Insider") {
          showEndScreen(`Avete votato ${chosen} ✅ ed era davvero l'Insider! Insider perde!`);
        } else {
          showEndScreen(`Avete votato ${chosen} ❌ ma non era l'Insider. Insider vince! 🎉`);
        }
      });
    });
  }

  function showEndScreen(message) {
    clearScreen();

    const screen = document.createElement('div');
    screen.id = 'end-screen';
    screen.style.textAlign = 'center';
    screen.style.paddingTop = '52vh'

    const insiderIndex = roles.indexOf("Insider");
    const insiderName = playerNames[insiderIndex];

    screen.innerHTML = `
      <h2>Partita terminata!</h2>
      <p>${message}</p>
      <p>La parola era: ${selectedWord}</p>
      <p>L'Insider era: <strong>${insiderName}</strong></p>
      <button id="restart-btn">Gioca di nuovo</button>
    `;

    document.getElementById('app-container').appendChild(screen);

    document.getElementById('restart-btn').addEventListener('click', () => {
      assignRoles(); // funzione che riassegna Master / Insider / Commoner
      showRoleScreen(0); // riparte mostrando il ruolo al primo giocatore
    });
  }

  function expiredTimer() {
    clearScreen();
    let message = "Tempo scaduto!"
    showEndScreen(message);
  }

  function assignRoles() {
      roles = []; // reset ruoli
  
      let totalPlayers = playerNames.length;
      let masterIndex = Math.floor(Math.random() * totalPlayers);
      let insiderIndex;
  
      do {
          insiderIndex = Math.floor(Math.random() * totalPlayers);
      } while (insiderIndex === masterIndex);
  
      for (let i = 0; i < totalPlayers; i++) {
          if (i === masterIndex) {
              roles.push("Master");
          } else if (i === insiderIndex) {
              roles.push("Insider");
          } else {
              roles.push("Commoner");
          }
      }
  }

  function pickWord() {
    const index = Math.floor(Math.random() * paroleSegrete.length)
    return paroleSegrete[index]
  }

  function startTimer(duration, display) {
    let timer = duration;
    timerInterval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (--timer < 0) {
        clearInterval(timerInterval);
        expiredTimer();
      }
    }, 1000);
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function showPlayerRoleScreen(playerIndex, selectedWord) {
    const container = document.getElementById('app-container');

    // Pulisci tutto il contenuto precedente
    container.innerHTML = '';

    // Crea la schermata
    const screen = document.createElement('div');
    screen.id = 'role-screen';
    screen.style.textAlign = 'center';
    screen.style.marginTop = '40px';
    screen.style.fontSize = '1.5rem';
    screen.style.userSelect = 'none';

    let tappedOnce = false;

    screen.innerHTML = `
      <p>È il turno di <strong>${playerNames[playerIndex]}</strong></p>
      <p><em>Tocca per vedere il tuo ruolo</em></p>
    `;

    screen.addEventListener('click', () => {
      if (!tappedOnce) {
        screen.innerHTML = `
          <p><strong>${playerNames[playerIndex]}</strong>, il tuo ruolo è:</p>
          <h2 style="color:#fff">${roles[playerIndex]}</h2>
        `;
        if(roles[playerIndex] == "Master") {
          screen.innerHTML += `<p><em>La parola che dovrai fare indovinare è:<br/><span style="font-size: 55px; color: #fff">${selectedWord}.</span></em></p>`;
          screen.innerHTML += `<p><em>Ricorda che potrai rispondere alle domande dei giocatori solo con: 'Sì', 'No' e 'Non lo so'</em></p>`;
        }
        if(roles[playerIndex] == "Insider") {
          screen.innerHTML += `<p><em>La parola che dovrai indovinare è:<br/><span style="font-size: 55px; color: #fff">${selectedWord}.</span></em></p>`;
          screen.innerHTML += `<p><em>Cerca di fare indovinare la parola senza fare domande troppo ovvie, attirerebbero l'attenzione su di te!</em></p>`;
        }
        screen.innerHTML += `<p><em>Tocca per passare al prossimo giocatore</em></p>`;

        tappedOnce = true;
      } else {
        if (playerIndex + 1 >= playerNames.length) {
          clearScreen()
          showTimer();
        } else {
          showPlayerRoleScreen(playerIndex + 1, selectedWord);
        }
      }
    });

    container.appendChild(screen);
  }
  function clearScreen() {
    const container = document.getElementById('app-container');
    container.innerHTML = '';
  }
});






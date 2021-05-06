console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playersTest = ['This', 'took', 'so', 'long'];
var $row = document.querySelector('.row');

var deck = {};
function makeDeck() {
  var card = 0;
  for (var i = 1, j = 1; i <= 52; i++, j++) {
    if (j === 1) card = 'Ace';
    else if (j === 11) card = 'Jack';
    else if (j === 12) card = 'Queen';
    else if (j === 13) card = 'King';
    else card = j;
    if (i <= 13) {
      deck[i] = { rank: card, suit: 'Clubs' };
    } else if (i <= 26) {
      deck[i] = { rank: card, suit: 'Diamonds' };
    } else if (i <= 39) {
      deck[i] = { rank: card, suit: 'Spades' };
    } else if (i <= 52) {
      deck[i] = { rank: card, suit: 'Hearts' };
    }
    if (j === 13) j = 1;
  }
}

function rand() {
  return Math.floor(Math.random() * 52);
}

function getHand(handSize) {
  var handDealt = [];
  var num = 0;
  var total = 0;
  for (var i = 0; i < handSize; i++) {
    do {
      num = rand();
    } while (!deck[num]);
    if (deck[num].rank === 'Ace') total += 11;
    else if (deck[num].rank === 'Jack') total += 10;
    else if (deck[num].rank === 'Queen') total += 10;
    else if (deck[num].rank === 'King') total += 10;
    else total += deck[num].rank;
    handDealt.push(deck[num]);
    delete deck[num];
  }
  handDealt.push({ total: total });
  return handDealt;
}

function cardWar(players, handSize) {
  if (players.length * handSize > 51) return 'Please lower the handsize....';

  if (players.length === 0 || players.length === 1) return 'Please input a minimum of two(2) players';

  makeDeck();

  var $columnList = document.querySelectorAll('.column');
  var tie = false;
  var tied = [];
  var tieMessage = '';
  var winner = '';
  var score = 0;

  for (var x of $columnList) x.remove();
  var playersCollection = {};
  for (var y of players) {
    playersCollection[y] = { name: y, hand: getHand(handSize) };
  }
  for (var z in playersCollection) {
    $row.appendChild(renderPlayer(playersCollection[z], handSize));
  }

  var $playerList = document.querySelectorAll('.column');

  for (var a in playersCollection) {
    console.log(a, playersCollection[a].hand[handSize].total);
    if (playersCollection[a].hand[handSize].total > score) {
      score = playersCollection[a].hand[handSize].total;
      winner = a;
    }
  }
  tied.push(winner);
  for (var b in playersCollection) {
    if (playersCollection[b].hand[handSize].total === score && winner !== b) {
      tied.push(b);
      tie = true;
    }
  }
  if (tie) {
    if (tied.length === 2) {
      tieMessage = tied[0] + ' and ' + tied[1] + ' tied!';
    } else {
      tieMessage += tied[0];
      for (var t = 1; t < tied.length; t++) {
        if (t !== tied.length - 1) {
          tieMessage += ', ' + tied[t] + ', ';
        } else tieMessage += 'and ' + tied[t] + ' tied!';
      }
    }
    console.log(tieMessage);
    winner = cardWar(tied, handSize);
  }

  for (var data of $playerList) {
    if (data.getAttribute('player') === winner) {
      data.className = 'column won';
    } else data.className = 'column lost';
  }
  if (tie) return winner;
  else {
    console.log(winner + ' won!');
  }
}

function renderPlayer(player, handSize) {
  var $column = document.createElement('div');
  $column.setAttribute('player', player.name);
  $column.className = 'column';

  var $name = document.createElement('div');
  $name.className = 'name';
  $column.appendChild($name);

  var $nameText = document.createElement('p');
  $nameText.textContent = player.name;
  $name.appendChild($nameText);

  var $cards = document.createElement('div');
  $column.appendChild($cards);

  for (var x = 0; x < handSize; x++) {
    var $card = document.createElement('p');
    $card.textContent = player.hand[x].rank + ' of ' + player.hand[x].suit;
    $cards.appendChild($card);
  }

  var $total = document.createElement('p');
  $total.textContent = 'Total: ' + player.hand[handSize].total;
  $column.appendChild($total);

  return $column;
}

cardWar(playersTest, 2);

let playlists = [
  {
    selected: true,
    name: '¡Feliz cumpleaños, Tommy Torres!',
    image: '../images/cover.jpg',
    username: 'tommytorresmex',
    message: '¡La mafia mexicana te desea feliz cumpleaños!',
  },
  {
    selected: false,
    name: 'Annienaruz',
    image: '../images/persons/annienaruz.png',
    username: 'annienaruz',
    message: 'Que chingue a su madre el cumpleañero',
  },
  {
    selected: false,
    name: 'Rocio',
    image: '../images/persons/rocio.jpeg',
    username: 'rousmaye',
    message:
      'Muchas felicidades querido Tommy, que sigan los éxitos, las bendiciones, la música, el amor. Gracias por tanto.',
  },
  {
    selected: false,
    name: 'Abril',
    image: '../images/persons/abril.jpg',
    username: 'midorisant4',
    message: '¡Felicidades y gracias por todo Tommy!',
  },
  {
    selected: false,
    name: 'Diana Hernandez',
    image: '../images/persons/diana.jpg',
    username: 'PoynterBell',
    message: 'Que cumplas muchos años más y que tengas un día increíble!!',
  },
  {
    selected: false,
    name: 'Berenice',
    image: '../images/persons/bere.png',
    username: 'bere_arm',
    message: 'Ya ármate los conciertos en CDMX y Mty. Te quiero 💕',
  },
  {
    selected: false,
    name: 'America',
    image: '../images/persons/america.jpg',
    username: 'amehdezmuro',
    message: '',
  },
  {
    selected: false,
    name: 'Luna',
    image: '../images/persons/luna.jpg',
    username: 'luna_hercon',
    message:
      'Feliz cumpleaños Tommy, que la pases bien. \nTe ama la chica de las flores.',
  },
  {
    selected: false,
    name: 'Paloma',
    image: '../images/persons/paloma.jpg',
    username: 'paloma_saenz_12',
    message: 'Feliz cumple mi querido Tommy, I💜U',
  },
  {
    selected: false,
    name: 'Monica',
    image: '../images/persons/monica.JPG',
    username: 'monydenisse',
    message: 'Recibe "Demasiado amor" en tu día ❤',
  },
  {
    selected: false,
    name: 'Yazmin',
    image: '../images/persons/yazmin.jpg',
    username: 'izbethxd',
    message: '',
  },
  {
    selected: false,
    name: 'Lyla',
    image: '../images/persons/lyla.jpg',
    username: 'lylacrown',
    message: '',
  },
  {
    selected: false,
    name: 'Yolanda',
    image: '../images/cover.jpg',
    username: 'yolanda.regin',
    message: '',
  },
  {
    selected: false,
    name: 'Anahi',
    image: '../images/persons/anahi.jpg',
    username: 'manahisv',
    message:
      'Feliz cumpleaños, Tommy!💜🥳🥳🥳💜\nPásala súper lindo, un abrazo 🤗😘',
  },
];

const speakerSVG = `<svg
class="fill-current"
role="img"
height="16"
width="16"
viewBox="0 0 16 16"
class="Svg-ulyrgf-0 hJgLcF"
>
<path
  d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
></path>
</svg>`;

const sideBarUl = document.getElementById('sidebar-playlist');
const playListTitle = document.getElementById('playlist-title');
const playlistThumbnail = document.getElementById('playlist-thumbnail');
const playlistDescription = document.getElementById('playlist-description');
const songName = document.getElementById('song-name');
const socialUsername = document.getElementById('socialUsername');
const artistName = document.getElementById('artist-name');
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');
const progress = document.getElementById('progress');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', function () {
  playPause();
});

const sound = new Howl({
  src: ['../music/alan_walker_the_spectre.mp3'],
  onend: function () {
    console.log('Finished!');
  },
});

setInterval(() => {
  updateProgress();
}, 300);

function updateProgress() {
  if (sound?.playing()) {
    const dur = moment.unix(sound.seek());
    const formatted = dur.format('mm:ss');
    timeElapsed.textContent = formatted;
    let seek = sound.seek() || 0;
    let width = ((seek / sound.duration()) * 100 || 0) + '%';
    progress.style.width = width;
    //console.log(width);
  }
}

let liEntries = [];

init();

function init() {
  clearPreviousListEntries();
  for (let i = 0; i < playlists.length; i++) {
    const liEntry = document.createElement('li');

    liEntry.appendChild(
      document.createTextNode(
        i == 0 ? playlists[i].name : 'This is ' + playlists[i].name
      )
    );
    liEntry.addEventListener('click', function () {
      highlightSelected(playlists[i].name);
    });
    sideBarUl.appendChild(liEntry);
    if (playlists[i].selected) {
      playlistThumbnail.src = playlists[i].image;

      if (i == 0) {
        playListTitle.innerHTML = getPlayListTitle(playlists[i].name);
      } else {
        playListTitle.innerHTML = getPlayListTitle(
          'This is ' + playlists[i].name
        );
      }

      playlistDescription.textContent = playlists[i].message;
      socialUsername.text = '@' + playlists[i].username;
      socialUsername.href =
        'https://www.instagram.com/' + playlists[i].username;
      liEntry.className =
        'mt-2 text-white font-bold cursor-default flex justify-between items-center';
      const speakerSpan = document.createElement('span');
      speakerSpan.className = 'text-gray-300 mr-2';
      speakerSpan.innerHTML = speakerSVG;
      liEntry.appendChild(speakerSpan);
    } else {
      liEntry.className = 'mt-2 hover:text-white cursor-default';
    }
    liEntries.push(liEntry);
  }
}

function getPlayListTitle(musicName) {
  return `<h1 id="playlist-title">${musicName}</h1>`;
}

function highlightSelected(musicName) {
  let newList = [];
  for (let i = 0; i < playlists.length; i++) {
    let mn = playlists[i];
    mn.selected = musicName === mn.name;
    newList.push(mn);
  }
  playlists = [];
  playlists = [...new Set(newList)];
  init();
}

function clearPreviousListEntries() {
  for (let p = 0; p < liEntries.length; p++) {
    liEntries[p].remove();
  }
}

function playPause() {
  const dur = moment.unix(sound.duration());
  const formatted = dur.format('mm:ss');
  duration.textContent = formatted;
  sound?.playing() ? sound?.pause() : sound?.play();
}

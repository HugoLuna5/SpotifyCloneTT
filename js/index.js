const serverURL = 'http://tommytorresfest.fun/';

let playlists = [
  {
    selected: true,
    name: '¡Feliz cumpleaños, Tommy Torres!',
    image: serverURL + 'images/cover.jpg',
    username: 'tommytorresmex',
    message: '¡La mafia mexicana te desea feliz cumpleaños!🎉🥳',
    audio: serverURL + 'audios/default.mp3',
  },
  {
    selected: false,
    name: 'AnnieNaRuz',
    image: serverURL + 'images/persons/annienaruz.png',
    username: 'annienaruz',
    message: '¡Feliz cumpleaños Tommy!🎉🥳',
    audio: serverURL + 'audios/annienaruz.mp3',
  },
  {
    selected: false,
    name: 'Luna',
    image: serverURL + 'images/persons/luna.jpg',
    username: 'luna_hercon',
    message:
      'Feliz cumpleaños Tommy, que la pases bien. \nTe ama la chica de las flores.',
    audio: serverURL + 'audios/luna.mp3',
  },
  {
    selected: false,
    name: 'Abril',
    image: serverURL + 'images/persons/abril.jpg',
    username: 'midorisant4',
    message: '¡Felicidades y gracias por todo Tommy!',
    audio: serverURL + 'audios/abril.mp3',
  },
  {
    selected: false,
    name: 'Diana Hernandez',
    image: serverURL + 'images/persons/diana.jpg',
    username: 'PoynterBell',
    message: 'Que cumplas muchos años más y que tengas un día increíble!!',
    audio: serverURL + 'audios/diana.m4a',
  },
  {
    selected: false,
    name: 'Berenice',
    image: serverURL + 'images/persons/bere.png',
    username: 'bere_arm',
    message: 'Ya ármate los conciertos en CDMX y Mty. Te quiero 💕',
    audio: serverURL + 'audios/bere.mp4',
  },
  {
    selected: false,
    name: 'America',
    image: serverURL + 'images/persons/america.jpg',
    username: 'amehdezmuro',
    message:
      'Feliz cumpleaños mi Querido Tommy! Abrazos, canciones y mucha inspiración siempre 🤗🥳',
    audio: serverURL + 'audios/america.m4a',
  },

  {
    selected: false,
    name: 'Rocio',
    image: serverURL + 'images/persons/rocio.jpeg',
    username: 'rousmaye',
    message:
      'Muchas felicidades querido Tommy, que sigan los éxitos, las bendiciones, la música, el amor. Gracias por tanto.',
    audio: serverURL + 'audios/rocio.mp3',
  },

  {
    selected: false,
    name: 'Paloma',
    image: serverURL + 'images/persons/paloma.jpg',
    username: 'paloma_saenz_12',
    message: 'Feliz cumple mi querido Tommy, I💜U',
    audio: serverURL + 'audios/paloma.mp3',
  },
  {
    selected: false,
    name: 'Monica',
    image: serverURL + 'images/persons/monica.JPG',
    username: 'monydenisse',
    message: 'Recibe "Demasiado amor" en tu día ❤',
    audio: serverURL + 'audios/monica.mp3',
  },
  {
    selected: false,
    name: 'Yazmin',
    image: serverURL + 'images/persons/yazmin.jpg',
    username: 'izbethxd',
    message:
      'No te preocupes por tu edad... Sabemos que entre más añejos los vinos mejor sabor tienen 😋😘',
    audio: serverURL + 'audios/yazmin.mp4',
  },
  {
    selected: false,
    name: 'Lyla',
    image: serverURL + 'images/persons/lyla.jpg',
    username: 'lylacrown',
    message: '',
    audio: serverURL + 'audios/lyla.mp4',
  },
  {
    selected: false,
    name: 'Yolanda',
    image: serverURL + 'images/cover.jpg',
    username: 'yolanda.regin',
    message: '',
    audio: serverURL + 'audios/yolanda.mp3',
  },
  {
    selected: false,
    name: 'Anahi',
    image: serverURL + 'images/persons/anahi.jpg',
    username: 'manahisv',
    message:
      'Feliz cumpleaños, Tommy!💜🥳🥳🥳💜\nPásala súper lindo, un abrazo 🤗😘',
    audio: serverURL + 'audios/anahi.mp3',
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

const inputVolume = document.getElementById('inputVolume');
const containerElements = $('#containerElements');
const sideBarUl = document.getElementById('sidebar-playlist');
const playListTitle = document.getElementById('playlist-title');
const playlistThumbnail = document.getElementById('playlist-thumbnail');
const playlistDescription = document.getElementById('playlist-description');
const coverCurrent = document.getElementById('coverCurrent');
const songName = document.getElementById('song-name');
const socialUsername = document.getElementById('socialUsername');
const artistName = document.getElementById('artist-name');
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');
const progress = document.getElementById('progress');
const playBtn = document.getElementById('play-btn');
const playGlobalDesktop = document.getElementById('playGlobalDesktop');
const pauseGlobalDesktop = document.getElementById('pauseGlobalDesktop');
const playGlobalMobile = document.getElementById('playGlobalMobile');
const playGlobalMobileIcon = document.getElementById('playGlobalMobileIcon');
const pauseGlobalMobileIcon = document.getElementById('pauseGlobalMobileIcon');
const soundActivated = document.getElementById('soundActivated');
const soundMuted = document.getElementById('soundMuted');

const playButtonBottomBarMobile = document.getElementById(
  'playButtonBottomBarMobile'
);

const iconStopButtonBarDesktop = document.getElementById(
  'iconStopButtonBarDesktop'
);
const iconPlayButtonBarDesktop = document.getElementById(
  'iconPlayButtonBarDesktop'
);
const playIconBottomBarMobile = document.getElementById(
  'playIconBottomBarMobile'
);
const pauseIconBottomBarMobile = document.getElementById(
  'pauseIconBottomBarMobile'
);

const titleMobile = document.getElementById('titleMobile');
const authorMobile = document.getElementById('authorMobile');

const nextSong = document.getElementById('nextSong');
const prevSong = document.getElementById('prevSong');
const randomSongs = document.getElementById('randomSongs');
const repeatSong = document.getElementById('repeatSong');

var randomSongsAux = false;
var repeatSongAux = false;
var sounds = [];
var currentSound = 1;
var currentPlayList = 0;
let liEntries = [];

playBtn.addEventListener('click', function () {
  playPause(currentSound);
});

pauseGlobalDesktop.addEventListener('click', function () {
  playPause(currentSound);
});

playGlobalDesktop.addEventListener('click', function () {
  playPause(currentSound);
});

playGlobalMobile.addEventListener('click', function () {
  playPause(currentSound);
});
playButtonBottomBarMobile.addEventListener('click', function () {
  playPause(currentSound);
});

nextSong.addEventListener('click', function () {
  if (currentPlayList == 0) {
    if (repeatSongAux) {
      sounds[currentSound].stop();
      sounds[currentSound].play();
    } else {
      if (randomSongsAux) {
        currentSound = Math.floor(Math.random() * 13) + 1;
        playPause(currentSound);
      } else {
        if (currentSound == playlists.length) {
          currentSound = 0;
        } else {
          currentSound++;
        }

        playPause(currentSound);
      }
    }
  }
});

prevSong.addEventListener('click', function () {
  if (currentPlayList == 0) {
    if (repeatSongAux) {
      sounds[currentSound].stop();
      sounds[currentSound].play();
    } else {
      if (randomSongsAux) {
        currentSound = Math.floor(Math.random() * 13) + 1;
        playPause(currentSound);
      } else {
        if (currentSound > 1) {
          currentSound--;
          playPause(currentSound);
        }
      }
    }
  }
});

randomSongs.addEventListener('click', function () {
  if (randomSongsAux) {
    randomSongs.style.fill = 'currentColor';
    randomSongsAux = false;
  } else {
    randomSongs.style.fill = '#1db954';
    randomSongsAux = true;
  }
});

repeatSong.addEventListener('click', function () {
  if (repeatSongAux) {
    repeatSong.style.fill = 'currentColor';
    repeatSongAux = false;
  } else {
    repeatSong.style.fill = '#1db954';
    repeatSongAux = true;
  }
});

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
      containerElements.empty();
      currentSound = i == 0 ? i + 1 : i;
      currentPlayList = i;
      loadItems(i);

      let res = sounds[currentSound]?.playing();
      typeof res ? hideStopButtons() : hidePlayButtons();
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

    sounds.push(
      new Howl({
        src: [playlists[i].audio],
        html5: true,
        onend: function () {
          console.log('Finished!');
          actionPlayList();
        },
      })
    );
  }

  loadItems(0);
}

function actionPlayList() {
  if (currentPlayList == 0) {
    if (repeatSongAux) {
      sounds[currentSound].play();
    } else {
      if (randomSongsAux) {
        currentSound = Math.floor(Math.random() * 13) + 1;
        playPause(currentSound);
      } else {
        if (currentSound == playlists.length) {
          currentSound = 0;
        } else {
          currentSound++;
        }

        playPause(currentSound);
      }
    }
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

function loadItems(position) {
  if (position == 0) {
    for (let index = 1; index < playlists.length; index++) {
      let element =
        '<tr id="element' +
        index +
        '"  onclick="playSong(' +
        index +
        ')"  class=" flex  text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 active:bg-opacity-10 rounded-md py-2"><td class=" grid grid-cols-12 gap-4"> <div class="col-span-1 justify-center items-center"> <p class="text-center py-2">' +
        index +
        '</p></div><div class="col-span-10"> <p class="text-white">¡Feliz cumpleaños!</p><p style="font-size: 0.75rem;">' +
        playlists[index].name +
        '</p></div> <div class="col-span-1">  </div></td></tr>';

      containerElements.append(element);
    }
  } else {
    let element =
      '<tr id="element' +
      1 +
      '" onclick="playSong(' +
      position +
      ')"  class="flex  text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2 "><td class=" grid grid-cols-12 gap-4"> <div class="col-span-1 justify-center items-center"> <p class="text-center py-2">' +
      1 +
      '</p></div><div class="col-span-10"> <p class="text-white">¡Feliz cumpleaños!</p><p style="font-size: 0.75rem;">' +
      playlists[position].name +
      '</p></div> <div class="col-span-1"> </div></td></tr>';

    containerElements.append(element);
  }
}

function playSong(position) {
  if (currentPlayList == 0) {
    for (let index = 1; index < playlists.length; index++) {
      document
        .getElementById('element' + index)
        .classList.remove('bg-gray-200');
      document
        .getElementById('element' + index)
        .classList.remove('bg-opacity-10');
    }

    let element = document.getElementById('element' + position);
    element.classList.add('bg-gray-200');
    element.classList.add('bg-opacity-10');
  } else {
    let element = document.getElementById('element1');
    element.classList.add('bg-gray-200');
    element.classList.add('bg-opacity-10');
  }

  stopAll(0);
  currentSound = position;
  playPause(position);
}

function stopAll(withOut) {
  for (let index = 0; index < sounds.length; index++) {
    if (index != withOut) {
      sounds[index].stop();
    }
  }
}

function showInfo() {
  coverCurrent.style.display = 'block';
  artistName.style.display = 'block';
  songName.style.display = 'block';
}

function playPause(position) {
  showInfo();
  artistName.textContent = playlists[position].name;
  songName.textContent = '¡Feliz Cumpleaños!';
  titleMobile.innerHTML =
    '¡Feliz Cumpleaños!, <span class="text-gray-300 font-semibold text-sm" id="authorMobile">' +
    playlists[position].name +
    '</span>';
  coverCurrent.src = playlists[position].image;
  stopAll(position);
  const dur = moment.unix(sounds[position].duration());
  const formatted = dur.format('mm:ss');
  duration.textContent = formatted;
  let res = sounds[position]?.playing()
    ? sounds[position]?.pause()
    : sounds[position]?.play();
  typeof res === 'number' ? hidePlayButtons() : hideStopButtons();
}

function hideStopButtons() {
  let res = sounds[currentPlayList]?.playing();

  iconStopButtonBarDesktop.style.display = 'none';
  pauseIconBottomBarMobile.style.display = 'none';

  if (!res || currentPlayList == 0) {
    pauseGlobalDesktop.style.display = 'none';
    pauseGlobalMobileIcon.style.display = 'none';

    playGlobalDesktop.style.display = 'block';
    playGlobalMobileIcon.style.display = 'block';
  }

  iconPlayButtonBarDesktop.style.display = 'block';
  playIconBottomBarMobile.style.display = 'block';
}

function hidePlayButtons() {
  let res = sounds[currentPlayList]?.playing();

  iconPlayButtonBarDesktop.style.display = 'none';
  playIconBottomBarMobile.style.display = 'none';

  if (res || currentPlayList == 0) {
    playGlobalDesktop.style.display = 'none';
    playGlobalMobileIcon.style.display = 'none';

    pauseGlobalDesktop.style.display = 'block';
    pauseGlobalMobileIcon.style.display = 'block';
  }

  iconStopButtonBarDesktop.style.display = 'block';
  pauseIconBottomBarMobile.style.display = 'block';
}

inputVolume.addEventListener('change', function () {
  if (inputVolume.value / 100 <= 0.01) {
    soundMuted.style.display = 'block';
    soundActivated.style.display = 'none';
    sounds[currentSound].mute(true);
  } else {
    soundMuted.style.display = 'none';
    soundActivated.style.display = 'block';
    sounds[currentSound].mute(false);
    sounds[currentSound].volume(inputVolume.value / 100);
  }
});

soundActivated.addEventListener('click', function () {
  inputVolume.value = 0;
  soundMuted.style.display = 'block';
  soundActivated.style.display = 'none';
});

soundMuted.addEventListener('click', function () {
  inputVolume.value = 50;
  soundActivated.style.display = 'block';
  soundMuted.style.display = 'none';
});

setInterval(() => {
  sounds[currentSound].volume(inputVolume.value / 100);
  if (inputVolume.value / 100 <= 0.01) {
    sounds[currentSound].mute(true);
  } else {
    sounds[currentSound].mute(false);
  }

  updateProgress(currentSound);
}, 300);

function updateProgress(position) {
  if (sounds[position]?.playing()) {
    const dur = moment.unix(sounds[position].seek());
    const formatted = dur.format('mm:ss');
    timeElapsed.textContent = formatted;
    let seek = sounds[position].seek() || 0;
    let width = ((seek / sounds[position].duration()) * 110 || 0) + '%';
    progress.style.width = width;
    //console.log(width);
  }
}

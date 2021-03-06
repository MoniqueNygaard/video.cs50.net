// Converts (int) seconds => (str) 00h00m00s
export const secondsToYoutubeTime = sec =>
  (sec > 3600 ?
    `${Math.floor(sec / 3600)}h${Math.floor((sec / 60) % 60)}m${Math.floor(sec % 60)}s` :
    `${Math.floor(sec / 60)}m${Math.floor(sec % 60)}s`
  );

// Converts (str) 00h00m00s => (int) seconds
export const youTubeTimeToSeconds = time => {
  const hours = time.match(/\d+h/) ? parseFloat(time.match(/\d+h/)[0]) : 0;
  const mins = parseFloat(time.match(/\d+m/)[0]);
  const secs = parseFloat(time.match(/\d+s/)[0]);
  return (hours * 3600) + (mins * 60) + secs;
};

export const secondsToHHMMSS = seconds => {
  const h = parseInt(seconds / 3600, 10) % 24;
  const m = parseInt(seconds / 60, 10) % 60;
  const s = Math.floor(seconds % 60);
  return h > 0 ?
    `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}` :
    `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
};

// Attempts to load a resource from YouTube domain
export const youTubeIsReachable = () =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onerror = () => reject();
    image.onsuccess = () => resolve();
    image.src = 'https://youtube.com/favicon.ico';
  });

export const youTubeTimeFromUrl = () => {
  const qs = document.location.search.split('+').join(' ');
  const params = {};
  const re = /[?&]?([^=]+)=([^&]*)/g;
  let tokens;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params.t ? youTubeTimeToSeconds(params.t) : 0;
};

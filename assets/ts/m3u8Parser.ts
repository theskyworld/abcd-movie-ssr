// @ts-nocheck
import Hls from "hls.js";

export function playM3u8(videoSrc: string, videoElem: any) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(videoElem);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      videoElem.play();
    });
    document.title = videoSrc;
  }
}

// 播放暂停
export function playPause(videoElem: any) {
  videoElem.paused ? videoElem.play() : videoElem.pause();
}

// 音量+
export function volumeUp(videoElem: any) {
  if (videoElem.volume <= 0.9) videoElem.volume += 0.1;
}

// 音量-
export function volumeDown(videoElem: any) {
  if (videoElem.volume >= 0.1) videoElem.volume -= 0.1;
}

// 前进
export function seekRight(videoElem: any) {
  videoElem.currentTime += 5;
}

// 后退
export function seekLeft(videoElem: any) {
  videoElem.currentTime -= 5;
}

// 全屏
export function vidFullscreen(videoElem: any) {
  if (videoElem.requestFullscreen) {
    videoElem.requestFullscreen();
  } else if (videoElem.mozRequestFullScreen) {
    videoElem.mozRequestFullScreen();
  } else if (videoElem.webkitRequestFullscreen) {
    videoElem.webkitRequestFullscreen();
  }
}

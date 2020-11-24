import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() videoId: string

  title = 'dummyApp-YTIFrameAPI';
  showVideo = true;
  playerWidth = 420;

  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;

  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor(private el: ElementRef, private render: Renderer2) { }

  init() {
    // Return if Player is already created
    if (window['YT']) {
      this.startVideo();
      return;
    }

    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }

  ngOnInit() {
    this.video = this.parseVideoLink()
    this.render.listen('window', 'load', () => {
      const rect = this.el.nativeElement.getBoundingClientRect().width;
      this.playerWidth = Math.round(rect)
    })
    this.init();
  }

  parseVideoLink(): string {
    const searchParam = new URLSearchParams(this.videoId)
    const videoId = searchParam.values().next().value
    return videoId
  }

  toggleVideo() {
    if (this.showVideo)
      this.showVideo = false;
    else {
      this.showVideo = true;
      setTimeout(() => {
        this.init()
      })
    }
  }

  startVideo() {
    this.reframed = false;
    this.player = new window['YT'].Player('player', {
      videoId: this.video,
      height: Math.round(this.playerWidth/16*9),
      width: this.playerWidth,
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1

      },
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': this.onPlayerReady.bind(this),
      }
    });
  }


  onPlayerReady(event) {
    if (this.isRestricted) {
      event.target.mute();
      event.target.playVideo();
    } else {
      event.target.playVideo();
    }
  }


  onPlayerStateChange(event) {

    // switch (event.data) {
    //   case window['YT'].PlayerState.PLAYING:
    //     // if (this.cleanTime() == 0) {
    //     //   console.log('started ' + this.cleanTime());
    //     // } else {
    //     //   console.log('playing ' + this.cleanTime())
    //     // };
    //     break;
    //   case window['YT'].PlayerState.PAUSED:
    //     if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
    //       console.log('paused' + ' @ ' + this.cleanTime());
    //     };
    //     break;
    //   case window['YT'].PlayerState.ENDED:
    //     console.log('ended ');
    //     break;
    // };
  };

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };
}

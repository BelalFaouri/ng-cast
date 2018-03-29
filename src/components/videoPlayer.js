var vp=angular.module('video-player')

vp.component('videoPlayer', {
  bindings:{
    videos: '<'
  },
  controller:function(){
    console.log(this)
  },

  template:  `
  <div class="video-player">
  <div>{{$ctrl.videos.id.videoId}}</div>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" ng-src="{{'https://www.youtube.com/embed/'+$ctrl.videos.id.videoId}}" allowFullScreen>asd</iframe>
    </div>
    <h3>{{$ctrl.videos.snippet.title}}</h3>

    <div class="video-player-details">
      <div>{{$ctrl.videos.snippet.description}}</div>
    </div>
  </div>
`
});

console.log(vp.$ctrl.videos);

angular.module('video-player')
.component('videoList', {
  bindings:{
    videos:'<'
  },
  controller:function(){
  },

  template:`
  <ul class="video-list">
    <video-list-entry ng-repeat='video in $ctrl.videos' video = "video" ></video-list-entry>

  </ul>

`
});

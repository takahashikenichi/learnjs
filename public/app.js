'use strict';

var learnjs = {}; // 名前空間を作成

learnjs.problemView = function() {
  return $('<div class="problem-view">').text('Coming soon!');
}

learnjs.showView = function(hash) {

  // routerを導入する
  var routes = {
    '#problem-1': learnjs.problemView
  };

  var viewFn = routes[hash];
  if (viewFn) { // 想定されたrouterが存在した場合
    $('.view-container').empty().append(viewFn());
  } // ハッシュがルートにマッチしない場合は何もしない
}

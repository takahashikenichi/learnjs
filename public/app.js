'use strict';

var learnjs = {}; // 名前空間を作成

// 問題を作成する
learnjs.problemView = function(problemNumber) {
  var view = $('.templates .problem-view').clone();
  view.find('.title').text('Problem #' + problemNumber + ' Coming soon!');
  return view;
}

learnjs.showView = function(hash) {

  // routerを導入する
  var routes = {
    '#problem': learnjs.problemView
  };
  var hashParts = hash.split('-');

  var viewFn = routes[hashParts[0]];
  if (viewFn) { // 想定されたrouterが存在した場合
    $('.view-container').empty().append(viewFn(hashParts[1]));
  } // ハッシュがルートにマッチしない場合は何もしない
}

learnjs.appOnReady = function() {
  window.onhashchange = function() {
    learnjs.showView(window.location.hash);
  };
  learnjs.showView(window.location.hash);
}

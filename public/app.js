'use strict';
var learnjs = {}; // 名前空間を作成

learnjs.showView = function(hash) {
  // divを追加するハードコードを実施
  var problemView = $('<div class="problem-view">').text('Coming soon!');
  $('.view-container').empty().append(problemView);
}

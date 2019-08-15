'use strict';

var learnjs = {}; // 名前空間を作成

// source[learnjs/3100/public/app.js] {
learnjs.problems = [
  {
    description: "What is truth?",
    code: "function problem() { return __; }"
  },
  {
    description: "Simple Math",
    code: "function problem() { return 42 === 6 * __; }"
  }
];
//}

learnjs.applyObject = function(obj, elem) {
  for (var key in obj) {
    elem.find('[data-name="' + key + '"]').text(obj[key]);
  }
}

learnjs.flashElement = function(elem, content) {
  elem.fadeOut('fast', function() {
    elem.html(content);
    elem.fadeIn();
  });
}

learnjs.buildCorrectFlash = function (problemNum) {
  var correctFlash = learnjs.template('correct-flash');
  var link = correctFlash.find('a');
  if (problemNum < learnjs.problems.length) {
    link.attr('href', '#problem-' + (problemNum + 1));
  } else {
    link.attr('href', '');
    link.text("You're Finished!");
  }
  return correctFlash;
};

learnjs.template = function(name) {
  return $('.templates .' + name).clone();
}

// 問題を作成する
learnjs.problemView = function(data) {
  var problemNumber = parseInt(data, 10);
  var view = $('.templates .problem-view').clone();
  var problemData = learnjs.problems[problemNumber - 1];
  var resultFlash = view.find('.result');

  function checkAnswer() {
    var answer = view.find('.answer').val();
    var test = problemData.code.replace('__', answer) + '; problem();';
    return eval(test); // 有害
  }

  function checkAnswerClick() {
    if (checkAnswer()) {
      /*
      var correctFlash = learnjs.template('correct-flash');
      console.log(correctFlash);
      correctFlash.find('a').attr('href', '#problem-' + (problemNumber + 1 ));
      learnjs.flashElement(resultFlash, correctFlash);
      */
      
      learnjs.flashElement(resultFlash, learnjs.buildCorrectFlash(problemNumber));
    } else {
      learnjs.flashElement(resultFlash, 'Incorrect!');
    }
    return false;
  }
  
  view.find('.check-btn').click(checkAnswerClick);
  view.find('.title').text('Problem #' + problemNumber);
  learnjs.applyObject(problemData, view);
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

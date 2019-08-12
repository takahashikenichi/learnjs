describe('LearnJS', function() {
  it('can show a problem view', function() {
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1); // problem-viewが表示されることを確認する
  });
  it('shows the landing page view when there is no hash', function() {
    learnjs.showView(''); // ランディングページを表示する
    expect($('.view-container .landing-view').length).toEqual(1); // landing-viewが表示されることを確認する
  });
});

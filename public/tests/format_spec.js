function formatProblems() {
  var formattedProblems = [];
  learnjs.problems.forEach(function(problem) {
    formattedProblems.push({
      code: learnjs.formatCode(problem.code),
      name: problem.name
    });
  });
  return formattedProblems;
}

function betterFormatProblems() {
  return learnjs.problems.map(learnjs.formatCode);
};
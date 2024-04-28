function changede(title, question, info) {
  title.classList.toggle('titleclick');
  question.classList.toggle('questionclick');
  info.classList.toggle('infoclick');
}

let title1 = document.getElementById('title1');
let question1 = document.getElementById('question1');
let info1 = document.getElementById('info1');
title1.addEventListener('click', function () {
  changede(title1, question1, info1);
});
img1.addEventListener('click', function () {
  changede(title1, question1, info1);
});

let title2 = document.getElementById('title2');
let question2 = document.getElementById('question2');
let info2 = document.getElementById('info2');
title2.addEventListener('click', function () {
  changede(title2, question2, info2);
});
img2.addEventListener('click', function () {
  changede(title2, question2, info2);
});

let title3 = document.getElementById('title3');
let question3 = document.getElementById('question3');
let info3 = document.getElementById('info3');
title3.addEventListener('click', function () {
  changede(title3, question3, info3);
});
img3.addEventListener('click', function () {
  changede(title3, question3, info3);
});

let title4 = document.getElementById('title4');
let question4 = document.getElementById('question4');
let info4 = document.getElementById('info4');
title4.addEventListener('click', function () {
  changede(title4, question4, info4);
});
img4.addEventListener('click', function () {
  changede(title4, question4, info4);
});

let title5 = document.getElementById('title5');
let question5 = document.getElementById('question5');
let info5 = document.getElementById('info5');
title5.addEventListener('click', function () {
  changede(title5, question5, info5);
});
img4.addEventListener('click', function () {
  changede(title5, question5, info5);
});

// Get the modal
//top
var modal = document.getElementById('modal-right-top');

var span = document.getElementsByClassName('close')[0];

function image() {
  modal.style.display = 'block';
}

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

//center
var modal2 = document.getElementById('modal-right-center');

var span2 = document.getElementsByClassName('close')[1];

function image2() {
  modal2.style.display = 'block';
}

span2.onclick = function () {
  modal2.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
};

//bottom
var modal3 = document.getElementById('modal-right-bottom');

var span3 = document.getElementsByClassName('close')[2];

function image3() {
  modal3.style.display = 'block';
}

span3.onclick = function () {
  modal3.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = 'none';
  }
};

var modal4 = document.getElementById('modal-left-first');

var btn1 = document.getElementById('first-button');

var span4 = document.getElementsByClassName('close')[3];

btn1.onclick = function () {
  modal4.style.display = 'block';
};

span4.onclick = function () {
  modal4.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = 'none';
  }
};

var modal5 = document.getElementById('modal-left-second');

var btn2 = document.getElementById('second-button');

var span5 = document.getElementsByClassName('close')[4];

btn2.onclick = function () {
  modal5.style.display = 'block';
};

span5.onclick = function () {
  modal5.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal5) {
    modal5.style.display = 'none';
  }
};

var modal6 = document.getElementById('modal-left-third');

var btn3 = document.getElementById('third-button');

var span6 = document.getElementsByClassName('close')[5];

btn3.onclick = function () {
  modal6.style.display = 'block';
};

span6.onclick = function () {
  modal6.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal6) {
    modal6.style.display = 'none';
  }
};

var modal7 = document.getElementById('modal-left-fourth');

var btn4 = document.getElementById('fourth-button');

var span7 = document.getElementsByClassName('close')[6];

btn4.onclick = function () {
  modal7.style.display = 'block';
};

span7.onclick = function () {
  modal7.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal7) {
    modal7.style.display = 'none';
  }
};

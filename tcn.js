
// search ----------------------------------------
const hideLists = document.getElementById('search_fb_back')
hideLists.onclick = function(){
    mysearch.style.display = 'none'
};
var search = document.getElementById("search_fb_item");
var mysearch = document.getElementById("search_fb_lists");
var isBoxVisiblesearch = false;

search.addEventListener("click", function(event) {
  mysearch.style.display = "block";
  isBoxVisiblesearch = true;
});

document.addEventListener("click", function(event) {
  var isClickInsideBoxsearch = mysearch.contains(event.target);
  var isClickInsideDivsearch = search.contains(event.target);
  if (!isClickInsideBoxsearch && !isClickInsideDivsearch && isBoxVisiblesearch) {
    mysearch.style.display = "none";
    isBoxVisiblesearch = false;
  }
});

mysearch.addEventListener("click", function(event) {
  event.stopPropagation();
});

// menu-----------------------------
var menu = document.getElementById("menu_menu_item");
var mymenu = document.getElementById("menu_lists");
var isBoxmenuVisible = false;

menu.addEventListener("click", function(event) {
  mymenu.style.display = "block";
  isBoxmenuVisible = true;
});

document.addEventListener("click", function(event) {
  var isClickInsideBoxmenu = mymenu.contains(event.target);
  var isClickInsideDivmenu = menu.contains(event.target);
  if (!isClickInsideBoxmenu && !isClickInsideDivmenu && isBoxmenuVisible) {
    mymenu.style.display = "none";
    isBoxmenuVisible = false;
  }
});

mymenu.addEventListener("click", function(event) {
  event.stopPropagation();
});
// messenger --------------------------
var mes = document.getElementById("menu_messenger_item");
var mymes = document.getElementById("menu_messenger_lists");
var isBoxVisiblemes = false;

mes.addEventListener("click", function(event) {
  mymes.style.display = "block";
  isBoxVisiblemes = true;
});

document.addEventListener("click", function(event) {
  var isClickInsideBoxmes = mymes.contains(event.target);
  var isClickInsideDivmes = mes.contains(event.target);
  if (!isClickInsideBoxmes && !isClickInsideDivmes && isBoxVisiblemes) {
    mymes.style.display = "none";
    isBoxVisiblemes = false;
  }
});

mymes.addEventListener("click", function(event) {
  event.stopPropagation();
});

// thong báo ---------------------------
var tb = document.getElementById("menu_notification_item");
var mytb = document.getElementById("menu_notification_lists");
var isBoxVisibletb = false;

tb.addEventListener("click", function(event) {
  mytb.style.display = "block";
  isBoxVisibletb = true;
});

document.addEventListener("click", function(event) {
  var isClickInsideBoxtb = mytb.contains(event.target);
  var isClickInsideDivtb = tb.contains(event.target);
  if (!isClickInsideBoxtb && !isClickInsideDivtb && isBoxVisibletb) {
    mytb.style.display = "none";
    isBoxVisibletb = false;
  }
});

mytb.addEventListener("click", function(event) {
  event.stopPropagation();
});


// personal ----------------------------
var myDiv = document.getElementById("menu_personal_item");
var myBox = document.getElementById("menu_personal_box");
var isBoxVisible = false;

myDiv.addEventListener("click", function(event) {
  myBox.style.display = "block";
  isBoxVisible = true;
});

document.addEventListener("click", function(event) {
  var isClickInsideBox = myBox.contains(event.target);
  var isClickInsideDiv = myDiv.contains(event.target);
  if (!isClickInsideBox && !isClickInsideDiv && isBoxVisible) {
    myBox.style.display = "none";
    isBoxVisible = false;
  }
});

myBox.addEventListener("click", function(event) {
  event.stopPropagation();
});

// đièu hướng -------------------------------
function tcn(){
  location.assign('tcn.html');
}

function home(){
    location.assign('index.html');
}

function watch(){
  location.assign('watch.html');
}

function marketplace(){
  location.assign('marketplace.html');
}

function nhom(){
  location.assign('nhom.html');
}

function game(){
  location.assign('game.html');
}
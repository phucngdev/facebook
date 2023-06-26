
const showBodyleftList_1 = document.getElementById('body_fb_left_list_1_item_flex')
const bodyList_1 = document.getElementById('body_fb_left_list_1_none')
const remote_show_list_1 = document.getElementById('body_fb_left_list_1_item_remove')

const showBodyleftList_2 = document.getElementById('body_fb_left_list_2_item_flex')
const bodyList_2 = document.getElementById('body_fb_left_list_2_none')
const remote_show_list_2 = document.getElementById('body_fb_left_list_2_item_remove')

const showpersonalLists = document.getElementById('menu_personal_item')
const personalLists = document.getElementById('menu_personal_box')

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









// mes.onclick = function(){
//   mymes.style.display = 'block'

// };
// document.addEventListener("click", function(event) {
//   if (!mes.contains(event.target)) {
//     mymes.style.display = "none";
//   }
// });

// mymes.addEventListener("click", function(event) {
//   event.stopPropagation();
// });

// mes eiu ------------------------------

const box_mes_eiu = document.getElementById('mes_eiu')
const open_mes_eiu = document.getElementById('menu_messenger_chat')
const close_mes_eiu = document.getElementById('mes_eiu_head_2_icon')


open_mes_eiu.onclick = function(){
  box_mes_eiu.style.display = 'block'
};

close_mes_eiu.onclick = function(){
  box_mes_eiu.style.display = 'none'
};



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


// body_list_1_none -------------------
showBodyleftList_1.onclick = function(){
  bodyList_1.style.display = 'block'
  showBodyleftList_1.style.display = 'none'
};

remote_show_list_1.onclick = function(){
  bodyList_1.style.display = 'none'
  showBodyleftList_1.style.display = 'flex'
};

// body_list_2_none --------------------
showBodyleftList_2.onclick = function(){
  bodyList_2.style.display = 'block'
  showBodyleftList_2.style.display = 'none'
};

remote_show_list_2.onclick = function(){
  bodyList_2.style.display = 'none'
  showBodyleftList_2.style.display = 'flex'
};

// tin - reels -------------

var header = document.getElementById("story_nav_list");
var btns = header.getElementsByClassName("story_nav");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

const str_list = document.getElementById('story_list')
const reels_list = document.getElementById('reels_list')
const tin = document.getElementById('tin')
const reels = document.getElementById('reels')

tin.onclick = function(){
    str_list.style.display = 'block'
    reels_list.style.display = 'none'
};
reels.onclick = function(){
  str_list.style.display = 'none'
  reels_list.style.display = 'block'
};

// nav fb --------------

var click_nav = document.getElementById("navbar_fb");
var nav_bar = click_nav.getElementsByClassName("navbar_item");
for (var i = 0; i < nav_bar.length; i++) {
  nav_bar[i].addEventListener("click", function() {
  var nav_bar_x = document.getElementsByClassName("active_nav");
  nav_bar_x[0].className = nav_bar_x[0].className.replace(" active_nav", "");
  this.className += " active_nav";
  });
}

// điều hướng ------------------------------
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


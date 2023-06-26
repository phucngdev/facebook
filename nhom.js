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

// dieu hương ----------------------------------
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

//
// thanh công cụ trái
var listItems = document.querySelectorAll(".list_left_body_item");
var list_avt = document.querySelectorAll(".list_left_body_item_avt");

for (var i = 0; i < listItems.length; i++) {
  listItems[0].style.backgroundColor = "#3a3b3c";

  listItems[i].addEventListener("click", function() {
    // Xoá màu nền của tất cả các phần tử trong danh sách
    for (var j = 0; j < listItems.length; j++) {
      listItems[j].style.backgroundColor = "";
      list_avt[j].style.backgroundColor = "";

    }
    // Thay đổi màu nền của phần tử được click
    this.style.backgroundColor = "#3a3b3c";
  });

}
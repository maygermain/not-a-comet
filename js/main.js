/*variables*/
/*all filter variables*/
var all = document.querySelectorAll('dropdown__selection');

/*object type filter variables*/
var nebula = document.getElementsByClassName('nebula');
var openCluster = document.getElementsByClassName('open-cluster');
var globularCluster = document.getElementsByClassName('globular-cluster');
var starCloud = document.getElementsByClassName('star-cloud');
var doubleStar = document.getElementsByClassName('double-star');
var galaxy = document.getElementsByClassName('galaxy');


/*season filter variables*/
var winter = document.getElementsByClassName('winter');
var spring = document.getElementsByClassName('spring');
var summer = document.getElementsByClassName('summer');
var autumn = document.getElementsByClassName('autumn');

/*visibility filter variables*/
var eye = document.getElementsByClassName('eye');
var binoculars = document.getElementsByClassName('binoculars');
var telescope = document.getElementsByClassName('telescope');

function filterItems(type) {
  //fade out all first 
  for (var x = 0; x < all.length; x++) {
    all[x].getElementsByClassName.opacity = "0";
  }

  //set a timer matched transition in css
  setTimeout(function () {
    //step one: set all to display none
    for (var x = 0; x < all.length; x++) {
      all[x].style.display = "none";
    }

    //step two: set all with filter type to display viisble 
    for (var x = 0; x < type.length; x++) {
      type[x].style.opacity = "1";
      type[x].style.display = "block";
    }
  }, 500);

  //style dropdown filter options
  for (var x = 0; x < all.length; x++) {
    all[x].style.background = "";
  }

  //event is deprecated, what to use instead??
  document.getElementById(event.currentTarget.id).style.background = "#3F4A66";
}

//dropdown filters
/*document.getElementById('filter-all').onclick = function(){
  filterItems(all); 
} Need to setup a "reset" button*/

//object type filters
document.getElementById('nebula').onclick = function () {
  filterItems(nebula);
}

document.getElementById('open-cluster').onclick = function () {
  filterItems(openCluster);
}

document.getElementById('globular-cluster').onclick = function () {
  filterItems(globularCluster);
}

document.getElementById('star-cloud').onclick = function () {
  filterItems(starCloud);
}

document.getElementById('double-star').onclick = function () {
  filterItems(doubleStar);
}

document.getElementById('galaxy').onclick = function () {
  filterItems(galaxy);
}

//season filters
document.getElementById('winter').onclick = function () {
  filterItems(winter);
}

document.getElementById('spring').onclick = function () {
  filterItems(spring);
}

document.getElementById('summer').onclick = function () {
  filterItems(summer);
}

document.getElementById('autumn').onclick = function () {
  filterItems(autumn);
}

//visibility filters
document.getElementById('eye').onclick = function () {
  filterItems(eye);
}

document.getElementById('binoculars').onclick = function () {
  filterItems(binoculars);
}

document.getElementById('telescope').onclick = function () {
  filterItems(telescope);
}
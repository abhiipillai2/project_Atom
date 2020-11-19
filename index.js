//mob-nav-bar -code

var mobNav = document.getElementById("mobNav");
var list = document.getElementById("mob-menu");
var openMenu = false;

mobNav.addEventListener('click',navActive);

function navActive(mobNav){
	if (openMenu) {
		list.style.display = 'none';
		openMenu = false;
	}else {
		list.style.display = 'block';
		openMenu = true;
	}
};
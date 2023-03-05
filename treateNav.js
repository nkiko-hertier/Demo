function treateNav() {
	if (innerWidth<=429) {
		var nav=getClass("nav-tabs")[0];
		if (nav.classList.value.includes("mobile"))
			nav.classList.remove('mobile');
		else if (!nav.classList.value.includes("mobile"))
				nav.classList.add('mobile');
	}
}
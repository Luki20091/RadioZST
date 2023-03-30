var locations = document.querySelectorAll('.button');

locations.forEach(function (loc, index) {
	loc.addEventListener('click', function (e) {
		if (e.target.id == "") {
			if (e.target.parentElement.id == "index") {
				location.href = "";
			} else {
				location.href = e.target.parentElement.id + ".html"
			};
		} else if (e.target.id == "index") {
			location.href = "";
		} else {
			location.href = e.target.id + ".html"
		};
	});
});



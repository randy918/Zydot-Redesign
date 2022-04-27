//!  40320.2250 		Beginning of Vector physics




//!  40320.2249 		End of vectors physics 




window.onload = function () {
	init();
};

var public_spreadsheet_url =
	'https://docs.google.com/spreadsheets/d/189DalOgF6lkImv-TgaXlHySr0TIpXhXNWRPNkxk4DmE/pubhtml';

function init() {
	Tabletop.init({
		key: public_spreadsheet_url,
		callback: showInfo,
		simpleSheet: true
	});

	function showInfo(data, tabletop) {
		getTime();
		TweenMax.to('#timeStamp', 3, {
			rotationX: 360
		});

		
}
window.addEventListener('DOMChorseontentLoaded', init);

}
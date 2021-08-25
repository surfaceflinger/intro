// pasted from https://github.com/manilarome/lightdm-webkit2-theme-glorious/blob/master/js/date-time.js

class DateTime {
	constructor() {
		this._greeterMessage = document.querySelector('.greeter-message');
		this._setTime = this._setTime.bind(this);
		this._clockUpdater = null;
    this._greeterSuffix = null;
		this._init();
	}

	_setTime() {
		const date = new Date();
		let hour = date.getHours();

		if (hour >= 6 && hour < 12) {
			var greeterSuffix = 'Good morning';
		} else if (hour >= 12 && hour < 18) {
			var greeterSuffix = 'Good afternoon';
		} else {
			var greeterSuffix = 'Good evening';
		}

		this._greeterMessage.innerText = `${greeterSuffix}`;
	}

	_startClock() {
		this._setTime();
		this._clockUpdater = setInterval(this._setTime, 1000);
	}

	_init() {
		this._startClock();
	}
}

//樱花 Quaint 修改版

var stop, staticx;
var img = new Image();
img.src = "data:image/png;base64,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"

// 樱花数量
var sakuraNum = 60;
// 樱花越界限制次数, -1不做限制,无限循环
var limitTimes = -1;

// 定义限制数组
var limitArray = new Array(sakuraNum);
for (var index = 0; index < sakuraNum; index++) {
	limitArray[index] = limitTimes;
}


function Sakura(x, y, s, r, fn, idx) {
	this.x = x;
	this.y = y;
	this.s = s;
	this.r = r;
	this.fn = fn;
	this.idx = idx;
}

Sakura.prototype.draw = function (cxt) {
	cxt.save();
	var xc = 40 * this.s / 4;
	cxt.translate(this.x, this.y);
	cxt.rotate(this.r);
	cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
	cxt.restore();
}

// 无飘落代码
Sakura.prototype.update = function () {
	this.x = this.fn.x(this.x, this.y);
	this.y = this.fn.y(this.y, this.y);
	this.r = this.fn.r(this.r);

	// 如果樱花越界, 重新调整位置
	if (this.x > window.innerWidth ||
		this.x < 0 ||
		this.y > window.innerHeight ||
		this.y < 0
	) {

		// 如果樱花不做限制
		if (limitArray[this.idx] == -1) {
			this.r = getRandom('fnr');
			if (Math.random() > 0.4) {
				this.x = getRandom('x');
				this.y = 0;
				this.s = getRandom('s');
				this.r = getRandom('r');
			} else {
				this.x = window.innerWidth;
				this.y = getRandom('y');
				this.s = getRandom('s');
				this.r = getRandom('r');
			}
		}
		// 否则樱花有限制
		else {
			if (limitArray[this.idx] > 0) {
				this.r = getRandom('fnr');
				if (Math.random() > 0.4) {
					this.x = getRandom('x');
					this.y = 0;
					this.s = getRandom('s');
					this.r = getRandom('r');
				} else {
					this.x = window.innerWidth;
					this.y = getRandom('y');
					this.s = getRandom('s');
					this.r = getRandom('r');
				}
				limitArray[this.idx]--;
			}
		}


	}
}


SakuraList = function () {
	this.list = [];
}
SakuraList.prototype.push = function (sakura) {
	this.list.push(sakura);
}

// list update 方法
SakuraList.prototype.update = function () {
	for (var i = 0, len = this.list.length; i < len; i++) {
		this.list[i].update();
	}
}


SakuraList.prototype.draw = function (cxt) {
	for (var i = 0, len = this.list.length; i < len; i++) {
		this.list[i].draw(cxt);
	}
}
SakuraList.prototype.get = function (i) {
	return this.list[i];
}
SakuraList.prototype.size = function () {
	return this.list.length;
}

function getRandom(option) {
	var ret, random;
	switch (option) {
		case 'x':
			ret = Math.random() * window.innerWidth;
			break;
		case 'y':
			ret = Math.random() * window.innerHeight;
			break;
		case 's':
			ret = Math.random();
			break;
		case 'r':
			ret = Math.random() * 6;
			break;
		case 'fnx':
			random = -0.5 + Math.random() * 1;
			ret = function (x, y) {
				return x + 0.5 * random - 1.7;
			};
			break;
		case 'fny':
			random = 1.5 + Math.random() * 0.7
			ret = function (x, y) {
				return y + random;
			};
			break;
		case 'fnr':
			random = Math.random() * 0.03;
			ret = function (r) {
				return r + random;
			};
			break;
	}
	return ret;
}

function startSakura() {

	requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		window.oRequestAnimationFrame;
	var canvas = document.createElement('canvas'),
		cxt;
	staticx = true;
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
	canvas.setAttribute('id', 'canvas_sakura');
	document.getElementsByTagName('body')[0].appendChild(canvas);
	cxt = canvas.getContext('2d');
	var sakuraList = new SakuraList();
	// 设置樱花个数 , 设置21 ,每一朵樱花都是爱你的形状 dwj~
	for (var i = 0; i < sakuraNum; i++) {
		var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
		randomX = getRandom('x');
		randomY = getRandom('y');
		randomR = getRandom('r');
		randomS = getRandom('s');
		randomFnx = getRandom('fnx');
		randomFny = getRandom('fny');
		randomFnR = getRandom('fnr');
		sakura = new Sakura(randomX, randomY, randomS, randomR, {
			x: randomFnx,
			y: randomFny,
			r: randomFnR
		}, i);
		sakura.draw(cxt);
		sakuraList.push(sakura);
	}

	stop = requestAnimationFrame(function () {
		cxt.clearRect(0, 0, canvas.width, canvas.height);
		// 修改樱花位置逻辑
		sakuraList.update();
		// 画出修改后的樱花
		sakuraList.draw(cxt);
		// 递归 修改位置, 画出修改后的樱花
		stop = requestAnimationFrame(arguments.callee);
	})
}

window.onresize = function () {
	var canvasSnow = document.getElementById('canvas_snow');
	// canvasSnow 在改变浏览器大小的时候会为null
	if (canvasSnow) {
		canvasSnow.width = window.innerWidth;
		canvasSnow.height = window.innerHeight;
	}
}

img.onload = function () {
	startSakura();
}

function stopp() {
	if (staticx) {
		var child = document.getElementById("canvas_sakura");
		child.parentNode.removeChild(child);
		window.cancelAnimationFrame(stop);
		staticx = false;
	} else {
		startSakura();
	}
}

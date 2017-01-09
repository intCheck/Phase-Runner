const m = require('mithril');
const footer = require('../components/footer');
const overlay = require('../components/overlay');

const MainView = module.exports;

MainView.controller = function() {
	var ctrl = this;
};

MainView.view = function(ctrl, options) {

	var view = m('div', [
		overlay,
		footer
		])

	 return view;
}
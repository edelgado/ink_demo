#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const {render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ ink_demo
	Options
		--speed  Test simulated speed, 100ms by default
	Examples
	  $ ink_demo --speed=50
`);

render(React.createElement(ui, cli.flags));

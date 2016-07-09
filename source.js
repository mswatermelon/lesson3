(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _recursion = require('./recursion');

//let consoleRec = require('./recursion').consoleRec;

(0, _recursion.consoleRec)(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);

},{"./recursion":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.consoleRec = consoleRec;
function consoleRec(arr, index) {
    if (arr[index]) {
        console.log(arr[index++]);
        consoleRec(arr, index);
    }
}

// module.exports.consoleRec = consoleRec;
//consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);

},{}]},{},[1]);

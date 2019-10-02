// import * as tf from '@tensorflow/tfjs';
// const tf = require('@tensorflow/tfjs');

console.log(tf);
console.log('Hello TensorFlow');
// document.addEventListener('DOMContentLoaded', run);


class TTTBoard {
    constructor() {
        this.state = "---------0";
    }

    getState() {
        return this.state;
    }
}

let tttBoard = new TTTBoard();
window.tttBoard = tttBoard;



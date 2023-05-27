import InputHandler from "./inputHandler.js";
import { GameObject } from './gameObject.js';

console.log("haha");
const mainCanvas = document.getElementById("mainCanvas");
/** @type {CanvasRenderingContext2D} */
const context = mainCanvas.getContext("2d");

let gameObjects = [];

function init()
{
  console.log("init" + window.innerWidth + "/ "+ window.innerHeight);
  mainCanvas.width = document.body.clientWidth;
  mainCanvas.height = document.body.clientHeight;
  InputHandler.init();
  update();
}

function update() {
  render();
  window.requestAnimationFrame(update);
}

function render()
{
  context.clearRect(0,0, mainCanvas.width, mainCanvas.height);
}

function instantiate()
{
  let gameObject = new GameObject();
  gameObjects.push(gameObject);
  return gameObject;
}

init();

"use strict";

var clipper = document.querySelector('#clipper');
var phone = document.querySelector('#phone');
var notebook = document.querySelector('#notebook');

var clipper_click = document.querySelector('#clipper_click');
var phone_click = document.querySelector('#phone_click');
var notebook_click = document.querySelector('#notebook_click');

var clipper_exit = document.querySelector('#clipper_exit');
var phone_exit = document.querySelector('#phone_exit');
var notebook_exit = document.querySelector('#notebook_exit');



clipper.addEventListener('click', function () {
    clipper_click.style.display='block';
})
clipper_exit.addEventListener('click', function (){
    clipper_click.style.display = 'none';
})

phone.addEventListener('click', function () {
    phone_click.style.display='block';
})
phone_exit.addEventListener('click', function (){
    phone_click.style.display = 'none';
})

notebook.addEventListener('click', function () {
    notebook_click.style.display='block';
})
notebook_exit.addEventListener('click', function (){
    notebook_click.style.display = 'none';
})

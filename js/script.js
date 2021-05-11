// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Area-of-a-Trapezoid

"use strict"

function enterClicked() {
  // This function get Length and Width and height and calculate and show it back

  //input
  const abase = parseInt(document.getElementById("abase").value)
  const bbase = parseInt(document.getElementById("bbase").value)
  const height = parseInt(document.getElementById("height").value)
  // process
  const area = [(abase + bbase) / 2] * height
  
  //output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm².'
}
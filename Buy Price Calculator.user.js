// ==UserScript==
// @name         Buy Price Calculator
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Zano
// @match        https://www.futbin.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=futbin.com
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
var $ = window.jQuery;

$(document).ready(function() {
    let div2 = document.createElement("div")
    div2.className = "calc-results-row"
    let divb2 = document.createElement("div")
    divb2.innerText = "Profit:"
    div2.append(divb2)
    let input_container = document.createElement("div")
    let diva2 = document.createElement("input")
    diva2.style = "text-align:right;"
    diva2.type = "text"
    diva2.className = "diva2_input"
    diva2.value = 1400
    input_container.append(diva2)
    input_container.className = "input_container"
    div2.append(input_container)
    $(".calc-results")[0].append(div2)

    let div = document.createElement("div")
    div.className = "calc-results-row"
    let divb = document.createElement("div")
    divb.innerText = "Snipe Price:"
    let diva = document.createElement("div")
    div.append(divb);
    diva.style = "text-align:right;"
    div.append(diva);
    $(".calc-results")[0].append(div);

    var lupo
    var profit

    window.calcBuyPrice = function(){
        var x = $(".tax-total")[0].innerText
        var newstring = x.replace(',', '')
        lupo = parseInt(newstring)
        //console.log(lupo)
        var profit = $(".diva2_input")[0].value
        //console.log(profit)
        if(profit < 100){profit = 0}

        if(lupo > profit*2){
            lupo = lupo - profit;
            //console.log("amogus")
        }else{
            lupo = 0
            //console.log("zero")
        }
        diva.innerText = lupo
    }

    $(".form-group")[0].children[0].addEventListener("click", function() {
        console.log("amogues")
        lupo = ""
        diva.innerText = lupo
        $(".diva2_input")[0].value = 0
    })
    $(".diva2_input")[0].setAttribute("oninput", "calcBuyPrice();");
    $(".tax-price")[0].attributes.oninput.value = $(".tax-price")[0].attributes.oninput.value+";calcBuyPrice();"
})

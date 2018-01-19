var value = "0";
var longestLength = 40;
var value2 = null;
var operator = '';
var ansGiven = false;
$(document).ready(function(){
    $('#onebtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "1";
            updateInput();
        }
        else{
            value +=  "1";
            updateInput();
        }
        $(this).blur();
    });
    $('#twobtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "2";
            updateInput();
        }
        else{
            value +=  "2";
            updateInput();
        }
        $(this).blur();
    });
    $('#threebtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "3";
            updateInput();
        }
        else{
            value +=  "3";
            updateInput();
        }
        $(this).blur();
    });
    $('#fourbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "4";
            updateInput();
        }
        else{
            value +=  "4";
            updateInput();
        }
        $(this).blur();
    });
    $('#fivebtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "5";
            updateInput();
        }
        else{
            value +=  "5";
            updateInput();
        }
        $(this).blur();
    });
    $('#sixbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "6";
            updateInput();
        }
        else{
            value +=  "6";
            updateInput();
        }
        $(this).blur();
    });
    $('#sevenbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "7";
            updateInput();
        }
        else{
            value +=  "7";
            updateInput();
        }
        $(this).blur();
    });
    $('#eightbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "8";
            updateInput();
        }
        else{
            value +=  "8";
            updateInput();
        }
        $(this).blur();
    });
    $('#ninebtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            value = "9";
            updateInput();
        }
        else{
            value +=  "9";
            updateInput();
        }
        $(this).blur();
    });
    $('#zerobtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value === "0"){
            //value = "0";
            updateInput();
        }
        else{
            value +=  "0";
            updateInput();
        }

        $(this).blur();
    });
    $('#decimalbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(!value.includes('.')){
            value += ".";
        }
        updateInput();
        $(this).blur();
    });
    $('#plusminusbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = null;
            operator = '';
            ansGiven = false;
        }
        if(value[0] === "-"){
            value = value.substr(1);
        }
        else{
            value = "-" + value;
        }
        updateInput();
        $(this).blur();
    });
    $('#plusbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = parseFloat($('.calc-input').html());
            operator = '';
            ansGiven = false;
        }
        applyToVal2();
        operator = '+';
        if(value2 === null){
            value2 = parseFloat(value);
        }
        value = "0";
        updateInput();
        $(this).blur();
    });
    $('#minusbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = parseFloat($('.calc-input').html());
            operator = '';
            ansGiven = false;
        }
        applyToVal2();
        operator = '-';
        if(value2 === null){
            value2 = parseFloat(value);
        }
        value = "0";
        updateInput();
        $(this).blur();
    });
    $('#multbtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = parseFloat($('.calc-input').html());
            operator = '';
            ansGiven = false;
        }
        applyToVal2();
        operator = '×';
        if(value2 === null){
            value2 = parseFloat(value);
        }
        value = "0";
        updateInput();
        $(this).blur();
    });
    $('#dividebtn').click(function(){
        if(ansGiven){
            value = "";
            value2 = parseFloat($('.calc-input').html());
            operator = '';
            ansGiven = false;
        }
        applyToVal2();
        operator = '÷';
        if(value2 === null){
            value2 = parseFloat(value);
        }
        value = "0";
        updateInput();
        $(this).blur();
    });
    $('.equalbtn').click(function(){
        var ans = equals();
        $('.calc-above').html(value2 + " " + operator + " " + value + " = " + ans.toString());
        $('.calc-input').html(ans.toString());
        ansGiven = true;
        $(this).blur();
    });
    $('#delbtn').click(function(){
        if(value.length > 1){
            value = value.substr(0, value.length - 1);
        }
        else{
            value = "0";
        }
        updateInput();
        $(this).blur();
    });

    $('#cebtn').click(function(){
        value = "0";
        updateInput();
    });
    $('#cbtn').click(function(){
        value = "0";
        value2 = null;
        operator = '';
        ansGiven = false;
        updateInput();
    });


});

function applyToVal2() {
    if(value2 != null){
        switch(operator){
            case '+':
                value2 += parseFloat(value);
                break;
            case '-':
                value2 -= parseFloat(value);
                break;
            case '×':
                value2 *= parseFloat(value);
                break;
            case '÷':
                value2 /= parseFloat(value);
                break;
        }
    }
}

function equals(){
    var _value2 = value2;
    applyToVal2();
    var ans = value2;
    value2 = _value2;
    return ans;
}

function updateInput(){


    if(value.length <= longestLength - 1){
        $('.calc-input').html(value);
        if(value2 === null){
            $('.calc-above').html(value + " " + operator);
        }
        else{
            $('.calc-above').html(value2 + " " + operator + " " + value);
        }
    }
    else{
        if(value[0] != "-"){
            value = value.substr(0, value.length - 1);
        }
        else {
            if(value.length <= longestLength){
                $('.calc-input').html(value);
            }
            else{
                value = value.substr(0, value.length - 1);
            }
        }

    }
}

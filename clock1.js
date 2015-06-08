var timeouts= {}
var convertTimeframe = function(amount, unit) {

  switch (unit) {
    case "hour":
    case "hours":
      return Math.round((amount / 23) * 255)
    case "minute":
    case "minutes":
    case "second":
    case "seconds":
      return Math.round((amount / 59) * 255)
    default:
      return 0;
  }
}

$(document).on("ready", function(){
    
    var newtime = function(){
  var currentTime = moment()
  $(".clock").text(currentTime.format("hh:mm:ss"))
  
  var seconds = currentTime.seconds()
  var bluecolor = convertTimeframe(seconds, "seconds")
  
  var minutes = currentTime.minutes()
  var greencolor = convertTimeframe(minutes, "minutes")
  
  var hours = currentTime.hours()
  var redcolor = convertTimeframe(hours, "hours")   
  
  $(".clock").text(currentTime)
  }

  timeouts.clock = setInterval(updateTime, 1000);


  var RGBToHex = function(r,g,b){
 var bin = r << 16 | g << 8 | b;
 return (function(h){
     return new Array(7-h.length).join("0")+h
 })
 (bin.toString(16).toUpperCase())
}

var currentColor = function(){
  var r = convertTimeframe(moment().format('hh'), "hours")
  var g = convertTimeframe(moment().format('mm'), "minutes")
  var b = convertTimeframe(moment().format('ss'), "seconds")

  $(".container").css("background-color", "rgb(" + redcolor + "," + greencolor + "," + bluecolor+ ")")
   $("#hextext").text(RGBToHex)(r).substring(0,2) + RGBToHex(g).substring(0,2) + RGBToHex(b).substring(0,2))
}

timeouts.container = setInterval(currentColor, 1000);

timeouts.hextext = setInterval(currentColor, 1000);


  var moments = (moment().format('ss'), "seconds")
  var bordermovement = function(){
    var border = css("border-bottom").moments
  }

  $(".clock").on("click", function (){
      $(".clock").slideToggle("hidden")
    $(".hextext").slideToggle("hidden")
  })
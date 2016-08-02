var Flint = require('node-flint');
var webhook = require('node-flint/webhook');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// flint options
var config = {
  webhookUrl: 'https://steva-acab9759.c9users.io/flint',
  token: 'YzFkNjc5NGEtYjhiNC00YzY0LWJkMjktNzdkOTE5OGI1NGJmNDNjZmVmODEtNDg2',
  port: 8080,
  removeWebhooksOnStart: false,
  maxConcurrent: 5,
  minTime: 50
};

// init flint
var flint = new Flint(config);
flint.start();

// say hello
flint.hears('/hello', function(bot, trigger) {
  bot.say('Hello %s!', trigger.personDisplayName);
});

flint.hears('/file', function(bot, trigger) {
  bot.say('Hello %s!', trigger.personDisplayName);
});


// Items to ask
var hungryfella = "What are you in the mode for dinner?  Here is the list of foods choices for tongiht, please use the /orderfood command and select either Italien, American or mexican and the number of people eating. (Example /orderfood mexican 4) ";
var tempsetting = "What Temperature do you want the Office to be at? Please respond with /settemp tempertature (Choices are 68,70,72):";
var carservicenot = "Please let use know where you are going, we will only pick you up from the office. (Example /ordercarservice Stamford)";
var finalsumbit = "By typing /finalsubmit NAME OF PROJECT you agree with all requests tonight and will be held responsible for any cost incurred which do not fall within company policy! (Example /finalsubmit Google)";
var costoffood = 0;
var foodtime = "";
var setfood = "";
var settemp = 0;
var settempcost = 0;
var totalcosts = 0;
var temptime = "";
var carservicetime = "";
var carservicecost = 0;
var destination = "";




   // var 

flint.hears('/workinglate', function(bot){

    bot.say('Ok we will begin preperations for you working Late \n Please remember that you must be working past 8:00 PM for the following items to be covered. \n Let Us Know What you Would like to Request: \n Set the Office Temperature - /temp \n Order Food for Your Group - /food \n Get Car Service Home - /carservice \n Submit all Requests - /submit');
 
 
 
 
    //bot.say('Let Us Know What you Would like to Request:');
      //  sleep(1000)
    //bot.say('Set the Office Temperature - /temp');
    //    sleep(1000)
    //bot.say('Order Food for Your Group - /food');
      //  sleep(1000)
    //bot.say('Get Car Service Home - /carservice');
        //sleep(1000)
    //bot.say('Submit all Requests - /submit');
        //sleep(1000)
    //bot.say('Please remember that you must be working past 8:00 PM for the following items to be covered.');

});

flint.hears('/temp', function(bot){
    bot.say(tempsetting);
        flint.hears('/settemp', function(bot, trigger) {
        settemp = trigger.args[1];  
        bot.say('Setting Temperature to ' + settemp);
        settempcost = 400;
        temptime = Date();
        bot.say('Building Management has been Contacted via SMS to Change the Temperature');
});
});
    

flint.hears('/carservice', function(bot){
    bot.say(carservicenot);
        flint.hears('/ordercarservice', function(bot, trigger) {
		destination = trigger.args[1];
	    carservicetime = Date();
        bot.say('Uber Has Been Contacted and will be here in 15 mintes to take you to ' + destination);
        bot.say('Air Control No Longer Needed At Cisco');
        carservicecost = 60;
        
    });
});


//DEBUG=flint,bot,spark node mybot.js

flint.hears('/food', function(bot){
              bot.say(hungryfella);
              bot.upload('foodchoices.pdf');
              flint.hears('/orderfood', function(bot, trigger) {
                    foodtime = Date();
                    setfood = trigger.args[1];  
                    var setnumberofpeople = trigger.args[2];  
                    if (setfood == "mexican"){
					costoffood = setnumberofpeople * 8;
                    bot.say('We are ordering ' + setnumberofpeople + ' Burritos to the Cisco Account, please deliver ASAP!' +  ' The Cost is $' + costoffood ); 
                    
                    }
                    else if (setfood == "italien"){
					costoffood = setnumberofpeople * 10;
                    bot.say('We are ordering ' + setnumberofpeople + ' Pizzas to the Cisco Account, please deliver ASAP!' +  ' The Cost is $' + costoffood );   
                    }
                    else if (setfood == "american"){
					costoffood = setnumberofpeople * 12;
                    bot.say('We are ordering ' + setnumberofpeople + ' Cheeseburgers and Friesto the Cisco Account, please deliver ASAP!'  +  ' The Cost is $' + costoffood ); 
                    }
            });
                
});





flint.hears('/submit', function(bot){
    bot.say(finalsumbit);
        flint.hears('/finalsubmit', function(bot, trigger) {
        var setproject = trigger.args[1];  
		//bot.say('Working Late for' + setproject + ' Sumary');
		//bot.say('Report Submitted at: ' + Date());
		//bot.say('Total Cost of Food For the Night: $' + costoffood);
		//bot.say('Type of food ordered: ' + setfood);
	    //bot.say('Food was ordered at: ' + foodtime);
	    //bot.say('Temperature was set to:' + settemp);
	    //bot.say('Temperature was set at:' + temptime);	    
	    //bot.say('Cost for Overtime Temperature: $' + settempcost);
	    //bot.say('Car Service Cost: $' + carservicecost);
	    //bot.say('Car Service Called at: ' + carservicetime);
	    //bot.say('Car Service Destination: ' + destination);
	    totalcosts = costoffood + settempcost + carservicecost;
	    //bot.say('Total Cost for Working Late: $' + totalcosts);
        bot.say('Your Requests have been submitted \n Thank You For Working Late');
        //bot.say('');
        
        
        var a = ('Working Late for ' + setproject + ' Summary');
		var b = ('Report Submitted at: ' + Date());
		var c = ('Total Cost of Food For the Night: $' + costoffood);
		var d = ('Type of food ordered: ' + setfood);
	    var e = ('Food was ordered at: ' + foodtime);
	    var g = ('Temperature was set to:' + settemp);
	    var h = ('Temperature was set at:' + temptime);	    
	    var i = ('Cost for Overtime Temperature: $' + settempcost);
	    var j = ('Car Service Cost: $' + carservicecost);
	    var k = ('Car Service Called at: ' + carservicetime);
	    var l = ('Car Service Destination: ' + destination);
	    costoffood + settempcost + carservicecost;
	    var m = ('Total Cost for Working Late: $' + totalcosts);
	    
	    
	    
        var htmlfile = ('<h2>' + a + '</h2><br>' + b + '<br>' + c + '<br>' + d + '<br>' + e + '<br>' + g + '<br>' + h + '<br>' + i + '<br>' + j + '<br>' + k + '<br>' + l + '<br>' + m);
        
        var fs = require('fs');
        fs.writeFile('workinglatesummary.html', htmlfile); 
        
            sleep(2000);
        //fs.close();

});
});


flint.hears('/managerfetch', function(bot){
                bot.upload('workinglatesummary.html');
               // bot.say('Thank you for working late');
 });




//add flint event listeners
flint.on('message', function(bot, trigger, id){
    flint.debug('"%s" said "%s" in room "%s:"', trigger.personEmail, trigger.text, trigger.roomTitle);
});

flint.on('initialized', function(){
    flint.debug('initialized %s rooms', flint .bots.length);
});



// define express path for incoming webhooksdebug=
app.post('/flint', webhook(flint));

// start express server
var server = app.listen(config.port, function () {
  flint.debug('Flint listening on port %s', config.port);
});

// gracefully shutdown (ctrl-c)
process.on('SIGINT', function() {
  flint.debug('stoppping...');
  server.close();
  flint.stop().then(function() {
    process.exit();
  });

});


//Sleep
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
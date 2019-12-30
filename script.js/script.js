var vacationType= prompt ("What kind of trip are you looking to go on,musical,tropical, or adventurous?");
var groupSize= prompt ("How many people are in your group?");
var result;

if (vacationType=="musical"){
    var destination="I reccomend New Orleans, Don't forget the deignets!";
} else if (vacationType=="tropical"){
    var destination="I reccomend a beach vacation, in Mexico, bring shorts and sandals";
} else if (vacationType=="adventurous"){
    var destination="You'll love white water rafting the Grand Canyon, bring water proof everything";
}
var groupSize= prompt ("How many people are in your party?");
if (groupSize<3){
    var travel="You should travel first class, Cheers!";
    }else if (groupSize >4<6){
        var travel="You Should travel by helecopter, bring ear plugs";
    }else if (groupSize >6){
        var travel="You should travel via Charter FLight, don't forget your tablet!";
    }
    var result=(destination)+(travel);
    console.log(result)
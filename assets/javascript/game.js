$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var shots = 0;
    var gamesPlayed = wins + losses + 1;

    var Ball1 = $("#random-Ball1");
    var Ball2 = $("#random-Ball2");
    var Ball3 = $("random-Ball3");
    var Ball4 = $("random-ball4");

    var goalsScored = Math.floor(Math.random() * 136) + 15
    var soccerBall1 = Math.floor(Math.random() * 22) + 1
    var soccerBall2 = Math.floor(Math.random() * 22) + 1
    var soccerBall3 = Math.floor(Math.random() * 22) + 1
    var soccerBall4 = Math.floor(Math.random() * 22) + 1

    var reset = function(){
        gamesPlayed++
        targetGoals = Math.floor(Math.random() * 136) + 15
        soccerBall1 = Math.floor(Math.random() * 22) + 1
        soccerBall2 = Math.floor(Math.random() * 22) + 1
        soccerBall3 = Math.floor(Math.random() * 22) + 1
        soccerBall4 = Math.floor(Math.random() * 22) + 1
        shots = 0;
        console.log("goalsScored: " + goalsScored)
 }

 var displaygoalsScored = function () {
     $("#goalsScored").text(goalsScored)
 }

 var displayShots = function (){
     $("#shots").text(shots)
 }

 var displaysoccerScores = function () {
     $("#wins").text("Wins: " + wins)
     $("#losses").text("Losses: " + losses)
     $("#goals-missed").text("Goals-missed: " + gamesPlayed)
 }

 console.log("goalsScored: " + goalsScored)
 
 displaygoalsScored();

 $(document).on("click", function (event) {
    
    var divClicked = event.target.id
     console.log(event)

     if(divClicked === "random-Ball1") {
         shots = shots + soccerBall1
         displayShots()
}
else if (divClicked === "random-Ball2") {
    shots = shots + soccerBall2
    displayShots()
}

else if (divClicked === "random-Ball3") {
    shots = shots + soccerBall3
    displayShots()
}
else if (divClicked === "random-Ball4") {
        shots = shots + soccerBall4
        displayShots()
}
 
console.log("Shots: " + shots)

 if (shots === goalsScored) {
     wins++
     displaysoccerScores();
     console.log("WIN")
     reset();
     displaygoalsScored();
 }
 else if (shots > goalsScored) {
     losses++
     displaysoccerScores();
     console.log("LOSS")
     reset();
     displaygoalsScored();
 }
})
 });












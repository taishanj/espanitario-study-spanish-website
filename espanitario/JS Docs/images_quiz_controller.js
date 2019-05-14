var x = document.getElementById("myAudio");
function playAudio(){
	x.play();
}


function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
	//New Code
	this.Index = 0;
	
}

function copyQuiz(questions){
	this.questions = questions;
}
/*
function copyQuiz_2(questions){
	this.questions = questions;
}*/

var num = 0;
var rand_int = 0;


Quiz.prototype.getQuestionIndex = function(){
	
	rand_int = Math.floor(Math.random()*this.questions.length);
	num = rand_int;
	return this.questions[rand_int];
	
	
	// push and splice dont work here
		//Push the used question
	this.questions.push(question[rand_int]);
	    //Splice the used question
    this.questions.splice(rand_int, 1);
}



//This copy of Quiz.prototype function permits the same rand_int generated for questions to apply to the answers
copyQuiz.prototype.getAnotherIndex = function(){
	
	return this.questions[num];
	
}

//something cut here

Quiz.prototype.isEnded = function(){
	
	/* This code makes the length of the quiz equal to the number of questions in app file 
	return this.questions.length === this.Index;*/

	//Code below makes the length of the quiz changeable to desired length (by varying integer) 
	return this.Index === 15;	
}


Quiz.prototype.guess = function(answer){
	
	if(this.questions[rand_int].correctAnswer(answer)){
		this.score++;
		playAudio();
		
	}
	this.Index++;
}


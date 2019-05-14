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
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
	//New Code
	this.Index = 0;
}


Quiz.prototype.getQuestionIndex = function(){
	
	/* This code randomized however audio/correct answer is off and so is score and question count
	this.questionIndex = Math.floor(Math.random()*questions.length);*/
	rand_int = Math.floor(Math.random()*this.questions.length);
	return this.questions[rand_int];
	
	
	
	/* push and splice don't work here */
		//Push the used question
	this.questions.push(question[rand_int]);
	    //Splice the used question
    this.questions.splice(rand_int, 1);
}


//attempt to obtain array value returned from function above this.questions[this.questionIndex];
copyQuiz.prototype.getAnotherIndex = function(){
	
	return this.questions[rand_int];
}

Quiz.prototype.isEnded = function(){
	
	/* This code makes the length of the quiz equal to the number of questions in app file 
	return this.questions.length === this.Index;*/
	/*Code below makes the length of the quiz changeable to desired length (by varying integer) */
	return this.Index === 10;	
}
Quiz.prototype.guess = function(answer){
	
	if(this.questions[rand_int].correctAnswer(answer)){
		this.score++;
		playAudio();
		
	}
	this.Index++;
}


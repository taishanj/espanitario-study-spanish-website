function Question(pics,text,choices,answer){
	this.pics = pics;
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice){
	return choice === this.answer;
}
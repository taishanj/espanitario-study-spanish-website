//Declared as global img variable
var img = new Image();
function populate(){
	if(quiz.isEnded()){
		showScores();
		
	}
	else{
		

				
				
		//show question
		var element = document.getElementById("question");
				element.innerHTML = quiz.getQuestionIndex().text;
			
		//show image
		//need to create new object every time
		//var img = new Image();
			img.src = mcq.getAnotherIndex().pics;
				document.getElementById('output').appendChild(img);
		
		//Show Choices
		//var choices = testing.choices;
		var choices = mcq.getAnotherIndex().choices
		for (var i=0; i< choices.length; i++){
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn"+ i, choices[i]);
			
		}
					
		showProgress();
	}
};

     /*Variable that states the number of questions on the quiz for user's interface. 
     code to actually change number of questions located in controller file */
quizlength = 10;
function guess(id, guess){
	var button = document.getElementById(id);
		button.onclick = function(){
			quiz.guess(guess);
			populate();
		}
}
function showProgress(){
	var currentQuestionNumber = quiz.Index + 1;
	var element = document.getElementById("progress");
	/* To be used if length of quiz will be number of questions in file: 
	element.innerHTML="Question " + currentQuestionNumber + " of " + quiz.questions.length;*/
	element.innerHTML="Question " + currentQuestionNumber + " of " + quizlength;
	
}


function showScores(){
	var gameOverHtml="<h1>Result</h1>";
		//Original: gameOverHtml += "<h2 id='score'> Your score is: " + quiz.score + " out of " + quiz.questions.length + "</h2>";
		//Attempt to shorten quiz
		gameOverHtml += "<h2 id='score'> Your score is: " + quiz.score + " out of " + quizlength + "</h2>";
		var element = document.getElementById("quiz");
		element.innerHTML = gameOverHtml;
}


var questions=[

	//Accents:ú,é,í,ó,ñ,á
	new Question ('messiParlantes.png', "Su música preferida es la cumbia. El grupo cordobés La Banda del Tigre Ariel compuso La cumbia de Messi, La cual hace referencia a su nacimiento en Rosario y su paso por las inferiores de Newell's Old Boys.<br>  What's Leo's favourite music?" , ["compuso",  "cumbia" , "flamengo", "salsa"], "cumbia"),
	new Question ('equipoEspanyol.png', "El 16 de enero de 2014 jugó su partido oficial número 700 con la camiseta del F.C. Barcelona batiendo todo tipo de registros.<br>  Which player broke this record?" , ["Xavi",  "Casillas" , "Xavi Alonso", "Puyol"], "Xavi"),
	new Question ('etooViejo.png', "Debate sobre su edad: En un video reciente, José Mourinho es mostrado bromeando sobre Eto y su verdadera edad, diciendo que podría ser 35, en vez de 33. Una ex novia declaró que él tenía 39, pero el jugador ha negado los rumores, diciendo que se siente aún más joven que su edad.<br> How old is Samuel Eto?", ["39", "35","33","not stated"], "33"),
	new Question ('biblia.png',"El señor es mi pastor, nada me faltará,en pastos delicados el me hará descansar,junto a aguas de reposo me pastoreara, confortara mi alma <br> Which prayer begins like this?", ["Our Father", "Psalm 23","Psam 121","Hail Mary"], "Psalm 23"),
	new Question ('kardashian.png',"Kim Kardashian nació en Los Ángeles, California, hija del abogado Robert Kardashian y de Kris Jenner, quien es su mánager. Kim es de origen armenio <br> What is Kim's father's job?", ["doctor", "teacher","lawyer","scientist"], "lawyer")
];








//var imgs = new copyQuiz_2(questions);
var quiz = new Quiz(questions);
var mcq = new copyQuiz(questions);



populate();
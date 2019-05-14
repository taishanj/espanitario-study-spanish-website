function populate(){
	if(quiz.isEnded()){
		showScores();
		
	}
	else{
		
		
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		//Show Choices
		
		//var choices = testing.choices;
		var choices = test.getAnotherIndex().choices
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
	//First 10 questions
	new Question ("Es importante que ustedes....para el examen. (Subjunctive)" , ["estudiaran",  "estudien" , "estudiaban", "estudiar"], "estudien"),
	new Question ("Querría comprar una bicicleta.... menos de 200 pesos. (Por/Para)", ["por",  "para" , "en", "en"], "por"),
	new Question ("Mascherano no va a jugar mañana contra Madrid porque....en Argentina. (Future)", ["sería",  "es" , "estaría", "estará"], "estará"),
	new Question ("Nuestra escuela....construida en 1879. (Preterite/Imperfect) ", ["estaba",  "fue" , "estuvo", "era"], "fue"),
	new Question("Cuando llegamos a la estación, el tren...de salir",["acababa","acabó","acabar","acaba"],"acabó"),
	new Question ("El maestro insiste en que los alumnos....sus deberes. (Subjunctive)" , ["hicieran",  "hagan" , "hacen", "hicieron"], "hagan"),
	new Question ("Cuando entramos en la oficina la secrataria se....en preparar los documentos. (Preterite/Imperfect)", ["ocupó",  "ocupe" , "ocupaba", "ocupara"], "ocupaba"),
	new Question ("Mis abuelos no querían que yo....con mis amigos a la fiesta . (Subjunctive)", ["voy",  "vaya" , "fuera", "iré"], "vaya"),
	new Question ("Mi primo no....tocar el piano porque le dolía la mano. (Preterite/Imperfect) ", ["pudo",  "hizo" , "tuvo", "supo"], "pudo"),
	new Question("-Buenas tardes, estudiantes,¡....! (Command)",["sentad","sentarse","siéntate","siéntense"],"siéntense"),
	
	//Second 10 questions
	new Question ("Kim es mi amiga con....fui a la fiesta el año pasado." , ["cual",  "quienes" , "quien", "la cual"], "la cual"),
	new Question ("Mientras que comprabamos las verduras en el mercado.... a llover.(Preterite/Imperfect)", ["empezaba",  "empezará" , "empiezo", "empezó"], "empezó"),
	new Question ("Isabela dijo a su papá que....dolía,el estómago.(Direct/Indirect Object Pronouns)", ["lo",  "les" , "se", "le"], "le"),
	new Question ("Madonna .... a su novio el mes pasado en el parque.(Preterite/Imperfect) ", ["conocía",  "conociera" , "conoce", "conoció"], "conoció"),
	new Question("Anoche un ladrón ....en la casa de mis vecinos"["entró","entra","entrado","entrara"],"entró"),
	new Question ("Es importante que....a la boda(Subjunctive)" , ["vayamos",  "iremos" , "fuéranis", "iríamos"], "vayamos"),
	new Question ("Thiago....Paris muy bien porque ha pasado cuatro años allí.", ["visita",  "gusta" , "sabe", "conoce"], "conoce"),
	new Question ("....quieres no existe.", ["Lo que",  "Que" , "El que", "Cual"], "Lo que"),
	new Question ("La biblioteca no quiere estos libros....a Ana. (Direct/Indirect Object Pronouns)", ["Dáselos",  "Dámelos" , "Dalos", "Se los da"], "Dáselos"),
	new Question(".....su edad mi bisabuela es bastante animada.",["Por","Al","De","Para"],"Por")

];


var test = new copyQuiz(questions);
var quiz=new Quiz(questions);

populate();
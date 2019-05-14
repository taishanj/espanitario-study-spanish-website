//Date: Feb 5th 2017. To Do: Create question limit(x) ,Connect correct answers to questions (x), Randomize without repeat (), Attempt to launch via CPanel()

function populate(){
	if(quiz.isEnded()){
		showScores();
		
	}
	else{
		
		
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		//Show Choices
		//var choices = quiz.getQuestionIndex().choices;
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
	//var currentQuestionNumber = quiz.questionIndex +1;
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
	//First 10 Questions
	new Question ("Enrique, si tú no te das prisa, no vas a llegar a la escuela…", ["del tiempo",  "el tiempo" , "a tiempo", "en tiempo"], "a tiempo"),
	new Question ("El mes que viene tenemos que… a una conferencia.", ["asistir",  "estar " , "participar", "atender"], "asistir"),
	new Question ("El doctor le dijo a Cristiano que tenía que…cama por dos días", ["poner",  "acostarse" , "guardar", "tomar"], "guardar"),
	new Question ("Cuando llueve, Elena siempre lleva su…", ["gorra",  "parasol" , "anteojos", "paraguas"], "paraguas"),
	new Question ("Este traje es demasiado grande. No me...bien", ["toca",  "queda" , "da", "fito"], "queda"),
	new Question ("Este cuarto es muy oscuro. ¿Tienes...?", ["una luz",  "un fuego" , "un espejo", "un telescopio"], "una luz"),
	new Question ("Me duelen....y por eso voy al dentista", ["la boca",  "las orejas" , "las muelas", "el diente"], "las muelas"),
	new Question ("...mi parece este vestido es demasiado largo", ["Para",  "En" , "Se", "A"], "A"),
	new Question ("Neymar....los exámenes porque estudío mucho", ["aprobó",  "pasó" , "bien", "éxito"], "aprobó"),
	new Question ("Tengo que leer y hacer mis deberes en....", ["la librería",  "la librera" , "la biblioteca", "la estantería"], "la biblioteca"),
		
	//Second 10 questions
	new Question ("No me gusta el pescado frito. Prefiero comerlo....", ["barbecho",  "asado" , "enfriado", "rosado"], "asado"),
	new Question ("Hace un mes que no llueve,la tierra está muy....", ["seca",  "lluviosa" , "cansada", "fresca"], "seca"),
	new Question ("Los obreros se niegan a entrar la fábrica porque hay....", ["huelga",  "empleo" , "obras", "trabajo"], "huelga"),
	new Question ("He perdido mis....y ahora no puedo abrir la puerta", ["memorias",  "voluntades" , "cerraduras", "llaves"], "llaves"),
	new Question ("Acabo de ganar la lotería. Me siento ....", ["feliz",  "triste" , "desanimado", "descontento"], "feliz"),
	new Question ("Para lavar la ropa tengo todo menos....", ["sopa",  "jabón" , "jamón", "jugo"], "jabón"),
	new Question ("Qué dedos tan sucios!Hay que lavarlos bien con....", ["la sopa",  "el jamón" , "el jabón", "el jugo"], "el jabón"),
	new Question ("He visitado Florida muchas veces. Voy allí....", ["de repente",  "jamas" , "raras veces", "a menudo"], "a menudo"),
	new Question ("Elena....el vestido a la tienda porque era demasiado pequeña", ["regresó",  "devolvió" , "compró", "a menudo"], "devolvió"),
	new Question("Cuando llegamos a la estación, el tren...de salir",["acababa","acabó","acabar","acaba"],"acabó"),
	
	//Third 10 questions
	new Question ("El año pasado Victor Moses jugó con West Ham....una temporada", ["de",  "desde" , "para", "por"], "por"),
	new Question ("Marquis invitó a....gente a su fiesta", ["muy",  "tan" , "tan mucho", "mucha"], "mucha"),
	new Question ("¿Cuál est tu....? Es Durant.", ["dirección",  "llama" , "edad", "apellido"], "apellido"),
	new Question ("Mi amigo Saul siempre me....con mis problemas", ["atiende",  "asiste" , "ayuda", "aconseja"], "ayuda"),
	new Question ("Gabriel Jesus estaba nervioso porque era la primera....que iba jugar en Inglaterra.", ["tiempo",  "vez" , "hora", "epoca"], "vez"),
	new Question ("El vuelo llegará....a causa de una tormenta en Nueva York.", ["ahora",  "tarde" , "a tiempo", "ayer"], "tarde"),
	new Question ("Pantin tomó....en el clase porque quisó aprobar el examen.", ["apuntes",  "noticias" , "estudios", "marcas"], "apuntes"),
	new Question ("A mi tío le gusta....demasiado dinero.", ["pasar",  "gastar" , "ahorra", "hacer"], "gastar"),
	new Question ("Quiero barrer la cocina. Dame la...", ["escopeta",  "escoba" , "broma", "fregona"], "fregona"),
	new Question("Profesora Sanchez estaba muy enojada. Aunque....el timbre tuvimos que quedar en clase",["sonó","tocó","acabó","llamó"],"sonó")

];

//will this work if I have used Quiz(questions) function twice
var test = new copyQuiz(questions);
var quiz = new Quiz(questions);

populate();
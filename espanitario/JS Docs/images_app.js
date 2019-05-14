// Code isn't updating immediately. Make sure to clear browsing cache

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

     //Variable that states the number of questions on the quiz for users interface. 
     //code to actually change number of questions located in controller file 
quizlength = 25;
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
	new Question ('anyo.png', "year" , ["año",  "mes" , "vez", "tiempo"], "año"),
	new Question ('mundo.png', "world", ["vida",  "todo" , "globo", "mundo"], "mundo"),
	new Question ('tiempo.png', "time", ["segundo",  "reloj" , "tiempo", "tarde"], "tiempo"),
	new Question ('pollo.png', "chicken" , ["cocino",  "asado" , "papas", "pollo"], "pollo"),
	new Question ('regalo.png', "gift", ["regalo",  "caja" , "globo", "boxeo"], "regalo"),

//New Questions
	new Question ('cosa.png', "thing" , ["herramienta",  "cosa" , "pieza", "pelota"], "cosa"),
	new Question ('mujer.png', "woman", ["hombre",  "gente" , "linda", "mujer"], "mujer"),
	new Question ('hombre.png', "man", ["mujer",  "gente" , "linda", "hombre"], "hombre"),
	new Question ('ninyo.png', "child" , ["hija",  "adulto" , "bajo", "niño"], "niño"),
	new Question ('mano.png', "hand" , ["cara",  "mano" , "rodilla", "dedos"], "mano"),
	
	//New Questions
	new Question ('dormitorio.png', "bedroom", ["aula",  "salon" , "baño", "dormitorio"], "dormitorio"),
	new Question ('salon.png', "living room", ["dormitorio",  "aula" , "baño", "salon"], "salon"),
	new Question ('ciudad.png', "city" , ["ciudad",  "campo" , "país", "pueblo"], "pollo"),
	new Question ('gente.png', "people", ["grupo",  "gente" , "embotellamiento", "muchedumbre"], "gente"),
	new Question ('campo.png', "countryside" , ["pueblo",  "ciudad" , "campo", "aldea"], "campo"),
        
        //New Questions (Added 18 April 2017)
        new Question ('trabajo.png', "job", ["globo",  "trabajo" , "tipo", "esfuerzo"], "trabajo"),
	new Question ('ejemplo.png', "example", ["examplo",  "ejercicio" , "ejemplo", "enjojado"], "ejemplo"),
	new Question ('idea.png', "idea" , ["salon",  "grupo" , "pensamiento", "idea"], "idea"),
	new Question ('mes.png', "month", ["semana",  "año" , "mes", "día"], "mes"),
	new Question ('semana.png', "week" , ["semana",  "año" , "mes", "día"], "semana"),

	new Question ('cuerpo.png', "body", ["bodío",  "cuerpo" , "cabeza", "mente"], "cuerpo"),
	new Question ('hecho.png', "fact", ["hecho",  "ficción" , "baño", "salon"], "hecho"),
	new Question ('pueblo.png', "town" , ["ciudad",  "campo" , "país", "pueblo"], "pueblo"),
	new Question ('ojo.png', "eye", ["nariz",  "oreja" , "ojo", "cabeza"], "ojo"),
	new Question ('calle.png', "street" , ["calle",  "carretera" , "semáforo", "aldea"], "calle"),

	new Question ('roperia.png', "clothes shop", ["librería",  "ropería" , "zapatería", "tienda"], "ropería"),
	new Question ('farmacia.png', "pharmacy", ["farmacía",  "ropería" , "heladería", "tienda"], "farmacía"),
	new Question ('libreria.png', "bookshop" , ["frutería",  "biblioteca" , "bibliografía", "librería"], "librería"),
	new Question ('joyeria.png', "jewellery shop",  ["tienda",  "ropería" , "zapatería", "joyería"], "joyería"),
	new Question ('carniceria.png', "butchers shop" , ["pastelería",  "panadería" , "farmacía", "iglesia"], "carnicería"),
	
	new Question ('tienda.png', "store",  ["librería",  "ropería" , "zapatería", "tienda"], "tienda"),
	new Question ('zapateria.png', "shoe shop", ["librería",  "ropería" , "zapatería", "tienda"], "zapatería"),
	new Question ('panaderia.png', "bakery", ["pastelería",  "panadería" , "farmacía", "iglesia"], "panadería"),
	new Question ('pasteleria.png', "cake shop" , ["panadería",  "pastelería" , "supermercacdo", "sastrería"], "pastelería"),
	new Question ('fruteria.png', "fruit shop", ["frutería",  "ropería" , "heladería", "tienda"], "frutería"),
	new Question ('heladeria.png', "icecream shop" , ["supermercado",  "heladería" , "panadería", "pueblo"], "heladería")
	



];


//var imgs = new copyQuiz_2(questions);
var quiz = new Quiz(questions);
var mcq = new copyQuiz(questions);



populate();
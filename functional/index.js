const surveyAnswers = data;

let kolomNaam = "relatie"

let lijstAntwoorden = getAnswersForQuestion(surveyAnswers, kolomNaam)

console.log("All survey answers are: ", lijstAntwoorden);
console.log("All filtered survey answers are: ", getFilteredAnswers());


//lijstAntwoorden = getAnswersForQuestion(surveyAnswers, [kolomNaam])

// returns all answers for a specific question in an array.
function getAnswersForQuestion(answers, question) {

    if (answers.length === 0) {
        console.error("Array must have items in it")
        return
        //geef answers een waarde
    }

    let answersforQuestion = []
    for (answer of answers) {
        answersforQuestion.push(answer[question])

    }

    return answersforQuestion //array van antwoorden voor een specifieke vraag.

}


//Filtert antwoorden op antwoorden die "Soms" of "Zeg ik liever niet bevatten (Geholpen door Max en Nino)
//Geholpen door victor met de function aan de praat krijgen


function getFilteredAnswers(results) {

    const result = lijstAntwoorden.filter(results => results.length < 4);

    return result;

}

//const specificAnswers = surveyAnswers.map(answer => answer[kolomNaam])

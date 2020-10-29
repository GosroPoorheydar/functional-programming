//Step 1: load in the RDW Data. 

//Step 2: Put the data in arrays.

//Step 3: Clean the data (To be done)

//Step 4: Transform the data for use in D3(To be done)


const geoParkeerGarages = 'https://opendata.rdw.nl/resource/t5pc-eb34.json'

const tariefBerekening = 'https://opendata.rdw.nl/resource/nfzq-8g7y.json'

let columnname = "areaid"

//let listanswers = getAnswersForQuestion(geoParkeerGarages, columnname)


//console.log(listanswers)




// Prepares the data from the first dataset to be used

getData(geoParkeerGarages)
    .then(result => {
        return result.json()
    })
    .then(GEOData => {
        console.log("All data: ", GEOData)
        con(getAnswersForQuestion(GEOData, columnname))
        // console.log("one datum", GEOData[4])

    })


// Prepares the data from the second dataset to be used

getData(tariefBerekening)
    .then(result => {
        return result.json()
    })
    .then(berekeningData => {
        // console.log("All data: ", berekeningData)
        // console.log("one datum", berekeningData[4])

    })

function getData(url) {
    return fetch(url)
}


// Find all unique valley in an array (Not functional yet)

function findUniqueValues(valueArray) {
    let uniqueArray = []
    valueArray.map(item => {
        if (uniqueArray.indexOf(item) == -1) {
            uniqueArray.push(item)
        }
    })
    return uniqueArray
}

// returns all answers for a specific question in an array.

function getAnswersForQuestion(answers, question) {


    let answersforQuestion = []
    for (answer of answers) {
        answersforQuestion.push(answer[question])

    }

    return answersforQuestion //array van antwoorden voor een specifieke vraag.

}

function con(data) {
    console.log(data)
}

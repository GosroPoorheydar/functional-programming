//Stap 1: load in the RDW Data. 
console.log("Do i work?")

const geoParkeerGarages = 'https://opendata.rdw.nl/resource/t5pc-eb34.json'
const tariefBerekening = 'https://opendata.rdw.nl/resource/nfzq-8g7y.json'



getData(geoParkeerGarages)
    .then(result => {
        return result.json()
    })
    .then(GEOData => {
        console.log("All data: ", GEOData)
        console.log("one datum", GEOData[4])

    })

function getData(url) {
    return fetch(url)
}


getData(tariefBerekening)
    .then(result => {
        return result.json()
    })
    .then(berekeningData => {
        console.log("All data: ", berekeningData)
        console.log("one datum", berekeningData[4])

    })

function getData(url) {
    return fetch(url)
}

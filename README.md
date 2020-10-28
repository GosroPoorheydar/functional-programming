# functional-programming
In deze repo komen alle bestanden betrekkend tot Functional programming.
 
 ### Hoofdvraag:
 Heeft de relatieve/hemelsbrede afstand tussen parkeergarages invloed op de individuele prijs van deze garages?
 
 #### Vereiste Data:
 
 AreaID : Identificatiecode van een parkeergebied of - faciliteit.
 
 AreaManagerID : Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
 
 AreaDesc : Naam van Gebied
 
 UsageID : Beschrijving van wat voor soort gebied het is (GarageP)
 
 Location : Locatie in  Longitude/latitude
 
 FareCalculationCode : Code van een bepaalde tariefberekening bij een gebiedsbeheerder.
 
 FareCalculationDesc : De omschrijving van een tariefberekening.

### Verwachting: 

Ik verwacht dat in een gebied waar veel parkeergarages liggen, de prijzen scherper zijn om competitief te blijven, terwijl er in een gebied met weinig parkeergarages de prijzen meer monopolistisch gestructureerd zijn.


Ik verwacht ook dat in bevolkingsrijke gebieden de prijzen hoger zullen liggen vanwege de hoeveelheid vraag naar parkeerplaatsen.

### Vereiste API's :

https://opendata.rdw.nl/resource/t5pc-eb34.json - GEO Parkeer Garages

https://opendata.rdw.nl/resource/nfzq-8g7y.json - Open Data Parkeren: TARIEFBEREKENING

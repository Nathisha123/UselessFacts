
function getDetails(endpoint, language)
{
const url = `https://uselessfacts.jsph.pl/api/v2/facts/${endpoint}?language=${language}`
return fetch(url)
.then(response=>response.json());
}

function displayFacts(randomFacts, todayFacts)
{
//Random Facts
document.querySelector('.RandomDiv').innerHTML =
`<h5>Random Facts</h5>
${randomFacts.text}`;

///Today Fatcs
document.querySelector('.TodaysDiv').innerHTML =
`<h5>Today Facts</h5>
${todayFacts.text}`;
}



const English_button = document.getElementById("button-en");
const German_button= document. getElementById("button-de");

//English Facts
English_button.addEventListener("click",()=>{
    getDetails('random','en')
   .then(RandomFacts=>
{
    return getDetails('today','en')

           .then(TodayFacts=>
{
    displayFacts(RandomFacts,TodayFacts)
});
 } )
.catch(error=>{
    console.error('Error fetching data:', error);
});
});

//German Facts
German_button.addEventListener("click",()=>{
    getDetails('random','de')
   .then(RandomFacts=>
{
    return getDetails('today','de')

.then(TodayFacts=>
{
    displayFacts(RandomFacts,TodayFacts);
});
 })
.catch(error=>{
    console.error('Error fetching data:', error);
});
});
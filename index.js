

const dictionary = (word) =>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '042d6242ecmsha504c48e072674cp199cb2jsneba380cfee3e',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
	.then(response => response.json())
	.then((response) =>  {
		wordhead.innerHTML = response.word;
		definition.innerHTML = response.definition;
		// console.log(response))
	})
	.catch(err => console.error(err));
}

let butt = document.getElementById("searchbtn")

butt.addEventListener("click" , (e)=>{
	dictionary(searchinput.value)
	
})
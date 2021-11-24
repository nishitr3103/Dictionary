const button= document.querySelector('#button');
const inputWord= document.querySelector('input');
const wordele=document.getElementById('wordElement');

button.addEventListener('click',()=>{
    //e.preventDefault();
    const word=inputWord.value;
    const url ='https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(word);
    
    if(word){
    fetch(url)
      .then(res=>res.json())
      .then(data=>{
        const mean = data[0].meanings[0].definitions[0].definition
        wordele.innerHTML = mean;
      }).catch(e=>{
        wordele.innerHTML = "Sorry pal, we couldn't find definitions for the word you were looking for.";
      })}
      else{
        wordele.innerHTML = "Please enter your word !"
      }
  })

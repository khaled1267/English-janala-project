const createElement=(arr)=>{
 const htmleliment = arr.map((item)=>`<span class="btn text-[20px] gap-5">${item}</span>`);
return(htmleliment .join(''));


}

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
  
}


const managespener = (status)=>{
    if(status==true){
        document.getElementById('spener').classList.remove('hidden')
        document.getElementById('word-container').classList.add('hidden')
    }
    else{
         document.getElementById('word-container').classList.remove('hidden')
        document.getElementById('spener').classList.add('hidden')
    }

    }


const loadlessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>displaylessons(json.data))
}

    const removeactive = () => {
        const activebtn = document.querySelectorAll('.lesson-btn')
        // loop through all the buttons and remove active class
        for (let btn of activebtn) {
            btn.classList.remove('active', 'bg-[#00BCFF]', 'text-white')
        }
    }
const loadlessonwords=(id)=>{
    console.log(id)
    managespener(true)
    const url=`https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(json=>displywords(json.data))
  removeactive()
  const btncliked=document.getElementById(`lesson-level-${id}`)
//   console.log(btncliked);
  btncliked.classList.add('active' ,'bg-[#00BCFF]','text-white')
 
    
}
const loadlessondetails= async(id)=>{
    
    const url=`https://openapi.programming-hero.com/api/word/${id}`
    const fatchdata= await fetch(url)
    const details=await fatchdata.json()
    displywordsdetails(details.data);
    // console.log(details.data)

}
// {
//     "word": "Cautious",
//     "meaning": "সতর্ক",
//     "pronunciation": "কশাস",
//     "level": 2,
//     "sentence": "Be cautious while crossing the road.",
//     "points": 2,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//         "careful",
//         "alert",
//         "watchful"
//     ],
//     "id": 3
// }
const displywordsdetails=(word)=>{
    console.log(word);
    const my_modal_5detail = document.getElementById("detailContainer");
    my_modal_5detail.innerHTML=`
    <div>
        <h1 class="font-bold text-4xl ">${word.word} (<i class="fa-solid fa-microphone-lines"></i>    : ${word.pronunciation})</h1>
      </div>
     
    
    <div > 
      <h4 class="font-bold text-2xl mb-3">Meaning</h4>
      <p class="text-2xl font-bangla">${word.meaning}</p>
     
    </div>
    <div > 
      <h4 class="font-bold text-2xl  mb-3">Example</h4>
      <p class="text-2xl ">${word.sentence}</p>
     
    </div>
    <div > 
       <p class="text-2xl font-bangla  mb-3">সমার্থক শব্দ গুলো</p>
      <div class=""> 
      ${createElement(word.synonyms)}
    </div>
    </div>
    
    `
    document.getElementById("my_modal_5").showModal();


    

}


const displywords=(words)=>{
    console.log(words)
   const wordContainer=document.getElementById('word-container')
   wordContainer.innerHTML=''
   if(words.length ==0 ){
    wordContainer.innerHTML=`
    
    <div class="text-center col-span-full rounded py-10  space-y-6">
    <img class="mx-auto" src="./assets/alert-error.png" alt="">
    <p class="text-xl text-gray-400 font-medium font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h1 class="text-4xl font-bold">নেক্সট Lesson এ যান</h1>
   </div>
    `
    managespener(false)
       return;
   }
// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }
   for(let word of words){
    // console.log(word);
    const carddiv=document.createElement('div')
    carddiv.innerHTML=`
    <div class="card bg-white rounded-xl shadow-xl text-center py-10 px-5 space-y-5">
    <h2 class="font-bold text-3xl ">${word.word}</h2>
    <p class="font-semibold text-xl">Meaning / Pronounciation</p>
    <div class="font-medium font-bangla  text-2xl">${word.meaning} / ${word.pronunciation}</div>
    <div class=" flex justify-between items-center">
      <button  onclick="loadlessondetails(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80] rounded-xl"><i class="fa-solid fa-circle-info"></i></button> 
      <button onclick="pronounceWord('${
        word.word
    }')" class="btn bg-[#1A91FF10] rounded-xl hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
    </div>
   </div>
    `



    wordContainer.append(carddiv)
    
   
}
managespener(false)
}

const displaylessons=(lessons)=>{
//   get container& emoty the container
const levelContainer=document.getElementById('level-container')
levelContainer.innerHTML=''
// loop through the lessons
for(let lesson of lessons){

    // creat Element 
    const btndiv=document.createElement('div')
    // set innerHTML
    btndiv.innerHTML = `
<button id="lesson-level-${lesson.level_no}" onclick="loadlessonwords(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
    <i class="fa-solid fa-book-open"></i> lesson-${lesson.level_no}
</button>
`;
    levelContainer.append(btndiv) 

}
   

}
loadlessons()

document.getElementById("button-search").addEventListener('click',()=>{
    removeactive()
    const input = document.getElementById("input-search")
    const searchvalue=input.value.trim().toLowerCase()
    console.log(searchvalue)

    fetch('https://openapi.programming-hero.com/api/words/all')
    .then((res)=> res.json())
    .then((data) =>{
        const allword =data.data
        const filterword =allword.filter((word) =>word.word.toLowerCase() .includes(searchvalue))
        // console.log(filterword)
        displywords(filterword)
    } );
})

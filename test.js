const createElement=(arr)=>{
 const htmleliment = arr.map((item)=>`<span>${item}</span>`);
 console.log(htmleliment .join(''));
}

const synonyms = ['careful', 'alert', 'watchful']; // Array of synonyms
createElement(synonyms);
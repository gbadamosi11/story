const story = [
     {
          id: 1,
          heading: "Before coming to Schoolite",
          text: "Before coming to scoolite, I have zero knowledge in operating computer except from playing movies. My told me to about going to KAD to learn computer for six months. At first, I taught I will learn it quick and go back home not knowing that is not computer training but programming training.",
     },
     {
          id: 1,
          heading: "When am in Schoolite",
          text: "When am in schoolite, let me just say that I have various changes but I have only four main changes? e.g: I can operate a system, I can cook, Group speech, Manage (money, food)",
     },
     {
          id: 1,
          heading: "",
          text: "ccccccccc",
     },
];

const text = document.getElementById('text');
const heading = document.getElementById('heading');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
})

// show person based on item
function showPerson(){
  const item = story[currentItem];
  text.textContent = item.text;
  heading.textContent = item.heading;
}

// show next person
nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > story.length - 1){
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = story.length - 1;
  }
  showPerson();
});
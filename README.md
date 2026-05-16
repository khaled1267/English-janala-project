# ENGLISH <img width="25px" src="./assets/logo.png" /> JANALA

-

# 🌟 English Janala - Open the Door to Learning

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---


## 📌 Project Overview

**English Janala** is a modern educational platform built to make English learning simple and fun for Bengali speakers. Bringing courses, grammar lessons, and vocabulary resources into a single hub, it offers an interactive UI designed to keep learners motivated and engaged.

---

# 🚀 Live Links

🌐 **Live Demo:** [[আপনার লাইভ সাইট লিংক এখানে দিন]](https://english-janala-project-green.vercel.app/)

💻 **GitHub Repository:** [https://github.com/khaled1267/English-janala-project](https://github.com/khaled1267/English-janala-project)

---
 

# 🛠️ Technologies Used

## Frontend
- **React.js** (Component-based architecture)
- **Tailwind CSS** (For modern and responsive styling)
- **React Router DOM** (Multi-page navigation)
- **AOS / Framer Motion** (For scroll animations)


-

---

# ✨ Main Features

- ✅ **Course Curriculum:** স্টেপ-বাই-স্টেপ ইংরেজি শেখার লেসন প্ল্যান।
- ✅ **Interactive UI:** শিক্ষার্থীদের জন্য সহজবোধ্য এবং আকর্ষণীয় ডিজাইন।
- ✅ **Responsive Design:** স্মার্টফোন, ট্যাবলেট এবং কম্পিউটার—সব ডিভাইসে সমানভাবে কার্যকর।
- ✅ **Progress Tracking:** শিক্ষার্থীদের পড়াশোনার অগ্রগতি ট্র্যাক করার সুবিধা (যদি থাকে)।
- ✅ **Resource Library:** পিডিএফ নোটস এবং প্রয়োজনীয় ভিডিও লেসনের কালেকশন।
- ✅ **Student Support:** কন্টাক্ট ফরম বা চ্যাট সাপোর্ট সিস্টেম।

---

# 📦 Key Dependencies

```json
{
  "dependencies": {
    "react": "^18.x.x",
    "react-dom": "^18.x.x",
    "react-router-dom": "^6.x.x",
    "firebase": "^10.x.x",
    "react-icons": "^latest",
    "sweetalert2": "^latest"
  }
}


## ⚡ API Endpoints

1. Get ⚡ All Levels

```bash
https://openapi.programming-hero.com/api/levels/all
```

1. Get ⚡ Words by Levels <br/>
   https:// openapi.programming-hero.com/api/level/{id}

```bash
https://openapi.programming-hero.com/api/level/5
```

1. Get ⚡ Words Detail <br/>
   https:// openapi.programming-hero.com/api/word/{id}

```bash
https://openapi.programming-hero.com/api/word/5
```

1. Get ⚡ All Words <br/>

```bash
https://openapi.programming-hero.com/api/words/all
```

# Work To do

### 1. Show Levels on The UI

- [ ] Show a center-aligned heading as Figma

---

- [ ] Create dynamically generated buttons from **API-01** for each lesson
- [ ] Lesson Buttons will be displayed on page load

---

### 2. Show Word Cards Based on Level

- [ ] Show a default text that will be displayed in the Vocabulary section initially
- [ ] on Clicking a Specific Lesson Button Load All the words from **API-02**
- [ ] Display all words for a selected lesson in a card format, showing:

  - [ ] Word
  - [ ] Word meaning & pronunciation
  - [ ] Two buttons with relevant icons as per Figma

- [ ] Show **\*No Word Found** message if no words exist for a lesson

---

- [ ] Create functionality to highlight the active lesson button

---

### 3. Use Different Color on The Active Level Button

- [ ] After Successfully Loading words of a level , diffirentiate the button so user can understand which button is active

### 4. Vocabulary Details

- [ ] Create functionality to open a modal when clicking the details icon
- [ ] Data will be load from **API-03**
- [ ] modal will displays:
  - [ ] Word with pronunciation
  - [ ] Example sentence
  - [ ] Synonyms
  - [ ] A "Complete Learning" button to close the modal

### 5. Handling Invalid Data

- [ ] avoid displaying falsy values like `undefined` or `null`
- [ ] display relevant words if no data is found

### 6. Loading Spinner

- [ ] Create a loading spinner that will be display when vocabulary is loading from API

### 7. Implement Search Functionality

- [ ] Take a input Box.
- [ ] on Changing value It will Search word and show in the UI.
- [ ] If anyone Do search reset active button

### 8. Save Word Feature

- [ ] in the UI of Card add a button `Heart icon`
- [ ] on Clicking it. Store the Word in the Saved Box
- [ ] Show Saved words in a Different Section.

### 9. Speak your Vocabularies

- [ ] Create functionality for voice pronunciation of vocabulary words
- [ ] Use below function and implement on clicking sound icon

```js
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}
```

For More >> you can explore this implementation 👉 [https://codepen.io/Ferdous-Zihad/pen/PwoJMmJ](https://codepen.io/Ferdous-Zihad/pen/PwoJMmJ)

---
Bonus : How to create Private Repository for next assignments
## Test Repo - :  https://classroom.github.com/a/Fgjib-lr

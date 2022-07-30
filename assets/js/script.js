// import JOBS from "./database/career.json" assert {type: "json"};
// console.log(JOBS);

import SKILLS from "./database/skills.js";
import JOBS from "./database/career.js"
import SCHOOLS from "./database/education.js";
import HOBBIES from "./database/hobbies.js";

const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");

// Create a taskbar
const taskBar = document.createElement("div");
taskBar.setAttribute("id", "taskBar");

// Display time & date
const clock = document.createElement("div");
clock.setAttribute("id", "clock");
const date = document.createElement("div");
clock.setAttribute("id", "date");
const time = document.createElement("div");
clock.setAttribute("id", "time");



header.appendChild(taskBar);

// Create the Header
const greeting = {
  name: "James Arrow",
  photo: "assets/media/image/portrait.png",
  alt: "Photo of James Arrow",
  title: "Multimedia + Web Designer",
  description: "I'm a digital animator, graphic and web designer with a Masters' degree in Digital Media on my belt. I began with studying animation and digital media, having become proficient in Adobe Creative Suite and have, recently, begun learning web design and programming.<br><br> I am flexible and eager to learn new skills, passionate about computer technology and welcoming of a challenge.",
  email: "meetme.jw_arrow@erine.email"
};

const profileHead = document.createElement("div");
profileHead.setAttribute("id", "top");
profileHead.classList.add("content-wrap", "clearfix");

const profileImg = document.createElement("img");
profileImg.classList.add("col-narrow");
profileImg.src = greeting.photo;
profileImg.alt = greeting.alt;

const profileBio = document.createElement("div");
profileBio.classList.add("col-wide");

const profileName = document.createElement("h1");
profileName.innerHTML = greeting.name;

const profileTitle = document.createElement("h2");
profileTitle.innerHTML = greeting.title;

const profileDesc = document.createElement("p");
profileDesc.innerHTML = greeting.description;

profileBio.appendChild(profileName);
profileBio.appendChild(profileTitle);
profileBio.appendChild(profileDesc);

profileHead.appendChild(profileImg);
profileHead.appendChild(profileBio);
header.appendChild(profileHead);

// Create the top navbar

// Perhaps I'll expand the array below into a collection of objects
// or arrays containin the links and their relevant details
// i.e. fontawesome icons, etc.

const navItems = ["Skills", "Career", "Education", "Hobbies", "Contact"];
const topNav = document.createElement("nav");
topNav.setAttribute("role", "navigation");
topNav.classList.add("nav-max");
const topNavList = document.createElement("ul");
topNavList.classList.add("navbar");

// Populate the navbar
for (let i = 0; i < navItems.length; i++) {
  let item = document.createElement("li");
  let itemLink = document.createElement("a");
  let itemIcon = document.createElement("i");
  let description;
  itemIcon.classList.add("fas");
  switch (true) {
    case navItems[i] === "Skills":
      itemLink.href = "#skills";
      itemIcon.classList.add("fa-star");
      description = "Skills";
      break;
    case navItems[i] === "Career":
      itemLink.href = "#career";
      itemIcon.classList.add("fa-briefcase");
      description = "Career";
      break;
    case navItems[i] === "Education":
      itemLink.href = "#education";
      itemIcon.classList.add("fa-graduation-cap");
      description = "Qualifications";
      break;
    case navItems[i] === "Hobbies":
      itemLink.href = "#hobbies";
      itemIcon.classList.add("fa-heart");
      description = "Interests";
      break;
    case navItems[i] === "Contact":
      itemLink.href = "#contact";
      itemIcon.classList.add("fa-envelope");
      description = "Contact";
      break;
  }
  let itemText = document.createTextNode(description);
  itemLink.appendChild(itemIcon);
  itemLink.appendChild(itemText);
  item.appendChild(itemLink);
  topNavList.append(item);
}
// Append the links to the top navbar
topNav.appendChild(topNavList);
main.appendChild(topNav);

// Create the Skills section
const skillsSection = document.createElement("section");
skillsSection.setAttribute("id", "skills");
skillsSection.classList.add("content-wrap", "clearfix");

const skillsHeading = document.createElement("h2");
skillsHeading.innerHTML = `<i class="fas fa-star"></i>Skills`;
skillsSection.appendChild(skillsHeading);

const skillTable = document.createElement("div");
skillTable.classList.add("table");
skillsSection.appendChild(skillTable);
main.appendChild(skillsSection);


//Populate the Skills section
for (let i = 0; i < SKILLS.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("col-skill");

  const skillHead = document.createElement("h3");
  skillHead.innerHTML = `<i class="${SKILLS[i].icon}"> ${SKILLS[i].title}`;

  let listSkills = ``;
  for (let e=0;e<SKILLS[i].skills.length;e++) {
    listSkills += `<li>${SKILLS[i].skills[e][1]} ${SKILLS[i].skills[e][0]}</li>`
  };

  const skillType = `
      <ul>
        ${listSkills}
      </ul>
  `;
  entry.appendChild(skillHead);
  entry.innerHTML += skillType;
  skillTable.appendChild(entry);
};


// Create the Career section
const careerSection = document.createElement("section");
careerSection.setAttribute("id", "career");
careerSection.classList.add("content-wrap", "clearfix");

const careerHeading = document.createElement("h2");
careerHeading.innerHTML = `<i class="fas fa-briefcase"></i>Career`;
careerSection.appendChild(careerHeading);
main.appendChild(careerSection);

// Populate the Career section
for (let i = 0; i < JOBS.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("entry");

  const jobContentNarrow = `
          <div class="col-narrow">
            <h3>${JOBS[i].title}</h3>
            <p class="uppercase">${JOBS[i].company}, ${JOBS[i].location}</p>
            <p>${JOBS[i].startDate} - ${JOBS[i].endDate}</p>
          </div>
          `;

  let jobDetails = ``;
  for (let e=0;e<JOBS[i].details.length;e++) {
    jobDetails += `<li>${JOBS[i].details[e]}</li>`;
  }

  const jobContentWide = `
  <div class="col-wide description">
    <p>${JOBS[i].summary}</p>
    <ul>
      ${jobDetails}
    </ul>
  </div>
  `;

  entry.innerHTML = jobContentNarrow + jobContentWide;
  careerSection.appendChild(entry);
};


// Create the Education section
const educateSection = document.createElement("section");
educateSection.setAttribute("id", "education");
educateSection.classList.add("content-wrap", "clearfix");

const educateHeading = document.createElement("h2");
educateHeading.innerHTML = `<i class="fas fa-graduation-cap"></i>Qualifications`;

const educateList = document.createElement("div");
educateList.classList.add("table");

educateSection.appendChild(educateHeading);
educateSection.appendChild(educateList);
main.appendChild(educateSection);

// Populate the Education section
for (let i = 0; i < SCHOOLS.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("entry");

  const schoolContent = `
          <div class="col-school">
            <h3>${SCHOOLS[i].course}</h3>
            <p class="uppercase">${SCHOOLS[i].degree}, ${SCHOOLS[i].qualification}</p>
            <p>${SCHOOLS[i].location}, ${SCHOOLS[i].date}</p>
          </div>
          `;

  entry.innerHTML = schoolContent;
  educateList.appendChild(entry);
};

// Create the Hobbies section
const hobbySection = document.createElement("section");
hobbySection.setAttribute("id", "hobbies");
hobbySection.classList.add("content-wrap", "clearfix");

const hobbyHeading = document.createElement("h2");
hobbyHeading.innerHTML = `<i class="fas fa-heart"></i>Interests`;
hobbySection.appendChild(hobbyHeading);
main.appendChild(hobbySection);

// Populate the Hobbies section
for (let i = 0; i < HOBBIES.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("entry");

  const hobbyContent = `
    <div class="col-hobby">
      <i class="${HOBBIES[i].icon}"></i>
    </div>
    <div class="col-wide">
      <h3>${HOBBIES[i].title}</h3>
      <p>${HOBBIES[i].summary}</p>
    </div>
  `;
  entry.innerHTML = hobbyContent;
  hobbySection.appendChild(entry);
};

// Create the bottom navbar
const bottomNav = document.createElement("nav");
bottomNav.setAttribute("role", "navigation");
bottomNav.classList.add("nav-min");
const bottomNavList = document.createElement("ul");
bottomNavList.classList.add("navbar");

// Populate the navbar
for (let i = 0; i < navItems.length; i++) {
  let item = document.createElement("li");
  let itemLink = document.createElement("a");
  let itemIcon = document.createElement("i");
  itemIcon.setAttribute("aria-hidden", true);
  let itemSpan = document.createElement("span");
  itemIcon.classList.add("fas");
  switch (true) {
    case navItems[i] === "Skills":
      itemLink.href = "#skills";
      itemIcon.classList.add("fa-star", "fa-2x");
      itemSpan.innerHTML = "Skills";
      break;
    case navItems[i] === "Career":
      itemLink.href = "#career";
      itemIcon.classList.add("fa-briefcase", "fa-2x");
      itemSpan.innerHTML = "Career";
      break;
    case navItems[i] === "Education":
      itemLink.href = "#education";
      itemIcon.classList.add("fa-graduation-cap", "fa-2x");
      itemSpan.innerHTML = "Qualifications";
      break;
    case navItems[i] === "Hobbies":
      itemLink.href = "#hobbies";
      itemIcon.classList.add("fa-heart", "fa-2x");
      itemSpan.innerHTML = "Interests";
      break;
    case navItems[i] === "Contact":
      itemLink.href = "#contact";
      itemIcon.classList.add("fa-envelope", "fa-2x");
      itemSpan.innerHTML = "Contact";
      break;
  }
  itemSpan.classList.add("sr-only");
  itemLink.appendChild(itemIcon);
  itemLink.appendChild(itemSpan);
  item.appendChild(itemLink);
  bottomNavList.append(item);
}
// Append the links to the top navbar
bottomNav.appendChild(bottomNavList);
main.appendChild(bottomNav);


// Create the footer
const footer = document.createElement("footer");
footer.classList.add("content-wrap", "clearfix");
footer.setAttribute("role", "contact");
footer.setAttribute("id", "contact");

const email = document.createElement("a");
email.classList.add("contact-me")
email.href = `mailto:${greeting.email}`;
email.innerHTML = `<i class="fas fa-2x fa-envelope" aria-hidden="true"></i>  &nbsp;Let's Keep in Touch!<span class="sr-only">Send an Email to James Arrow</span>`;

const year = new Date();
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${year.getFullYear()} James Arrow`;

const backToTop = document.createElement("a");
backToTop.href = "#top";
backToTop.innerHTML = `<i class="fas fa-arrow-circle-up"></i>&nbsp;Back to Top`

footer.appendChild(email);
footer.appendChild(copyright);
footer.appendChild(backToTop);
body.appendChild(footer);

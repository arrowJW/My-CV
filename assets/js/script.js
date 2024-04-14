import SKILLS from "./database/skills.js";
import JOBS from "./database/career.js"
import SCHOOLS from "./database/education.js";
import HOBBIES from "./database/hobbies.js";
import CONTACTS from "./database/contact.js";
import NAVBAR from "./database/navbar.js";

const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");

// Create the Header
const greeting = {
  name: "James Arrow",
  photo: "assets/media/image/portrait.png",
  alt: "Photo of James Arrow",
  title: "Multimedia + Web Designer",
  description: "I'm a digital animator, graphic and web designer with a Masters' degree in Digital Media under my belt. I began with studying animation and digital media, having become proficient in Adobe Creative Suite and have recently begun learning web design and programming.<br><br> I am flexible and eager to learn new skills, passionate about computer technology and welcoming of a challenge."
};

const profileHead = document.createElement("div");
profileHead.classList.add("col-narrow");

const profileImg = document.createElement("img");
profileImg.src = greeting.photo;
profileImg.alt = greeting.alt;

profileHead.appendChild(profileImg);

const cvButton = document.createElement("a");
cvButton.href="assets/media/cv.pdf";
cvButton.setAttribute("download", "James Arrow's CV");
cvButton.innerHTML = "Download CV";
cvButton.classList.add("cv-button");

profileHead.appendChild(cvButton);

const profileBio = document.createElement("div");
profileBio.classList.add("col-wide");

const profileName = document.createElement("h1");
profileName.innerHTML = greeting.name;

const profileTitle = document.createElement("h2");
profileTitle.innerHTML = greeting.title;

const profileDesc = document.createElement("p");
profileDesc.innerHTML = greeting.description;

const profileContacts = document.createElement("div");
profileContacts.classList.add("contacts");

const email = document.createElement("a");
email.href = `${CONTACTS[0].link}`;
email.innerHTML = `<i class="${CONTACTS[0].iconS}"></i>meetme.jw_arrow@erine.email`;

profileContacts.appendChild(email);

profileBio.appendChild(profileName);
profileBio.appendChild(profileTitle);
profileBio.appendChild(profileDesc);
profileBio.appendChild(profileContacts);

const contactListTop = document.createElement("div");
contactListTop.classList.add("socialMedia");
for (let i=2; i<CONTACTS.length;i++) {
  let contactItem = document.createElement("a");
  contactItem.href = `${CONTACTS[i].link}`;
  contactItem.innerHTML = `<i class="${CONTACTS[i].iconS}"></i>${CONTACTS[i].title}`;
  contactListTop.appendChild(contactItem);
};
profileBio.appendChild(contactListTop);

header.appendChild(profileHead);
header.appendChild(profileBio);

// Create the Skills section
const skillsSection = document.createElement("section");
skillsSection.setAttribute("id", "skills");
skillsSection.classList.add("content-wrap");

const skillsHeading = document.createElement("h2");
skillsHeading.innerHTML = `<i class="fas fa-star"></i>&nbsp;Skills<i class="fa-solid fa-caret-down"></i>`;
skillsSection.appendChild(skillsHeading);

const skillList = document.createElement("div");
skillList.classList.add("collapsed");

skillsSection.appendChild(skillList);
main.appendChild(skillsSection);

//Populate the Skills section
for (let i = 0; i < SKILLS.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("entry");

  const skillHead = document.createElement("h3");
  skillHead.innerHTML = `<i class="${SKILLS[i].icon}">&nbsp;${SKILLS[i].title}`;

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
  skillList.appendChild(entry);
};

const skillsClose = document.createElement("div");
skillsClose.classList.add("close");
skillsClose.innerHTML = `<i class="fa-solid fa-caret-up"></i>&nbsp;Close`;
skillList.appendChild(skillsClose);


// Create the Career section
const careerSection = document.createElement("section");
careerSection.setAttribute("id", "career");
careerSection.classList.add("content-wrap");

const careerHeading = document.createElement("h2");
careerHeading.innerHTML = `<i class="fas fa-briefcase"></i>&nbsp;Career<i class="fa-solid fa-caret-down"></i>`;
careerSection.appendChild(careerHeading);

const careerList = document.createElement("div");
careerList.classList.add("collapsed");
careerSection.appendChild(careerList);
main.appendChild(careerSection);

// Populate the Career section
for (let i = 0; i < JOBS.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("entry");

  const jobContentNarrow = `
          <div class="col-narrow">
            <h3>${JOBS[i].title}</h3>
            <p>${JOBS[i].company}, ${JOBS[i].location}</p>
            <p>${JOBS[i].startDate} - ${JOBS[i].endDate}</p>
          </div>
          `;

  let jobDetails = ``;
  for (let e=0;e<JOBS[i].details.length;e++) {
    jobDetails += `<li>${JOBS[i].details[e]}</li>`;
  }

  const jobContentWide = `
  <div class="col-wide">
    <p>${JOBS[i].summary}</p>
    <ul>
      ${jobDetails}
    </ul>
  </div>
  `;

  entry.innerHTML = jobContentNarrow + jobContentWide;
  careerList.appendChild(entry);
};

const careerClose = document.createElement("div");
careerClose.classList.add("close");
careerClose.innerHTML = `<i class="fa-solid fa-caret-up"></i>&nbsp;Close`;
careerList.appendChild(careerClose);


// Create the Education section
const educateSection = document.createElement("section");
educateSection.setAttribute("id", "education");
educateSection.classList.add("content-wrap");

const educateHeading = document.createElement("h2");
educateHeading.innerHTML = `<i class="fas fa-graduation-cap"></i>&nbsp;Qualifications<i class="fa-solid fa-caret-down"></i>`;
educateSection.appendChild(educateHeading);

const educateList = document.createElement("div");
educateList.classList.add("collapsed");
educateSection.appendChild(educateList);

main.appendChild(educateSection);

// Populate the Education section
for (let i = 0; i < SCHOOLS.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("entry");

  const schoolContent = `
        <div class="col-wide">
            <h3>${SCHOOLS[i].course}</h3>
            <p class="uppercase">${SCHOOLS[i].degree}, ${SCHOOLS[i].qualification}</p>
            <p>${SCHOOLS[i].location}, ${SCHOOLS[i].date}</p>
        </div>
          `;

  entry.innerHTML = schoolContent;
  educateList.appendChild(entry);
};

const educateClose = document.createElement("div");
educateClose.classList.add("close");
educateClose.innerHTML = `<i class="fa-solid fa-caret-up"></i>&nbsp;Close`;
educateList.appendChild(educateClose);

// Create the Hobbies section
const hobbySection = document.createElement("section");
hobbySection.setAttribute("id", "hobbies");
hobbySection.classList.add("content-wrap");

const hobbyHeading = document.createElement("h2");
hobbyHeading.innerHTML = `<i class="fas fa-heart"></i>&nbsp;Interests<i class="fa-solid fa-caret-down"></i>`;
hobbySection.appendChild(hobbyHeading);

const hobbyList = document.createElement("div");
hobbyList.classList.add("collapsed");
hobbySection.appendChild(hobbyList);

main.appendChild(hobbySection);

// Populate the Hobbies section
for (let i = 0; i < HOBBIES.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("entry");

  const hobbyContent = `
      <i class="${HOBBIES[i].icon}"></i>
      <p>${HOBBIES[i].title}</p>
  `;
  entry.innerHTML = hobbyContent;
  hobbyList.appendChild(entry);
};

// Create the top navbar
const topNav = document.createElement("nav");
topNav.setAttribute("role", "navigation");
const topNavList = document.createElement("div");
topNavList.classList.add("nav-max");

// Populate the navbar
for (let i = 0; i < NAVBAR.length; i++) {
  let itemLink = document.createElement("a");
  itemLink.href = `${NAVBAR[i].link}`;
  itemLink.innerHTML = `<i class="fas ${NAVBAR[i].icon}"></i>&nbsp;${NAVBAR[i].title}`;
  topNavList.append(itemLink);
}
topNav.appendChild(topNavList);
main.appendChild(topNav);

// Create the bottom navbar
const bottomNav = document.createElement("nav");
bottomNav.setAttribute("role", "navigation");
const bottomNavList = document.createElement("div");
bottomNavList.classList.add("nav-min");

// Populate the navbar
for (let i = 0; i < NAVBAR.length; i++) {
  let itemLink = document.createElement("a");
  itemLink.href = `${NAVBAR[i].link}`;
  itemLink.innerHTML = `<i aria-hidden="true" class="fas ${NAVBAR[i].icon} fa-2x"></i><span class="sr-only">${NAVBAR[i].title}</span>`;
  bottomNavList.append(itemLink);
}
bottomNav.appendChild(bottomNavList);
main.appendChild(bottomNav);

const hobbyClose = document.createElement("div");
hobbyClose.classList.add("close");
hobbyClose.innerHTML = `<i class="fa-solid fa-caret-up"></i>&nbsp;Close`;
hobbyList.appendChild(hobbyClose);

function openSkills() {
  skillsHeading.parentElement.children[1].classList.toggle("collapsed");
  skillsHeading.parentElement.children[1].classList.toggle("list");
  skillsHeading.children[1].classList.toggle("fa-caret-down");
  skillsHeading.children[1].classList.toggle("fa-caret-up");
};

function openCareer() {
  careerHeading.parentElement.children[1].classList.toggle("collapsed");
  careerHeading.parentElement.children[1].classList.toggle("list");
  careerHeading.children[1].classList.toggle("fa-caret-down");
  careerHeading.children[1].classList.toggle("fa-caret-up");
};

function openEducate() {
  educateHeading.parentElement.children[1].classList.toggle("collapsed");
  educateHeading.parentElement.children[1].classList.toggle("list");
  educateHeading.children[1].classList.toggle("fa-caret-down");
  educateHeading.children[1].classList.toggle("fa-caret-up");
};

function openHobbies() {
  hobbyHeading.parentElement.children[1].classList.toggle("collapsed");
  hobbyHeading.parentElement.children[1].classList.toggle("list");
  hobbyHeading.children[1].classList.toggle("fa-caret-down");
  hobbyHeading.children[1].classList.toggle("fa-caret-up");
};

skillsHeading.addEventListener("click", openSkills);
careerHeading.addEventListener("click", openCareer);
educateHeading.addEventListener("click", openEducate);
hobbyHeading.addEventListener("click", openHobbies);

skillsClose.addEventListener("click", openSkills);
careerClose.addEventListener("click", openCareer);
educateClose.addEventListener("click", openEducate);
hobbyClose.addEventListener("click", openHobbies);

const skillsLink = document.querySelectorAll("a[href='#skills']");
const careerLink = document.querySelectorAll("a[href='#career']");
const educateLink = document.querySelectorAll("a[href='#education']");
const hobbyLink = document.querySelectorAll("a[href='#hobbies']");

skillsLink[0].addEventListener("click", openSkills);
careerLink[0].addEventListener("click", openCareer);
educateLink[0].addEventListener("click", openEducate);
hobbyLink[0].addEventListener("click", openHobbies);

skillsLink[1].addEventListener("click", openSkills);
careerLink[1].addEventListener("click", openCareer);
educateLink[1].addEventListener("click", openEducate);
hobbyLink[1].addEventListener("click", openHobbies);

// Create the footer
const footer = document.createElement("footer");
footer.classList.add("content-wrap");
footer.setAttribute("role", "contact");
footer.setAttribute("id", "contact");

const contactHeading = document.createElement("h2");
contactHeading.innerHTML = `<i class="fa-sharp fa-solid fa-pencil"></i>&nbsp;Let's Get in Touch!`;

const footerContacts = document.createElement("div");
footerContacts.classList.add("contacts");

const email2 = document.createElement("a");
email2.href = `${CONTACTS[0].link}`;
email2.innerHTML = `<i class="${CONTACTS[0].iconS}"></i>meetme.jw_arrow@erine.email`;

footerContacts.appendChild(email2);

const contactListBottom = document.createElement("div");
contactListBottom.classList.add("socialMedia");
for (let i=2; i<CONTACTS.length;i++) {
  let contactItem = document.createElement("a");
  contactItem.href = `${CONTACTS[i].link}`;
  contactItem.innerHTML = `<i class="${CONTACTS[i].iconL}">`;
  contactListBottom.appendChild(contactItem);
};

const year = new Date();
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${year.getFullYear()} James Arrow`;

const backToTop = document.createElement("a");
backToTop.href = "#top";
backToTop.innerHTML = `<i class="fas fa-arrow-circle-up"></i>&nbsp;Back to Top`

footer.appendChild(contactHeading);
footer.appendChild(footerContacts);
footer.appendChild(contactListBottom);
footer.appendChild(copyright);
footer.appendChild(backToTop);
body.appendChild(footer);

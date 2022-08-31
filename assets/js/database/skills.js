function skill(title,icon,skills) {
  this.title = title;
  this.icon = icon;
  this.skills = skills;
}

const SKILLS = [
  new skill(
    "OPERATING SYSTEMS",
    "fa-solid fa-computer",
    [
      ["Windows",`<i class="fa-brands fa-xl fa-windows"></i>`],
      ["Linux",`<i class="fa-brands fa-xl fa-linux"></i>`]
    ]
  ),
  new skill(
    "WEB DESIGN&nbsp;/&nbsp;CODING",
    "fa-solid fa-code",
    [
      ["HTML",`<i class="fa-brands fa-xl fa-html5"></i>`],
      ["CSS",`<i class="fa-brands fa-xl fa-css3-alt"></i>`],
      ["JavaScript",`<i class="fa-brands fa-xl fa-js-square"></i>`],
      ["Python",`<i class="fa-brands fa-xl fa-python"></i>`]
    ]
  ),
  new skill(
    "GRAPHIC DESIGN",
    "fa-solid fa-palette",
    [
      ["Clip Studio Paint",`<i class="fa-solid fa-xl fa-square"></i>`],
      ["Photoshop",`<i class="fa-solid fa-xl fa-square"></i>`],
      ["Illustrator",`<i class="fa-solid fa-xl fa-square"></i>`],
      ["InDesign",`<i class="fa-solid fa-xl fa-square"></i>`]
    ]
  ),
  new skill(
    "VIDEO&nbsp;/&nbsp;ANIMATION",
    "fa-solid fa-film",
    [
      ["After Effects",`<i class="fa-solid fa-xl fa-square"></i>`],
      ["Premiere Pro",`<i class="fa-solid fa-xl fa-square"></i>`]
    ]
  ),
];

export default SKILLS;

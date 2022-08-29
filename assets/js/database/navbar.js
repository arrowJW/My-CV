function section(title,link,icon) {
  this.title = title;
  this.link = link;
  this.icon = icon;
}

const NAVBAR = [
  new section("Skills", "#skills", "fa-star"),
  new section("Career", "#career", "fa-briefcase"),
  new section("Qualifications", "#education", "fa-graduation-cap"),
  new section("Interests", "#hobbies", "fa-heart"),
  new section("Contact", "#contact", "fa-envelope"),
];

export default NAVBAR;

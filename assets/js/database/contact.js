function contact(icon,link) {
  this.icon = icon;
  this.link = link;
}

const CONTACTS = [
  new contact("fa-brands fa-3x fa-linkedin", "https://www.linkedin.com/in/arrowjames"),
  new contact("fa-brands fa-3x fa-vimeo","https://uk.linkedin.com/in/arrowjames"),
  new contact("fa-brands fa-3x fa-deviantart","https://www.deviantart.com/coal-sekitan")
];

export default CONTACTS;

function contact(iconS,iconL,title,link) {
  this.iconS = iconS;
  this.iconL = iconL;
  this.title = title;
  this.link = link;
}

const CONTACTS = [
  new contact("fas fa-envelope", "fas fa-2x fa-envelope", "Email", "mailto:meetme.jw_arrow@erine.email"),
  new contact("fa-solid fa-mobile", "fa-solid fa-2x fa-mobile", "Phone", "tel:+447710423543"),
  new contact("fa-brands fa-linkedin", "fa-brands fa-2x fa-linkedin", "LinkedIn", "https://uk.linkedin.com/in/arrowjames"),
  new contact("fa-brands fa-vimeo", "fa-brands fa-2x fa-vimeo", "Vimeo", "https://vimeo.com/user71357499"),
  new contact("fa-brands fa-deviantart", "fa-brands fa-2x fa-deviantart", "DeviantArt", "https://www.deviantart.com/coal-sekitan")
];

export default CONTACTS;

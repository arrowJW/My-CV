function Job(title,company,location,startDate,endDate,summary,details) {
  this.title = title;
  this.company = company;
  this.location = location;
  this.startDate = startDate;
  this.endDate = endDate;
  this.summary = summary;
  this.details = details;
}

const JOBS = [
  new Job(
    "Media Designer",
    "Unit 12 CIC",
    "Winchester",
    "October 2021",
    "Now",
    "Weekly projects driven to promote the community services and upcoming events offerred by Unit 12, utilizing filming, photography, animation, art and graphic design, illustration and web design.",
    ["Optimised Unit 12's website (based on Squarespace)'s Search Engine Optimization (SEO) and User Experience (UX), which has dramatically improved search engine and visitor traffic; and incorporated new features as requested by the client, such as a Youth Employment Hub.",
    "Designed and created a logo for Unit 12's new Community Clothes Pantry.",
    "Designed and created A5 and A4-sized fliers and posters for print and social media."]
  ),
  new Job(
    "Media Designer",
    "Autism Hampshire",
    "Whiteley",
    "August 2020",
    "October 2021",
    "Various graphic design and digital animations projects undertaken for Autism Hampshire's head office to promote its services and events in print and on social media. ",
    ["Created animated shorts, with voiceover narration, to illustrate Autism Hampshire's services and how they benefit service users on the Autistic spectrum.",
    "Created printed pamphlets to promote Autism Hampshire's Corporate Fundraising event.",
    "Participated in a mass archiving project to scan archived documents of service users for easy storage and access."]
  ),
  new Job(
    "Media Designer",
    "Global E-Commerce Experts",
    "Southampton",
    "January 2020",
    "",
    "Contracted to edit live footage and create new graphics and animation to produce a series of video's for the Global E-Commerce Experts' business expansion program.",
    []
  ),
  new Job(
    "Media Assistant",
    "B&Q",
    "Chandlers Ford",
    "July",
    "October 2016",
    "Worked with a small teamin B&Q's advertisement department. Self-trained to use Cinema4D in order to model realistic furniture and other wares to promote B&Q's sales.",
    ["Created realistical scenes and models with cinematic renders, using Cinema4D.",
    "Occupied spare time by practising Cinema4D with personal belongings used as reference for modelling",
    "Used SiteImprove to optimise website by shrinking image sizes and correcting grammar errors."]
  )
];

export default JOBS;

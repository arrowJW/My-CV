function school(location,course,degree,qualification,date) {
  this.location = location;
  this.course = course;
  this.degree = degree;
  this.qualification = qualification;
  this.date = date;
}

const SCHOOLS = [
  new school("Portsmouth University","MSc Digital Media","Masters Degree", "Merit", 2018),
  new school("Southampton Solent University","BA (Hons) Animation","Bachelor's Degree", "1st Class Honours", 2015)
];

export default SCHOOLS;

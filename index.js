function Binding(b) {
  this.element = b.element; //div from html
  this.value = b.object[b.property]; //obj["key"]
  this.attribute = b.attribute; // type og dom "innerHTML"

  this.valueGetter = () => {
    return this.value; //obj["key"]
  };

  this.valueSetter = (val) => {
    this.value = val;
    this.element[this.attribute] = val; //div.innerHTML=obj["key"]
  };

  Object.defineProperty(b.object, b.property, {
    get: this.valueGetter,
    set: this.valueSetter,
  });

  b.object[b.property] = this.value;

  this.element[this.attribute] = this.value;
}

//End the function

const Title = document.getElementById("Title");
const LeadActor = document.getElementById("LeadActor");
const Producer = document.getElementById("Producer");
const YearOfProduction = document.getElementById("YearOfProduction");
const Summary = document.getElementById("Summary");
const img = document.getElementById("img");

const obj = {
  Title: Title.value,
  LeadActor: LeadActor.value,
  Producer: Producer.value,
  YearOfProduction: YearOfProduction.value,
  Summary: Summary.value,
  img: img.value,
};

const titleData = document.getElementById("title-data");

new Binding({
  object: obj,
  property: "Title",
  element: titleData,
  attribute: "innerHTML",
});
Title.addEventListener("input", (e) => {
  obj.Title = e.target.value;
});
//
const ActorData = document.getElementById("Actor-data");

new Binding({
  object: obj,
  property: "LeadActor",
  element: ActorData,
  attribute: "innerHTML",
});
LeadActor.addEventListener("input", (e) => {
  obj.LeadActor = e.target.value;
});
//
const ProducerData = document.getElementById("Producer-data");

new Binding({
  object: obj,
  property: "Producer",
  element: ProducerData,
  attribute: "innerHTML",
});
Producer.addEventListener("input", (e) => {
  obj.Producer = e.target.value;
});
//

const YearOfProductionData = document.getElementById("Year-data");

new Binding({
  object: obj,
  property: "YearOfProduction",
  element: YearOfProductionData,
  attribute: "innerHTML",
});
YearOfProduction.addEventListener("input", (e) => {
  obj.YearOfProduction = e.target.value;
});
//

const SummaryData = document.getElementById("Summary-data");

new Binding({
  object: obj,
  property: "Summary",
  element: SummaryData,
  attribute: "innerHTML",
});
Summary.addEventListener("input", (e) => {
  obj.Summary = e.target.value;
}); //

const imgData = document.getElementById("img-data");

new Binding({
  object: obj,
  property: "img",
  element: imgData,
  attribute: "innerHTML",
});


img.addEventListener("input", (e) => {
  obj.img = e.target.value;

  var file_type = img.files[0].type;
  if (
    file_type != "image/png" &&
    file_type != "image/jpeg" &&
    file_type != "image/gif"
  )
    img.setCustomValidity(
      "\n* Only 'PNG', 'JPG/JPEG' and 'GIF' file type supported."
    );
  else img.setCustomValidity("");
});

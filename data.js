let data = {};
let dataDisplayHtml = "<h2>Your data:</h2>";
const dataDisplayElement = document.getElementById("data-display");

const urlSearchParams = new URLSearchParams(window.location.search);
data = Object.fromEntries(urlSearchParams.entries());

console.log(data);

card(data);

function card(info) {
  const card = document.getElementById("card");
  card.innerHTML = `<div class="row g-0 align-items-center">
    <div class="col-md-4">
        <img src="image/${info.file}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <table>
        <tbody>
          <tr>
            <th>Title</th>
            <td>${data.Title}</td>
          </tr>
          <tr>
            <th>Lead actor</th>
            <td>${data.LeadActor}</td>
          </tr>
          <tr>
            <th>Producer</th>
            <td>${data.Producer}</td>
          </tr>
          <tr>
            <th>Year of production</th>
            <td>${data.YearOfProduction}</td>
          </tr>
          <tr>
            <th>Summary</th>
            <td>${data.Summary}</td>
          </tr>
        </tbody>
      </table>
        </div>
    </div>
</div>`;
}

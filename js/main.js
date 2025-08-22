var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteurl");
var SiteContainer = [];

if (localStorage.getItem("sitee") == null) {
  SiteContainer = [];
} else {
  SiteContainer = JSON.parse(localStorage.getItem("sitee"));
  displayWeb();
}

function addSite() {
  var Wsite = {
    name: siteName.value,
    surl: siteUrl.value,
  };

  SiteContainer.push(Wsite);
  localStorage.setItem("sitee", JSON.stringify(SiteContainer));
  displayWeb();
  emptyInput();
}

function deleteRow(i) {
  SiteContainer.splice(i, 1);
  localStorage.setItem("sitee", JSON.stringify(SiteContainer));
  displayWeb();
}

function displayWeb() {
  var cartoona = "";
  for (var i = 0; i < SiteContainer.length; i++) {
    cartoona += `
         <tr>
            <td>${i + 1}</td>
            <td>${SiteContainer[i].name}</td>
     <td>     
            <a  href="${
              SiteContainer[i].surl
            }" target="_blank" class="btn btn-success" ">
                Visit
            </a>
            </td>
            <td> 
            <button class="btn btn-danger " onclick="deleteRow(${i})" >
                Delete
            </button>
            </td>
         </tr> 
        `;
  }
  document.getElementById("tBody").innerHTML = cartoona;
}

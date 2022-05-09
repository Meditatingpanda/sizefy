const apiId = "https://api.github.com/repos";
//Syntax GET /repos/:user/:repo

let URL = location.pathname;
let size;

//KB TO MB
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [ "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

//data fetching
const FetchSize = async (url) => {
  try {
    const res = await fetch(`${apiId}${url}`);
    const Data = await res.json();
    size = Data.size;
  } catch (error) {
    console.error(error);
  }
};
//injecting to DOM
FetchSize(URL).then(() => {
  const UL = document.querySelector("#repository-container-header > nav > ul");
  const li = `<li class="d-inline-flex">SIZE: ${formatBytes(size)}</li>`;
  UL.innerHTML += li;
});

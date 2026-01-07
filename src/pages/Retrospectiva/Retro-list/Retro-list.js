const retroList = document.getElementById("retro-list");
const backBtn = document.getElementById("btn-back");

const retros = JSON.parse(localStorage.getItem("retros")) || [];

if (retros.length === 0) {
  retroList.innerHTML = "<li>Nenhuma retrospectiva cadastrada.</li>";
} else {
  retros.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="./retro-view.html?id=${r.id}" style="color:#8E2B39; text-decoration:underline;">
                      ${r.team} - ${r.sprint}
                    </a>`;
    retroList.appendChild(li);
  });
}

backBtn.addEventListener("click", () => {
  window.location.href = "./../index.html";
});

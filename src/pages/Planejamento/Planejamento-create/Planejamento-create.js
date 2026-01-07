const issueList = [];
const issueUl = document.getElementById("issue-list");

document.getElementById("add-issue").addEventListener("click", () => {
  const issueInput = document.getElementById("issue");
  if (issueInput.value.trim() === "") return;

  issueList.push(issueInput.value);
  const li = document.createElement("li");
  li.textContent = issueInput.value;
  issueUl.appendChild(li);

  issueInput.value = "";
});

document.getElementById("planning-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const team = document.getElementById("team").value;
  const sprint = document.getElementById("sprint").value;

  const newSprint = {
    team,
    sprint,
    issues: issueList.map(issue => ({
      name: issue,
      votos: { fibonacci: null, valor: null, horas: null }
    }))
  };

  let plannings = JSON.parse(localStorage.getItem("plannings")) || [];
  plannings.push(newSprint);
  localStorage.setItem("plannings", JSON.stringify(plannings));

  alert("Sprint salva com sucesso!");
  window.location.href = "./../planejamento-list/planejamento-list.html";
});

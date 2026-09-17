const MAX_DICE = 6;

function rollDice() {
  const sides = parseInt(document.getElementById("dieType").value, 10);
  const count = Math.min(
    parseInt(document.getElementById("diceCount").value, 10),
    MAX_DICE
  );

  const panel = document.getElementById("dicePanel");
  panel.innerHTML = "";
  panel.style.gridTemplateColumns = "repeat(" + count + ", 1fr)";

  let total = 0;

  for (let i = 1; i <= count; i++) {
    const value = Math.floor(Math.random() * sides) + 1;
    total += value;

    const field = document.createElement("div");
    field.className = "die-field";

    const label = document.createElement("label");
    label.setAttribute("for", "die" + i);
    label.textContent = "Die " + i;

    const input = document.createElement("input");
    input.type = "text";
    input.id = "die" + i;
    input.className = "die-value";
    input.readOnly = true;
    input.value = value;

    field.appendChild(label);
    field.appendChild(input);
    panel.appendChild(field);
  }

  document.getElementById("rollTotal").value = total;
}
document.getElementById("cauhoi1473dapan4").click();
for (let i = 1475; i <= 1501; i++) {
  try {
    document.getElementById("cauhoi" + i + "dapan5").click();
  } catch (error) {
    continue;
  }
}
document.querySelector(".btn-success").click();

//!Form có 2 đáp án câu dầu
document.getElementById("cauhoi606dapan2").click();for(let i=608;i<=633;i++){try{document.getElementById("cauhoi"+i+"dapan5").click();}catch(error){continue;}}document.querySelector('.btn-success').click();



//!Form có 2 đáp án ngay đầu - khác
//*nhớ thêm khoảng cách vào ô text nếu không submit được
document.getElementById("cauhoi334dapan2").click();for (let i=336;i<=361;i++) {try{document.getElementById("cauhoi"+i+"dapan4").click();}catch(error){continue;}}const inputElement=document.querySelector('input[class="form-control ng-untouched ng-pristine ng-valid ng-star-inserted"]');inputElement.value ="không";document.querySelector('.btn-success').click();
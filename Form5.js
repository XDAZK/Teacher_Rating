//!khóa 19-20=======================================================
document.getElementById("cauhoi363dapan4").click();//*chỗ này là sinh viên năm... thay đổi sau chỗ đáp án dựa theo số năm VD:năm 1 thì dổi thành cauhoi363dapan1
document.getElementById("cauhoi364dapan1").click();for(let i=366;i<=408;i++){try{document.getElementById("cauhoi"+i+"dapan4").click();}catch(error){continue;}}document.querySelector('.btn-success').click();



//!khóa 20-21========================================================
document.getElementById("cauhoi635dapan4").click();//*chỗ này là sinh viên năm... thay đổi sau chỗ đáp án dựa theo số năm VD:năm 1 thì dổi thành cauhoi645dapan1
document.getElementById("cauhoi636dapan1").click();for(let i=638;i<=680;i++){try{document.getElementById("cauhoi"+i+"dapan5").click();}catch(error){continue;}}document.querySelector('.btn-success').click();



//!khóa 21-22, 22-23=================================================
//*đoạn này nhớ thay đổi sdt và email trong đoan code
const inputElements = document.querySelectorAll('input[class="form-control ng-untouched ng-pristine ng-valid ng-star-inserted"]');const inputValues=
["Công nghệ thông tin",
"Công nghệ thông tin",
"kanpitest@gmail.com",//thay đổi mail đây
"0784806372"];//thay đổi sdt đây
for(let i=0;i<inputValues.length&&i<inputElements.length;i++){inputElements[i].value =inputValues[i];}for(let i=1089;i<=1146;i++){if(i==1090){document.getElementById("cauhoi1090dapan1").click();}try{  document.getElementById("cauhoi"+i+"dapan5").click();}catch(error){continue;}}
document.querySelector('.btn-success').click();
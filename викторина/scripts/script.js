var result = document.getElementById("result");

result.onclick = function () {

	let rad1=document.getElementsByName('r1');
	let rad2=document.getElementsByName('r2');
	let rad3=document.getElementsByName('r3');

	let correctAnsver1 = 0;
	let correctAnsver2 = 1;
	let correctAnsver3= 2;

    let summ = 0;

    console.log(summ);
    for (var i=0; i < rad1.length; i++){
    	if (rad1[i].checked && i == correctAnsver1) 
    		summ += 1;
    };
console.log(summ);

    for (var i=0; i <rad2.length; i++){
    	if (rad2[i].checked && i == correctAnsver2) 
    		summ += 1;
    };
    console.log(summ);

    for (var i=0; i <rad3.length; i++){
    	if (rad3[i].checked && i == correctAnsver3) 
    		summ += 1;
    };

    console.log(summ);

    if (summ == 3) 
    	alert ("хорош,го в фортнай или в кс");
    	 else if (summ == 2)
    	 	alert("бро,тебе надо тренироваться");
    	 else alert ("ну ты и чушпан" + summ);


}
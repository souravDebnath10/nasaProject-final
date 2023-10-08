console.log("Welcome");
let clicked1 = document.getElementById('drop-menu');
function open_menu() {
    if (clicked1.style.display == 'block') {
        clicked1.style.display = 'none';
    }
    else {
        clicked1.style.display = 'block';
        clicked2.style.display= "none";
        clicked3.style.display= "none";
    }
}

let clicked2 = document.getElementById('drop-menu2');
function open_menu2() {
    if (clicked2.style.display == 'block') {
        clicked2.style.display = 'none';
    }
    else {
        clicked2.style.display = 'block';
        clicked1.style.display='none';
        clicked3.style.display='none';

    }
}

let clicked3 = document.getElementById('drop-menu3');
function open_menu3() {
    if (clicked3.style.display == 'block') {
        clicked3.style.display = 'none';
    }
    else {
        clicked3.style.display = 'block';
        clicked1.style.display='none';
        clicked2.style.display='none';

    }
}


// JavaScript search bar
function search_item() { 
	let input = document.getElementById('search_obj').value 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('topic'); 
	
	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerHTML.toLowerCase().includes(input)) { 
			x[i].style.display="none"; 
		}  
        else { 
            x[i].style.display="block";                  
        } 
    } 

} 


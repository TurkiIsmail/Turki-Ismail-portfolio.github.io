const input = document.querySelector('input');
const button = document.querySelector('.plus');
var c = parseInt(localStorage.getItem("counter")) +1;

for (i = 1; i < c; i++){
     var code = String(i) +" "+"key";
    const wraperr = document.querySelector('.wraper');//select wraper
    var newaddedtask = document.createElement('div');
    newaddedtask.classList.add('task-container')
    var p = document.createElement('p')
    var buttondiv = document.createElement('div')
    buttondiv.classList.add('buttonc')
    var done = document.createElement('button');//3malt el buttonet 3
    const deletet = document.createElement('button');//
    const edittask = document.createElement('button')
    done.classList.add('button');
    done.setAttribute('id', i);
   console.log(done.getAttribute("id"));
    deletet.classList.add('button');
    deletet.setAttribute('id',i);
    edittask.classList.add('button');
    edittask.setAttribute('id',i);
    done.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';//lahne 3tithom el icons mte3hom bel HTML
    deletet.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    edittask.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
    wraperr.appendChild(newaddedtask);//w lahne 3tit child wel parent mta3 kol element zedtou
    if(localStorage.getItem(i)!=null){
    p.textContent = localStorage.getItem(i);// lahne a3titout el value eli stored
    newaddedtask.appendChild(p);
    newaddedtask.appendChild(buttondiv);
    buttondiv.appendChild(done);
    buttondiv.appendChild(deletet);
        buttondiv.appendChild(edittask);
    }
    else {
        newaddedtask.remove()
    }
    
    deletet.onclick = function () { 
        var temp = this.getAttribute("id");
        var rem = this.parentElement.parentElement;
        localStorage.removeItem(temp);
        rem.remove();
       
    }
    if (localStorage.getItem(String(i) + "c") != null) {
      newaddedtask.firstChild.classList.add('check');
           newaddedtask.classList.add('checkbg');
    }
    else if(newaddedtask.classList.contains('check')==true){
         newaddedtask.firstChild.classList.remove('check');
            newaddedtask.classList.remove('checkbg');
    }
    count=0
    edittask.onclick = function () {
        
        tamp = this.getAttribute("id");
        count =count+1
        if (count > 3) {
            count=1
        }
        console.log(count);
        if (count == 1) {
            const ph = this.parentElement.parentElement.firstElementChild;
            const inpust = document.createElement('textarea');
            inpust.classList.add('edittask');
      
            inpust.value = ph.textContent;
            console.log(inpust.value)
            this.parentElement.parentElement.insertBefore(inpust, ph);
            ph.remove();
            this.parentElement.parentElement.classList.add("edited")
        }
        else if(count==2){
           
    
            const inputx= this.parentElement.parentElement.firstElementChild;

             console.log(inputx.value);
            const px = document.createElement('p');
            localStorage.setItem(tamp,inputx.value)
            px.textContent = inputx.value;
            inputx.replaceWith(px)
            px.classList.add("width-cont")
               
            
    
        }
        else if (count == 3) {
             console.log("i  work");
            this.parentElement.parentElement.classList.remove("edited")
        }
        
    }

    done.onclick = function () {
       tamp=this.getAttribute("id");
        if(this.parentElement.previousElementSibling.classList.contains('check') == false){
            this.parentElement.previousElementSibling.classList.add('check');
            this.parentElement.parentElement.classList.add('checkbg');
            x=localStorage.getItem("counter")
            for (r = 0; r < x+1; r++){
                if (localStorage.key(r) == localStorage.key(tamp)) {
                    val = localStorage.getItem(r)
                    localStorage.setItem(String(r) + "c", val);
                    console.log(this.getAttribute("id"))
                }
            }
            

            
    }
        else  {
            
           
            this.parentElement.previousElementSibling.classList.remove('check');
           this.parentElement.parentElement.classList.remove('checkbg');
                localStorage.removeItem(String(tamp) + "c");
              
}
        
    }
    
}



input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    button.click()
}} )
button.addEventListener('click', addtask);

function addtask() {
    
    var counter = document.querySelector('.wraper').childElementCount;
    localStorage.setItem("counter", counter);

    const wraper = document.querySelector('.wraper');//select wraper

    const newtask = document.createElement('div');//3amlt div eli heya task container

    newtask.classList.add('task-container');//div 3titha class mte3ha li howa task container

    const newtask1 = document.createElement('p');//3malt el p li bch nekteb feha task

    const newtask2 = document.createElement('div');//3malt div li westha el buttons

    newtask2.classList.add('buttonc');//3titha class buttonc

    const check = document.createElement('button');//3malt el buttonet 3
    const trash = document.createElement('button');//
    const edit = document.createElement('button');//

    check.classList.add('button');//3tithom classet
    trash.classList.add('button');
    edit.classList.add('button');

    check.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';//lahne 3tithom el icons mte3hom bel HTML
    trash.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    edit.innerHTML = '<ion-icon name="create-outline"></ion-icon>';

    if (input.value !== '') {
        localStorage.setItem(counter, input.value);//takes the tasks that were writen
        newtask1.textContent = input.value;// lahne 9otlou ken fama 7aja tketbet ye5oha w y7otha f newtask 1 eli howa el p ba3d yfasa5ha mel input
        input.value = '';
        wraper.appendChild(newtask);//w lahne 3tit child wel parent mta3 kol element zedtou
        newtask.appendChild(newtask1);
        newtask.appendChild(newtask2);
        newtask2.appendChild(check);
        newtask2.appendChild(trash);
        newtask2.appendChild(edit);
        location.reload();
    }
        
    else {
        alert("please add a task!!");
    }

}
function deleteall() {
    const wraper = document.querySelector('.wraper');//select wraper
    if (wraper.childNodes[2]){//makes sure there is a task at least
        if (confirm("are you sure you want to delete all your tasks") == true) //gives a warning to delete all
            while (wraper.childNodes[2]) {
                wraper.removeChild(wraper.childNodes[2]);
            }//delets all the tasks that are writen
          localStorage.clear();
        }
    else
            alert("you got no tasks to delete");//gives a warning in case there isn't any tasks to delete
        
    
  
    
}

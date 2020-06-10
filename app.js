function allowDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }
  
  function drop(ev) {
    ev.stopPropagation();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
  } 

function populateListView(drug){
    let div,x,span,count,removedElement ;
    if(document.getElementsByClassName('.draggable')){
        removedElement = document.querySelectorAll('.draggable');
        for(let i=0;i<removedElement.length;i++){
            removedElement[i].remove();
        }
    }
    if(document.getElementsByClassName('.droppable')){
        removedElement = document.querySelectorAll('.droppable');
        for(let i=0;i<removedElement.length;i++){
            removedElement[i].remove();
        }
    }
    if(document.getElementsByClassName('.p')){
        removedElement = document.querySelectorAll('.p');
        for(let i=0;i<removedElement.length;i++){
            removedElement[i].remove();
        }
    }
    drug.forEach(function (item, index) {
        div = document.createElement('div');
        span = document.createElement('span');
        document.getElementById('drag').appendChild(span);
        span.setAttribute("class", "p");
        span.style.marginLeft = "12rem"
        span.style.fontWeight = "600"
        span.innerHTML += item.country;
        document.getElementById('drag').appendChild(div);
        div.setAttribute("id", index);
        div.setAttribute("class","droppable")
        div.setAttribute("ondrop", "drop(event)")
        div.setAttribute("ondragover", "allowDrop(event)")
        div.style.width = "20rem"
        div.style.height = "10rem"
        div.style.border = "2px solid"
        div.style.display = "block";
        div.style.marginLeft = "5rem";
    });
    drug.forEach(function (item, index) {
        count = item.hospitals
        for(let i=0; i<count ; i++){
            x = document.createElement('div');
            document.getElementById('drop').appendChild(x);
            x.setAttribute("id", i + item.country);
            x.setAttribute("class", "draggable")
            x.setAttribute("draggable", "true");
            x.setAttribute("ondragstart", "drag(event)")
            x.style.width = "10rem"
            x.style.height = "1rem"
            x.style.border = "1px solid"
            x.style.backgroundColor = "lightblue"
            x.style.marginLeft = "5rem";
            x.style.marginTop = "1rem"
            x.style.textAlign = "center"
            x.innerHTML += 'Hospital'+i;
        }
        x.style.marginBottom = "10rem"
    });
}

function display(event) {
    let drugs = [{
        drug1: [{
            country: 'India',
            hospitals: 2,
        },{
            country: 'Africa',
            hospitals: 2,
        }],
        drug2: [{
            country: 'Australia',
            hospitals: 3,
        }, {
            country: 'Germany',
            hospitals: 1,
        }],
        drug3: [{
            country: 'America',
            hospitals: 2,
        }, {
            country: 'France',
            hospitals: 3,
        }],
        drug4: [{
            country: 'Spain',
            hospitals: 4,
        }, {
            country: 'Barcelona',
            hospitals: 2,
        }],
        drug5: [{
            country: 'Japan',
            hospitals: 3,
        }, {
            country: 'Canada',
            hospitals: 3,
        }]
    }] 
    let target = event.target.id;
    if(target === 'drug1'){
        populateListView(drugs[0].drug1)
    }
    if(target === 'drug2') {
        populateListView(drugs[0].drug2)
    }
    if(target === 'drug3'){
        populateListView(drugs[0].drug3)
    }
    if(target === 'drug4'){
        populateListView(drugs[0].drug4)
    }
    if(target === 'drug5'){
        populateListView(drugs[0].drug5)
    }
}
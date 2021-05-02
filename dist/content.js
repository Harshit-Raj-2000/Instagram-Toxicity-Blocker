var bod = document.querySelector('.frMpI')
var text_array = []
var text_nodes = document.querySelectorAll('.CMoMH:not(._6FEQj)')
text_nodes.forEach(function(n){
    text_array.push(n.innerText)
})

if(text_array.length != 0){
    bod.classList.add('empty')
    add_message()
    chrome.runtime.sendMessage({message: 'text-classify', text: JSON.stringify(text_array)},res =>{
        p = JSON.parse(res.predictions)
        pred_array = p[0].results
        for(i=0; i<text_nodes.length; i++){
            if (pred_array[i].match == true){
                text_nodes[i].classList.add("disappear");
                text_nodes[i].querySelector('.ZyFrc').style.visibility = "hidden"
                
            }
        }
        remove_message()
        bod.classList.remove('empty')
        add_sensitivity_tracker()
    })
}

function add_sensitivity_tracker(){
   
    document.querySelectorAll('.disappear').forEach((elem) =>{
        elem.onclick = (e)=>{
            var see = confirm("this message might be toxic, do you really want to see it?")
            if(see == true){
                elem.classList.remove("disappear")
                elem.querySelector('.ZyFrc').style.visibility = "visible"
            }
        }
    })
}

function add_message(){
    var head = document.createElement('H1')
    head.id = "header"
    var t = document.createTextNode("Please wait while we filter the messages!");  
    head.appendChild(t);
    head.style.color = "blue"
    head.style.display = "block !important"
    head.style.padding = "20px"
    document.querySelector('.JiVIq').prepend(head)
}

function remove_message(){
    document.querySelector('#header').remove()
}
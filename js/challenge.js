document.addEventListener("DOMContentLoaded", () => {   
    //locate couter
    let count = document.getElementById('counter');
    let pause = document.getElementById('pause');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    
    let form = document.getElementById('comment-form');

    startCount();
    buildUl();

    
    function disableButtons (){
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
    }

    function enableButtons () {
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
    }

    function startCount() {
        var counting = true;
        let newCount = setInterval(timer, 1000);
        
        function timer() {
            let int = parseInt(count.innerText, 10);
            let countUp = int + 1;
            count.innerText = countUp.toString();
        }

        pause.addEventListener('click', function(e) {
            counting ? (counting = false,
                clearInterval(newCount),
                this.innerText = "Resume", disableButtons()) : (counting = true,
                    startCount(), this.innerText = "Pause", enableButtons())
        })
     
    }

    function getOccurrence(array, value) {
        return array.filter((v) => (v === value)).length;
    }
    var arr = [];

    heart.addEventListener('click', function(){

        let favorite = count.innerText;
        let int = parseInt(favorite, 10);
        arr.push(int);
      
        let like = document.getElementsByClassName("likes");
        let li = document.createElement('li');
        let liked = getOccurrence(arr, int);
        
        li.innerText = `${favorite} has been liked ${liked} times.`;
        like[0].appendChild(li);
    })

    
    
    minus.addEventListener('click', function(){
        let currentCount = parseInt(count.innerText, 10);
        let countDown = currentCount - 1;
        count.innerText = countDown.toString();
    }) 

    plus.addEventListener('click', function(){
        let currentCount = parseInt(count.innerText, 10);
        let countUp = currentCount + 1;
        count.innerText = countUp.toString();
    }) 

    function buildUl() {
        let comment = document.getElementById('list');
        let ul = document.createElement('ul');
        ul.id = "unordered-list";
        comment.appendChild(ul);
    };

    form.addEventListener('submit', function(event){
        event.preventDefault();
        let ul = document.getElementById('unordered-list');
        let input = document.getElementById('comment-input');
        let li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);
        event.target.reset(); 
    })

})





    

    
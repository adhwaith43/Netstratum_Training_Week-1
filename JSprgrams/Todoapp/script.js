
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = null;

let lastDeletedTask = null; ///undo
let lastDeletedIndex = null; ///undo
let undoTimeout = null;//undo

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function renderTasks() {

    let list = document.getElementById("taskList");  //getting the element tasklist(ul)

    let empty = document.getElementById("emptyState"); //for getting the empty state element

    let search = document.getElementById("searchInput").value.toLowerCase(); //for getting the input searched by the user

    let filter = document.getElementById("filterSelect").value;  //for getting the options in filter(all,completed,active)


    list.innerHTML = "";


    let filtered = tasks.filter(task => {

        if (filter == "active") return !task.completed;

        if (filter == "completed") return task.completed;

        return true;

    }).filter(task => task.text.toLowerCase().includes(search));


    empty.style.display = filtered.length ? "none" : "block"; //none--display the image else--dont


    filtered.forEach((task, index) => {

        let li = document.createElement("li");

        let left = document.createElement("div");

        left.className = "task-left";



        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;


        // checkbox.onchange = () => {

        //     task.completed = !task.completed;

        //     saveTasks();

        //     renderTasks();

        // };

        checkbox.onchange = () => {

            // store old state
            let wasCompleted = task.completed;

            task.completed = !task.completed;

            saveTasks();

            renderTasks();

            // trigger confetti ONLY when changing from false → true
            if(!wasCompleted && task.completed){

                fireConfetti();

            }

        };



        let text = document.createElement("span");

        text.innerText = task.text;

        if (task.completed) text.classList.add("completed");


        left.append(checkbox, text);


        let right = document.createElement("div");

        right.className = "task-right";



        // EDIT BUTTON

        let edit = document.createElement("span");

        edit.className = "icon-btn";

        edit.innerHTML = `<img src="icons/Frame 6.svg">`;

        edit.onclick = () => {

            editIndex = index;

            openModal(task.text);

        };




        // DELETE BUTTON

        let del = document.createElement("span");

        del.className = "icon-btn";

        del.innerHTML = `<img src="icons/trash-svgrepo-com 1.svg">`;

        // del.onclick = () => {

        //     tasks.splice(index, 1);

        //     saveTasks();

        //     renderTasks();

        // };


        //added undo button code
        del.onclick = () => {

        // store deleted task
        lastDeletedTask = tasks[index];

        lastDeletedIndex = index;

        // remove from array
        tasks.splice(index, 1);

        saveTasks();

        renderTasks();

        showUndo();

    };


        right.append(edit, del);


        li.append(left, right);

        list.append(li);


    });

}


function openModal(text = "") {

    let modal = document.getElementById("modal");

    modal.style.display = "flex";

    setTimeout(() => {

        modal.classList.add("show");

    }, 10);


    document.getElementById("taskInput").value = text;

}



function closeModal() {

    let modal = document.getElementById("modal");

    modal.classList.remove("show");

    setTimeout(() => {

        modal.style.display = "none";

    }, 200);

    editIndex = null;

}



document.getElementById("applyBtn").onclick = () => {

    let value = document.getElementById("taskInput").value.trim();

    if (!value) return alert("Empty not allowed");

    if (editIndex != null)

        tasks[editIndex].text = value;

    else

        tasks.push({ text: value, completed: false });

    saveTasks();

    renderTasks();

    closeModal();

};

document.getElementById("taskInput").addEventListener("keypress", function(event){

if(event.key === "Enter"){

document.getElementById("applyBtn").click();

}

});



document.getElementById("cancelBtn").onclick = closeModal;

document.getElementById("addBtn").onclick = () => openModal();

document.getElementById("searchInput").oninput = renderTasks;

document.getElementById("filterSelect").onchange = renderTasks;



document.getElementById("themeToggle").onclick = () => {

    document.body.classList.toggle("dark");

    document.body.classList.toggle("light");

    localStorage.setItem("theme", document.body.className);

};

document.body.className = localStorage.getItem("theme") || "light";


renderTasks();

/////////////// confetti//////////////

function fireConfetti(){

    const duration = 800;

    const animationEnd = Date.now() + duration;

    const defaults = {

        startVelocity: 30,

        spread: 360,

        ticks: 60,

        zIndex: 1000

    };


    function randomInRange(min, max){

        return Math.random() * (max - min) + min;

    }


    const interval = setInterval(function(){

        const timeLeft = animationEnd - Date.now();

        if(timeLeft <= 0){

            return clearInterval(interval);

        }


        const particleCount = 50 * (timeLeft / duration);


        // left side

        confetti({

            ...defaults,

            particleCount,

            origin: {

                x: randomInRange(0.1, 0.3),

                y: Math.random() - 0.2

            }

        });


        // right side

        confetti({

            ...defaults,

            particleCount,

            origin: {

                x: randomInRange(0.7, 0.9),

                y: Math.random() - 0.2

            }

        });

    }, 200);

}

 ////////////undo logic/////////
function showUndo(){

    const undoBtn = document.getElementById("undoBtn");

    undoBtn.style.display = "block";


    // clear previous timer if exists

    if(undoTimeout){

        clearTimeout(undoTimeout);

    }


    // hide after 5 seconds

    undoTimeout = setTimeout(()=>{

        undoBtn.style.display = "none";

        lastDeletedTask = null;

        lastDeletedIndex = null;

    }, 5000);

}


//////undo click logic///////

document.getElementById("undoBtn").onclick = () => {

    if(lastDeletedTask !== null){

        tasks.splice(lastDeletedIndex, 0, lastDeletedTask);

        saveTasks();

        renderTasks();

        lastDeletedTask = null;

        lastDeletedIndex = null;

        document.getElementById("undoBtn").style.display = "none";

        clearTimeout(undoTimeout);

    }

};
//getting all required elements...
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// onkeyup event
inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.nodeValue;
    if(userEnteredValue.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

showTasks();

addBtn.onclick = ()=>{
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
}


var container = document.getElementById("container");
var row = document.getElementById("row");
container.appendChild(row);
// 
var empty = document.createElement("div");
empty.setAttribute("class" , "col")
row.appendChild(empty);
// 
var data = document.createElement("div");
row.appendChild(data);
data.setAttribute("class" , "col-5")
data.setAttribute("id" , "dataSection")
// 
var todo = document.createElement("p");
data.appendChild(todo);
todo.innerHTML = "Todo list";
todo.setAttribute("id" , "todo");
var getData = document.createElement("div");
data.appendChild(getData);
getData.setAttribute("id" , "getdata")
var input = document.createElement("input");
getData.appendChild(input);
input.setAttribute("type" , "text")
input.setAttribute("placeholder" , "type something.....")
input.setAttribute("id" , "input")
var submitData = document.createElement("button");
getData.appendChild(submitData);
submitData.innerHTML = "submit";
submitData.setAttribute("id" , "submit")
submitData.setAttribute("onclick" , "submit()")
// 
var message = document.createElement("p");
data.appendChild(message);
var deleteAll = document.createElement("button");
deleteAll.setAttribute("id" , "delallbutton")
data.appendChild(deleteAll);
deleteAll.innerHTML = "deleteAll";
var ul = document.createElement("ul");
data.appendChild(ul);
// delete all 
deleteAll.addEventListener("click" , function(){
    ul.innerHTML = "";
})
function submit(){
    if(input.value === ""){
        message.innerHTML = "Type something....."
        message.style.display = "block";
        message.setAttribute("id" , "error");
        input.focus();
        setTimeout(() => {
        message.style.display = "none";
        }, 500);
    }else{
        message.innerHTML = "success";
        message.style.display = "block";
        message.setAttribute("id" , "success")
        setTimeout(() => {
        message.style.display = "none";
        input.value = "";
            }, 500);
            var userData = document.createElement("div");
            ul.appendChild(userData);
            userData.setAttribute("id" , "userdata")
            var list = document.createElement("div");
            userData.appendChild(list)
            var li = document.createElement("li");
            list.appendChild(li);
            li.innerHTML = input.value;
            // 
            var update = document.createElement("div");
            userData.appendChild(update)
            // 
            var editButton = document.createElement("button");
            update.appendChild(editButton);
            editButton.setAttribute("id" , "editbutton")
            var editButtonIcon = document.createElement("img");
            editButton.appendChild(editButtonIcon)
            editButtonIcon.setAttribute("src" , "./images/edit.png")
            editButtonIcon.setAttribute("id" , "editicon")
            // 
            var deleteButton = document.createElement("button");
            deleteButton.setAttribute("id" , "delbutton")
            update.appendChild(deleteButton);
            var deleteButtonIcon = document.createElement("img");
            deleteButton.appendChild(deleteButtonIcon);
            deleteButtonIcon.setAttribute("src" , "./images/delete.png")
            deleteButtonIcon.setAttribute("id" , "deleteicon")
                 // edit todo
           editButton.addEventListener("click" , function(){
            var editTodo = prompt("");
            li.innerHTML = editTodo;
          })
          //delet todo
          deleteButton.addEventListener("click", function(){
            userData.innerHTML = "";
          } )
    }
}

// 
var empty2 = document.createElement("div");
empty2.setAttribute("class" , "col")
row.appendChild(empty2);
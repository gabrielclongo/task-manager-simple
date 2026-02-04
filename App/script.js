document.addEventListener("DomContentLoaded", function () {
    const button = document.getElementbyId("completeTaskBtn");

    if (button) {
      button.addEventListener("click", function (){
        alert("Task completed! Notification sent.");
      }); 
    }
});
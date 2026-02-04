document.addEventListener("DomContentLoaded", function () {
    const button = document.getElementById("completeTaskBtn");

    if (button) {
      button.addEventListener("click", function () {
        alert("Task completed! Notification sent.");
      }); 
    }
});
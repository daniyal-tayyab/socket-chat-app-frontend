import sendNotification from "./sendNotification";

export default function checkPageStatus(message, username) {
  if (username !== localStorage.getItem("username")) {
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") {
      sendNotification(message, username);
    } else if (Notification.permission === "denied") {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          sendNotification(message, username);
        }
      });
    }
  }
}

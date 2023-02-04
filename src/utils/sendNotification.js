export default function sendNotification(message, username) {
  if (document.onvisibilitychange) {
    if (document.hidden) {
      const notification = new Notification("New message from Open Chat", {
        icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
        body: `@${username}: ${message}`,
      });

      notification.onclick = () => {
        window.open("http://localhost:3000/chat");
      };
    }
  }
}

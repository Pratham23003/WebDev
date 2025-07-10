
//create a function createMessage that takes a sender (default "System") and ...recipients (rest parameter) as arguments.
const createMessage = (sender = "System", ...recipients) => {
    let recipientsList = recipients.length > 0 ? recipients.join(", ") : "All";
    console.log(`From: ${sender} To: ${recipientsList} Message: ABCDEFGH`);
}
createMessage("Aloo", "Pyaaz", "Tamaatar", "Dhaniya");
createMessage();
createMessage("", "PavBhaji","DOSA");
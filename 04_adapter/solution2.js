const twilio = require("twilio");
const nodemailer = require("nodemailer");
const { WebClient } = require("@slack/web-api");

// Function to send notifications via email
const createEmailAdapter = (service, auth) => async (message, recipient) => {
  const transporter = nodemailer.createTransport(config);

  await transporter.sendMail({
    from: "no-reply@example.com",
    to: recipient,
    subject: "Notification",
    text: message,
  });
};

// Function to send notifications via SMS
const createSMSAdapter =
  (accountSid, authToken) => async (message, recipient) => {
    const client = twilio(accountSid, authToken);

    await client.messages.create({
      body: message,
      from: "+1234567890",
      to: recipient,
    });
  };

// Function to send notifications via Slack
const createSlackAdapter = (token, channel) => async (message) => {
  const client = new WebClient(token);

  await client.chat.postMessage({
    channel,
    text: message,
  });
};

// Main function to send notifications
async function sendNotification(service, message, recipient) {
  try {
    await adapter(message, recipient);

    console.log("Notification sent successfully");
  } catch (error) {
    console.error("Error sending notification:", error.message);
  }
}

const emailAdapter = createEmailAdapter("service", "auth");
const smsAdapter = createSMSAdapter("twilio_account_sid", "twilio_auth_token");
const slackAdapter = createSlackAdapter("slack_token", "slack_channel");

// Send notifications using different services
sendNotification(emailAdapter, "Hello via Email!", "recipient@example.com");
sendNotification(smsAdapter, "Hello via SMS!", "+1234567890");
sendNotification(slackAdapter, "Hello via Slack!");

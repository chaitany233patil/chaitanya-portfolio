import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMail = async (name: string, email: string, message: string) => {
  const info = await transporter.sendMail({
    from: `"Portfolio Contact"`,
    to: "patilchaitany529@gmail.com",
    subject: `New Portfolio Contact from ${name}`,
    text: `
        You have a new message from your portfolio contact form:

        ---------------------------------
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
        ---------------------------------
    `,
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #4CAF50;">📩 New Portfolio Contact</h2>
        <p>You have received a new message from your portfolio website:</p>
        <table cellpadding="6" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
            <tr>
            <td style="font-weight: bold; width: 80px;">Name:</td>
            <td>${name}</td>
            </tr>
            <tr>
            <td style="font-weight: bold;">Email:</td>
            <td><a href="mailto:${email}" style="color: #4CAF50;">${email}</a></td>
            </tr>
            <tr>
            <td style="font-weight: bold; vertical-align: top;">Message:</td>
            <td style="white-space: pre-wrap;">${message}</td>
            </tr>
        </table>
        <br />
        <p style="font-size: 12px; color: #777;">This message was sent via your portfolio contact form.</p>
        </div>
    `,
  });
  console.log("Message sent:", info.messageId);
};

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  try {
    await sendMail(name, email, message);
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send mail" }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify({ message: "Mail sent successfully" }), {
    status: 200,
  });
}

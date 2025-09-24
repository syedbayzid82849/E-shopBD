import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: `"Support" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
    });

    console.log("📧 Email sent: %s", info.messageId);
};

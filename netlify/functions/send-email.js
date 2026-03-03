import nodemailer from "nodemailer";

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const data = JSON.parse(event.body);
        const { formName } = data;

        let emailSubject = "New Form Submission";
        let emailHtml = `<h2>New submission from ${formName}</h2>`;

        if (formName === "contact") {
            const { fullName, phoneNumber, message } = data;
            emailSubject = "New Contact Form Message - Crown Cargo";
            emailHtml += `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
        } else if (formName === "cargo-quote") {
            const { originCountry, destinationCountry, serviceType, weight, phone, email, message } = data;
            emailSubject = "New Cargo Quote Request - Crown Cargo";
            emailHtml += `
        <p><strong>Origin:</strong> ${originCountry}</p>
        <p><strong>Destination:</strong> ${destinationCountry}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Weight:</strong> ${weight}</p>
        <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Details:</strong> ${message}</p>
      `;
        } else if (formName === "cargo-enquiry") {
            const { fullName, email, phone, country, message } = data;
            emailSubject = "New Cargo Enquiry - Crown Cargo";
            emailHtml += `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS?.replace(/\s+/g, ""),
            },
        });

        const senderEmail = data.email || process.env.EMAIL_USER;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            replyTo: senderEmail,
            subject: emailSubject,
            html: emailHtml,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message }),
        };
    }
}

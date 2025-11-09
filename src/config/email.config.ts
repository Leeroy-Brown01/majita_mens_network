/**
 * EmailJS Configuration
 * 
 * To set up EmailJS for your contact form:
 * 
 * 1. Go to https://www.emailjs.com/ and sign up for a free account
 * 2. Create an Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template with these variables:
 *    - {{from_name}} - Sender's name
 *    - {{from_email}} - Sender's email
 *    - {{category}} - Message category
 *    - {{message}} - The message content
 *    - {{to_email}} - Your receiving email (majitamensnetwork@gmail.com)
 * 4. Get your Public Key from Account > API Keys
 * 5. Replace the placeholder values below with your actual credentials
 * 
 * Example Email Template:
 * Subject: New Contact Form Message - {{category}}
 * 
 * You have received a new message from Majita Men's Network website:
 * 
 * Name: {{from_name}}
 * Email: {{from_email}}
 * Category: {{category}}
 * 
 * Message:
 * {{message}}
 * 
 * ---
 * Reply to: {{from_email}}
 */

export const EMAIL_CONFIG = {
     SERVICE_ID: 'service_15x1emz',
     TEMPLATE_ID: 'template-vgqkypr',
     PUBLIC_KEY: 'voyYKdZTbx83RSvQa',
     TO_EMAIL: 'brownleeroy010@gmail.com',
   };

/**
 * Alternative: Use environment variables (recommended for production)
 * Create a .env file in the root directory with:
 * 
 * VITE_EMAILJS_SERVICE_ID=your_service_id
 * VITE_EMAILJS_TEMPLATE_ID=your_template_id
 * VITE_EMAILJS_PUBLIC_KEY=your_public_key
 * 
 * Then uncomment the code below and comment out the above export:
 */

/*
export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  TO_EMAIL: 'majitamensnetwork@gmail.com',
};
*/

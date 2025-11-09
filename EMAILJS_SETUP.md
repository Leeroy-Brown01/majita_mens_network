# EmailJS Setup Guide for Contact Form

Your contact form is now configured to send real emails using EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select Gmail and click "Connect Account"
   - Follow the OAuth authorization to connect your majitamensnetwork@gmail.com
4. Give your service a name (e.g., "Majita Contact Form")
5. Copy the **Service ID** (looks like `service_abc1234`)

## Step 3: Create Email Template

1. In your EmailJS dashboard, click "Email Templates"
2. Click "Create New Template"
3. Configure the template:

### Template Settings:
- **Template Name**: "Contact Form Submission"
- **Subject**: `New Contact Form Message - {{category}}`

### Email Content:
```
Hello Majita Team,

You have received a new message from the Majita Men's Network website.

**Contact Details:**
Name: {{from_name}}
Email: {{from_email}}
Category: {{category}}

**Message:**
{{message}}

---
This message was sent from the contact form at majitamensnetwork.com
Reply directly to: {{from_email}}
```

### Template Variables to Use:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{category}}` - Message category (General Inquiry, Need Support, Want to Collaborate)
- `{{message}}` - The actual message content
- `{{to_email}}` - Your receiving email (majitamensnetwork@gmail.com)

4. Set the "To Email" field to: `{{to_email}}` or directly to `majitamensnetwork@gmail.com`
5. Click "Save"
6. Copy the **Template ID** (looks like `template_xyz5678`)

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, click on your username (top right)
2. Select "Account" from the dropdown
3. Go to the "API Keys" tab
4. Copy your **Public Key** (looks like a long string)

## Step 5: Update Configuration File

1. Open the file: `src/config/email.config.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_abc1234', // Your Service ID from Step 2
  TEMPLATE_ID: 'template_xyz5678', // Your Template ID from Step 3
  PUBLIC_KEY: 'your_actual_public_key', // Your Public Key from Step 4
  TO_EMAIL: 'majitamensnetwork@gmail.com',
};
```

## Step 6: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact page
3. Fill out the form with test information
4. Click "Send Message"
5. Check your majitamensnetwork@gmail.com inbox for the test email

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all three credentials (Service ID, Template ID, Public Key) are correct
- Ensure your EmailJS service is connected and active
- Check EmailJS dashboard for error logs

### Getting "Invalid template" error?
- Make sure your template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{category}}`, `{{message}}`
- Verify the Template ID is copied correctly

### Emails going to spam?
- In your EmailJS template, add a proper "From" name
- Consider adding your website domain to EmailJS settings
- Ask users to whitelist majitamensnetwork@gmail.com

## Alternative: Environment Variables (Recommended for Production)

For better security, use environment variables:

1. Create a `.env` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. In `src/config/email.config.ts`, comment out the current export and uncomment the environment variable section

3. Add `.env` to your `.gitignore` file to keep credentials secure

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Common Issues: https://www.emailjs.com/docs/faq/

---

**Note**: The free plan allows 200 emails per month. If you expect more traffic, consider upgrading to a paid plan or implementing a backend email solution.

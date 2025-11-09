# Quick Start: Email Setup

## ✅ What's Been Done

1. ✅ Installed `@emailjs/browser` package
2. ✅ Updated ContactForm component to send real emails
3. ✅ Created email configuration file (`src/config/email.config.ts`)
4. ✅ Added `.env` to `.gitignore` for security
5. ✅ Created setup documentation (`EMAILJS_SETUP.md`)
6. ✅ Built successfully - no errors

## 🚀 To Make It Work

### Quick Setup (5 minutes):

1. **Sign up at EmailJS**: https://www.emailjs.com/
   - Free plan: 200 emails/month
   
2. **Connect Gmail**:
   - Add Email Service → Choose Gmail
   - Authorize with majitamensnetwork@gmail.com
   - Copy the Service ID

3. **Create Template**:
   - Name: "Contact Form"
   - Subject: `New Message - {{category}}`
   - Use these variables: `{{from_name}}`, `{{from_email}}`, `{{category}}`, `{{message}}`
   - Copy the Template ID

4. **Get Public Key**:
   - Account → API Keys
   - Copy your public key

5. **Update Config**:
   Open `src/config/email.config.ts` and replace:
   ```typescript
   export const EMAIL_CONFIG = {
     SERVICE_ID: 'service_15x1emz',
     TEMPLATE_ID: 'template-vgqkypr',
     PUBLIC_KEY: 'voyYKdZTbx83RSvQa',
     TO_EMAIL: 'brownleeroy010@gmail.com',
   };
   ```

6. **Test**:
   ```bash
   npm run dev
   ```
   Go to Contact page and send a test message!

## 📋 Current Status

- **Email sending**: ✅ Configured (needs EmailJS credentials)
- **Form validation**: ✅ Working
- **Error handling**: ✅ Included
- **Success feedback**: ✅ Shows confirmation message
- **Form reset**: ✅ Clears after successful send
- **Email recipient**: majitamensnetwork@gmail.com

## 📝 What Happens When Someone Submits:

1. Form validates all fields (name, email, category, message)
2. Shows "Sending..." on the button
3. Sends email via EmailJS to majitamensnetwork@gmail.com
4. Shows success message: "Thank you for reaching out..."
5. Clears the form for next user
6. If error: Shows fallback message with direct email

## 🔒 Security Note

Never commit your actual EmailJS credentials to Git!
- Use the `.env` file for credentials (already in .gitignore)
- Or update `src/config/email.config.ts` directly (be careful not to push)

## 📖 Full Documentation

See `EMAILJS_SETUP.md` for complete step-by-step instructions with screenshots guidance.

## ❓ Need Help?

If emails aren't working:
1. Check browser console for errors
2. Verify all 3 credentials are correct
3. Test the EmailJS template directly in their dashboard
4. Check EmailJS usage limits (200/month on free plan)

---

**Current file to edit**: `src/config/email.config.ts`
**Test location**: http://localhost:5173/contact

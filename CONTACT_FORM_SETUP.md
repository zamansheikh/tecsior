# Contact Form Setup Guide

## What I've Done

I've set up your contact form to automatically send emails when users submit the form. Here's what's included:

### ✅ Changes Made:

1. **Contact Page** (`app/contact/page.tsx`):
   - Converted to a client component with form state management
   - Added form submission handling
   - Added success/error messages
   - Form clears after successful submission

2. **API Route** (`app/api/contact/route.ts`):
   - Created a backend endpoint to handle form submissions
   - Sends emails using Resend (free email service)
   - Validates form data before sending
   - Includes error handling

3. **Environment Variables** (`.env.local`):
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_EMAIL`: Email where you receive messages

4. **Dependencies**:
   - Installed `resend` package for email delivery

## Setup Steps

### Step 1: Get Resend API Key

1. Go to https://resend.com
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the API key

### Step 2: Update `.env.local`

Replace `your_resend_api_key_here` with your actual Resend API key:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=programmernexus.com@gmail.com
```

### Step 3: Verify Email Domain (Optional but Recommended)

By default, Resend uses `onboarding@resend.dev`. To send from your own domain:

1. In Resend dashboard, add your domain (e.g., `noreply@programmernexus.com`)
2. Update the `from` field in `app/api/contact/route.ts` line 27:
   ```typescript
   from: "noreply@programmernexus.com",
   ```

### Step 4: Deploy to Vercel

1. Push your changes to GitHub
2. Add the environment variable in Vercel:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` with your API key
   - Add `CONTACT_EMAIL` with your email

## How It Works

1. User fills out the contact form
2. Clicks "Send Message"
3. Form data is sent to `/api/contact` endpoint
4. Backend validates the data
5. Email is sent to your inbox using Resend
6. User sees a success message
7. Form clears for next submission

## Email Format

The email will include:
- Sender's name
- Sender's email (as reply-to)
- Company (if provided)
- Project type
- Budget range (if provided)
- Full project details

## Troubleshooting

**Issue: "Failed to send message" error**
- Check your Resend API key is correct
- Make sure environment variable is set in Vercel

**Issue: Emails going to spam**
- Verify your domain with Resend
- This improves email deliverability

**Issue: Form not submitting**
- Check browser console for errors (F12)
- Make sure API route is deployed

## Free Tier Limits

Resend free tier includes:
- ✅ 100 emails per day
- ✅ Unlimited receivers
- ✅ Full API access
- ✅ No credit card required

## Next Steps (Optional)

You can also add:
- **Database storage**: Save submissions to database (Supabase, Firebase)
- **Email notifications to users**: Send confirmation email to users
- **Rate limiting**: Prevent spam submissions
- **Admin dashboard**: View all submissions

Let me know if you need help with any of these!

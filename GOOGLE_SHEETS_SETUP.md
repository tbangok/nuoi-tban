# SETUP GOOGLE SHEETS INTEGRATION

Follow these steps to connect your donation form to Google Sheets:

## 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## 2. Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## 3. Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Click "Create" - a JSON file will be downloaded

## 4. Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Nuôi Em - Donations" (or whatever you prefer)
4. In the first row, add these headers:

   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Contact`
   - D1: `Amount (VND)`
   - E1: `Message`

5. Share the spreadsheet with your service account:
   - Click the "Share" button
   - Paste the service account email (from the JSON file: `client_email`)
   - Give it "Editor" permissions
   - Click "Send"

## 5. Setup Environment Variables

1. Create a `.env.local` file in your project root
2. Copy the content from `.env.example`
3. Fill in the values:

```env
GOOGLE_CLIENT_EMAIL=<client_email from JSON file>
GOOGLE_PRIVATE_KEY="<private_key from JSON file>"
GOOGLE_SHEET_ID=<copy from sheet URL>
```

### Where to find values:

- **GOOGLE_CLIENT_EMAIL**: Open the downloaded JSON file, copy the value of `client_email`
- **GOOGLE_PRIVATE_KEY**: Copy the entire `private_key` value (including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`)
- **GOOGLE_SHEET_ID**: From your Google Sheet URL:
  ```
  https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
  ```

## 6. Restart Your Development Server

```bash
npm run dev
```

## Testing

1. Fill out the donation form on your website
2. Click "Gửi lời nhắn"
3. Check your Google Sheet - a new row should appear with the submission data!

## Important Notes

- Keep your `.env.local` file SECRET - never commit it to GitHub
- Add `.env.local` to your `.gitignore` file
- For production deployment (Vercel, etc.), add these environment variables in your hosting platform's settings

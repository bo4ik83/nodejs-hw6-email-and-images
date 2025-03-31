import { sendEmail } from './src/utils/sendMail.js';

sendEmail('your-email@example.com', 'Test Email', 'This is a test message')
  .then(() => console.log('✅ Email sent successfully'))
  .catch((error) => console.error('❌ Error sending email:', error));


'use server';

import { contactFormSchema } from '@/lib/form-schemas';

export type ContactFormState = {
  message: string;
  status: 'success' | 'error';
} | null;


export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      // Aggregate error messages
      const errorMessages = validatedFields.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join('\\n');
      return {
        message: `Validation failed: ${errorMessages}`,
        status: 'error',
      };
    }
    
    const { name, email, message } = validatedFields.data;

    // In a real application, you would send an email or save to a database here.
    // For this example, we'll just log it and simulate success.
    console.log('Contact form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      status: 'success',
    };

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      status: 'error',
    };
  }
}

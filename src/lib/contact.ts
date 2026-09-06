export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  estimatedUnits?: string;
  projectTimeline?: string;
  message: string;
  brief?: string;
  website?: string;
}

export async function submitContactForm(form: HTMLFormElement): Promise<void> {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Ensure "message" is populated even if textarea uses "brief"
  if (data.brief && !data.message) {
    data.message = data.brief;
  }

  const response = await fetch('https://modular-design-backend.vercel.app/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = (await response.json().catch(() => ({}))) as {
    success?: boolean;
    ok?: boolean;
    message?: string;
  };

  // Support both "ok: true" and "success: true" response structures
  const isSuccessful = result.ok === true || result.success === true;

  if (!response.ok || !isSuccessful) {
    throw new Error(result.message || 'Unable to send your enquiry right now. Please try again.');
  }
}
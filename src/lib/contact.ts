export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  estimatedUnits?: string;
  projectTimeline?: string;
  message?: string;
  brief?: string;
  website?: string;
}

const PROJECT_TYPE_NORMALIZATION: Record<string, string> = {
  "Modular Space Capsule": "Space Capsule",
  "Resort & Hospitality Enclave": "Hotel or Retreat",
  "Private Estate Retreat": "Private Project",
  "Commercial & Wellness Space": "Commercial Space",
  "Architectural Partnership": "Architectural Partnership",
  "Masterplan Community Amenity": "Community Amenity",
  "Modular Home": "Private Project",
  "Modular Hotel or Retreat": "Hotel or Retreat",
  "Modular Office": "Workplace",
  "Café, Bar, or Restaurant": "Commercial Space",
  "Retail or Pop-Up": "Commercial Space",
  "Pool or Outdoor Amenity": "Community Amenity",
};

export async function submitContactForm(form: HTMLFormElement): Promise<void> {
  const formData = new FormData(form);
  const data: Record<string, any> = Object.fromEntries(formData.entries());

  // Ensure both "brief" and "message" are populated for compatibility
  const briefText = (data.brief || data.message || "").toString().trim();
  data.brief = briefText;
  data.message = briefText;

  // Normalize projectType so backend receives supported category
  if (data.projectType) {
    const rawType = data.projectType.toString().trim();
    data.projectType = PROJECT_TYPE_NORMALIZATION[rawType] || rawType;
  }

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://modular-design-backend.vercel.app";

  const response = await fetch(`${apiUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    throw new Error(
      result.message ||
        "Unable to submit your advisory brief right now. Please try again."
    );
  }
}
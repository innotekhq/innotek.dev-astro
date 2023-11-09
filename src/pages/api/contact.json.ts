export default async function handler(req, res) {
  const formData = req.body;
  // Process the form data
  console.log('formData', formData);
  res.status(200).json({ message: 'Form data received' });
}

export const prerender = false;

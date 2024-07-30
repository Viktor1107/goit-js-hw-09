const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

populateForm();

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  if (!form.elements.email.value || !form.elements.message.value) {
    alert('Please fill in both fields');
    return;
  }
  console.log('Submitted data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function handleFormInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;
    const parsedData = JSON.parse(savedData);
    for (const [key, value] of Object.entries(parsedData)) {
      form.elements[key].value = value;
      formData[key] = value;
    }
  } catch (err) {
    console.error('Error parsing localStorage data:', err);
  }
}

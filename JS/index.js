document.addEventListener('DOMContentLoaded', (event) => {
  const queryParams = new URLSearchParams(window.location.search);
  const title = queryParams.get('title');
  const eventName = queryParams.get('eventName');
  const startDate = queryParams.get('startDate');

  const endDate = queryParams.get('endDate');

  const about = queryParams.get('about');

  const address = queryParams.get('address');

  const contactName = queryParams.get('contactName');

  const phoneNumber = queryParams.get('phoneNumber');

  const email = queryParams.get('email');

  const website = queryParams.get('website');

  if (title) {
    document.getElementById('title').textContent = title;
  }
  if (eventName) {
    document.getElementById('eventName').textContent = eventName;
  }
  if (startDate) {
    document.getElementById('startDate').textContent = startDate;
  }
  if (endDate) {
    document.getElementById('endDate').textContent = endDate;
  }
  if (about) {
    document.getElementById('about').textContent = about;
  }
  if (address) {
    document.getElementById('address').textContent = address;
  }
  if (contactName) {
    document.getElementById('contactName').textContent = contactName;
  }
  if (phoneNumber) {
    document.getElementById('phoneNumber').textContent = phoneNumber;
  }
  if (email) {
    document.getElementById('email').textContent = email;
  }
  if (website) {
    document.getElementById('website').textContent = website;
  }
});

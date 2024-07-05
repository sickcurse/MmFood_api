const apiUrl = 'https://foodish-api.com/api/';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('API Response:', data);
    if (data.image) {
      const imgElement = document.createElement('img');
      imgElement.src = data.image;
      imgElement.alt = 'Random Food Image';
      imgElement.classList.add('fixed-size-image');

      const resultsContainer = document.getElementById('RandomFood');
      resultsContainer.innerHTML = ''; // Clear any previous content
      resultsContainer.appendChild(imgElement);
    } else {
      throw new Error('No image data available');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    const resultsContainer = document.getElementById('RandomFood');
    resultsContainer.textContent = 'Error fetching image.';
  });

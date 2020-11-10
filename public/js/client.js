// Import custom module
import { ham } from './hamburger.js';

// Asynchronous gallery fetch
fetch(`${window.location.origin}/api/v0/gallery`)
  .then((response) => {
    // JSON returned from server
    // We need to convert it into a Javascript object
    return response.json();
  })
  .then((stadiums) => {
    // `data Javascript object
    console.log(stadiums);
    let output = '';
    stadiums.forEach((stadium) => {
      output += `
        <figure class="card">
          <img src=${stadium.image_path} alt="${stadium.title} football stadium: ${stadium.description}">
          <figcaption>
            <h2>${stadium.description}</h2>
          </figcaption>
        </figure>
      `;
    });
    // Output to DOM
    document.querySelector('.gallery').innerHTML = output;
  })
  .catch((error) => {
    console.log('Oooooooops!');
  });


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
        <figure>
          <img src="images/${stadium.club}.jpg" alt="${stadium.club} football stadium: ${stadium.name}">
          <figcaption>
            <h2>${stadium.name}</h2>
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


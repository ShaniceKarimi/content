
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      console.log(`You clicked on ${link.textContent}`);
    });
  });
  

  document.querySelectorAll('.destination img').forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });


const africaSafarisButton = document.createElement('button');
africaSafarisButton.textContent = 'Africa Safaris';
africaSafarisButton.id = 'africa-safaris-button';

var africaSafarisButton = document.getElementById("africa-safaris-button");

africaSafarisButton.style.padding = "12px 30px"; 
africaSafarisButton.style.fontSize = "18px"; 


africaSafarisButton.addEventListener('click', () => {

  const countryButtonsContainer = document.createElement('div');
  countryButtonsContainer.id = 'country-buttons-container';


  const kenyaButton = document.createElement('button');
  kenyaButton.textContent = 'Kenya';
  kenyaButton.id = 'kenya-button';


  const tanzaniaButton = document.createElement('button');
  tanzaniaButton.textContent = 'Tanzania';
  tanzaniaButton.id = 'tanzania-button';


  const malawiButton = document.createElement('button');
  malawiButton.textContent = 'Malawi';
  malawiButton.id = 'malawi-button';


  countryButtonsContainer.appendChild(kenyaButton);
  countryButtonsContainer.appendChild(tanzaniaButton);
  countryButtonsContainer.appendChild(malawiButton);


  document.body.appendChild(countryButtonsContainer);
});


document.body.appendChild(africaSafarisButton);
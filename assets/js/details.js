
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = `https://pokeapi.co/api/v2/pokemon/?id=${id}`

const fetchData = (url) => {
    return fetch(url)
        .then((response) => response.json());
};

const renderAbilities = (abilities) => {
    return abilities.map((ability) => `<span class="type">${ability.ability.name}</span>`).join('');
};

const renderStats = (stats) => {
    return stats.map((stat) => `
      
            <div class="details_content"><span class="list ">${stat.stat.name}:</span>
            <span class="type">${stat.base_stat}</span></div>
         
   `).join('');
};

const renderPokemonDetails = (pokemon) => {
    const { types, name, id, sprites, abilities, height, weight, base_experience, stats } = pokemon;


    // Determinar o tipo principal do Pokémon (usaremos o primeiro tipo da lista)
    const primaryType = types.length > 0 ? types[0].type.name : '';

    const typeSpans = types.map((typeSlot) => {
        const typeName = typeSlot.type.name;
        return `<span class="type ${typeName}">${typeName}</span>`;
    }).join('');

    return `
      <div id="pokemonDetail" class="detailList ${primaryType}">
         <div class="header">
            <a href="index.html"><span class="material-symbols-outlined icon">keyboard_backspace</span></a>
            <span class="material-symbols-outlined icon">favorite</span>
         </div>
         <div class="name-types">
            <ul id="data-head">
               <li class="name-title">${name}</li> 
               <li>${typeSpans}</li>
               <li class="number">#${id}</li> 
               <li class="img" id="data-img">
                  <img src="${sprites.other.dream_world.front_default}" class="pokemon-img" alt="${name}" />
               </li>
            </ul>
            <div class="box-data">
               <div class="table_data">
                  <div class="details_title ${primaryType}"><h2>Details</h2></div>

                     <div class="details_content"><span class="list">Abilities:</span>${renderAbilities(abilities)}</div>
                     <div class="details_content"><span class="list">Height:</span><span class="type">${height}</span></div>
                     <div class="details_content"><span class="list">Weight:</span><span class="type">${weight}</span></div>
                     <div class="details_content"><span class="list">Base Experience:</span><span class="type">${base_experience}</span></div>
                
                     <div class="details_title ${primaryType}"><h3>Base Stats</h3></div>
                  
                 ${renderStats(stats)}
               
               </div>
            </div>
         </div>
      </div>
   `;
};

fetchData(url)
    .then(renderPokemonDetails)
    .then((html) => {
        const sectionContent = document.getElementById('section_content');
        sectionContent.innerHTML += html;
    });

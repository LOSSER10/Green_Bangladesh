const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(json => display(json.categories));
};

const display = (categories) => {
  const levelContainer = document.getElementById("Categories-container");
  levelContainer.innerHTML = "";

  for (let category of categories) {
   // console.log(category);

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button onclick="loadCategoryPlants('${category.id}')" class="block w-full text-left py-2 px-3 bg-green-100 hover:bg-green-200 rounded-md my-1 text-2xl font-semibold">
        ${category.category_name}
      </button>
    `;

    levelContainer.append(btnDiv);
  }
};
/////////////////////////////////////////////////////////////

// Load plant API data
const loadPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(json => displayPlants(json.plants));
};

const displayPlants = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  plants.forEach(plant => {
    const card = document.createElement("div");

    card.innerHTML = `
   
      <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src=${plant.image}
      alt="Shoes"
      class="rounded-xl h-48 w-96 object-cover ..." />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-2xl">${plant.name}</h2>
    <p class="text-[#1F2937] text-xl">${plant.description}</p>
    <div class="card-actions flex justify-between">
      <button class="btn btn-primary">${plant.category}</button>
     <div>
       <p>$<span class="font-bold text-2xl">${plant.price}</span></p>
     </div>
    </div>
     <button class="bg-[#15803D] btn btn-block rounded-3xl"><span class="text-[#FFFFFF] font-bold text-lg py-3">Add to cart</span></button>
  </div>
</div>


    `;

    cardContainer.append(card);
  });
};


////////////////////////////////////////////////////////////////////////////



const loadCategoryPlants = (id) => {

    // Show loading (optional)
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "<h2 class='text-xl font-bold text-center'>Loading...</h2>";

    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => {
            displayCategoryPlants(data.plants);
        })
        .catch(err => console.log(err));
};


const displayCategoryPlants = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  plants.forEach(plant => {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="card bg-base-100 w-96 shadow-sm">
          <figure class="px-10 pt-10">
              <img src="${plant.image}" class="rounded-xl h-48 w-96 object-cover" />
          </figure>

          <div class="card-body">
              <h2 class="card-title text-2xl">${plant.name}</h2>
              <p class="text-[#1F2937] text-xl">${plant.description}</p>

              <div class="card-actions flex justify-between">
                  <button class="btn btn-primary">${plant.category}</button>
                 <div>
                  <p>$<span class="font-bold text-2xl">${plant.price}</span></p>
                 </div>
              </div>

              <button class="bg-[#15803D] btn btn-block rounded-3xl">
                <span class="text-white font-bold text-lg py-3">Add to cart</span>
              </button>
          </div>
      </div>
    `;

    cardContainer.append(card);
  });
};




loadPlants();


loadCategories();




















 
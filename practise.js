
const loadData = async(searchValue) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    const res = await fetch(url)
    const data = await res.json()
    showData(data.data)
}
loadData()

const showData = phones => {
    const cardContainer = document.getElementById("phones-container");
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card" >
        <img class="p-5" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name
          }</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
   
        `
        cardContainer.appendChild(div)

    })


    document.getElementById("search-btn").addEventListener("click", function(){
        const searchValue = document.getElementById("input-field").value;
        loadData(searchValue)
    })
}

const makeAnimalList = templater((o)=>`
<div class="animallist-item">
	<div class="flex-row-nowrap-start-center list-item-container animal-jump" data-id="${o.id}">
	  <div class="flex-none animallist-item-image-container">
	     <img class="animal-img-cover" src="${o.img}" alt="">
	  </div>
	  <p class="animallist-item-name">${o.name}</p>

	</div>
</div>
`);

const makeUserProfile = (o) => `
<div class="user-profile-image">
	<img src="${o.img}" alt="">
</div>
<div>
	<h2>${o.name}</h2>
	<h3>&commat;${o.username}</h3>
	<div><a href="#page-user-settings">Settings</a></div>
</div>
`;
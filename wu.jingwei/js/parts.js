
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


const makeAnimalPopup = o => `
<div class="display-flex animal-jump" data-id="${o.animal_id}">
   <div class="flex-none animal-popup-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="flex-stretch animal-popup-body padding-md">
      <div class="animal-popup-name">${o.name}</div>
      <div class="animal-popup-type"><strong>Type</strong> ${o.type}</div>
      <div class="animal-popup-breed"><strong>Breed</strong> ${o.breed}</div>
   </div>
</div>
`;



const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => `
<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <input type="${type}" id="${namespace}-${name}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
</div>
`;
const FormControlTextarea = ({namespace,name,displayname,placeholder,value}) => `
<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <textarea id="${namespace}-${name}" class="form-input" data-role="none" placeholder="${placeholder}">${value}</textarea>
</div>
`;


const makeAnimalFormInputs = (o,namespace) => `
${FormControlInput({
   namespace:namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type The Animal Name",
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:"type",
   displayname:"Type",
   type:"text",
   placeholder:"Type The Animal Type",
   value:o.type
})}
${FormControlInput({
   namespace:namespace,
   name:"breed",
   displayname:"Breed",
   type:"text",
   placeholder:"Type The Animal Breed",
   value:o.breed
})}
${FormControlTextarea({
   namespace:namespace,
   name:"description",
   displayname:"Description",
   placeholder:"Type The Animal Description",
   value:o.description
})}
`;


const makeUserFormInputs = (o,namespace) => `
${FormControlInput({
   namespace:namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type The User Name",
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:"username",
   displayname:"Type",
   type:"text",
   placeholder:"Type The User Handle",
   value:o.username
})}`;

console.log("parts.js loaded")
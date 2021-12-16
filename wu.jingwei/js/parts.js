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


const makeUserProfile = (user, animals) => `
<header data-role="header" class="ui-header">
   <h1 class="ui-title">User Profile</h1>
   <ul><li class="floater right">
      <a href="#page-user-settings"><svg t="1639620331346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4351" width="64" height="64"><path d="M746.662019 512c0 51.835575 42.044582 93.865831 93.865831 93.865831 51.851948 0 93.865831-42.029232 93.865831-93.865831 0-51.836599-42.013883-93.865831-93.865831-93.865831C788.706601 418.135192 746.662019 460.163401 746.662019 512z" p-id="4352"></path><path d="M89.604272 512c0 51.835575 42.043558 93.865831 93.864808 93.865831 51.822272 0 93.865831-42.029232 93.865831-93.865831 0-51.836599-42.043558-93.865831-93.865831-93.865831C131.648854 418.135192 89.604272 460.163401 89.604272 512z" p-id="4353"></path><path d="M418.132634 512c0 51.835575 42.013883 93.865831 93.866854 93.865831 51.821249 0 93.864808-42.029232 93.864808-93.865831 0-51.836599-42.043558-93.865831-93.864808-93.865831C460.146517 418.135192 418.132634 460.163401 418.132634 512z" p-id="4354"></path></svg>
      </a>
   </li></ul>
</header>
<div class="user-profile-image">
   <img src="${user.img}" alt="">
</div>
<div>
   <h2 class="the-real-name">${user.name}</h2>
   <h3 class="the-user-name">User Name: ${user.username}</h3>
   <h3 class="the-email">Email: ${user.email}</h3>
   <h3 class="the-num-animals">#Animals: ${animals.length}</h3>
</div>
`;

const makeAnimalProfile = (o) => `
<div>
   <h2 class="the-real-name">${o.name}</h2>
   <div class="the-user-name">${o.type}</div>
   <div class="the-user-name">${o.breed}</div>
   <div><p class="the-user-name">${o.description}</p></div>
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
   displayname:"Username",
   type:"text",
   placeholder:"Type The User Handle",
   value:o.username
})}
${FormControlInput({
   namespace:namespace,
   name:"email",
   displayname:"Email",
   type:"email",
   placeholder:"Type The Email Address",
   value:o.email
})}
`;

const makeAnimalChoiceSelect = ({animals,name,chosen=0}) => `
<select id="${name}">
   ${templater(o=>`
      <option value="${o.id}" ${o.id===chosen?'selected':''}>${o.name}</option>
   `)(animals)}
</select>
`;

const makeAnimalListSet = (arr,target="#page-list .animallist") => {
   $(".filter-bar").html(makeFilterList(arr));
   $(target).html(makeAnimalList(arr));
}

const capitalize = s => s[0].toUpperCase()+s.substr(1);

const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>o?`<a href="#" data-filter="${type}" data-value="${o}">${capitalize(o)}</a>`:'')(a);
}

const makeFilterList = (animals) => {
   return `
   <a href="#" class="filter-item" data-filter="type" data-value="">All</a>
   
   ${filterList(animals,'type')}
   `;
}
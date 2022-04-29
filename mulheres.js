


const divMom = document.createElement('div');
divMom.innerHTML = `
    <div class="item-select" id="item-select">
        <img class="mom" id="item-mom" src="./images/mom2.png" alt="mom">
        <span><h3 class="name-select">Mãe</h3></span>
        <button class="btn-generate-message">Gerar Mensagem ⬇</button>
        <button id="btn-back" class="btn-back">⬅ Voltar</button>
        <div class="section-message"></div>


    </div>

`;



const divGrandma = document.createElement('div');
divGrandma.innerHTML = `
    <div class="item-select" id="item-select">
        <img class="grandma" id="image-grandma" src="./images/grandma2.png" alt="grandma">
        <span><h3 class="name-select">Avó</h3></span>
        <button class="btn-generate-message">Gerar Mensagem ⬇</button>
        <button class="btn-back">⬅ Voltar</button>
        <div class="section-message"></div>


    </div>

`;


const divSister = document.createElement('div');
divSister.innerHTML = `
    <div class="item-select" id="item-select">
        <img class="sister" id="image-sister" src="./images/sister2.png" alt="sister">
        <span><h3 class="name-select">Irmã</h3></span>
        <button class="btn-generate-message">Gerar Mensagem ⬇</button>
        <button class="btn-back">⬅ Voltar</button>
        <div class="section-message"></div>


    </div>

`;

const divAunt = document.createElement('div');
divAunt.innerHTML = `
    <div class="item-select" id="item-select">
        <img class="aunt" id="aunt" src="./images/aunt2.png" alt="aunt">
        <span><h3 class="name-select">Tia</h3></span>
        <button class="btn-generate-message">Gerar Mensagem ⬇</button>
        <button class="btn-back">⬅ Voltar</button>
        <div class="section-message"></div>


    </div>

`;

const divTeacher = document.createElement('div');
divTeacher.innerHTML = `
    <div class="item-select" id="item-select">
        <img class="teacher" id="image-teacher" src="./images/teacher2.png" alt="teacher">
        <span><h3 class="name-select">Proff</h3></span>
        <button class="btn-generate-message">Gerar Mensagem ⬇</button>
        <button class="btn-back">⬅ Voltar</button>
        <div class="section-message"></div>


    </div>

`;

const divFriend = document.createElement('div');
divFriend.innerHTML = `
    <div class="item-select" id="item-select">
    <img class="friend" id="friend" src="./images/friend2.png" alt="friend">
        <span><h3 class="name-select">Amiga</h3></span>
        <button class="btn-generate-message">Gerar Mensagem ⬇</button>
        <button id="btn-back" class="btn-back">⬅ Voltar</button>
        <div class="section-message"></div>


    </div>

`;


const containerSelect = document.querySelector('#container-select');

const createDivMom = () => containerSelect.appendChild(divMom);
const createDivGrandma = () => containerSelect.appendChild(divGrandma);
const createDivSister = () => containerSelect.appendChild(divSister);
const createDivAunt = () => containerSelect.appendChild(divAunt);
const createDivTeacher = () => containerSelect.appendChild(divTeacher);
const createDivFriend = () => containerSelect.appendChild(divFriend)


document.getElementById('image-mom').addEventListener('click',createDivMom);
document.getElementById('name-mom').addEventListener('click',createDivMom);
document.getElementById('image-grandma').addEventListener('click',createDivGrandma);
document.getElementById('name-grandma').addEventListener('click',createDivGrandma);
document.getElementById('image-sister').addEventListener('click',createDivSister);
document.getElementById('name-sister').addEventListener('click',createDivSister);
document.getElementById('image-aunt').addEventListener('click',createDivAunt);
document.getElementById('name-aunt').addEventListener('click',createDivAunt);
document.getElementById('image-teacher', 'name-teacher').addEventListener('click',createDivTeacher);
document.getElementById('name-teacher', 'name-teacher').addEventListener('click',createDivTeacher);
document.getElementById('image-friend').addEventListener('click',createDivFriend);
document.getElementById('name-friend').addEventListener('click',createDivFriend);

const btnBack = () => document.getElementById('container-select').removeChild(divMom);
document.getElementById('btn-back').addEventListener('click',btnBack)

btnBack();


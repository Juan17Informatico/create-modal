import home from "../views/home.html?raw";
import modals from "../views/modals.html?raw";

/**
 * Función para Iniciar la aplicación
 * @param {HTMLDivElement} app 
 */
export const AppModal = (app) => {
    app.innerHTML = home;
    const modalContainers = document.querySelector('#modal-containers');
    const btnSuccess = document.getElementById('btn-success');
    const successModal = document.getElementById('success');
    const btnError = document.getElementById('btn-error');
    const btnForm = document.getElementById('btn-form');

    modalContainers.innerHTML = modals;

    const openModal = ( elementHtml, idModal ) => {
        console.log('hola');
        
        successModal.classList.remove('hidden');

    }

    btnSuccess.addEventListener('click', () => openModal(successModal, 'success'));
    // btnSuccess.addEventListener('click', () => openModal(btnError, 'success'));
    // btnSuccess.addEventListener('click', () => openModal(btnForm, 'success'));

}
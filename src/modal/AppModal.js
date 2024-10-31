import home from "../views/home.html?raw";
import { ModalContainer } from "./ModalContainer";
import { ModalContent } from "./ModalContent";

const modalsProperties = {
    success: {
        id: 'success',
        title: 'Guardado', 
        icon: '/img/check.png', 
        text: 'Mensaje enviado con exito', 
        closeBtn: 'Cerrar',
        form: undefined
    },
    error: {
        id: 'error',
        title: 'Error', 
        icon: '/img/error.png', 
        text: 'Error al enviar solicitud', 
        closeBtn: 'Cerrar',
        form: undefined
    },
    quiz: {
        id: 'quiz',
        title: 'Cuestionario', 
        icon: '/img/question.png', 
        text: 'Responde lo siguiente:', 
        closeBtn: 'Cerrar',
        form: {
            id: 'abc',
            preguntas: [
                {   
                    label: '¿Cuál es tu nombre?',
                    typeInput: 'text',
                    name: 'name',
                    id:   'name',
                },
                {
                    label: '¿Cuáles son tus apellidos?',
                    typeInput: 'text',
                    name: 'lastname',
                    id:   'lastname',
                },
                {
                    label: '¿Cuantos años tienes?',
                    typeInput: 'number',
                    name: 'age',
                    id:   'age',
                },
            ],
            typeSubmit: 'submit'
        }
    },
    info: {
        id: 'info',
        title: 'Información', 
        icon: '/img/info.png', 
        text: 'Esto es un modal informativo', 
        closeBtn: 'Cerrar',
        form: undefined
    },
}


/**
 * Función para Iniciar la aplicación
 * @param {HTMLDivElement} app 
 */
export const AppModal = (app) => {
    // Se agrega el home a la app
    app.innerHTML = home;
    //
    const modalContainers = document.querySelector('#modal-containers');
    const overlay = document.querySelector('.overlay');
    const btnSuccess = document.getElementById('btn-success');
    const btnError = document.getElementById('btn-error');
    const btnForm = document.getElementById('btn-form');
    const btnInfo = document.getElementById('btn-info');
    
    // Constante que crean la estructura del modalContainer y retorna el container del modal y contain para administrar el contenido del mismo
    const [ divModalContainer, modalContent, closeBtnSucess ]  = ModalContainer('success');
    const [ divModalContainerError, modalContentError , closeBtnError]  = ModalContainer('error');
    const [ divModalContainerForm, modalContentForm   , closeBtnForm]  = ModalContainer('quiz');
    const [ divModalContainerInfo, modalContentInfo   , closeBtnInfo]  = ModalContainer('info');
    
    // Se agrega cada contenedor del modal al modal container
    modalContainers.appendChild(divModalContainer); 
    modalContainers.appendChild(divModalContainerError); 
    modalContainers.appendChild(divModalContainerForm);
    modalContainers.appendChild(divModalContainerInfo);
    
    const [ closeButtonHtmlSuccess ] = ModalContent( modalsProperties.success, modalContent);
    const [ closeButtonHtmlError ] = ModalContent( modalsProperties.error, modalContentError);
    const [ closeButtonHtmlForm, btnEnviarForm, formElement ] = ModalContent( modalsProperties.quiz, modalContentForm );
    const [ closeButtonHtmlInfo ] = ModalContent( modalsProperties.info, modalContentInfo );

    const openModal = ( elementHtmlContainer) => {
        elementHtmlContainer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    const closeModal = (elementHtmlContainer) => {
        elementHtmlContainer.classList.add('modal-closing');
        
        elementHtmlContainer.addEventListener('animationend', () => {
            elementHtmlContainer.classList.add('hidden');
            overlay.classList.add('hidden');
            elementHtmlContainer.classList.remove('modal-closing');
        }, {once: true}); 

    }

    btnSuccess.addEventListener('click', () => openModal(divModalContainer));
    btnError.addEventListener('click', () => openModal(divModalContainerError));
    btnForm.addEventListener('click', () => openModal(divModalContainerForm));
    btnInfo.addEventListener('click', () => openModal(divModalContainerInfo));
    
    closeBtnSucess.addEventListener('click', () => closeModal(divModalContainer));
    closeBtnError.addEventListener('click', () => closeModal(divModalContainerError));
    closeBtnForm.addEventListener('click', () => closeModal(divModalContainerForm));
    closeBtnInfo.addEventListener('click', () => closeModal(divModalContainerInfo));

    closeButtonHtmlSuccess.addEventListener('click', () => closeModal(divModalContainer))
    closeButtonHtmlError.addEventListener('click', () => closeModal(divModalContainerError))
    closeButtonHtmlForm.addEventListener('click', () => closeModal(divModalContainerForm))
    closeButtonHtmlInfo.addEventListener('click', () => closeModal(divModalContainerInfo))

    // Listener Form
    btnEnviarForm.addEventListener('click', ( event ) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const age = document.getElementById('age').value;

        alert(`Hola ${name} ${lastname}, \ntienes ${age}`);
    })

    window.addEventListener('click', (event) => {
        if (event.target === overlay) {
            for (let i = 0; i < modalContainers.children.length; i++) {
                
                if(!modalContainers.children[i].classList.contains('hidden')) {
                    closeModal(modalContainers.children[i]);
                };
            }
        }
    });

}

/**
 * Funcion que crea de manera dinamica según las properties el contenido del modal
 * @param {modalsProperties} modalsProperties 
 */
export const ModalContent = ({ id, title, icon, text = "", form = undefined, closeBtn = undefined }, modalContent) => {
    
    const titleH2 = document.createElement('h2');
    const iconImg = document.createElement('img');
    const textP = document.createElement('p');
    const closeButtonHtml = document.createElement('button');
    
    textP.innerText = text; 
    titleH2.innerText = title;
    iconImg.src = icon; 
    closeButtonHtml.innerText = closeBtn; 
    closeButtonHtml.setAttribute('id', id);
    
    modalContent.append(iconImg, titleH2, textP );
    const btnEnviar = document.createElement('button');

    const formElement = document.createElement('form');
    if(form){
        
        formElement.setAttribute('id', form.id); 
        
        form.preguntas.forEach((pregunta) => {
            
            const input = document.createElement('input');
            input.tpye = pregunta.typeInput;
            input.placeholder = '...';
            input.name = pregunta.name;
            input.id = pregunta.id;
            
            const label = document.createElement('label');
            label.innerText = pregunta.label;

            formElement.append(label, input);
            
        });
        
        btnEnviar.setAttribute('class', 'btn-modal');
        btnEnviar.type = form.typeSubmit;
        btnEnviar.innerText = 'Enviar'; 

        formElement.appendChild(btnEnviar); 
        
        modalContent.appendChild(formElement);
        
    }
    modalContent.appendChild(closeButtonHtml);

    return [
        closeButtonHtml,
        btnEnviar,
        formElement
    ];
    
    
}
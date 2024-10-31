/**
 * Función que crea el contenedor del modal
 * @param {IdContainer} id
 */
export const ModalContainer = (id) => {

    if(!id) throw new Error('No hay ID para crear contenedor');

    const divModalContainer = document.createElement("div");
    divModalContainer.setAttribute("id", id);
    divModalContainer.setAttribute("class", "modal-container hidden");

    const modalBtnContainer = document.createElement("div");
    modalBtnContainer.setAttribute("class", "modal-btn-container-close");

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute('id',`cerrar-${id}`)
    const {svgIcon, pathIcon} = createSvg();

    svgIcon.appendChild(pathIcon);
    closeBtn.appendChild(svgIcon);
    modalBtnContainer.appendChild(closeBtn);
    divModalContainer.appendChild(modalBtnContainer);

    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-contain');

    divModalContainer.appendChild(modalContent); 

    return [
        divModalContainer,
        modalContent,
        closeBtn,
    ]

};

const createSvg = () => {
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon.setAttribute("width", "24");
    svgIcon.setAttribute("height", "24");
    svgIcon.setAttribute("fill", "currentColor");
    svgIcon.classList.add("bi", "bi-x-lg");
    svgIcon.setAttribute("viewBox", "0 0 16 16");

    const pathIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathIcon.setAttribute(
        "d",
        "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
    );

    return {
        pathIcon,
        svgIcon
    }
};

import home from "../views/home.html?raw";
/**
 * Función para Iniciar la aplicación
 * @param {HTMLDivElement} app 
 */
export const AppModal = (app) => {
    console.log('hola');
    app.innerHTML = home;
}
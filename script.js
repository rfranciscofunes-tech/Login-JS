// ==========================================
// 1. OBTENCIÓN DE ELEMENTOS DEL DOM
// ==========================================
// Seleccionamos los inputs del formulario en 'index.html' mediante su ID
// para poder acceder y leer los valores que el usuario ingresa.
const userEmail = document.getElementById("userEmail");
const userEdad = document.getElementById("userEdad");
const userPassword = document.getElementById("userPassword");
const userPassword2 = document.getElementById("userPassword2");

// ==========================================
// 2. CAPTURA Y VALIDACIÓN DE DATOS DEL FORMULARIO
// ==========================================
// Esta función se dispara con el evento 'onsubmit' del formulario al intentar registrarse.
const capturarDatos = (event) => {
    // Evita el comportamiento por defecto de recargar la página al enviar el formulario.
    event.preventDefault();

    // Extraemos los valores de texto de cada campo.
    const correo = userEmail.value;
    const edad = userEdad.value;
    const password = userPassword.value;
    const password2 = userPassword2.value;

    // Validación 1: Verificar que el usuario sea mayor o igual a 18 años.
    if (edad < 18) {
        alert("debes ser mayor de 18 años");
        return; // Detiene la ejecución de la función si no cumple el requisito.
    }

    // Validación 2: Confirmar que ambas contraseñas coincidan.
    if (password !== password2) {
        alert("Las contraseñas no coinciden");
        return; // Detiene la ejecución de la función si no coinciden.
    }

    // Guardamos la sesión en el almacenamiento del navegador (localStorage).
    // Usamos la clave de tipo string "userEmail" y guardamos el correo del usuario como valor.
    localStorage.setItem("userEmail", correo);

    // Redirigimos al usuario a la página de bienvenida tras el registro exitoso.
    window.location.href = "bienvenido.html";
};

// ==========================================
// 3. VALIDACIÓN DE SESIÓN ACTIVA (AUTO-LOGIN)
// ==========================================
// Comprueba si el usuario ya inició sesión previamente revisando el localStorage.
const validarLogin = () => {
    // Buscamos si existe un registro guardado con la clave "userEmail".
    const emailLocal = localStorage.getItem("userEmail");

    // Si existe (es decir, el usuario ya inició sesión), lo redirigimos directo a bienvenida.
    if (emailLocal) { 
        window.location.href = "bienvenido.html";
    }
};

// ==========================================
// 4. CONTROL DE EJECUCIÓN SEGÚN LA PÁGINA ACTUAL
// ==========================================
// Solo ejecutamos 'validarLogin' si NO nos encontramos en 'bienvenido.html'.
// Esto evita un bucle infinito de redirección hacia la misma página.
if (!window.location.pathname.includes("bienvenido.html")) { 
    validarLogin();
}

// ==========================================
// 5. CIERRE DE SESIÓN (LOGOUT)
// ==========================================
// Esta función se ejecuta al hacer clic en el botón 'Cerrar Sesion' de 'bienvenido.html'.
const logout = () => {
    // localStorage.clear() debe llevar paréntesis '()' para que se ejecute la limpieza del almacenamiento.
    localStorage.clear();

    // Redirigimos al usuario nuevamente a la página principal / formulario de inicio.
    window.location.href = "index.html";
};


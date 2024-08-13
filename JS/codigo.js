cambiarSeccion("seccionInicio") // SECCION PREDETERMINADA AL INICIAR LA PAGINA UTILIZANDO LA FUNCION CAMBIAR SECCION


mostrarBotones("inicio") //BOTONES A MOSTRAR


//RECORRER ARRAY DE PRECENSADOS Y BUSCAR CEDULA

document.querySelector("#btnConsultarCenso").addEventListener("click", consultarCenso);  

function consultarCenso() {
  document.querySelector("#tBody").innerHTML = `
      
  `
  let cedulaBuscada = document.querySelector("#txtCedulaConsultarCenso").value;
  let cedulaBuscadaLimpia = limpiarCedula(cedulaBuscada);
  for (let i = 0; i < preCensados.length; i++) {
    let cedula = preCensados[i];
    if (cedula.PreCedula === cedulaBuscadaLimpia) {
      numero = i
      document.querySelector("#pResultadoConsultarCenso").innerHTML = "Se ha encontrado la cedula: " + cedula.PreCedula;
      document.querySelector("#tBody").innerHTML += `
      <tr>
          <td>
              ${preCensados[numero].PreNombre}
          </td>
          <td>
              ${preCensados[numero].PreApellido}
          </td>
          <td>
              ${preCensados[numero].PreEdad}
          </td>
          <td>
              ${preCensados[numero].PreCedula}
          </td>
          <td>
              ${preCensados[numero].PreOcupacion}
          </td>
          <td>
              ${preCensados[numero].PreDepartamento}
          </td>
          <td>
          ${preCensados[numero].PreEstado}
          </td>

      </tr>
  `
      break
    } else {
      document.querySelector("#pResultadoConsultarCenso").innerHTML = "No se ha encontrado la cedula: " + cedulaBuscada;
    }
  }
}


//EL CENSISTA CHEQUEA LOS DATOS DEL PRECENSADO Y DESEA MODIFICARLOS.


document.querySelector("#btnCensoIncompleto").addEventListener("click", completarPreCenso);

function completarPreCenso() {
  document.querySelector("#tBody").innerHTML = `
      
  `
  let cedulaBuscada = document.querySelector("#txtCedulaConsultarCenso").value;
  let cedulaBuscadaLimpia = limpiarCedula(cedulaBuscada);
  for (let i = 0; i < preCensados.length; i++) {
    let cedula = preCensados[i];
    if (cedula.PreCedula === cedulaBuscadaLimpia && preCensados[i].PreEstado !== true) {
      posicion = i
      document.querySelector("#txtNombreIngresarCenso").value = preCensados[posicion].PreNombre
      document.querySelector("#txtApellidoIngresarCenso").value = preCensados[posicion].PreApellido
      document.querySelector("#txtEdadIngresarCenso").value = preCensados[posicion].PreEdad
      document.querySelector("#txtCedulaIngresarCenso").value = preCensados[posicion].PreCedula
      document.querySelector("#slcDepartamentoIngresarCenso").value = preCensados[posicion].PreDepartamento
      document.querySelector("#slcOcupacionIngresarCenso").value = preCensados[posicion].PreOcupacion

    }
  }
}


//PERFIL INVITADO: BUSQUEDA DEL PRECENSO POR CEDULA

document.querySelector("#btnBuscarMiCenso").addEventListener("click", buscarMiCenso)

function buscarMiCenso() {

  let cedulaBuscada = document.querySelector("#txtBuscarMiCenso").value
  cedulaBuscada = limpiarCedula(cedulaBuscada)
  longitud = cedulaBuscada.length
  let existe = false
  if(longitud == 8){
  for (i = 0; i < preCensados.length; i++) {
    if (preCensados[i].PreCedula === cedulaBuscada && preCensados[i].PreEstado !== true) {
      existe == true
      posicion = i
      document.querySelector("#pMensajeCedula").innerHTML = "Datos precargados encontrados. Modifique si así lo desea."
      document.querySelector("#txtNombreIngresarCensoCensado").value = preCensados[posicion].PreNombre
      document.querySelector("#txtApellidoIngresarCensoCensado").value = preCensados[posicion].PreApellido
      document.querySelector("#txtEdadIngresarCensoCensado").value = preCensados[posicion].PreEdad
      document.querySelector("#txtCedulaIngresarCensoCensado").value = preCensados[posicion].PreCedula
      document.querySelector("#slcDepartamentoIngresarCensoCensado").value = preCensados[posicion].PreDepartamento
      document.querySelector("#slcOcupacionIngresarCensoCensado").value = preCensados[posicion].PreOcupacion
      break
    }else if(preCensados[i].PreCedula === cedulaBuscada && preCensados[i].PreEstado !== true){
      document.querySelector("#pMensajeCedula").innerHTML = "ERROR, YA FUE CENSADO."
    }
  }
}else{
  document.querySelector("#pMensajeCedula").innerHTML = "No se han encontrado datos para esa cédula."
}
}

// PERFIL INVITADO: ELIMINAR DATOS PRECARGADOS

document.querySelector("#btnBuscarMiCensoEliminar").addEventListener("click", buscarMiCensoEliminar)

function buscarMiCensoEliminar() {
  let cedulaBuscada = document.querySelector("#txtBuscarMiCensoEliminar").value
  cedulaBuscada = limpiarCedula(cedulaBuscada)
  let existe = false
  for (i = 0; i < preCensados.length; i++) {
    if (preCensados[i].PreCedula === cedulaBuscada) {
      existe = true
      posicion = i
      document.querySelector("#pErrorCedulaCensadoEliminar").innerHTML = "Datos precargados encontrados. Elimine sus datos si así lo desea."
      break
    } else {
      document.querySelector("#pErrorCedulaCensadoEliminar").innerHTML = "No se ha encontrado ningún censo precargado verifique su cédula e intente otra vez."
    }
  }
}

document.querySelector("#btnEliminarCenso").addEventListener("click", eliminarCenso)

function eliminarCenso() {
  let cedulaBuscada = document.querySelector("#txtBuscarMiCensoEliminar").value
  cedulaBuscada = limpiarCedula(cedulaBuscada)
  let existe = false
  for (i = 0; i < preCensados.length; i++) {
    if (preCensados[i].PreCedula === cedulaBuscada && preCensados[i].PreEstado !== true) {
      existe = true
      posicion = i
      preCensados.splice(posicion, 1)
      document.querySelector("#pErrorCedulaCensadoEliminar").innerHTML = "Su censo ha sido eliminado con éxito."
      break
    }else if(preCensados[posicion].PreEstado == true){
      document.querySelector("#pErrorCedulaCensadoEliminar").innerHTML = " ERROR. Su censo ya ha sido validado."
    }
  }
  
}

//ESTADISTICA



document.querySelector("#btnMostrarEstadisticaCensados").addEventListener("click", mostrarEstadisticaCensados)

function mostrarEstadisticaCensados() {

  let contadoresDepartamentos = {};

  document.querySelector("#tBodyEstadisticaCensados").innerHTML = "";

  for (let i = 0; i < censados.length; i++) {
    let persona = censados[i];
    let departamento = persona.departamento;

    contadoresDepartamentos[departamento] = contadoresDepartamentos[departamento] || {
      contadorEstudian: 0,
      contadorNoTrabajan: 0,
      contadorIndependienteDependiente: 0
    };

    if (persona.ocupacion === "ESTUDIANTE") {
      contadoresDepartamentos[departamento].contadorEstudian++;
    } else if (persona.ocupacion === "NO TRABAJA") {
      contadoresDepartamentos[departamento].contadorNoTrabajan++;
    } else if (persona.ocupacion === "DEPENDIENTE" || persona.ocupacion === "INDEPENDIENTE") {
      contadoresDepartamentos[departamento].contadorIndependienteDependiente++;
    }
  }

  // MOSTRAR LOS RESULTADOS POR DEPARTAMENTO CENSADOS


  for (let departamento in contadoresDepartamentos) {
    let contadorEstudian = contadoresDepartamentos[departamento].contadorEstudian;
    let contadorNoTrabajan = contadoresDepartamentos[departamento].contadorNoTrabajan;
    let contadorIndependienteDependiente = contadoresDepartamentos[departamento].contadorIndependienteDependiente;
    let totalCensadosDepartamento = contadorEstudian + contadorNoTrabajan + contadorIndependienteDependiente;
    let porcentajeCensadosDepartamento = ((totalCensadosDepartamento / censados.length) * 100).toFixed(2);

    document.querySelector("#tBodyEstadisticaCensados").innerHTML += `
      <tr>
        <td>${departamento}</td>
        <td>${contadorEstudian}</td>
        <td>${contadorNoTrabajan}</td>
        <td>${contadorIndependienteDependiente}</td>
        <td>${porcentajeCensadosDepartamento}%</td>
      </tr>
    `;
  }
}

//ESTADISTICA PRECENSADOS

document.querySelector("#btnMostrarEstadistica").addEventListener("click", mostrarEstadisticaPreCensados)

function mostrarEstadisticaPreCensados() {

  let contadoresDepartamentosPreCensados = {};

  document.querySelector("#tBodyEstadisticaPreCensados").innerHTML = "";


  for (let i = 0; i < preCensados.length; i++) {
    let persona = preCensados[i];
    let departamentoPreCensado = persona.PreDepartamento;

    contadoresDepartamentosPreCensados[departamentoPreCensado] = contadoresDepartamentosPreCensados[departamentoPreCensado] || {
      contadorEstudianPreCensados: 0,
      contadorNoTrabajanPreCensados: 0,
      contadorIndependienteDependientePreCensados: 0
    };

    if (persona.PreOcupacion === "ESTUDIANTE") {
      contadoresDepartamentosPreCensados[departamentoPreCensado].contadorEstudianPreCensados++;
    } else if (persona.PreOcupacion === "NO TRABAJA") {
      contadoresDepartamentosPreCensados[departamentoPreCensado].contadorNoTrabajanPreCensados++;
    } else if (persona.PreOcupacion === "DEPENDIENTE" || persona.PreOcupacion === "INDEPENDIENTE") {
      contadoresDepartamentosPreCensados[departamentoPreCensado].contadorIndependienteDependientePreCensados++;
    }
  }

    // MOSTRAR LOS RESULTADOS POR DEPARTAMENTO PRECENSADOS

  for (let departamentoPreCensado in contadoresDepartamentosPreCensados) {
    if (contadoresDepartamentosPreCensados[departamentoPreCensado].PreEstado !== true) {
      let contadorEstudianPreCensados = contadoresDepartamentosPreCensados[departamentoPreCensado].contadorEstudianPreCensados;
      let contadorNoTrabajanPreCensados = contadoresDepartamentosPreCensados[departamentoPreCensado].contadorNoTrabajanPreCensados;
      let contadorIndependienteDependientePreCensados = contadoresDepartamentosPreCensados[departamentoPreCensado].contadorIndependienteDependientePreCensados;
      let totalCensadosDepartamentoPreCensados = contadorEstudianPreCensados + contadorNoTrabajanPreCensados + contadorIndependienteDependientePreCensados;
      let porcentajeCensadosDepartamentoPreCensados = ((totalCensadosDepartamentoPreCensados / preCensados.length) * 100).toFixed(2);

      document.querySelector("#tBodyEstadisticaPreCensados").innerHTML += `
      <tr>
        <td>${departamentoPreCensado}</td>
        <td>${contadorEstudianPreCensados}</td>
        <td>${contadorNoTrabajanPreCensados}</td>
        <td>${contadorIndependienteDependientePreCensados}</td>
        <td>${porcentajeCensadosDepartamentoPreCensados}%</td>
      </tr>
    `;
    }
  }
}

//ELECCIÓN DE PERFIL

document.querySelector("#btnElegirPerfil").addEventListener("click", elegirPerfil);

function elegirPerfil() { // con un select va a elegir el perfil censista o censado y depende lo que elija los botones que le van a aparecer
  let algo = document.querySelector("#slcElegirPerfil").value;

  switch (algo) {
    case "ca":
      mostrarBotones("censista");
      break
    case "co":
      mostrarBotones("censado");
      break
  }
}

//OBJETO USUARIO CENSISTA

class Usuario {
  constructor(name, lastname, username, password, id) {
    this.name = name
    this.lastname = lastname
    this.username = username
    this.password = password
    this.id = id
  }
}

//ARRAY DE USUARIOS CENSISTAS

let usuarios = [
  { name: "Joaquin", lastname: "gon", username: "usuario1", password: "123456", id: 1 },
  { name: "Martin", lastname: "nun", username: "usuario2", password: "abc", id: 2 },
  { name: "seba", lastname: "gonzalez", username: "usuario3", password: "123456", id: 3}
];

let x; //VARIABLE GLOBAL UTILIZADA PARA TOMAR EL USUARIO CENSISTA INGRESADO

document.querySelector("#btnIngresar").addEventListener("click", ingresarSesion);

function ingresarSesion() {
  let usernameIngresar = document.querySelector("#txtUsuarioIngreso").value;
  let passwordIngresar = document.querySelector("#txtPasswordIngreso").value;
  usernameIngresar = usernameIngresar.toLowerCase()
  iniciarSesion(usernameIngresar, passwordIngresar);
  
}


//REGISTRAR USUARIOS

document.querySelector("#btnRegistrar").addEventListener("click", registrarUsuario);

let contId = 3

function registrarUsuario() {

  document.querySelector("#pErrorContraseña").innerHTML = ""
  let name = document.querySelector("#txtNombre").value
  let lastname = document.querySelector("#txtApellido").value
  let username = document.querySelector("#txtUsuarioRegistro").value
  let password = document.querySelector("#txtPasswordRegistro").value
  username = username.toLowerCase()
  let mayus = false
  let minus = false
  let numer = false
  let long = false
  let existe = false

  for (i = 0; i < password.length; i++) {    //Verificamos que la contraseña tenga al menos una mayuscula, una minuscula, un numero y un minimo de 5 caracteres.
    if (password.charAt(i) === password.charAt(i).toLowerCase()) {
      minus = true
    }
    if (password.charAt(i) === password.charAt(i).toUpperCase()) {
      mayus = true
    }
    if (!isNaN(password.charAt(i)))
      numer = true
  }
  if (password.length >= 5) {
    long = true
  }

  for (i = 0; i < usuarios.length; i++) {   //Comprobamos que el nombre de usuario no este repetido.
    let usuario = usuarios[i]
    if (usuario.username.toLowerCase() === username.toLowerCase()) {
      existe = true
      break
    }
  }

  if (minus == true && mayus == true && numer == true && long == true && existe == false && name !== "" && lastname !== "" && username !== "" && password !== "") { // Si los valores son distinos a "". osea que contienen algo y cumplen las condiciones entonces se agrega un nuevo objeto Usuario al array usuarios
    contId = contId + 1
    id = contId
    let usuarioNuevo = new Usuario(name, lastname, username, password, id)
    usuarios.push(usuarioNuevo)
    document.querySelector("#txtNombre").value = ""  //Borramos el contenido de los campos luego de registrar.
    document.querySelector("#txtApellido").value = ""
    document.querySelector("#txtUsuarioRegistro").value = ""
    document.querySelector("#txtPasswordRegistro").value = ""
    document.querySelector("#txtNombre").focus()  //Volvemos al campo nombre luego de ingresar.
    document.querySelector("#pErrorContraseña").innerHTML = "Registrado correctamente."
  } else if (existe == true && name !== "" && lastname !== "" && username !== "" && password !== "") {
    document.querySelector("#pErrorContraseña").innerHTML = "Ese nombre de usuario ya está en uso. Por favor ingrese uno nuevo."
  } else {
    document.querySelector("#pErrorContraseña").innerHTML = "ERROR AL REGISTRAR. ASEGURESE DE CUMPLIR CON LOS REQUISITOS."
  }
}

//FUNCION DE INICIO DE SESIÓN

function iniciarSesion(username, password) {

  // Verificamos si las credenciales son válidas y el usuario está activo
  let usuarioEncontrado = null;

  for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];

    if (usuario.username === username && usuario.password === password) {
      usuarioEncontrado = usuario;
      x = usuario
      break;
    }
  }

  // Si se encuentra el usuario y está activo, mostramos un mensaje de éxito
  if (usuarioEncontrado) {
    document.querySelector("#pIngreso").innerHTML = "Se ha iniciado sesión correctamente.";
    document.querySelector("#funcionalidadesCensista").style.display = "block";
  } else {
    document.querySelector("#pIngreso").innerHTML = "Nombre de usuario o contraseña incorrectos.";
    document.querySelector("#funcionalidadesCensista").style.display = "none";
  }
}

//OBJETO CENSADO

class Censado {
  constructor(nombre, apellido, edad, cedula, departamento, ocupacion) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.cedula = cedula
    this.departamento = departamento
    this.ocupacion = ocupacion
  }
}

let censados = [
  { nombre: "Seba", apellido: "gon", edad: "34", cedula: "12345678", departamento: "ARTIGAS", ocupacion: "DEPENDIENTE" },
  { nombre: "pedro", apellido: "rodriguez", edad: "34", cedula: "03945676", departamento: "CANELONES", ocupacion: "NO TRABAJA" },
];


//INGRESAMOS LOS DATOS DEL CENSADO TOMADOS POR EL CENSISTA y VERIFICAMOS LA CÉDULA Y LA ASIGNACIÓN.

document.querySelector("#btnIngresarDatosCenso").addEventListener("click", ingresarDatosCenso);

function ingresarDatosCenso() {

  document.querySelector("#pErrorCedula").innerHTML = ""
  let nombre = document.querySelector("#txtNombreIngresarCenso").value
  let apellido = document.querySelector("#txtApellidoIngresarCenso").value
  let edad = document.querySelector("#txtEdadIngresarCenso").value
  let cedula = document.querySelector("#txtCedulaIngresarCenso").value
  let departamento = document.querySelector("#slcDepartamentoIngresarCenso").value
  let ocupacion = document.querySelector("#slcOcupacionIngresarCenso").value
  cedula = limpiarCedula(cedula)
  longitud = cedula.length
  let existe = false
  if (longitud === 8 && nombre !== "" && apellido !== "" && edad !== "" && cedula !== "" && departamento !== "" && ocupacion !== "" && edad <= 130) {    //Verificamos que la cedula sin puntuaciones tenga 8 numeros.
    for (let i = 0; i < preCensados.length; i++) {
      if(cedula === preCensados[i].PreCedula){
        posicion = i
        break
      }
    }
    for (let i = 0; i < censados.length; i++) {
      if(censados[i].cedula === preCensados[posicion].PreCedula){
        existe = true
      }
    }
    if(x.id === preCensados[posicion].PreAsignado && existe == false ){
      let nuevoCensado = new Censado(nombre, apellido, edad, cedula, departamento, ocupacion)
      censados.push(nuevoCensado)
    for (let i = 0; i < preCensados.length; i++) {
    
      if (preCensados[i].PreCedula === cedula) {
        posicion = i
        preCensados[posicion].PreEstado = true
      }
    }
    document.querySelector("#pErrorCedula").innerHTML = "Ingresado correctamente."
    document.querySelector("#txtNombreIngresarCenso").value = ""  //Borramos el contenido de los campos luego de registrar.
    document.querySelector("#txtApellidoIngresarCenso").value = ""
    document.querySelector("#txtEdadIngresarCenso").value = ""
    document.querySelector("#txtCedulaIngresarCenso").value = ""
    document.querySelector("#slcDepartamentoIngresarCenso").value = ""
    document.querySelector("#slcOcupacionIngresarCenso").value = ""
    document.querySelector("#txtNombreIngresarCenso").focus()  //Volvemos al campo nombre luego de ingresar.
    }else if(existe == true && nombre !== "" && apellido !== "" && edad !== "" && cedula !== "" && departamento !== "" && ocupacion !== "" && edad <= 130){
      document.querySelector("#pErrorCedula").innerHTML = "ERROR, ESTE CENSO YA FUE VALIDADO."
    }
  }else if(existe == false){
    document.querySelector("#pErrorCedula").innerHTML = "ERROR AL INGRESAR DATOS. INGRESE NUEVAMENTE."
   }

}


// FUNCIONES DE MOSTRAR Y OCULTAR

let botones = document.querySelectorAll(".btn");
for (let i = 0; i < botones.length; i++) {
  const boton = botones[i]
  boton.addEventListener("click", mostrarSeccion)
}


function ocultarSecciones() {
  let secciones = document.querySelectorAll(".seccion");
  for (let i = 0; i < secciones.length; i++) {
    const seccion = secciones[i]
    seccion.style.display = "none"
  }
}

function mostrarSeccion() {
  ocultarSecciones();
  let idBoton = this.getAttribute("id"); // con el this muestra cual boton tocamos y con getAttributte nos da el id ej: "btnSeccionCensista"
  let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substring(4); // le sacamos el btn y pasamos su primera letra a minusculas por consecuencia de usar el camel case ej : "seccionCensista"
  cambiarSeccion(idSeccion)
}

function cambiarSeccion(nuevaSeccion) {
  ocultarSecciones();
  document.querySelector("#" + nuevaSeccion).style.display = "block";
}


function mostrarBotones(tipo) {
  let botones = document.querySelectorAll(".btn");
  for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.style.display = "none";
  }

  let botonesMostrar = document.querySelectorAll("." + tipo);
  for (let i = 0; i < botonesMostrar.length; i++) {
    const botonMostrar = botonesMostrar[i];
    botonMostrar.style.display = "block";
  }
}


//OBJETO DE PRECENSADO

class PreCensado {
  constructor(PreNombre, PreApellido, PreEdad, PreCedula, PreDepartamento, PreOcupacion, PreEstado, PreAsignado) {
    this.PreNombre = PreNombre
    this.PreApellido = PreApellido
    this.PreEdad = PreEdad
    this.PreCedula = PreCedula
    this.PreDepartamento = PreDepartamento
    this.PreOcupacion = PreOcupacion
    this.PreEstado = PreEstado
    this.PreAsignado = PreAsignado
  }
}

//ARRAY DE PRECENSADOS

let preCensados = [
  { PreNombre: "Seba", PreApellido: "Gonzalez", PreEdad: "34", PreCedula: "50989177", PreDepartamento: "ARTIGAS", PreOcupacion: "DEPENDIENTE", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Martin", PreApellido: "Núñez", PreEdad: "24", PreCedula: "51312672", PreDepartamento: "CANELONES", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 3 },
  { PreNombre: "Daniel", PreApellido: "Rodríguez", PreEdad: "16", PreCedula: "51334462", PreDepartamento: "SORIANO", PreOcupacion: "ESTUDIANTE", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Hugo", PreApellido: "Gonzalez", PreEdad: "28", PreCedula: "51312462", PreDepartamento: "CANELONES", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 2 },
  { PreNombre: "Fabian", PreApellido: "Núñez", PreEdad: "29", PreCedula: "51319762", PreDepartamento: "TACUAREMBO", PreOcupacion: "ESTUDIANTE", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Franco", PreApellido: "Gonzalez", PreEdad: "24", PreCedula: "51314442", PreDepartamento: "CANELONES", PreOcupacion: "DEPENDIENTE", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Pablo", PreApellido: "Juarez", PreEdad: "50", PreCedula: "51912462", PreDepartamento: "TACUAREMBO", PreOcupacion: "INDEPENDIENTE", PreEstado: null, PreAsignado: 3 },
  { PreNombre: "Pedro", PreApellido: "Rodríguez", PreEdad: "24", PreCedula: "67312462", PreDepartamento: "CANELONES", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Daniel", PreApellido: "Núñez", PreEdad: "15", PreCedula: "51762462", PreDepartamento: "CANELONES", PreOcupacion: "ESTUDIANTE", PreEstado: null, PreAsignado: 2 },
  { PreNombre: "Sebastian", PreApellido: "Juarez", PreEdad: "24", PreCedula: "51398462", PreDepartamento: "CANELONES", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 3 },
  { PreNombre: "Juan", PreApellido: "Núñez", PreEdad: "24", PreCedula: "51317862", PreDepartamento: "TACUAREMBO", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 2 },
  { PreNombre: "Joaquin", PreApellido: "Rodríguez", PreEdad: "24", PreCedula: "43312462", PreDepartamento: "CANELONES", PreOcupacion: "INDEPENDIENTE", PreEstado: null, PreAsignado: 3 },
  { PreNombre: "Jose", PreApellido: "Dosantos", PreEdad: "60", PreCedula: "51311162", PreDepartamento: "CANELONES", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Martina", PreApellido: "Martinez", PreEdad: "24", PreCedula: "51492462", PreDepartamento: "SORIANO", PreOcupacion: "DEPENDIENTE", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Daniela", PreApellido: "Rodríguez", PreEdad: "76", PreCedula: "23312462", PreDepartamento: "CANELONES", PreOcupacion: "ESTUDIANTE", PreEstado: null, PreAsignado: 2 },
  { PreNombre: "Juana", PreApellido: "Dosantos", PreEdad: "24", PreCedula: "57772462", PreDepartamento: "TACUAREMBO", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Sofia", PreApellido: "Gonzalez", PreEdad: "24", PreCedula: "53982462", PreDepartamento: "CANELONES", PreOcupacion: "ESTUDIANTE", PreEstado: null, PreAsignado: 3 },
  { PreNombre: "Tatiana", PreApellido: "Núñez", PreEdad: "80", PreCedula: "51317762", PreDepartamento: "CANELONES", PreOcupacion: "INDEPENDIENTE", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Veronica", PreApellido: "Rodríguez", PreEdad: "24", PreCedula: "51399962", PreDepartamento: "SORIANO", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 2 },
  { PreNombre: "Valentin", PreApellido: "Dosantos", PreEdad: "43", PreCedula: "51312987", PreDepartamento: "CANELONES", PreOcupacion: "ESTUDIANTE", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Hugo", PreApellido: "Martinez", PreEdad: "25", PreCedula: "33312462", PreDepartamento: "CANELONES", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 3 },
  { PreNombre: "Fabio", PreApellido: "Juarez", PreEdad: "27", PreCedula: "53312882", PreDepartamento: "TACUAREMBO", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Renata", PreApellido: "Dosantos", PreEdad: "32", PreCedula: "59092462", PreDepartamento: "CANELONES", PreOcupacion: "INDEPENDIENTE", PreEstado: null, PreAsignado: 2 },
  { PreNombre: "Oscar", PreApellido: "Rodríguez", PreEdad: "24", PreCedula: "57232462", PreDepartamento: "SORIANO", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Pia", PreApellido: "Dosantos", PreEdad: "24", PreCedula: "34812462", PreDepartamento: "TACUAREMBO", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 3 },
  { PreNombre: "Martin", PreApellido: "Martinez", PreEdad: "12", PreCedula: "54562462", PreDepartamento: "CANELONES", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Juan", PreApellido: "Rodríguez", PreEdad: "13", PreCedula: "12612462", PreDepartamento: "TACUAREMBO", PreOcupacion: "ESTUDIANTE", PreEstado: null, PreAsignado: 3 },
  { PreNombre: "Martin", PreApellido: "Juarez", PreEdad: "15", PreCedula: "56292462", PreDepartamento: "CANELONES", PreOcupacion: "NO TRABAJA", PreEstado: null, PreAsignado: 1 },
  { PreNombre: "Sebastian", PreApellido: "Núñez", PreEdad: "24", PreCedula: "19312462", PreDepartamento: "CANELONES", PreOcupacion: "DEPENDIENTE", PreEstado: null, PreAsignado: 2 },
  { PreNombre: "Martin", PreApellido: "Gonzalez", PreEdad: "16", PreCedula: "27312462", PreDepartamento: "TACUAREMBO", PreOcupacion: "ESTUDIANTE", PreEstado: null, PreAsignado: 1 }
];

//INGRESO DE DATOS PARA INVITADO

document.querySelector("#btnIngresarPreCensoCensado").addEventListener("click", ingresarDatosCensoCensado);

function ingresarDatosCensoCensado() {
  
  let posicion
  document.querySelector("#pErrorCedulaCensado").innerHTML = "" // Parrafo limpio antes de comenzar
  let PreNombre = document.querySelector("#txtNombreIngresarCensoCensado").value // Toma de datos 
  let PreApellido = document.querySelector("#txtApellidoIngresarCensoCensado").value
  let PreEdad = document.querySelector("#txtEdadIngresarCensoCensado").value
  let PreCedula = document.querySelector("#txtCedulaIngresarCensoCensado").value
  let PreDepartamento = document.querySelector("#slcDepartamentoIngresarCensoCensado").value
  switch (PreDepartamento) {
    case "ARTIGAS":
      PreDepartamento = "ARTIGAS"
      break
    case "CANELONES":
      PreDepartamento = "CANELONES"
      break
    case "CERRO LARGO":
      PreDepartamento = "CERRO LARGO"
      break
    case "COLONIA":
      PreDepartamento = "COLONIA"
      break
    case "DURAZNO":
      PreDepartamento = "DURAZNO"
      break
    case "FLORES":
      PreDepartamento = "FLORES"
      break
    case "FLORIDA":
      PreDepartamento = "FLORIDA"
      break
    case "LAVALLEJA":
      PreDepartamento = "LAVALLEJA"
      break
    case "MALDONADO":
      PreDepartamento = "MALDONADO"
      break
    case "MONTEVIDEO":
      PreDepartamento = "MONTEVIDEO"
      break
    case "PAYSANDU":
      PreDepartamento = "PAYSANDU"
      break
    case "RIO NEGRO":
      PreDepartamento = "RIO NEGRO"
      break
    case "RIVERA":
      PreDepartamento = "RIVERA"
      break
    case "ROCHA":
      PreDepartamento = "ROCHA"
      break
    case "SALTO":
      PreDepartamento = "SALTO"
      break
    case "SAN JOSE":
      PreDepartamento = "SAN JOSE"
      break
    case "SORIANO":
      PreDepartamento = "SORIANO"
      break
    case "TACUAREMBO":
      PreDepartamento = "TACUAREMBO"
      break
    case "TREINTA Y TRES":
      PreDepartamento = "TREINTA Y TRES"
      break
  }
  let PreOcupacion = document.querySelector("#slcOcupacionIngresarCensoCensado").value
  switch (PreOcupacion) {
    case "DEPENDIENTE":
      PreOcupacion = "DEPENDIENTE"
      break
    case "INDEPENDIENTE":
      PreOcupacion = "INDEPENDIENTE"
      break
    case "ESTUDIANTE":
      PreOcupacion = "ESTUDIANTE"
      break
    case "NO TRABAJA":
      PreOcupacion = "NO TRABAJA"
      break
  }
  
  // Fin de toma de datos

  PreCedula = limpiarCedula(PreCedula) // Invocamos funcion de limpiar cedula
  longitud = PreCedula.length // Asignamos el length de la cedula a una variable para despues compararlo
  let existe = false
  if (longitud === 8) {      //Verificamos que la cedula sin puntuaciones tenga 8 numeros, si tiene 8 numeros se agregara al array de pre censados
    for (let i = 0; i < preCensados.length; i++) {
      if (preCensados[i].PreCedula === PreCedula) {
        existe = true
        posicion = i
      }
    }
      if(existe == true){
        let censadoCambiaDatos = new PreCensado(PreNombre, PreApellido, PreEdad, PreCedula, PreDepartamento, PreOcupacion)
        preCensados[posicion] = censadoCambiaDatos
        document.querySelector("#pErrorCedulaCensado").innerHTML = "Ingresado correctamente."
        limpiarCampos()
        
      }else{
        let maximo = usuarios.length
      let numero = Math.floor(Math.random()*maximo)
      let lugar = usuarios[numero].id
      PreAsignado = lugar
      let nuevoCensadoCensado = new PreCensado(PreNombre, PreApellido, PreEdad, PreCedula, PreDepartamento, PreOcupacion, false, PreAsignado) // Si se cumple la condicion del if, agregamos un nuevo objeto de PreCensado al array de preCensados
      preCensados.push(nuevoCensadoCensado)

      document.querySelector("#pErrorCedulaCensado").innerHTML = "Ingresado correctamente."
      limpiarCampos()
      }
  } else {
    document.querySelector("#pErrorCedulaCensado").innerHTML = "ERROR AL INGRESAR CÉDULA. INGRESE NUEVAMENTE."
  }
}

//FUNCION LIMPIAR CAMPOS CENSO CENSADO

function limpiarCampos(){
  document.querySelector("#txtNombreIngresarCensoCensado").value = ""
  document.querySelector("#txtApellidoIngresarCensoCensado").value = ""
  document.querySelector("#txtEdadIngresarCensoCensado").value = ""
  document.querySelector("#txtCedulaIngresarCensoCensado").value = ""
  document.querySelector("#slcDepartamentoIngresarCensoCensado").value = ""
  document.querySelector("#slcOcupacionIngresarCensoCensado").value = ""
  document.querySelector("#txtNombreIngresarCensoCensado").focus()
}
//SELECT DE REASIGNAR : ACTUALIZAR LA LISTA

document.querySelector("#btnActualizar").addEventListener("click", actualizarSelect)


function actualizarSelect(){

  document.querySelector("#slcReasignarCenso").innerHTML = `<option value = "-1"> Personas </option>`
  for (let i = 0; i < preCensados.length; i++) {
    const precensos = preCensados[i]
    if(precensos.PreAsignado === x.id){
    document.querySelector("#slcReasignarCenso").innerHTML += `<option value = "${precensos.PreCedula}">${precensos.PreCedula}</option>`
    }
  }
  document.querySelector("#slcCensistasReasignarCenso").innerHTML = `<option value = "-1"> Censistas </option>`
  for (let i = 0; i < usuarios.length; i++) {
    const censistas = usuarios[i].username
    if(censistas !== x.username){
    document.querySelector("#slcCensistasReasignarCenso").innerHTML += `<option value = "${censistas}">${censistas}</option>`
  }
  }

}

//REASIGNAMOS CENSOS

document.querySelector("#btnReasignar").addEventListener("click", reasignarCenso)

function reasignarCenso(){
  document.querySelector("#errorReasignar").innerHTML = ""
  condicion1 = false
  condicion2 = false
  let elegido = document.querySelector("#slcReasignarCenso").value
  for (let i = 0; i < preCensados.length; i++) {
    if(elegido === preCensados[i].PreCedula){     //GUARDAMOS LA POSICION DEL PRECENSO QUE QUEREMOS REASIGNAR.
      posicion = i
      condicion1 = true
      break
    }
  }
  if(x.id === preCensados[posicion].PreAsignado){
    let nuevaAsignacion = document.querySelector("#slcCensistasReasignarCenso").value
    for (let i = 0; i < usuarios.length; i++) {      
      if(nuevaAsignacion === usuarios[i].username){    //GUARDAMOS LA POSICION DEL USUARIO AL QUE LE QUEREMOS ASIGNAR EL PRECENSO.
        posicion2 = i
        condicion2 = true
      }
    }
  if(condicion1 == true && condicion2 == true){
    preCensados[posicion].PreAsignado = usuarios[posicion2].id     //SI LAS CONDICIONES SE DAN HACEMOS LA ASIGNACION
    document.querySelector("#errorReasignar").innerHTML = "Reasignación completada."
  }
  }else{
    document.querySelector("#errorReasignar").innerHTML = "ERROR AL REASIGNAR. ESE PRECENSO NO LE CORRESPONDE A SU USUARIO."
  }

}

//ESTADISTICA PERFIL CENSISTA

document.querySelector("#btnConsultarTotalCensados").addEventListener("click", consultarTotalPersonasCensadas); // parte 1 de estadistica

function consultarTotalPersonasCensadas() {
    document.querySelector("#tResultadoTotalCensados").innerHTML = ``;
    let contadorTotalCensados = censados.length;
    document.querySelector("#tResultadoTotalCensados").innerHTML += `
  <tr>
    <td> El numero total de personas censadas hasta el momento es de ${contadorTotalCensados}</td>
  </tr>
`;
}

//CONSULTAR CENSADOS DEPARTAMENTOS

document.querySelector("#btnConsultarCensadosDepartamentos").addEventListener("click", consultarCensadosDepartamentos); //parte 2 de estadistica

function consultarCensadosDepartamentos() {
    let departamentoSeleccionado = document.querySelector("#slcTotalCensadosDepartamento").value;
    let resultadoCenso = "";

    document.querySelector("#tBodyEstadisticaDepartamento").innerHTML = "";

    switch (departamentoSeleccionado) {
        case "ARTIGAS":
            resultadoCenso = totalCensadosDepartamentos("ARTIGAS", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "ARTIGAS":
            resultadoCenso = totalCensadosDepartamentos("ARTIGAS", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "CANELONES":
            resultadoCenso = totalCensadosDepartamentos("CANELONES", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "CERRO LARGO":
            resultadoCenso = totalCensadosDepartamentos("CERRO LARGO", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "COLONIA":
            resultadoCenso = totalCensadosDepartamentos("COLONIA", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "DURAZNO":
            resultadoCenso = totalCensadosDepartamentos("DURAZNO", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "FLORES":
            resultadoCenso = totalCensadosDepartamentos("FLORES", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "FLORIDA":
            resultadoCenso = totalCensadosDepartamentos("FLORIDA", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "LAVALLEJA":
            resultadoCenso = totalCensadosDepartamentos("LAVALLEJA", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "MALDONADO":
            resultadoCenso = totalCensadosDepartamentos("MALDONADO", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "MONTEVIDEO":
            resultadoCenso = totalCensadosDepartamentos("MONTEVIDEO", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "RIO NEGRO":
            resultadoCenso = totalCensadosDepartamentos("RIO NEGRO", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "RIVERA":
            resultadoCenso = totalCensadosDepartamentos("RIVERA", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "ROCHA":
            resultadoCenso = totalCensadosDepartamentos("ROCHA", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "SALTO":
            resultadoCenso = totalCensadosDepartamentos("SALTO", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "SAN JOSE":
            resultadoCenso = totalCensadosDepartamentos("SAN JOSE", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "SORIANO":
            resultadoCenso = totalCensadosDepartamentos("SORIANO", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "TACUAREMBO":
            resultadoCenso = totalCensadosDepartamentos("TACUAREMBO", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
        case "TREINTA Y TRES":
            resultadoCenso = totalCensadosDepartamentos("TREINTA Y TRES", censados);
            document.querySelector("#tBodyEstadisticaDepartamento").innerHTML += `
      <tr>
        <td> El total de personas censadas en el departamento seleccionado es de ${resultadoCenso}</td>
      </tr>
      `
            break
    }
}

//FUNCION TOTAL DE CENSADOS POR DEPARTAMENTOS ESTADÍSTICA (censista)

function totalCensadosDepartamentos(departamento, censados) { 
    let contadorCensadosDepartamentos = 0;
    let resultadoCensados = 0;

    for (let i = 0; i < censados.length; i++) {
        if (censados[i].departamento === departamento)
            contadorCensadosDepartamentos = contadorCensadosDepartamentos + 1;
        resultadoCensados = contadorCensadosDepartamentos
    }

    return resultadoCensados
} //fin funcion

//CONSULTAR CENSOS PENDIENTES

document.querySelector("#btnConsultarCensosPendientes").addEventListener("click", consultarCensosPendientes); // parte 3 de estadistica

function consultarCensosPendientes() {

    document.querySelector("#tCensosPendientes").innerHTML = "";

    let contadorCensadosPendientes = 0;

    for (let i = 0; i < preCensados.length; i++) {
        if (preCensados[i].PreEstado !== true) {
            contadorCensadosPendientes++;
        }

    }

    document.querySelector("#tCensosPendientes").innerHTML += `
  <tr>
    <td> El total de personas pendientes por validar es de  ${contadorCensadosPendientes}</td>
  </tr>
`;
}

document.querySelector("#btnConsultarInformacion").addEventListener("click", consultarEstadistica) //parte 4 de estadistica

function consultarEstadistica() {

    let departamentoEstadistica = document.querySelector("#slcDepartamentoEstadistica").value;
    let resultado = ""
    document.querySelector("#tResultadoEstadisticaCenso").innerHTML = ``;

    switch (departamentoEstadistica) {
        case "ARTIGAS":
            resultado = porcentajeEdades("ARTIGAS", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "CANELONES":
            resultado = porcentajeEdades("CANELONES", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "CERRO LARGO":
            resultado = porcentajeEdades("CERRO LARGO", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "COLONIA":
            resultado = porcentajeEdades("COLONIA", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "DURAZNO":
            resultado = porcentajeEdades("DURAZNO", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "FLORES":
            resultado = porcentajeEdades("FLORES", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "FLORIDA":
            resultado = porcentajeEdades("FLORIDA", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "LAVALLEJA":
            resultado = porcentajeEdades("LAVALLEJA", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "MALDONADO":
            resultado = porcentajeEdades("MALDONADO", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "MONTEVIDEO":
            resultado = porcentajeEdades("MONTEVIDEO", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "PAYSANDU":
            resultado = porcentajeEdades("PAYSANDU", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "RIO NEGRO":
            resultado = porcentajeEdades("RIO NEGRO", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "RIVERA":
            resultado = porcentajeEdades("RIVERA", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "ROCHA":
            resultado = porcentajeEdades("ROCHA", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "SALTO":
            resultado = porcentajeEdades("SALTO", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "SAN JOSE":
            resultado = porcentajeEdades("SAN JOSE", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "SORIANO":
            resultado = porcentajeEdades("SORIANO", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "TACUAREMBO":
            resultado = porcentajeEdades("TACUAREMBO", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
        case "TREINTA Y TRES":
            resultado = porcentajeEdades("TREINTA Y TRES", censados)
            document.querySelector("#tResultadoEstadisticaCenso").innerHTML += `
      <tr>
        <td>${resultado}</td>
      </tr>
    `
            break
    }
}

//FUNCION PORCENTAJE DE EDADES (CENSISTA)

function porcentajeEdades(departamento, censados) { 
    let contadorMenores = 0;
    let contadorMayores = 0;


    for (let i = 0; i < censados.length; i++) {
        if (censados[i].departamento === departamento) {
            let edad = censados[i].edad;
            if (edad < 18) {
                contadorMenores++;
            } else {
                contadorMayores++;
            }
        }
    }

    let totalCensados = contadorMenores + contadorMayores;
    let porcentajeMenores = (contadorMenores / totalCensados) * 100;
    let porcentajeMayores = (contadorMayores / totalCensados) * 100;

    if(totalCensados !== 0){
      porcentajeMenores = (contadorMenores / totalCensados) * 100
      porcentajeMayores = (contadorMayores / totalCensados) * 100
    }else{
      porcentajeMenores = 0
      porcentajeMayores = 0
    }

    return `El porcentaje de menores en el departamento es de ${porcentajeMenores}% y el porcentaje de mayores ${porcentajeMayores}%`

} // fin de funcion porcentaje estadistica



//FUNCION LIMPIAR CÉDULA DE PUNTUACIONES

function limpiarCedula(ci) {
  let nuevaCedula = ""
  for (let i = 0; i < ci.length; i++) {
    caracter = ci.charAt(i)
    while (caracter === "0" || caracter === "1" || caracter === "2" || caracter === "3" || caracter === "4" || caracter === "5" || caracter === "6" || caracter === "7" || caracter === "8" || caracter === "9") {
      nuevaCedula += caracter
      i++
      caracter = ci.charAt(i)
    }
  }
  return nuevaCedula

}













const formulario = document.querySelector("form")
const propietario = document.getElementById("propietario")
const telefono = document.getElementById("telefono")
const direccion = document.getElementById("direccion")
const nombreMascota = document.getElementById("nombreMascota")
const tipoMascota = document.getElementById("tipo")
const enfermedad = document.getElementById("enfermedad")




class Propietario{
    constructor(nombre,direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el numero teléfonico de contacto: ${this.telefono}`
    }
}

class Animal extends Propietario{
    constructor(nombre,direccion,telefono,tipo){
        super(nombre,direccion,telefono)
        this.tipo = tipo
    }
    get getTipo(){
        return `El tipo de animal es un: ${this.tipo}`
    }
}

class Mascota extends Animal{
    constructor(nombre,direccion,telefono,tipo,nombreMascota,enfermedad){
        super(nombre,direccion,telefono,tipo)
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad
    }
    get getNombreMascota(){
        return this.nombreMascota
    }
    set setNombreMascota(nuevoNombre){
        this.nombreMascota = nuevoNombre
    }
    get getEnfermedad(){
        return this.enfermedad
    }
    set setEnfermedad(nuevaEnfermedad){
        this.enfermedad = nuevaEnfermedad
    }

}

formulario.addEventListener('submit', e => {
    e.preventDefault()
    const resultados = document.getElementById("resultado")
    const mascota1 = new Mascota(propietario.value, direccion.value, telefono.value, tipo.value) 
    mascota1.setNombreMascota = nombreMascota.value
    mascota1.setEnfermedad = enfermedad.value
    resultados.innerHTML = `
    <li>${mascota1.datosPropietario()}</li>
    <li>${mascota1.getTipo}, mientras que el nombre de la mascota es: ${mascota1.getNombreMascota} y la enfermedad es : ${mascota1.getEnfermedad}</li>`
})
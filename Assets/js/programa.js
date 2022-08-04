//funcion constructora base para objeto consultorio
// function consultorio(nombre, paciente){
//     var nombre = nombre;
//     var paciente = paciente

// }; 

// function consultorio(nombre, paciente) { // Función constructora
//     this.nombre = nombre;
//     this.paciente = paciente;
//     {
        
//     }
//     };


function Consultorio(nombre, paciente) {
	this.nombre = nombre;
	this.paciente = paciente || [];

	Object.defineProperty(this, "getNombre", {
		get: function () {
			return nombre;
		},
	});
	Object.defineProperty(this, "setNombre", {
		set: function (nombre) {
			nombre = nombre;
		},
    });
        Object.defineProperty(this, "getPaciente", {
            get: function () {
                return paciente;
            },
	});
    Object.defineProperty(this, "setPaciente", {
		set: function (paciente) {
			paciente = paciente;
		},
    });
};

Consultorio.prototype.getNombre = function () {return this.getNombre; };
Consultorio.prototype.setNombre = function (nombre) {this.setNombre = nombre; };
Consultorio.prototype.getPaciente = function () {return this.getPaciente; };
Consultorio.prototype.setPaciente = function (paciente) {this.setPaciente = paciente; };
    



//funcion constructora para objetop paciente

function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre=nombre;
  this.edad=edad;
  this.rut=rut
  this.diagnostico=diagnostico
  Object.defineProperty(this, "getNombre", {
    get: function () {
        return nombre;
    },
});
Object.defineProperty(this, "setNombre", {
    set: function (nombre) {
        nombre = nombre;
    },
});
Object.defineProperty(this, "getEdad", {
    get: function () {
        return edad;
    },
});
Object.defineProperty(this, "setEdad", {
    set: function (edad) {
        edad = edad;
    },
});
Object.defineProperty(this, "getRut", {
    get: function () {
        return rut;
    },
});
Object.defineProperty(this, "setRut", {
    set: function (rut) {
        rut = rut;
    },
});
Object.defineProperty(this, "getDiagnostico", {
    get: function () {
        return diagnostico;
    },
});
Object.defineProperty(this, "setDiagnostico", {
    set: function (diagnostico) {
        diagnostico = diagnostico;
    },
});


};

Paciente.prototype.getNombre = function () {return this.getNombre; };
Paciente.prototype.setNombre = function (nombre) {this.setNombre = nombre; };
Paciente.prototype.getEdad = function () {return this.getEdad; };
Paciente.prototype.setEdad = function (edad) {this.setEdad = edad; };
Paciente.prototype.getRut = function () {return this.getRut; };
Paciente.prototype.setRut = function (rut) {this.setRut = rut; };
Paciente.prototype.getDiagnostico = function () {return this.getDiagnostico; };
Paciente.prototype.setDiagnostico = function (diagnostico) {this.setDiagnostico = diagnostico; };

//vamnos agregando pacientes colocando los datos en forma ('nombre'. 'edad', 'rut', 'diagnostico')
var paciente1 = new Paciente("Pedro ", "36 " ,"16.111.111-1 "," Estres");
var paciente2 = new Paciente("Juan ","38 ","25.111.111-2 "," Calambres");
var paciente3 = new Paciente("Diego ","38 ","26.111.111-2 "," Calambres");




console.log(paciente1);
console.log(paciente2);
console.log(paciente3);

console.log(paciente1.getNombre + paciente1.getEdad + paciente1.getRut + paciente1.getDiagnostico);
console.log(paciente2.getNombre + paciente2.getEdad + paciente2.getRut + paciente2.getDiagnostico);
console.log(paciente3.getNombre + paciente3.getEdad + paciente3.getRut + paciente3.getDiagnostico);




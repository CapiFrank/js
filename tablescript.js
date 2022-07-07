function get_personas(URL) {
            axios.get(URL).then((response) => {
                const data = response.data;
                const keys = Object.keys(data);

                if (keys.length) {
                    keys.map((key) => {
                        const usuario = data[key];
                        console.log(usuario)

                        //------------------------------------------------------------

                        var tblBody = document.getElementsByTagName('tbody')[0];
                        var hilera = document.createElement("tr");
                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.cedula);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.nombre);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.direccion);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/detalles/${usuario.cedula}">Detalles</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                        
                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/editar/${usuario.cedula}">Editar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                                
                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/eliminar/${usuario.cedula}">Eliminar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }
function get_cuidador(URL) {
            axios.get(URL).then((response) => {
                const data = response.data;
                const keys = Object.keys(data);

                if (keys.length) {
                    keys.map((key) => {
                        const usuario = data[key];
                        console.log(usuario)

                        //------------------------------------------------------------

                        var tblBody = document.getElementsByTagName('tbody')[0];
                        var hilera = document.createElement("tr");
                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.cedula);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.nombre);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.fech_ingr);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/detalles/${usuario.cedula}">Detalles</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                        
                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/editar/${usuario.cedula}">Editar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                                
                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/eliminar/${usuario.cedula}">Eliminar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }
function get_guia(URL) {
            axios.get(URL).then((response) => {
                const data = response.data;
                const keys = Object.keys(data);

                if (keys.length) {
                    keys.map((key) => {
                        const usuario = data[key];
                        console.log(usuario)

                        //------------------------------------------------------------

                        var tblBody = document.getElementsByTagName('tbody')[0];
                        var hilera = document.createElement("tr");
                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.cedula);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.nombre);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.fecha_ini);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/detalles/${usuario.cedula}">Detalles</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                        
                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/editar/${usuario.cedula}">Editar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                                
                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/eliminar/${usuario.cedula}">Eliminar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }
function get_zona(URL) {
            axios.get(URL).then((response) => {
                const data = response.data;
                const keys = Object.keys(data);
                if (keys.length) {
                    keys.map((key) => {
                        const usuario = data[key];
                        console.log(usuario)

                        //------------------------------------------------------------

                        var tblBody = document.getElementsByTagName('tbody')[0];
                        var hilera = document.createElement("tr");
                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.id);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.nombre);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.ext_ocup);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/eliminar/${usuario.id}">Eliminar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/editar/${usuario.id}">Editar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }
function get_habitat(URL) {
            axios.get(URL).then((response) => {
                const data = response.data;
                const keys = Object.keys(data);
                if (keys.length) {
                    keys.map((key) => {
                        const usuario = data[key];
                        console.log(usuario)

                        //------------------------------------------------------------

                        var tblBody = document.getElementsByTagName('tbody')[0];
                        var hilera = document.createElement("tr");
                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.id);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.nombre);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.clima);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.tipo_vegetacion);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.continente);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/eliminar/${usuario.id}">Eliminar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/editar/${usuario.id}">Editar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }
function get_especie(URL) {
            axios.get(URL).then((response) => {
                const data = response.data;
                const keys = Object.keys(data);
                if (keys.length) {
                    keys.map((key) => {
                        const usuario = data[key];
                        console.log(usuario)

                        //------------------------------------------------------------

                        var tblBody = document.getElementsByTagName('tbody')[0];
                        var hilera = document.createElement("tr");
                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.id);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.nombre);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.nombre_cientifico);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.descripcion);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/eliminar/${usuario.id}">Eliminar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/editar/${usuario.id}">Editar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }

function get_itinerario(URL) {
            axios.get(URL).then((response) => {
                const data = response.data;
                const keys = Object.keys(data);
                if (keys.length) {
                    keys.map((key) => {
                        const usuario = data[key];
                        console.log(usuario)

                        //------------------------------------------------------------

                        var tblBody = document.getElementsByTagName('tbody')[0];
                        var hilera = document.createElement("tr");
                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.codigo_itinerario);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.duracion_recorrido);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.longitud_recorrido);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.maximo_visitantes_Aut);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.especie);
                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/eliminar/${usuario.codigo_itinerario}">Eliminar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------

                        var celda = document.createElement("td");
                        celda.innerHTML = `<a href="${URL}/editar/${usuario.codigo_itinerario}">Editar</a>`;
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }

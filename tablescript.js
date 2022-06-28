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
                        var inner_tabla = document.createElement("table");
                        var inner_hilera = document.createElement("tr");
                        
                        var inner_celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.tel_per);
                        inner_celda.appendChild(textoCelda);
                        inner_hilera.appendChild(inner_celda);
                        inner_tabla.appendChild(inner_hilera);

                        var inner_celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.tel_tr);
                        inner_celda.style.borderLeft = "black 2px solid";
                        inner_celda.appendChild(textoCelda);
                        inner_hilera.appendChild(inner_celda);
                        inner_tabla.appendChild(inner_hilera);

                        var inner_celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.tel_otr);
                        inner_celda.style.borderLeft = "black 2px solid";
                        inner_celda.appendChild(textoCelda);
                        inner_hilera.appendChild(inner_celda);
                        inner_tabla.appendChild(inner_hilera);
                        
                        celda.appendChild(inner_tabla);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);

                        //------------------------------------------------------------
                        
                        var celda = document.createElement("td");
                        var inner_tabla = document.createElement("table");
                        var inner_hilera = document.createElement("tr");
                        
                        var inner_celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.cor_per);
                        inner_celda.appendChild(textoCelda);
                        inner_hilera.appendChild(inner_celda);
                        inner_tabla.appendChild(inner_hilera);

                        var inner_celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.cor_tr);
                        inner_celda.style.borderLeft = "black 2px solid";
                        inner_celda.appendChild(textoCelda);
                        inner_hilera.appendChild(inner_celda);
                        inner_tabla.appendChild(inner_hilera);

                        var inner_celda = document.createElement("td");
                        var textoCelda = document.createTextNode(usuario.cor_otr);
                        inner_celda.style.borderLeft = "black 2px solid";
                        inner_celda.appendChild(textoCelda);
                        inner_hilera.appendChild(inner_celda);
                        inner_tabla.appendChild(inner_hilera);
                        
                        celda.appendChild(inner_tabla);
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                    });
                }
            }).catch((error) => {
                console.error(error);
            });
        }

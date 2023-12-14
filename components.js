class MenuElement extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement("template");
        this.template.innerHTML = `
  
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" style="font-size: 18px;">
    <a class="navbar-brand" href="#">
        <img src="https://lms.ile.ec/pluginfile.php/1/core_admin/logo/0x200/1688998895/ILE_USFQ_Logo_5.png"
            alt="Logo" height="30">
    </a>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="Index.html">Página Principal</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="area_Personal.html">Área Personal</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Mis_Cursos.html">Mis cursos</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                        <path
                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                    </svg><i class="bi bi-bell"></i></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
                        <path
                            d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    </svg><i class="fa fa-envelope"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-user"><svg xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20" fill="currentColor" class="bi bi-person-circle"
                            viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg></i></a>
            </li>
        </ul>
    </div>
</nav>

        `;
    }
    connectedCallback() {

        let cloneDOM = document.importNode(this.template.content, true);
        this.appendChild(cloneDOM);
    }

    attributeChangedCallback(attr, oldval, newval) {

    }

    static get obseredAttribute() {
        return [''];
    }
}
window.customElements.define("x-menu", MenuElement);

class MenuElement2 extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement("template");
        this.template.innerHTML = `
        <style>
        body {
            padding-top: 56px;
        }

        .main {
            padding: 10px 70px 10px 70px;
        }

        .card {
            margin: 20px;
        }

        .card-img-top {
            width: auto;
            height: auto;
        }

    </style>

    <div class="main bg-light">
            
        <h2 class="mt-4 mb-4" id="mainTitle"></h2>
        <div class="container2 mt-2" style="background-color: white; border-radius: 6px;">
            <div class="row">
                <h3 class="col-12 ml-4 mt-4 mb-2" id="subTitle"></h3>
                <div class="col-md-4">
                    <div class="card ml-5">
                        <img src="Imagenes/fondo1.jpg" class="card-img-top" alt="Ilustración 1">
                        <div class="card-body">
                            <h5 class="card-title"
                                style="position: absolute; top: 0; left: 0; right: 0;  padding: 10px; color: white;">
                                Jul.Ago 2023</h5>
                                <p style="color: blue;">DISEÑO Y ADM DE BASE DE DATOS</p>
                            <div class="progress" style="margin-top: 20px;">

                                <div class="progress-bar" role="progressbar" style="width: 10%;" aria-valuenow="4"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>10% Completado</p>
                        </div>
                    </div>

                </div>
                
                <div class="col-md-4">
                    <div class="card">
                        <img src="Imagenes/fonto2.jpg" class="card-img-top" alt="Ilustración 1">
                        <div class="card-body">
                            <h5 class="card-title"
                                style="position: absolute; top: 0; left: 0; right: 0;  padding: 10px; color: white" ;>
                                Sep.Oct 2023</h5>
                                <p style="color: blue;">DISEÑO Y ADM DE BASE DE DATOS</p>
                            <div class="progress" style="margin-top: 20px;">

                                <div class="progress-bar" role="progressbar" style="width: 4%;" aria-valuenow="4"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>4% Completado</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mr-5">
                        <img src="Imagenes/fondo1.jpg" class="card-img-top" alt="Ilustración 1">
                        <div class="card-body">
                            <h5 class="card-title"
                                style="position: absolute; top: 0; left: 0; right: 0;  padding: 10px; color: white;">
                                Nov.Dic 2023</h5>
                            <p style="color: blue;">DISEÑO Y ADM DE BASE DE DATOS</p>
                            <div class="progress" style="margin-top: 20px;">

                                <div class="progress-bar" role="progressbar" style="width: 14%;" aria-valuenow="14"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>14% Completado</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-3 mb-5" style="text-align: center;">
                    <button class="btn" style="background-color: lightgray;">Todos los cursos</button>
                </div>
            </div>
        </div>
    </div>

        `;
        // Añadir atributos observados
        this.mainTitle = this.getAttribute('main-title') || 'Instituto de Lenguas Extranjeras - USFQ: Entrar al sitio';
        this.subTitle = this.getAttribute('sub-title') || 'Mis cursos';
    }
    connectedCallback() {

        let cloneDOM = document.importNode(this.template.content, true);
        cloneDOM.getElementById('mainTitle').innerText = this.mainTitle;
        cloneDOM.getElementById('subTitle').innerText = this.subTitle;
        this.appendChild(cloneDOM);
    }

    attributeChangedCallback(attr, oldval, newval) {
        // Manejar cambios en los atributos observados si es necesario
        if (attr === 'main-title') {
            this.mainTitle = newval;
        } else if (attr === 'sub-title') {
            this.subTitle = newval;
        }
    }

    static get observedAttributes() {
        return ['main-title', 'sub-title'];
    }
}
window.customElements.define("x-menu2", MenuElement2);

class MenuElement3 extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement("template");
        this.template.innerHTML = `
        <style>
        body {
            padding-top: 56px;
        }

        .main {
            padding: 10px 70px 10px 70px;
        }

        footer {
            background-color: black;
            color: white;
            text-align: center;
  
        }
        .btn-circle {
            width: 30px;
            height: 30px;
            padding: 5px 0px;
            border-radius: 15px;
            text-align: center;
            font-size: 12px;
            line-height: 1.2;
        }
        </style>

        <footer>
        <div class="row ">
            <div class="col-md-4 mt-4 mb-4">
                <p>Contactanos</p>
                <button class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="white" class="bi bi-globe-americas" viewBox="0 0 16 16">
                        <path
                            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                    </svg></button>
                <button class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg></button>
                <p>Siguenos</p>
                <button class="btn btn-circle" style="background-color: rgb(53, 30, 169);"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook"
                        viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg></button>
                <button class="btn btn-circle" style="background-color: rgb(141, 30, 169);"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-instagram"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg></button>
                <button class="btn btn-circle" style="background-color: rgb(30, 169, 39);"><svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-whatsapp"
                        viewBox="0 0 16 16">
                        <path
                            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg></button>
            </div>
            <div class="col-md-4 mt-4">
                <button type="button" class="btn btn-outline-light mb-2">Conectar con el soporte del sistema</button>
                <p>Usted se ha identificado como STEFANNY MISHEL HERNANDEZ BUENAÑO (Cerrar Sesión)</p>
                <p>Politicas de Proteccion de Datos</p>
                <p>Reiniar toour para usuario en esta Pagina</p>
            </div>
            <div class="col-md-4 mt-4">
                <p>Descarga la app para dispositovs moviles</p>
                <button type="button" class="btn btn-outline-light mb-2"> <svg
                        xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                        class="bi bi-google-play" viewBox="0 0 16 16">
                        <path
                            d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295M1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                    </svg>GET IT ON Google Play</button> <br>
                <button type="button" class="btn btn-outline-light mb-2"><svg xmlns="http://www.w3.org/2000/svg"
                        width="35" height="35" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                        <path
                            d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                        <path
                            d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                    </svg>Download on the App Store</button>

            </div>
            <div class="col-md-12" style="background-color: rgb(247, 5, 5)">
                <div class="row">
                    <div class="col-6 d-flex justify-content-end">
                        <h1 style="font-family:Arial, Helvetica, sans-serif; font-size: 50px; border-right: 3px solid white;"
                            class="mr-0">
                            <b>ile</b>
                        </h1>
                    </div>
                    <div class="col-6 d-flex justify-content-star">
                        <h5 style="font-family: 'Times New Roman', Times, serif" ; class="mt-2 ml-0">U N I V E R S I D A D
                            <br>SAN FRANCISCO
                        </h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12 mb-2 bg-light d-flex justify-content-end">
            <button class="mt-3 btn btn-circle" style="background-color: rgb(183, 180, 184);">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                    class="bi bi-question" viewBox="0 0 16 16">
                    <path
                        d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                </svg>
            </button>
        </div>
    </footer>
        `;
    }
    connectedCallback() {

        let cloneDOM = document.importNode(this.template.content, true);
        this.appendChild(cloneDOM);
    }

    attributeChangedCallback(attr, oldval, newval) {

    }

    static get obseredAttribute() {
        return [''];
    }
}
window.customElements.define("x-menu3", MenuElement3);

class MenuElement4 extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement("template");
        this.template.innerHTML = `
        <style>

        :host {
            display: block;
            padding-top: 56px;
            padding: 10px 70px 10px 70px;
        }

        .card {
            margin: 20px;
            border-color: white;
        }

        .btn-circle {
            width: 30px;
            height: 30px;
            padding: 5px 0px;
            border-radius: 15px;
            text-align: center;
            font-size: 12px;
            line-height: 1.2;
        }

        .btn {

            text-align: start;
            color: rgb(137, 134, 134);
        }

        .btn-circle2 {
            width: 40px;
            height: 40px;
            padding: 5px 0px;
            border-radius: 20px;
            text-align: center;
            font-size: 20px;
            line-height: 1.5;
        }
        </style>
        <div class="main bg-light">
        <div class="container2 mt-2" style="background-color: white; border-radius: 6px;">
            <div class="row">
                <div class="col-4">
                    <div class="card ml-4">
                        <nav class="nav flex-column">

                            <button type="button" class="btn  mb-2" style="font-size: 20px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-house" viewBox="0 0 16 16">
                                    <path
                                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                                </svg> Inicio</button>
                            <button type="button" class="btn  mb-2" style="font-size: 20px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-calendar" viewBox="0 0 16 16">
                                    <path
                                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                </svg> Calendar</button>
                            <hr>
                            <button type="button" class="btn  mb-2" style="font-size: 20px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                    <path
                                        d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                                </svg> Cursos</button>
                            <button type="button" class="btn mb-2" style="font-size: 20px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-card-checklist" viewBox="0 0 16 16">
                                    <path
                                        d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                    <path
                                        d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                </svg> Tareas Pendientes</button>

                            <a class="nav-link active" aria-current="page" href="#"><button class="btn btn-circle2"
                                    style="background-color: rgb(169, 104, 30); color: white;">PI</button> 16409-PROGRAM
                                INTEGRATIVA DE COMPONE</a>
                            <a class="nav-link active" aria-current="page" href="#"><button class="btn btn-circle2"
                                    style="background-color: rgb(30, 164, 169); color: white;">SB</button>
                                16358-SISTEMAS
                                DE BASES DE DATOS</a>
                            <a class="nav-link active" aria-current="page" href="#"><button class="btn btn-circle2"
                                    style="background-color: rgb(30, 169, 81); color: white;">DW</button>
                                16403-DESARROLLO WEB PARA INTEGRACIO</a>
                            <a class="nav-link active" aria-current="page" href="#"><button class="btn btn-circle2"
                                    style="background-color: rgb(169, 30, 134); color: white;">AS</button>
                                16360-APLICACION DE SIST. OPERATIVOS</a>

                            <hr>
                            <button type="button" class="btn mb-2" style="font-size: 20px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-archive" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                </svg> Clases Archivadas</button>
                            <button type="button" class="btn mb-2" style="font-size: 20px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-gear" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path
                                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg> Ajustes</button>

                        </nav>
                    </div>
                </div>
                <div class="col-8">
                    <div class="card ml-7">
                        <h3 style="text-align: center;" class="mt-3 mb-4">Todas las Tareas</h3>
                    </div>

                    <div class="card ">
                        <div class="card-header">
                            <ul class="nav nav-pills card-header-pills">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Asignado</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sin entregar</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Hecho</a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="alert alert-light" role="alert">
                                <button class="btn btn-circle2" style="background-color: rgb(71, 189, 91);"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                                        class="bi bi-journal-text" viewBox="0 0 16 16">
                                        <path
                                            d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                        <path
                                            d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                        <path
                                            d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                    </svg><button type="button" class="btn btn-outline-light col-11">
                                        <p class="mt-1">
                                        <div class="row">
                                            <div class="col-8">
                                               <b>Foro </b><br> 16409-PROGRAM INTEGRATIVA DE COMPONE
                                                </p>
                                            </div>
                                            <div class="col-4" style="text-align: end;">
                                                <p style="color: green;"><b>Entrega hoy</b> <br> miercoles, 13 diciembre
                                                    23:00 </p>
                                            </div>
                                        </div>
                                    </button>
                            
                                <button class="btn btn-circle2" style="background-color: rgb(189, 140, 71);"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                                    class="bi bi-journal-text" viewBox="0 0 16 16">
                                    <path
                                        d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    <path
                                        d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                    <path
                                        d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                </svg><button type="button" class="btn btn-outline-light col-11">
                                    <p class="mt-1">
                                    <div class="row">
                                        <div class="col-8">
                                            <b>Tarea</b><br> 16409-PROGRAM INTEGRATIVA DE COMPONE
                                            </p>
                                        </div>
                                        <div class="col-4" style="text-align: end;">
                                            <p style="color: green;"><b>Mañana</b> <br> miercoles, 14 diciembre
                                                23:00 </p>
                                        </div>
                                    </div>
                                </button>
                                <button class="btn btn-circle2" style="background-color: rgb(71, 136, 189);"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                                    class="bi bi-journal-text" viewBox="0 0 16 16">
                                    <path
                                        d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    <path
                                        d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                    <path
                                        d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                </svg><button type="button" class="btn btn-outline-light col-11">
                                    <p class="mt-1">
                                    <div class="row">
                                        <div class="col-8">
                                           <b>Examen</b> <br> 16409-PROGRAM INTEGRATIVA DE COMPONE
                                            </p>
                                        </div>
                                        <div class="col-4" style="text-align: end;">
                                            <p style="color: green;"><b>Mañana</b> <br> miercoles, 14 diciembre
                                                23:00 </p>
                                        </div>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  
        `;
    }
    connectedCallback() {

        let cloneDOM = document.importNode(this.template.content, true);
        this.appendChild(cloneDOM);
    }

    attributeChangedCallback(attr, oldval, newval) {

    }

    static get obseredAttribute() {
        return [''];
    }
}
window.customElements.define("x-menu4", MenuElement4);
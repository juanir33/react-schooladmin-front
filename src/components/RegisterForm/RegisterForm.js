const Register = () => {
    return (
        <div className="text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card border-0 shadow rounded-3 my-5">
                                <div class="card-body card-body-login p-4 p-sm-5">
                                    <h4 class="card-title text-center mb-4 fw-light fs-5"><strong>CREA TU CUENTA</strong></h4>
                                    <form>
                                    <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Nombre"/>
                                                <label for="floatingInput">Nombre</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Apellido"/>
                                                <label for="floatingInput">Apellido</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label for="floatingInput">Email</label>
                                        </div>
                                        <div class="form-floating  mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"/>
                                                <label for="floatingPassword">Contraseña</label>
                                        </div>
                                        <div class="form-floating  mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"/>
                                                <label for="floatingPassword">Confirma tu contraseña</label>
                                        </div>
                                        
                                        <div class="d-grid ">
                                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">REGISTRARSE</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Register

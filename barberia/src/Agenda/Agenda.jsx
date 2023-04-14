export function Agenda() {
    return (
        <>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                        <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="email" class="form-control" placeholder="Correo" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col-6">
                        <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="number" class="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
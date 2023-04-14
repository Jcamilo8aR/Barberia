import { Agenda } from "../Agenda/Agenda"

export function Home(){
    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/barberia-de779.appspot.com/o/barberia.webp?alt=media&token=d9d6bf45-a8ee-45d8-9082-0d4a5e325bbc" alt="foto" className="img-fluid w-100 border border-5" />
                        </div>
                        <div className="col-12 col-md-4">
                            <Agenda/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
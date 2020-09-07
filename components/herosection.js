import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="font-weight-light">Mitstreiter gesucht!</h1>
          <p className="lead text-muted">
            Ohne Idee, aber motiviert? Stöbere durch die unten vorgestellten
            Projekte und finde deine Traumprojekt!
          </p>
          <p className="lead text-muted">
            Du hast eine Idee, aber dir fehlt das Team zur Realisierung? Stelle
            dein Projekt vor und erreiche Studierende aus der Region!
          </p>
          <p>
            <Link href="/forms/submitProject">
              <a className="btn btn-primary my-2">Projekt einreichen</a>
            </Link>
            <Link href="/forms/submitRequest">
              <a className="btn btn-secondary my-2">Bei Projekt einsteigen</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

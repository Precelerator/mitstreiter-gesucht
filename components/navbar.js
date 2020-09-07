export default function NavBar() {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">Über die Plattform</h4>
              <p className="text-muted">
                Mitstreiter gesucht ist ein Projekt des Precelerator-Teams,
                angesiedelt am Strascheg Center für Entrepreneurship (SCE).
              </p>
              <p className="text-muted">
                Du willst deine Idee auf der Plattform vorstellen? Kontaktiere
                uns!
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Kontakt</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.sce.de/" className="text-white">
                    Besuche unsere Website
                  </a>
                </li>
                <li>
                  <a href="mailto:precelerator@sce.de" className="text-white">
                    Oder schreib uns per Mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a
            href="https://mitstreiter-gesucht.vercel.app/"
            className="navbar-brand d-flex align-items-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              className="bi bi-people mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
              />
            </svg>
            <strong>Mitstreiter gesucht!</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Footer({ timestamp }) {
  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-right mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">
          Mitstreiter gesucht! ist eine Plattform des Precelerators am{" "}
          <a href="https://www.sce.de/en/home.html">SCE</a>.
        </p>
        <p className="mb-0">
          Du kennst den Precelerator noch nicht?{" "}
          <a href="https://www.hm.edu/allgemein/forschung_entwicklung/forschungsprojekte/projektdetails/gillig/startuplabs.de.html">
            Erfahre mehr über das Projekt
          </a>{" "}
          oder <a href="#">schreib uns eine Nachricht</a>.
        </p>
        <br />
        <p>
          <small className="text-muted">
            v0.1 - letztes Update: {timestamp}
          </small>
        </p>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
        crossOrigin="anonymous"
      ></script>
    </footer>
  );
}

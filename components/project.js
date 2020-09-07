// import Link from "next/link";

export default function Project({ project, index }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src={"https://picsum.photos/300/200?random=" + index + "?blur=10"}
          className="bd-placeholder-img card-img-top"
          width="300"
          height="200"
        ></img>
        <div className="card-body">
          <h3>{project[0].content.$t}</h3>
          <p className="card-text">
            {project[1].content.$t}
            {/* <Link href="/project/[id]" as={`/project/${index}`}>
              <a>Mehr erfahren...</a>
            </Link> */}
          </p>
          <p>
            Gesucht: <b>{project[4].content.$t}</b>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{project[2].content.$t}</small>
            <small className="text-muted">{project[3].content.$t}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

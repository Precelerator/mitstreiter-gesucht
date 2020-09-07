import Layout from "../components/layout";
import Project from "../components/project";
import HeroSection from "../components/herosection";

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    "https://spreadsheets.google.com/feeds/cells/18eHzl01G3aZtwc2w9IBerXe0UZngFIcNSC80BI4IWVk/1/public/full?alt=json"
  );
  const projectList = await response.json();
  projectList.feed.entry = new Array(
    Math.ceil(projectList.feed.entry.length / 5)
  )
    .fill()
    .map((_) => projectList.feed.entry.splice(0, 5));
  let timestamp = projectList.feed.updated.$t.substring(0, 10);

  return {
    props: {
      projectList,
      timestamp,
    },
  };
}

export default function IndexPage({ projectList, timestamp }) {
  return (
    <Layout timestamp={timestamp}>
      <HeroSection />
      <section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div
              id="projects"
              className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
            >
              {projectList.feed.entry
                .slice(1, projectList.feed.entry.length)
                .map((project) => (
                  <Project
                    project={project}
                    index={projectList.feed.entry.indexOf(project)}
                    key={projectList.feed.entry.indexOf(project)}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const nav = ["Colleges", "Students", "Jobs", "More"];

const audiences = [
  { title: "College", desc: "Student outreach, placements, and recruitment in one place.", pts: ["Showcase your campus to recruiters", "Reach more students and recruiters", "Track placements in real time"], cta: "Join as College" },
  { title: "I'm Looking for a Job", desc: "Upload your resume. Get matched with roles that fit.", pts: ["Jobs from 100+ employers", "Internships and campus drives", "Alerts when new roles appear"], cta: "Find Jobs" },
  { title: "I'm Hiring", desc: "Hire from colleges and beyond, without running drives.", pts: ["Post a role in minutes", "Shortlisted candidates, ranked", "Connect with candidates directly"], cta: "Start Hiring" },
];

const stats = [
  ["800+", "Students"], ["130+", "Colleges"], ["100+", "Jobs & Internships"], ["100%", "Safety Trusted"],
];

const partners = ["GINSERV", "STARTUP KARNATAKA", "NASSCOM", "AICTE", "MeitY", "Digital India"];

const matchSteps = [
  ["Set your preferences", "Choose roles, locations and skills."],
  ["Discover relevant opportunities", "Jobs and drives that fit your profile."],
  ["Get notified, never miss anything", "Alerts as soon as new roles appear."],
];

const feed = [
  ["UX Designer", "Remote · ₹8L–12L"],
  ["Product Intern", "Bengaluru · ₹25K/mo"],
  ["Marketing Executive", "Hyderabad · ₹5L–7L"],
];

const discover = [
  ["Build your college profile", "Show courses, placements and campus life."],
  ["Students discover and connect", "Students find your college and reach out."],
  ["Recruiters discover your college", "Get found by employers hiring on campus."],
  ["Track placements in real time", "Live dashboards for offers and drives."],
];

const hiring = [
  ["Post a role in minutes", "Describe the role and publish."],
  ["Receive a matched shortlist", "Candidates ranked by fit."],
  ["Connect with candidates directly", "Message and schedule in-app."],
  ["Reduce your time-to-hire", "Skip campus drives and long cycles."],
];

const footer: Record<string, string[]> = {
  "For Students": ["Explore Colleges", "Find Jobs", "Internships", "Upload Resume"],
  "For Colleges": ["List Your College", "Placements", "Recruiters"],
  "For Employers": ["Post a Job", "Find Talent", "Pricing"],
  Company: ["About", "Careers", "Contact", "Blog"],
  "Legal & Policies": ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

function Steps({ items }: { items: string[][] }) {
  return (
    <ul className="steps">
      {items.map(([t, d]) => (
        <li key={t}>
          <strong>{t}</strong>
          <span>{d}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a className="logo" href="#">CampusPe</a>
          <nav className="nav-links">
            {nav.map((n) => <a key={n} href="#">{n}</a>)}
          </nav>
          <div className="nav-cta">
            <a href="#">Sign in</a>
            <a className="btn sm" href="#">Sign up</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero wrap">
          <h1>Connect <span className="blue">10X Faster.</span></h1>
          <p className="sub">One platform connecting students, colleges &amp; employers — faster.</p>
          <p className="ask">What are you looking for?</p>
          <div className="cards3">
            {audiences.map((a) => (
              <article className="card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <ul className="ticks">{a.pts.map((p) => <li key={p}>{p}</li>)}</ul>
                <a className="btn full" href="#">{a.cta}</a>
              </article>
            ))}
          </div>
          <div className="stats">
            {stats.map(([n, l]) => (
              <div key={l}><b>{n}</b><span>{l}</span></div>
            ))}
          </div>
          <p className="trusted">Trusted by partners across India</p>
          <div className="partners">{partners.map((p) => <span key={p}>{p}</span>)}</div>
        </section>

        <section className="split wrap">
          <div>
            <h2>Stop searching.<br /><span className="blue">Start getting matched.</span></h2>
            <p className="lead">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and alert you when they appear.</p>
            <Steps items={matchSteps} />
            <a className="btn" href="#">Explore opportunities</a>
          </div>
          <div className="panel">
            <h4>CampusPe Opportunity Feed</h4>
            {feed.map(([t, m]) => (
              <div className="row" key={t}><div><b>{t}</b><small>{m}</small></div><a className="btn xs" href="#">Apply</a></div>
            ))}
          </div>
        </section>

        <section className="center wrap">
          <h2>Upload your resume.<br /><span className="blue">Find jobs that fit.</span></h2>
          <p className="lead">Upload once. CampusPe reads your skills, experience and preferences, then finds relevant jobs across 1,700+ sources.</p>
          <div className="upload">
            <b>Upload your resume</b>
            <small>PDF, DOC or DOCX · Max 5 MB</small>
            <a className="btn" href="#">Choose file</a>
          </div>
        </section>

        <section className="split wrap">
          <div>
            <h2>Get Discovered<br />by <span className="blue">Students and Recruiters.</span></h2>
            <p className="lead">Put your college in front of students searching for the right course and recruiters looking for talent.</p>
            <a className="btn" href="#">List Your College</a>
          </div>
          <Steps items={discover} />
        </section>

        <section className="split wrap">
          <div>
            <h2>Stop running campus drives.<br /><span className="blue">Start hiring the right people.</span></h2>
            <p className="lead">Post a role in minutes and reach qualified candidates without the time and cost of traditional drives.</p>
            <a className="btn" href="#">Post a Job</a>
          </div>
          <Steps items={hiring} />
        </section>

        <section className="center wrap">
          <h2 className="blue sm-h">Checkout Our App Interface Look</h2>
          <p className="lead">Explore how CampusPe feels on your phone.</p>
          <div className="phones">
            {[0, 1, 2, 3, 4].map((i) => <div key={i} className={`phone p${i}`} />)}
          </div>
        </section>

        <section className="split wrap">
          <div>
            <h3 className="blue">Download App Now</h3>
            <p className="lead">Find jobs, track applications and connect with colleges from your phone.</p>
            <div className="stores">
              <a className="store" href="#">Google Play</a>
              <a className="store" href="#">App Store</a>
            </div>
          </div>
          <div className="phone tilt" />
        </section>

        <section className="wrap">
          <div className="help">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you succeed. Get in touch anytime.</p>
            <div className="btns">
              <a className="btn" href="#">Contact Support</a>
              <a className="btn ghost" href="#">Schedule a Call</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="ready">
            <b>Ready for what&apos;s next?</b>
            <div className="btns">
              <a className="btn sm" href="#">Explore Colleges</a>
              <a className="btn sm" href="#">Find Jobs</a>
            </div>
          </div>
          <div className="fgrid">
            <div>
              <a className="logo" href="#">CampusPe</a>
              <p className="small">Connecting students, colleges and employers across India.</p>
            </div>
            {Object.entries(footer).map(([h, links]) => (
              <div key={h}>
                <h5>{h}</h5>
                {links.map((l) => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
          <p className="copy">© 2026 CampusPe Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

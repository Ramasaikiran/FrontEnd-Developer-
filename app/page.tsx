/* eslint-disable @next/next/no-img-element */
type Row = { n: string; k: string; t: string; d: string; tags: string[] };

const cards = [
  { t: "College", b: "Coming Soon", d: "Explore colleges, courses, fees, placements & more", p: ["Search by course, location, fees", "Connect directly with colleges", "Improve student placements"], c: "Join Waitlist" },
  { t: "I'm Looking for a Job", b: "Available Now", d: "Upload your resume. We'll find jobs that fit you.", p: ["Jobs from 1000+ sources", "AI powered matching", "WhatsApp & email alerts"], c: "Explore Jobs →" },
  { t: "I'm Hiring", b: "Coming Soon", d: "Connect with colleges and find candidates — from students to graduates.", p: ["Connect directly with colleges", "Find the right candidates", "Simplify your hiring"], c: "Join Waitlist" },
];
const stats = [["800+", "Students"], ["130+", "colleges"], ["100+", "jobs & internships"], ["100%", "Safe & Trusted"]];
const prefs = [
  ["01", "Set your preferences", "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.", "Smart Profile"],
  ["02", "Discover relevant opportunities", "Explore colleges and career opportunities matched to your profile, interests and goals", "AI Ranked"],
  ["03", "Get notified when something fits", "Get notified when a relevant college or new opportunity is found, so you can act early.", "Instant Alerts"],
];
const tabs = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];
const feed = [
  ["IIM Bangalore", "Top College", "MBA · Bengaluru · ₹3L+", "India's premier management institute with global exposure...", "View Details"],
  ["Product Intern", "Internship", "Bengaluru · Hybrid · ₹35K/mo", "Work on real products, learn from top engineers and build...", "Apply Now"],
  ["Marketing Gig", "Freelance", "Remote · Freelance · ₹10K - ₹25K", "Create content and help with social media campaigns for...", "View Details"],
];
const chips = [["Resume analyzed", "Ready in 4s"], ["Skills matched", "Deep taxonomy"], ["Experience matched", "Contextual seniority"], ["1,000+ sources searched", "Real-time aggregators"]];
const colleges: Row[] = [
  { n: "01", k: "VERIFIED PROFILE", t: "Build your college profile", d: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.", tags: ["NAAC A++ Ready", "98% Match"] },
  { n: "02", k: "DIRECT ENROLL", t: "Students discover and connect", d: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.", tags: ["Direct Enquiries", "WHATSAPP / CHAT", "Avg. response: <15 min"] },
  { n: "03", k: "CAMPUS RECRUITING", t: "Recruiters discover your College", d: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.", tags: ["500+ Hiring Partners", "Connect Directly"] },
  { n: "04", k: "LIVE HUB", t: "Track placements in real time", d: "Track students, interviews, offers and placements from one centralized dashboard.", tags: ["LIVE PLACEMENTS", "Students · Interviews · Offers"] },
];
const employers: Row[] = [
  { n: "01", k: "INSTANT SETUP", t: "Post a role in minutes", d: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.", tags: ["5 Min Deployment", "500+ Campus Network"] },
  { n: "02", k: "INSTANT SETUP", t: "Receive a matched shortlist", d: "Get candidates matched to your role by skills, experience, location and hiring requirements.", tags: ["Zero CV Clutter", "Tier1–Tier3 Parity"] },
  { n: "03", k: "INSTANT SETUP", t: "Connect with candidates directly", d: "Message, schedule interviews, and move candidates through your pipeline — all in one place.", tags: ["In-App Scheduling", "1-Click Video / Chat"] },
  { n: "04", k: "INSTANT SETUP", t: "Reduce your time-to-hire", d: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.", tags: ["<2 DAYS", "57% Faster Hiring"] },
];
const footer: Record<string, string[]> = {
  "For Students": ["Explore Colleges", "Find Opportunities", "Internships", "Full-time Jobs", "Part-time & Gig", "Application Tracker"],
  "For Colleges": ["List Your College", "Admissions", "Fee Collection", "Placements"],
  "For Employers": ["Post a Job", "Find Talent", "Campus Hiring"],
  Company: ["About Us", "Contact Us", "Blogs", "Careers"],
  "Legal & Policies": ["Privacy Policy", "Terms & Conditions", "Refund & Cancellation Policy", "Cookie Policy", "Grievance Redressal", "Job & Internship Disclaimer"],
};

const Eyebrow = ({ children }: { children: string }) => <span className="eyebrow">• {children}</span>;

function RowCards({ rows }: { rows: Row[] }) {
  return (
    <div className="rows">
      {rows.map((r) => (
        <div className="rowcard" key={r.n}>
          <div className="rc-main">
            <small className="rc-k"><i>{r.n}</i> {r.k}</small>
            <b>{r.t}</b>
            <p>{r.d}</p>
          </div>
          <div className="rc-tags">{r.tags.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a className="logo" href="#">CampusPe</a>
          <nav className="nav-links">{["Colleges", "Employers", "Jobs", "Blogs"].map((n) => <a key={n} href="#">{n}</a>)}</nav>
          <div className="nav-cta"><a href="#">Sign In</a><a className="btn sm" href="#">Sign Up</a></div>
        </div>
      </header>

      <main>
        <section className="hero wrap">
          <div className="float f1"><b>WhatsApp Alert</b><small>Get notified on whatsapp. You&apos;ll get all important updates on your whatsapp</small></div>
          <div className="float f2"><b>Resume Builder</b><small>Build Your Resume. Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired</small></div>
          <span className="pill">AI-Powered Campus Assistant</span>
          <h1>Connect <span className="blue">10X Faster.</span></h1>
          <p className="sub">One platform connecting students, colleges &amp; employers — faster.</p>
          <p className="ask">✦ What are you looking for? ✦</p>
          <div className="cards3">
            {cards.map((a) => (
              <article className="card" key={a.t}>
                <span className={`badge ${a.b === "Available Now" ? "on" : ""}`}>{a.b}</span>
                <div className="ico" />
                <h3>{a.t}</h3>
                <p>{a.d}</p>
                <ul className="ticks">{a.p.map((p) => <li key={p}>{p}</li>)}</ul>
                <a className="btn full" href="#">{a.c}</a>
              </article>
            ))}
          </div>
          <div className="stats">
            {stats.map(([n, l]) => (<div key={l}><i className="sico" /><div><b>{n}</b><span>{l}</span></div></div>))}
          </div>
          <p className="trusted">Trusted by partners across India</p>
          <div className="partners"><img src="/partners.png" alt="Partners: Ginserv, Startup Karnataka, Talentspotify, Radiant Info" /></div>
        </section>

        <section className="band">
          <div className="split wrap">
            <div>
              <Eyebrow>01 • OPPORTUNITY DISCOVERY</Eyebrow>
              <h2>Stop searching.<br /><span className="blue">Start getting matched.</span></h2>
              <p className="lead">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
              <div className="mini">
                {prefs.map(([n, t, d, g]) => (
                  <div className="minicard" key={n}><i>{n}</i><div><b>{t}</b><p>{d}</p></div><em>{g}</em></div>
                ))}
              </div>
              <a className="btn" href="#">Explore opportunities →</a>
            </div>
            <div>
              <div className="panel">
                <div className="ph"><span className="ico sm" /><div><b>CampusPe Opportunity Feed</b><small>Colleges &amp; opportunities matched to you</small></div><em className="green">• 12 new matches today</em></div>
                <div className="tabs">{tabs.map((t, i) => <span key={t} className={i === 0 ? "act" : ""}>{t}</span>)}</div>
                {feed.map(([t, g, m, d, c]) => (
                  <div className="frow" key={t}>
                    <span className="ico sm" />
                    <div><b>{t} <em className="tag">{g}</em></b><small>{m}</small><small>{d}</small></div>
                    <a className="btn xs" href="#">{c}</a>
                  </div>
                ))}
                <div className="pf"><a className="blue" href="#">View all matched opportunities →</a><small>Curated for you • Updated daily</small></div>
              </div>
              <p className="hand">A mix of colleges, jobs, internships and gigs — all in one place.</p>
            </div>
          </div>
        </section>

        <section className="center wrap">
          <span className="pill">TRY IT LIVE · v2.4 AI Engine</span>
          <h2>Upload your resume.<br /><span className="blue">Find jobs that fit.</span></h2>
          <p className="lead">Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p>
          <div className="upwrap">
            <div className="float f3"><b>98% Match Rate</b><small>AI semantic rank</small></div>
            <div className="upload">
              <h3>Upload your resume</h3>
              <small>PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.</small>
              <a className="btn" href="#">Upload resume ↑</a>
              <small>or drag and drop your file here</small>
              <div className="fmt"><span>PDF</span><span>DOC</span><span>DOCX</span></div>
            </div>
            <div className="float f4"><b>ATS Compliant</b><small>Standardized parser</small></div>
          </div>
          <div className="chips">{chips.map(([a, b]) => <div key={a}><b>{a}</b><small>{b}</small></div>)}</div>
        </section>

        <section className="band">
          <div className="split wrap">
            <div>
              <Eyebrow>02 • FOR COLLEGES</Eyebrow>
              <h2>Get Discovered<br />by <span className="blue">Students and Recruiters.</span></h2>
              <p className="lead">Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build presence, attract enquiries and connect with opportunities.</p>
              <a className="btn" href="#">List Your College →</a>
            </div>
            <RowCards rows={colleges} />
          </div>
        </section>

        <section className="band alt">
          <div className="split wrap">
            <div>
              <Eyebrow>03 • FOR EMPLOYERS</Eyebrow>
              <h2>Stop running<br />campus drives.<br /><span className="blue">Start hiring the right people.</span></h2>
              <p className="lead">Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.</p>
              <a className="btn" href="#">Post a Job →</a>
            </div>
            <RowCards rows={employers} />
          </div>
        </section>

        <section className="center wrap">
          <h2 className="blue sm-h">Checkout Our App Interface Look</h2>
          <p className="lead">Experience the power of a unified campus ecosystem right in your pocket. <b>CampusPe</b> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.</p>
          <img className="shots" src="/app-screens.png" alt="CampusPe app screens" />
          <div className="dots"><i /><i /><i className="on" /><i /><i /></div>
        </section>

        <section className="split wrap dl">
          <div>
            <h3 className="blue">Download App Now</h3>
            <p className="lead">Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection. Your career doesn&apos;t start at graduation—it starts here.</p>
            <div className="stores"><a className="store" href="#">▶ Google Play</a><a className="store" href="#"> App Store</a></div>
          </div>
          <img src="/app-download.png" alt="CampusPe app on phones" className="dlimg" />
        </section>

        <section className="wrap">
          <div className="help">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you succeed. Get in touch anytime.</p>
            <div className="btns"><a className="btn pillbtn" href="#">Contact Support ↗</a><a className="btn ghost pillbtn" href="#">Schedule a Call ✆</a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="ready">
            <div><b>Ready for what&apos;s next?</b><small>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</small></div>
            <div className="btns">
              <a className="btn xs" href="#">Explore Colleges →</a><a className="btn xs" href="#">Find Opportunities →</a>
              <a className="btn xs ghost" href="#">List Your College →</a><a className="btn xs ghost" href="#">Post a Job →</a>
            </div>
          </div>
          <div className="fgrid">
            <div>
              <a className="logo" href="#">CampusPe</a>
              <p className="f1">From choosing a college to finding your next opportunity.</p>
              <p className="small">CampusPe connects students, colleges and employers in one place.</p>
            </div>
            {Object.entries(footer).map(([h, ls]) => (<div key={h}><h5>{h}</h5>{ls.map((l) => <a key={l} href="#">{l}</a>)}{h === "Legal & Policies" && <a className="blue" href="#">View all policies →</a>}</div>))}
          </div>
          <div className="fbar"><span>contactus@campuspe.com</span><span>+91 6362606464</span><span>● Students · Colleges · Employers</span></div>
          <p className="copy">2026 CampusPe Technologies Pvt. Ltd. &nbsp; Privacy &nbsp; Terms &nbsp; Grievance</p>
        </div>
      </footer>
    </>
  );
}

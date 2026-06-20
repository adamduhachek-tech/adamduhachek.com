import type { Metadata } from "next";

const TEACHING_DESC =
  "Adam Duhachek's teaching: consumer behavior, marketing analytics, and research methods across undergraduate, MBA, and doctoral levels at the University of Illinois Chicago, Indiana University, and internationally.";

export const metadata: Metadata = {
  title: "Teaching",
  description: TEACHING_DESC,
};

const INTERESTS = [
  "Consumer Behavior",
  "Marketing Analytics",
  "Marketing Research",
  "Advertising",
  "Marketing Management",
  "Marketing Strategy",
];

const COURSES = [
  { code: "M468", name: "Marketing Analytics", where: "UIC · 2021–2023" },
  { code: "M461", name: "Consumer Behavior", where: "UIC · 2020–2024" },
  { code: "M594", name: "Consumer Behavior — Doctoral Seminar", where: "UIC · 2020, 2022, 2023" },
  { code: "M304", name: "Marketing Principles (Honors Core)", where: "Indiana · 2013–2018" },
  { code: "M544", name: "Advertising Strategy", where: "Indiana · 2011, 2012" },
  { code: "M405", name: "Consumer Behavior", where: "Indiana · 2008–2012" },
  { code: "M303", name: "Marketing Research Methods", where: "Indiana · 2005–2008" },
  { code: "MBA", name: "Marketing Research", where: "Kellogg, Northwestern · 2004" },
];

const INTERNATIONAL = [
  { code: "Masters", name: "Advertising", where: "University of Sydney · 2013–2019" },
  { code: "Masters", name: "Business Marketing", where: "University of Sydney · 2012" },
  { code: "Masters", name: "Marketing Strategy", where: "University of Sydney · 2011" },
  { code: "PhD", name: "Doctoral Seminar", where: "FGV-EBAPE, Rio de Janeiro · 2014" },
  { code: "BA", name: "Consumer Behavior", where: "Sungkyunkwan University, Seoul · 2009" },
  { code: "MBA", name: "Marketing Research", where: "Luiss Guido Carli University, Rome · 2004" },
];

const ADVISEES = [
  { name: "Katie Kelting", school: "Saint Louis University", note: "Ph.D. 2011, Indiana", href: "https://www.slu.edu/business/about/faculty/kelting-katie.php" },
  { name: "Morgan Poor", school: "San Diego State University", note: "Ph.D. 2012, Indiana", href: "https://business.sdsu.edu/departments/faculty-staff-listing/mpoor" },
  { name: "Da Hee Han", school: "Seoul National University", note: "Ph.D. 2013, Indiana", href: "https://cba.snu.ac.kr/en/research/faculty/professor?idx=13142" },
  { name: "Claire Heeryung Kim", school: "Roosevelt University", note: "Ph.D. 2017, Indiana", href: "https://www.roosevelt.edu/profile/hkim28" },
  { name: "Tae Woo Kim", school: "University of Technology Sydney", note: "Ph.D. 2019, Indiana", href: "https://profiles.uts.edu.au/TaeWoo.Kim" },
  { name: "Serkan Saka", school: "San José State University", note: "Ph.D. 2024, UIC", href: "https://www.sjsu.edu/mktba/about-us/faculty-staff-contact.php" },
];

function CourseList({ items }: { items: { code: string; name: string; where: string }[] }) {
  return (
    <ul className="courses">
      {items.map((c, i) => (
        <li key={i}>
          <span className="code">{c.code}</span>
          <span className="name">{c.name}</span>
          <span className="where">{c.where}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TeachingPage() {
  return (
    <main id="content">
      <div className="wrap" style={{ paddingTop: 34 }}>
        <section>
          <h2>Teaching</h2>
          <div className="rule" />
          <p className="lede">
            I teach consumer behavior, marketing analytics, and research methods
            across the undergraduate, MBA, and doctoral levels — at UIC, at
            Indiana University, and as a visiting and honorary professor in
            Australia, Brazil, Korea, and Italy.
          </p>
          <div className="chips" role="list" aria-label="Teaching interests">
            {INTERESTS.map((i) => (
              <span className="chip" role="listitem" key={i}>
                {i}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2>Course resources</h2>
          <div className="rule" />
          <p>
            Open datasets for marketing-research projects — a sortable catalog
            by domain and difficulty, each with a direct download path and a
            good first exercise.
          </p>
          <div className="gallery">
            <a
              className="card"
              href="/teaching/marketing-research-data-sources.html"
              target="_blank"
              rel="noopener"
            >
              <h3>Marketing Research — Classroom Data Sources</h3>
              <p>
                Sixteen vetted public datasets across consumer reviews, retail,
                real estate, survey, demographics, and search behavior.
              </p>
              <span className="src">sortable table + download guides →</span>
            </a>
          </div>
        </section>

        <section>
          <h2>Case studies</h2>
          <div className="rule" />
          <p>
            Interactive teaching cases built from real study data — read the
            argument, then poke at the figures.
          </p>
          <div className="gallery">
            <a
              className="card"
              href="/teaching/ai-character-case.html"
              target="_blank"
              rel="noopener"
            >
              <h3>Do Frontier AI Models Have Personality?</h3>
              <p>
                Ask a frontier model who it is once and it answers vivid and
                distinct; ask it a thousand times and Claude, GPT, Gemini, and
                DeepSeek melt into a nearly identical average.
              </p>
              <span className="src">interactive case · live charts →</span>
            </a>
          </div>
          <p className="muted" style={{ marginTop: 14 }}>
            Companion{" "}
            <a href="/teaching/methods-note.pdf" target="_blank" rel="noopener">
              methods note (PDF)
            </a>{" "}
            — how the study was designed, scored, and analysed.
          </p>
        </section>

        <section>
          <h2>Courses</h2>
          <div className="rule" />
          <CourseList items={COURSES} />
        </section>

        <section>
          <h2>International teaching</h2>
          <div className="rule" />
          <CourseList items={INTERNATIONAL} />
        </section>

        <section>
          <h2>Doctoral advising</h2>
          <div className="rule" />
          <p>Dissertations chaired or co-chaired, with first placement:</p>
          <div className="gallery">
            {ADVISEES.map((a) => (
              <a
                className="card"
                href={a.href}
                target="_blank"
                rel="noopener"
                key={a.name}
              >
                <h3>{a.name}</h3>
                <p>{a.school}</p>
                <span className="src">{a.note} · faculty page →</span>
              </a>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 14 }}>
            In addition, served on numerous doctoral committees in marketing,
            management, psychology, accounting, and information systems at Indiana
            University and UIC.
          </p>
        </section>
      </div>
    </main>
  );
}

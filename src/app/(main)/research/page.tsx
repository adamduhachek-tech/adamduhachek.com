import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

const RESEARCH_DESC =
  "Curriculum vitae of Adam Duhachek, Bielinski Family Faculty Scholar and Professor of Marketing at the University of Illinois Chicago: appointments, education, 51 publications, honors, and service.";

export const metadata: Metadata = {
  title: "Research & CV",
  description: RESEARCH_DESC,
};

const CV_PDF = "/Duhachek%20June%202026%20CV.pdf";

/** Journal/outlet name — italic navy, like the print CV. */
function J({ children }: { children: ReactNode }) {
  return <span className="j">{children}</span>;
}

const APPOINTMENTS = [
  { h: "Bielinski Family Faculty Scholar & Professor of Marketing", m: "University of Illinois Chicago · 2024–present (Professor since June 2019)" },
  { h: "Professor of Marketing; Nestlé-Hustad Professor of Marketing", m: "Indiana University · 2015–2019" },
  { h: "Associate Professor; Nestlé-Hustad Professor of Marketing", m: "Indiana University · 2009–2015" },
  { h: "Jack R. Wentworth Associate Professor of Marketing (with tenure)", m: "Indiana University · 2008–2009" },
  { h: "Assistant Professor of Marketing", m: "Indiana University · 2004–2008" },
  { h: "Honorary Professor (2016–present) & Visiting Professor (2011–2015)", m: "University of Sydney" },
  { h: "Lecturer, MBA Program", m: "Kellogg School of Management, Northwestern University · 2004" },
];

const EDUCATION = [
  { h: "Ph.D. in Marketing (minor: Psychology)", m: "J.L. Kellogg School of Management, Northwestern University · 2004" },
  { h: "M.S. in Marketing", m: "J.L. Kellogg School of Management, Northwestern University · 2002" },
  { h: "B.A. with Highest Distinction, Mathematics & Economics (minors: Geography, Business)", m: "University of Nebraska–Lincoln · 1999" },
];

interface Pub {
  authors: string; // bold the Duhachek name by wrapping it in §…§
  year: string;
  title: string;
  journal: string;
  rest: string; // volume/pages etc., including its leading separator and trailing period
  badge?: string;
}

const PUBLICATIONS: Pub[] = [
  { authors: "Hamby, Anne, Rebecca Krause-Galoni, §Adam Duhachek§ & Derek Rucker", year: "2026", title: "How storytelling modality affects transportation and storyteller persuasion", journal: "Journal of Consumer Psychology", rest: "." },
  { authors: "Usman, Umair, TaeWoo Kim, Aaron Garvey & §Adam Duhachek§", year: "2026, forthcoming", title: "The Transition to Generative AI in Consumer Research: Moving Beyond Algorithm Aversion and the Road Ahead", journal: "Advancing Consumer Psychology", rest: "." },
  { authors: "Sharifi, Shahin, Riza Casidy, Kiju Jung & §Adam Duhachek§", year: "2026", title: "When recovery discounts backfire: The role of political ideology in shaping post-recovery satisfaction", journal: "Journal of Retailing", rest: "." },
  { authors: "Kim, Tae Woo, Umair Usman, Aaron Garvey & §Adam Duhachek§", year: "2026", title: "From algorithm aversion to AI dependence: Deskilling, upskilling, and emerging addictions in the GenAI age", journal: "Consumer Psychology Review", rest: " 9(1), 142–164." },
  { authors: "Lu, Louise, Zakary L. Tormala & §Adam Duhachek§", year: "2025", title: "How AI sources can increase openness to opposing views", journal: "Scientific Reports", rest: " 15(1), 17170." },
  { authors: "McShane, Blakeley B., David Gal & §Adam Duhachek§", year: "2025", title: "Artificial intelligence and dichotomania", journal: "Judgment and Decision Making", rest: " 20, e23." },
  { authors: "Viswanathan, Madhu, Saravana Jaikumar, Arun Sreekumar, Shantanu Dutta & §Adam Duhachek§", year: "2024", title: "Addressing difficulties with abstract thinking for low-literate, low-income consumers through marketplace literacy", journal: "Journal of Consumer Affairs", rest: " 58(3), 794–813." },
  { authors: "Usman, Umair, Tae Woo Kim, Aaron Garvey & §Adam Duhachek§", year: "2024", title: "The Persuasive Power of AI Ingratiation: A Persuasion Knowledge Theory Perspective", journal: "Journal of the Association for Consumer Research", rest: " 9(3), 319–331." },
  { authors: "Kim, TaeWoo, Umair Usman, Aaron Garvey & §Adam Duhachek§", year: "2023", title: "Artificial Intelligence in Marketing and Consumer Behavior Research", journal: "Foundations and Trends in Marketing", rest: " 18(1), 1–93." },
  { authors: "Kim, TaeWoo, Hyejin Lee, Michelle Yoosun Kim, SunAh Kim & §Adam Duhachek§", year: "2023", title: "AI Increases Unethical Consumer Behavior Due to Reduced Anticipatory Guilt", journal: "Journal of the Academy of Marketing Science", rest: " 51(4), 785–801." },
  { authors: "Garvey, Aaron, Tae Woo Kim & §Adam Duhachek§", year: "2023", title: "Bad News? Send an AI. Good News? Send a Human", journal: "Journal of Marketing", rest: " 87(1), 10–25.", badge: "H. Paul Root Award finalist" },
  { authors: "Kim, Tae Woo, Li Jiang, §Adam Duhachek§, Hyejin Lee & Aaron Garvey", year: "2022", title: "Do You Mind If I Ask You a Personal Question? How AI Service Agents Alter Consumer Self-Disclosure", journal: "Journal of Service Research", rest: " 25(4), 649–666." },
  { authors: "Kim, Tae Woo & §Adam Duhachek§", year: "2022", title: "AI and Consumer Behavior", journal: "Cambridge Handbook of Consumer Psychology", rest: "." },
  { authors: "Kim, TaeWoo, §Adam Duhachek§, Kelly Herd & SunAh Kim", year: "2022", title: "Toward a Goal-Based Paradigm of Contagion", journal: "European Journal of Marketing", rest: " 56(8), 2105–2137." },
  { authors: "Casidy, Riza, §Adam Duhachek§, Vishal Singh & Ali Tammadoni", year: "2021", title: "Religious Belief, Religious Priming and Negative Word of Mouth", journal: "Journal of Marketing Research", rest: " 58(4), 762–781." },
  { authors: "Kim, Tae Woo, §Adam Duhachek§, Pablo Briñol & Richard E. Petty", year: "2021", title: "How Posting Online Reviews Can Influence the Poster’s Evaluations", journal: "Personality and Social Psychology Bulletin", rest: " 47(9), 1401–1413." },
  { authors: "Kim, Tae Woo & §Adam Duhachek§", year: "2020", title: "Artificial Intelligence and Persuasion: A Construal Level Account", journal: "Psychological Science", rest: " 31(4), 363–380." },
  { authors: "Kim, Claire, Dahee Han, §Adam Duhachek§ & Zakary Tormala", year: "2018", title: "Political Identity, Preference, and Persuasion", journal: "Social Influence", rest: " 13(4), 177–191." },
  { authors: "Kelting, Katie, §Adam Duhachek§ & Kimberly Whitler", year: "2017", title: "Copycat Private Labels Improve the Consumer Shopping Experience: A Fluency Explanation", journal: "Journal of the Academy of Marketing Science", rest: " 45(4), 569–585." },
  { authors: "Han, DaHee, Ashok K. Lalwani & §Adam Duhachek§", year: "2017", title: "Power Distance Belief, Power and Charitable Giving", journal: "Journal of Consumer Research", rest: " 44(1), 182–195." },
  { authors: "Han, DaHee, §Adam Duhachek§ & Nidhi Agrawal", year: "2016", title: "Coping and Construal Level Matching Drives Health Message Effectiveness via Response Efficacy or Self-Efficacy Enhancement", journal: "Journal of Consumer Research", rest: " 43, 429–447." },
  { authors: "Achar, Chethana, Jane So, Nidhi Agrawal & §Adam Duhachek§", year: "2016", title: "What We Feel and Why We Buy: The Influence of Emotions on Consumer Decision Making", journal: "Current Opinion in Psychology", rest: " 10, 166–170." },
  { authors: "Han, DaHee, §Adam Duhachek§ & Derek D. Rucker", year: "2015", title: "Distinct Threats, Common Remedies: How Consumers Cope with Psychological Threat", journal: "Journal of Consumer Psychology", rest: " 25(4), 531–545.", badge: "Park Young Contributor Award" },
  { authors: "So, Jane, Chethana Achar, DaHee Han, Nidhi Agrawal, §Adam Duhachek§ & Durairaj Maheswaran", year: "2015", title: "The Psychology of Appraisal: Specific Emotions and Decision-Making", journal: "Journal of Consumer Psychology", rest: " 25(3), 359–371." },
  { authors: "Han, DaHee, §Adam Duhachek§ & Nidhi Agrawal", year: "2015", title: "Coping Research in the Broader Perspective: Emotions, Threats, Mindsets and More", journal: "Cambridge Handbook of Consumer Psychology", rest: ", 282–308." },
  { authors: "Han, DaHee, §Adam Duhachek§ & Nidhi Agrawal", year: "2014", title: "When Emotions Shape Construal: The Case of Guilt and Shame", journal: "Journal of Consumer Research", rest: " 41(4), 1047–1064." },
  { authors: "Poor, Morgan, §Adam Duhachek§ & H. Shanker Krishnan", year: "2013", title: "How Images of Other Consumers Influence Subsequent Taste Perceptions", journal: "Journal of Marketing", rest: " 77(6), 124–139." },
  { authors: "Agrawal, Nidhi, DaHee Han & §Adam Duhachek§", year: "2013", title: "Emotional Agency Appraisals Influence Responses to Preference Inconsistent Information", journal: "Organizational Behavior and Human Decision Processes", rest: " 120(1), 87–97." },
  { authors: "§Duhachek, Adam§, Nidhi Agrawal & DaHee Han", year: "2012", title: "Guilt Versus Shame: Coping, Fluency, and Framing in the Effectiveness of Responsible Drinking Messages", journal: "Journal of Marketing Research", rest: " 49(6), 928–941." },
  { authors: "Poor, Morgan, §Adam Duhachek§ & H. Shanker Krishnan", year: "2012", title: "The Moderating Role of Emotional Differentiation on Satiation", journal: "Journal of Consumer Psychology", rest: " 22(4), 507–519." },
  { authors: "Agrawal, Nidhi & §Adam Duhachek§", year: "2010", title: "Emotional Compatibility and the Effectiveness of Anti-Drinking Messages", journal: "Journal of Marketing Research", rest: " 47(2), 263–273." },
  { authors: "§Duhachek, Adam§ & Katie Kelting", year: "2009", title: "Coping Repertoire: Integrating a New Conceptualization of Coping with Transactional Theory", journal: "Journal of Consumer Psychology", rest: " 19(3), 473–485." },
  { authors: "Oakley, James, §Adam Duhachek§, Bala Balachander & S. Sriram", year: "2008", title: "Order of Entry and the Moderating Role of Comparison Brands in Brand Extension Evaluation", journal: "Journal of Consumer Research", rest: " 34(5), 706–712." },
  { authors: "§Duhachek, Adam§", year: "2008", title: "Summing up the State of Coping Research: Prescriptions and Prospects for Consumer Research", journal: "Consumer Behavior Handbook", rest: ", 1057–1077." },
  { authors: "§Duhachek, Adam§, Shuoyang Zhang & H. Shanker Krishnan", year: "2007", title: "Anticipated Group Interaction: Coping with Valence Asymmetries in Attitude Shift", journal: "Journal of Consumer Research", rest: " 34(3), 395–405." },
  { authors: "§Duhachek, Adam§ & James L. Oakley", year: "2007", title: "Mapping the Hierarchical Structure of Coping: Unifying Empirical and Theoretical Perspectives", journal: "Journal of Consumer Psychology", rest: " 17(3), 218–233." },
  { authors: "Oakley, James L., Dawn Iacobucci & §Adam Duhachek§", year: "2006", title: "Multi-level Hierarchical Linear Models and Marketing: This is not Your Advisor’s OLS Model", journal: "Review of Marketing Research", rest: ", Wiley." },
  { authors: "§Duhachek, Adam§, Anne T. Coughlan & Dawn Iacobucci", year: "2005", title: "Results on the Standard Error of the Coefficient Alpha Index of Reliability", journal: "Marketing Science", rest: " 24(2), 294–301." },
  { authors: "§Duhachek, Adam§", year: "2005", title: "Coping: A Multidimensional, Hierarchical Framework of Responses to Stressful Consumption Episodes", journal: "Journal of Consumer Research", rest: " 32(1), 41–53." },
  { authors: "§Duhachek, Adam§ & Dawn Iacobucci", year: "2005", title: "Consumer Personality and Coping: Testing Rival Theories of Process", journal: "Journal of Consumer Psychology", rest: " 15(1), 52–63." },
  { authors: "§Duhachek, Adam§ & Dawn Iacobucci", year: "2004", title: "Alpha’s Standard Error (ASE): An Accurate and Precise Confidence Interval Estimate", journal: "Journal of Applied Psychology", rest: " 89(5), 792–808." },
  { authors: "Kozinets, Robert, John F. Sherry Jr., Diana Storm, §Adam Duhachek§, Krittinee Nuttavuthisit & Benet DeBerry-Spence", year: "2004", title: "Ludic Agency and Retail Spectacle", journal: "Journal of Consumer Research", rest: " 31(3), 658–672." },
  { authors: "Sherry, John F. Jr., Robert Kozinets, §Adam Duhachek§, Benet DeBerry-Spence, Krittinee Nuttavuthisit & Diana Storm", year: "2004", title: "Gendered Behavior in a Male Preserve: Role Playing at ESPN Zone Chicago", journal: "Journal of Consumer Psychology", rest: " 14(1–2), 151–158." },
  { authors: "Iacobucci, Dawn, Doug Grisaffe, §Adam Duhachek§ & Alberto Marcati", year: "2003", title: "FAC-SEM: A Methodology for Modeling Factorial Structural Equations Models", journal: "Journal of Service Research", rest: " 6(1), 3–23." },
  { authors: "Iacobucci, Dawn & §Adam Duhachek§", year: "2003", title: "Advancing Alpha: Measuring Reliability with Confidence", journal: "Journal of Consumer Psychology", rest: " 13(4), 478–487." },
  { authors: "Novak, Tom, Donna Hoffman & §Adam Duhachek§", year: "2003", title: "The Influence of Goal-Directed and Experiential Activities on Online Flow Experiences", journal: "Journal of Consumer Psychology", rest: " 13(1–2), 3–16." },
  { authors: "Hopkins, Nigel, §Adam Duhachek§ & Dawn Iacobucci", year: "2003", title: "Decision Guidance Systems", journal: "Kellogg on Interactive Marketing", rest: ", 208–225." },
  { authors: "Iacobucci, Dawn, Bobby J. Calder, Edward Malthouse & §Adam Duhachek§", year: "2003", title: "Psychological, Marketing, Physical, and Sociological Factors Affecting Attitudes and Behavioral Intentions for Customers Resisting the Purchase of an Embarrassing Product", journal: "Advances in Consumer Research", rest: " 30, 236–240." },
  { authors: "Kozinets, Robert, John F. Sherry Jr., Benet DeBerry-Spence, §Adam Duhachek§, Krittinee Nuttavuthisit & Diana Storm", year: "2002", title: "Themed Flagship Brand Stores in the New Millennium: Theory, Practice, Prospects", journal: "Journal of Retailing", rest: " 78(1), 17–29.", badge: "Davidson Award honorable mention" },
  { authors: "Iacobucci, Dawn, Bobby J. Calder, Edward Malthouse & §Adam Duhachek§", year: "2002", title: "Did You Hear? Consumers Tune in to Multimedia Marketing", journal: "Marketing Health Services", rest: " 22, 16–20." },
  { authors: "Sherry Jr., John F., Robert Kozinets, Diana Storm, §Adam Duhachek§, Krittinee Nuttavuthisit & Benet DeBerry-Spence", year: "2001", title: "Being in the Zone: Staging Retail Theater at ESPN Zone Chicago", journal: "Journal of Contemporary Ethnography", rest: " 30(4), 465–510." },
];

/** Render an author string, bolding the §…§-wrapped name. */
function Authors({ value }: { value: string }) {
  return (
    <>
      {value.split("§").map((part, i) =>
        i % 2 === 1 ? <b key={i}>{part}</b> : <span key={i}>{part}</span>
      )}
    </>
  );
}

const HONORS: ReactNode[] = [
  "Bielinski Family Faculty Scholar, University of Illinois Chicago (2024–present)",
  "“AI Marketing Persuasion: Insights from Economically Vulnerable Consumers,” Becker Friedman Institute for Economics, $10,000 (2024–2025)",
  "Gallup World Poll Scholar (2008–present)",
  "Marketing Science Institute Research Award, “Artificial Intelligence and Persuasion: A Construal-Level Account,” $8,000 (2018)",
  "Nestlé-Hustad Professorship (2009–2019); Jack R. Wentworth Professorship (2008–)",
  "AMA Doctoral Consortium Faculty Fellow (2008, 2011, 2013)",
  "3M Research Fellowship (2005–2007); Kelley Life Sciences Fellow (2007–2019)",
  <>
    Outstanding Reviewer Award, <J>Journal of Consumer Research</J> (2015)
  </>,
  <>
    H. Paul Root Award finalist, <J>Journal of Marketing</J>; Davidson Award
    honorable mention, <J>Journal of Retailing</J>
  </>,
];

const SERVICE: ReactNode[] = [
  <>
    Editorial Review Board, <J>Journal of Consumer Psychology</J> (2010–present)
  </>,
  <>
    Editorial Review Board, <J>Journal of Consumer Research</J> (2004–2005;
    2014–2017); ad hoc Associate Editor, <J>Journal of Consumer Psychology</J>
  </>,
  "Associate Editor, Society for Consumer Psychology 2021 conference; Conference Co-Chair, SCP 2010",
  "Program committees: Association for Consumer Research (2009, 2022); Society for Consumer Psychology (2009); Marketing Research Track Co-Chair, 2005 AMA Summer Educators’ Conference",
  <>
    Ad hoc reviewer for the{" "}
    <J>Journal of the Academy of Marketing Science</J>, <J>Marketing Science</J>,{" "}
    <J>Marketing Letters</J>, <J>Psychological Methods</J>, and others
  </>,
];

export default function ResearchPage() {
  return (
    <main id="content">
      <div className="wrap" style={{ paddingTop: 34 }}>
        <section>
          <h2>Research</h2>
          <div className="rule" />
          <p className="lede">
            I study how consumers think, feel, and decide — with work on
            artificial intelligence and consumers, emotion and coping, political
            ideology, persuasion, and the measurement of well-being. My research
            appears in the <em>Journal of Consumer Research</em>,{" "}
            <em>Journal of Marketing</em>, <em>Journal of Marketing Research</em>,{" "}
            <em>Journal of Consumer Psychology</em>, and{" "}
            <em>Psychological Science</em>, among others.
          </p>
        </section>

        <section id="cv">
          <div className="cvbar">
            <h2>Curriculum Vitae</h2>
            <a className="btn" href={CV_PDF} target="_blank" rel="noopener">
              Download PDF ↓
            </a>
          </div>
          <div className="cv">
            <h3>Appointments</h3>
            {APPOINTMENTS.map((a, i) => (
              <div className="item" key={i}>
                <div className="h">{a.h}</div>
                <div className="m">{a.m}</div>
              </div>
            ))}

            <h3>Education</h3>
            {EDUCATION.map((e, i) => (
              <div className="item" key={i}>
                <div className="h">{e.h}</div>
                <div className="m">{e.m}</div>
              </div>
            ))}

            <h3>Publications</h3>
            <ol className="pubs">
              {PUBLICATIONS.map((p, i) => (
                <li key={i}>
                  <Authors value={p.authors} /> ({p.year}). “{p.title}.”{" "}
                  <J>{p.journal}</J>
                  {p.rest}
                  {p.badge ? <span className="badge">{p.badge}</span> : null}
                </li>
              ))}
            </ol>

            <h3>Honors, Grants & Awards</h3>
            <ul>
              {HONORS.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <h3>Editorial & Professional Service</h3>
            <ul>
              {SERVICE.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            <h3>Teaching</h3>
            <p className="muted" style={{ margin: "-4px 0 10px" }}>
              Courses, international teaching, and doctoral advising are detailed
              on the <Link href="/teaching">Teaching</Link> page.
            </p>
            <ul>
              <li>
                Recent courses: Marketing Analytics (M468), Consumer Behavior
                (M461), and a Consumer Behavior doctoral seminar (M594) at UIC;
                Consumer Behavior, Advertising Strategy, Marketing Principles, and
                Research Methods at Indiana University.
              </li>
              <li>
                Six doctoral dissertations chaired or co-chaired; numerous
                committees served.
              </li>
            </ul>

            <p className="muted" style={{ marginTop: 18 }}>
              The complete vita — including 70+ conference presentations and full
              university service — is in the{" "}
              <a href={CV_PDF} target="_blank" rel="noopener">
                PDF curriculum vitae
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

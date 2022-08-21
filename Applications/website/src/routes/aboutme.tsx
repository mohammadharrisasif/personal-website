import { Certification } from "../components/certification"

const certificates: Certificate[] = [
    {
        name: 'AWS Certified Solutions Architect Associate',
        fromDate: 'FromDate',
        toDate: 'ToDate'
    },
    {
        name: 'HashiCorp Terraform Associate',
        fromDate: 'FromDate',
        toDate: 'ToDate'
    },
    {
        name: 'AWS Certified Developer Associate',
        fromDate: 'FromDate',
        toDate: 'ToDate'
    },
    {
        name: 'AWS Certified Cloud Practitioner',
        fromDate: 'FromDate',
        toDate: 'ToDate'
    },
    {
        name: 'Microsoft Certified: Azure Fundamentals',
        fromDate: 'FromDate',
        toDate: 'ToDate'
    },
    {
        name: 'Docker Certified Associate',
        fromDate: 'FromDate',
        toDate: 'ToDate'
    }
]

export default function Aboutme() {
    return (
        <article id="work" className="wrapper style1">
				<div className="container">
					<header>
						<h2>Here's more about me.</h2>
						<p>
                            I've been a professional Software Developer since <strong>2019</strong>, having worked at <a href="https://www.amazon.com">Amazon</a>, <a href="https://www.parivedasolutions.com">Pariveda Solutions</a>, and <a href="https://www.chase.com">Chase</a>.
                            I've extensively used <strong>Java</strong>, <strong>C#</strong>, <strong>Python</strong>, and <strong>SQL</strong>. I am well versed in <strong>Docker</strong>, <strong>AWS</strong>, <strong>Azure</strong>, and <strong>Terraform</strong>. Here's 
                            my <a href="../assets/resume/Mohammad_Asif_Resume_2021.pdf" download>full resume</a> for more information. Check out some of my relevant certifications below!
                        </p>
					</header>
					<div className="row aln-center">
                        {certificates.map((certificate) => (
                            <Certification certificate={certificate} />
                        ))}                        
					</div>
					<footer>
						<p>Like what you see? Have a look at my profiles using the icons below!</p>
						<a href="/projects" className="button large scrolly">See some of my recent work</a>
					</footer>
				</div>
			</article>
    )
}
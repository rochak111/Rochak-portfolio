import { ExternalLink, Github } from 'lucide-react';
const projects=[
 {title:'360° Live Sports Streaming Platform',image:'/assets/arch.jpg',text:'A microservices-based platform for hosting live 360° sports streams with CI/CD, Kubernetes, Helm, GitOps, service mesh tooling, and observability.',tags:['Microservices','Kubernetes','Jenkins','Istio']},
 {title:'GitOps Delivery Workflow',image:'/assets/gitworkflow.jpg',text:'A deployment workflow integrating version control, automated pipelines, container builds, infrastructure provisioning, and continuous delivery.',tags:['GitOps','CI/CD','Docker','Argo CD']},
 {title:'Cloud Operations Architecture',image:'/assets/ops.jpg',text:'Cloud and operations architecture focused on scalable deployments, automation, monitoring, and reliable application delivery.',tags:['AWS','Terraform','Automation','Monitoring']},
 {title:'Service Traffic Visualisation',image:'/assets/kiali.jpg',text:'Visualisation and analysis of service-to-service traffic, health, and topology within a Kubernetes service mesh.',tags:['Kiali','Istio','Observability']},
 {title:'KhajaGhar',image:'/assets/pro-3.jpeg',text:'A food-oriented web application project demonstrating practical product development and deployment experience.',tags:['Web','Application','Deployment']}
];
export default function Projects(){return <section id="projects"><div className="section-shell"><p className="eyebrow">Selected work</p><h2 className="section-title">Projects</h2><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map(p=><article key={p.title} className="glass-card overflow-hidden"><img src={p.image} alt={p.title} className="h-52 w-full object-cover"/><div className="p-6"><h3 className="text-xl font-bold text-white">{p.title}</h3><p className="mt-3 leading-7 text-slate-400">{p.text}</p><div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => (
  <span key={t} className="text-xs text-sky-300">
    #{t.replace(/\s/g, '')}
  </span>
))}</div><div className="mt-6 flex gap-3"><a href="https://github.com/rochak111" target="_blank" className="button-secondary !px-4 !py-2 text-sm"><Github size={16}/>GitHub</a><a href="#contact" className="button-secondary !px-4 !py-2 text-sm"><ExternalLink size={16}/>Details</a></div></div></article>)}</div></div></section>}

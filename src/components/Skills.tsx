const groups={
 'Cloud & DevOps':['AWS','Docker','Kubernetes','EKS','Helm','Jenkins','GitHub Actions','GitLab CI/CD','Terraform','Ansible','GitOps'],
 'Development':['C# / .NET','Python','Go','Java','JavaScript / TypeScript','Django REST Framework','React','Node.js','FastAPI'],
 'Architecture & Operations':['Microservices','CI/CD','Infrastructure as Code','Observability','Prometheus','Istio','Kiali','Argo CD','Nginx']
};
export default function Skills(){return <section id="skills" className="bg-slate-900/35"><div className="section-shell"><p className="eyebrow">Toolkit</p><h2 className="section-title">Technical skills</h2><div className="mt-10 grid gap-6 lg:grid-cols-3">{Object.entries(groups).map(([name,skills])=><div key={name} className="glass-card p-6"><h3 className="text-lg font-bold text-white">{name}</h3><div className="mt-5 flex flex-wrap gap-2">{skills.map(s=><span key={s} className="rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">{s}</span>)}</div></div>)}</div></div></section>}

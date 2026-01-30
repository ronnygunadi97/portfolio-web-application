import Image from "next/image";
import { personalInfo, experience, education, skills } from "./data";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-slate-900 text-white py-32 lg:py-48">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 opacity-90"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 text-transparent bg-clip-text drop-shadow-sm">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-8 tracking-wide">
              {personalInfo.role}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${personalInfo.contact.email}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2">
                <Mail size={20} /> Contact Me
              </a>
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm border border-white/10 flex items-center gap-2">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm border border-white/10 flex items-center gap-2">
                <Github size={20} /> GitHub
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-medium tracking-wider uppercase">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400" /> {personalInfo.contact.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-400" /> {personalInfo.contact.location}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20 space-y-32">

        {/* Experience Section */}
        <section id="experience" className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 inline-block relative">
              <span className="relative z-10">Portfolio Showcase</span>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-0"></div>
            </h3>
          </div>

          <div className="space-y-16">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white"></div>

                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-slate-900">{job.role}</h4>
                  <div className="text-blue-600 font-semibold text-lg">{job.company}</div>
                  <div className="text-sm text-slate-500 mt-1 uppercase tracking-wide">{job.period} | {job.location}</div>
                </div>

                {job.highlights && job.highlights.length > 0 && (
                  <ul className="mt-4 space-y-3 text-slate-600 list-disc list-inside bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    {job.highlights.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}

                {job.projects && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {job.projects.map((proj: any, i) => (
                      <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-1">
                        {proj.image && (
                          <div className="h-48 relative overflow-hidden bg-slate-100">
                            {proj.link ? (
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full relative"
                              >
                                <Image
                                  src={proj.image}
                                  alt={proj.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                  <span className="text-white font-medium text-sm flex items-center gap-2">
                                    View on App Store
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                  </span>
                                </div>
                              </a>
                            ) : (
                              <>
                                <Image
                                  src={proj.image}
                                  alt={proj.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                  <span className="text-white font-medium text-sm">View Details</span>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h5 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">{proj.title}</h5>
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md ml-2 whitespace-nowrap">{proj.year}</span>
                          </div>
                          {proj.tech && <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3">{proj.tech}</div>}
                          <p className="text-slate-600 text-sm leading-relaxed">{proj.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 inline-block relative">
              <span className="relative z-10">Skills & Expertise</span>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-emerald-100 -z-0"></div>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.technical.length > 0 && (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></svg>
                </div>
                <h4 className="text-xl font-bold mb-6 text-slate-900">Technical</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skills.management.length > 0 && (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <h4 className="text-xl font-bold mb-6 text-slate-900">Management</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.management.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skills.tools.length > 0 && (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                </div>
                <h4 className="text-xl font-bold mb-6 text-slate-900">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="max-w-5xl mx-auto pb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 inline-block relative">
              <span className="relative z-10">Education</span>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-slate-200 -z-0"></div>
            </h3>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="p-4 bg-sky-50 rounded-2xl text-sky-600">
              {/* @ts-ignore - Assuming logo exists in data structure now */}
              {(education as any).logo ? (
                <Image
                  src={(education as any).logo}
                  alt={education.institution}
                  width={64}
                  height={64}
                  className="w-16 h-auto object-contain"
                />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              )}
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">{education.degree}</h4>
              <div className="text-lg text-slate-600 font-medium mb-1">{education.institution}</div>
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">{education.period}</div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Let&apos;s Work Together</h2>
          <div className="flex justify-center gap-6 mb-12">
            <a href={`mailto:${personalInfo.contact.email}`} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors">Email Me</a>
            <a href={personalInfo.contact.linkedin} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">LinkedIn</a>
          </div>
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

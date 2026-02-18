
import React, { useState } from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! In a real application, this would send an email.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black/40">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Info */}
          <div className="space-y-10">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
              <div className="w-20 h-1 bg-white mb-10"></div>

              <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed font-light">
                Feel free to reach out for collaborations, high-impact projects, or professional opportunities. I'm always open to discussing new technical challenges and scalable solutions.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Whatsapp Me</p>
                    <p className="text-lg font-medium">+92 3007571409</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email Me</p>
                    <p className="text-lg font-medium">mahreen.ch.3107@gmail.com</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex gap-5">
                {['LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href={
                      social === 'LinkedIn'
                        ? 'https://www.linkedin.com/in/mahreen-choudhry-71aab237a/?skipRedirect=true'
                        : social === 'GitHub'
                          ? 'https://github.com/Mahreen-Choudhry-3107'
                          : 'https://www.instagram.com/mahreen_ch24/?hl=en'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  >

                    <span className="sr-only">{social}</span>
                    {social === 'LinkedIn' && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    )}
                    {social === 'GitHub' && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    )}
                    {social === 'Instagram' && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    )}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Side: Form */}
          <Reveal delay={600} width="100%">
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 w-full shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">Name</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">Email</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      placeholder="email@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">Message</label>
                  <textarea
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    placeholder="Briefly describe your project or inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white transition-all text-white placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-3 group"
                >
                  <span className="tracking-tight">Send Messege</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from 'react';
import { GraduationCap, BookOpen, FolderOpenDot, Building2, Building, Calendar, Users, FileText, Phone, ArrowRight, TreePine, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2526] to-[#2E3A59] font-sans text-[#F8EDE3]">
      {/* Header */}
      <header className="fixed w-full bg-[#1C2526]/95 text-[#F8EDE3] z-50 border-b border-[#D4A017]/30 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="bg-[#D4A017] p-2 rounded-full shadow-md">
              <TreePine className="h-8 w-8 text-[#1C2526]" />
            </div>
            <span className="text-xl sm:text-2xl font-bold">Kalpataru</span>
          </div>
          <button className="sm:hidden text-[#F8EDE3]" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <nav className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col sm:flex sm:flex-row sm:gap-8 absolute sm:static top-20 right-0 w-3/4 sm:w-auto bg-[#1C2526]/95 sm:bg-transparent p-6 sm:p-0 text-sm sm:text-base border-l sm:border-l-0 border-[#D4A017]/30 shadow-lg sm:shadow-none transition-transform duration-300 ease-in-out sm:justify-center sm:items-center sm:flex-1`}>
            <a href="#home" className="relative font-medium text-[#F8EDE3] hover:text-[#D4A017] transition-colors duration-300 group py-2 sm:py-0" onClick={() => setIsMenuOpen(false)}>
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A017] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#programs" className="relative font-medium text-[#F8EDE3] hover:text-[#D4A017] transition-colors duration-300 group py-2 sm:py-0" onClick={() => setIsMenuOpen(false)}>
              Programs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A017] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#resources" className="relative font-medium text-[#F8EDE3] hover:text-[#D4A017] transition-colors duration-300 group py-2 sm:py-0" onClick={() => setIsMenuOpen(false)}>
              Resources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A017] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="relative font-medium text-[#F8EDE3] hover:text-[#D4A017] transition-colors duration-300 group py-2 sm:py-0" onClick={() => setIsMenuOpen(false)}>
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A017] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative font-medium text-[#F8EDE3] hover:text-[#D4A017] transition-colors duration-300 group py-2 sm:py-0" onClick={() => setIsMenuOpen(false)}>
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A017] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 sm:pb-20 bg-gradient-to-b from-[#1C2526]/90 to-[#2E3A59]/90 text-[#F8EDE3] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d990f900ce98?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-slide-up">
            
            {/* Always stacked vertically */}
            <div className="flex flex-col items-center gap-8">
              
              {/* Logo on top */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#D4A017] rounded-2xl blur-xl opacity-40 scale-105"></div>
                <img
                  src="/icons/logo.jpg"
                  className="h-24 w-24 sm:h-32 sm:w-32 relative rounded-2xl shadow-lg border-2 border-[#F8EDE3]/30 transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text content below logo */}
              <div className="text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight font-['Playfair_Display']">
                  Empowering Ideas, Enabling Growth
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-[#F8EDE3]/90">
                  Connecting Students, Faculty & Entrepreneurs with MSME Opportunities
                </p>
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl mb-4">
                  IBN stands for International Business Network
                </h3>
                <p className="text-base sm:text-lg">
                  A entrepreneurially managed, marketing developmental body, which is
                  the brain child of <span className="font-bold">Dr Sandya Rani</span>,
                  highly aimed at helping SMEs grow multifold by developing high net
                  worth business owners networking, resulting in strong bottom line and
                  better profits with smart working formula of "word of mouth
                  marketing". This is the millennial way of growing an enterprise in a
                  highly effective and profitable manner. The evolution happens very
                  fast. All the members who are part of a Council (which is an Area or
                  comprising specific areas in a city) will attend IBN Council meetings
                  to Build Business networks and to exchange quality business leads
                  which puts them amidst a powerful network.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Programs Section */}
      <section id="programs" className="py-16 sm:py-20 bg-[#2E3A59]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#F8EDE3] font-['Playfair_Display'] animate-slide-up">Our Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <GraduationCap className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />,
                title: "MSME Scheme Facilitation",
                description: "Guidance on various schemes and programs offered by the Ministry of MSME.Assistance in preparing applications and proposals.Support in availing subsidies, grants, and financial aid.",
                gradient: "from-[#1C2526] to-[#D4A017]"
              },
              {
                icon: <Users className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />,
                title: "Host Institute Documentation",
                description: "Preparation of documents required for setting up Host Institutes.Compliance support with MSME and related guidelines.Advisory on best practices for institutional growth.",
                gradient: "from-[#D4A017] to-[#1C2526]"
              },
              {
                icon: <Calendar className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />,
                title: "Incubation Centre Support",
                description: "Facilitating documentation and approvals for establishing incubation centres.Drafting proposals for funding and project support.Connecting institutions with MSME and government incubation programs.",
                gradient: "from-[#1C2526] to-[#D4A017]"
              },
              {
                icon: <FolderOpenDot className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />,
                title: "Project Proposal & Documentation Services",
                description: "Drafting detailed project reports (DPRs).Preparing funding and research proposals.Streamlining documentation for government and private projects.",
                gradient: "from-[#D4A017] to-[#1C2526]"
              },
              {
                icon: <Building2 className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />,
                title: "Entrepreneur Support Services",
                description: "Mentorship and guidance for startups and entrepreneurs.Linking entrepreneurs with MSME resources and opportunities.Building a bridge between government policies and business needs.",
                gradient: "from-[#1C2526] to-[#D4A017]"
              },
              {
                icon: <Building className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />,
                title: "Startup Incubation",
                description: "Get comprehensive support to launch your startup",
                gradient: "from-[#D4A017] to-[#1C2526]"
              },
            ].map((program, index) => (
              <div key={index} className="group bg-[#1C2526]/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4A017]/30 hover:border-[#D4A017] hover:-translate-y-2 animate-slide-up">
                <div className={`mb-4 p-4 rounded-lg bg-gradient-to-r ${program.gradient} w-fit group-hover:scale-105 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#F8EDE3] group-hover:text-[#D4A017] transition-colors font-['Playfair_Display']">{program.title}</h3>
                <p className="text-[#F8EDE3]/80 text-sm sm:text-base mb-4">{program.description}</p>
                <button className="mt-4 text-[#D4A017] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#2E3A59] to-[#1C2526] text-[#F8EDE3] relative">
        <div className="absolute inset-0 bg-[#1C2526]/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-['Playfair_Display'] animate-slide-up">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="bg-[#1C2526]/80 backdrop-blur-md p-6 rounded-2xl border border-[#F8EDE3]/30 hover:bg-[#1C2526] transition-all duration-300 hover:-translate-y-2 animate-slide-up">
                <p className="text-[#F8EDE3] text-base sm:text-lg mb-4">
                  "Kalpataru helped me transform my idea into a successful startup. The mentorship 
                  and resources were invaluable."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1472099645785-5658abf4ff4e' : '1438761681033-6461ffad8d80'}?auto=format&fit=crop&w=100`}
                    alt="Student entrepreneur"
                    className="w-12 h-12 rounded-full border-2 border-[#F8EDE3]/30 transition-transform duration-300 hover:scale-110"
                  />
                  <div>
                    <h4 className="font-semibold text-[#F8EDE3] font-['Playfair_Display']">Student Entrepreneur</h4>
                    <p className="text-sm text-[#F8EDE3]/80">Class of 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 sm:py-20 bg-[#F8EDE3]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#1C2526] font-['Playfair_Display'] animate-slide-up">Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <BookOpen className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />, title: "Learning Materials" },
              { icon: <FileText className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />, title: "Business Templates" },
              { icon: <Calendar className="h-10 sm:h-12 w-10 sm:w-12 text-[#F8EDE3]" />, title: "Workshop Calendar" }
            ].map((resource, index) => (
              <div key={index} className="group bg-white border border-[#1C2526]/20 p-6 rounded-2xl hover:border-[#D4A017] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up">
                <div className={`mb-4 p-4 rounded-lg bg-gradient-to-r ${index === 0 ? 'from-[#1C2526] to-[#D4A017]' : index === 1 ? 'from-[#D4A017] to-[#1C2526]' : 'from-[#1C2526] to-[#D4A017]'} text-[#F8EDE3] w-fit group-hover:scale-105 transition-transform duration-300`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1C2526] group-hover:text-[#D4A017] transition-colors font-['Playfair_Display']">{resource.title}</h3>
                <p className="text-[#1C2526]/80 text-sm sm:text-base">Access comprehensive resources to support your entrepreneurial journey.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-[#F8EDE3]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#1C2526] font-['Playfair_Display'] animate-slide-up">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4A017] rounded-2xl transform rotate-2 scale-105 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration" 
                className="relative rounded-2xl shadow-lg border-2 border-[#1C2526]/30 w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#1C2526]/20 animate-slide-up">
                <p className="text-base sm:text-lg text-[#1C2526] leading-relaxed mb-6">
                  In 2014, IBNMSME (Institute for Business and MSME Services) was founded with the vision of connecting entrepreneurs with the numerous schemes, benefits, and opportunities offered by the Ministry of MSME. Over the years, IBNMSME played a vital role as a bridge between MSME and entrepreneurs, helping startups and small businesses gain access to funding, resources, and institutional support.
                </p>
                <p className="text-base sm:text-lg text-[#1C2526] leading-relaxed mb-6">
                  With the changing needs of the entrepreneurial ecosystem, we have now expanded our mission under Kalpataru Edu. In addition to supporting entrepreneurs, we extend our services to educational institutions, host institutes, incubation centres, and project-based initiatives.
                </p>
                <p className="text-base sm:text-lg text-[#1C2526] leading-relaxed mb-6">
                  Our expertise lies in facilitating documentation, compliance, and proposal preparation—ensuring that institutions and entrepreneurs can seamlessly engage with government schemes and incubation support systems.
                </p>
                <p className="text-base sm:text-lg text-[#1C2526] leading-relaxed">
                  At Kalpataru Edu, we remain committed to empowering innovation, entrepreneurship, and institutional growth by continuing our role as a trusted enabler between policy and practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-[#2E3A59] to-[#1C2526]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#F8EDE3] font-['Playfair_Display'] animate-slide-up">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#1C2526]/80 p-6 sm:p-8 rounded-2xl shadow-md border border-[#D4A017]/30 animate-slide-up">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-[#D4A017]/50 bg-[#1C2526] text-[#F8EDE3] placeholder-[#F8EDE3]/60 focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-[#F8EDE3] transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-[#D4A017]/50 bg-[#1C2526] text-[#F8EDE3] placeholder-[#F8EDE3]/60 focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-[#F8EDE3] transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#D4A017]/50 bg-[#1C2526] text-[#F8EDE3] placeholder-[#F8EDE3]/60 focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-[#F8EDE3] transition-all duration-300"
                  ></textarea>
                </div>
                <button className="w-full bg-[#D4A017] text-[#1C2526] py-3 rounded-lg hover:bg-[#F8EDE3] hover:text-[#2E3A59] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C2526] text-[#F8EDE3] py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4 animate-slide-up">
                <div className="bg-[#D4A017] p-2 rounded-lg">
                  <TreePine className="h-6 w-6 text-[#1C2526]" />
                </div>
                <span className="text-lg sm:text-xl font-bold">Kalpataru</span>
              </div>
              <p className="text-[#F8EDE3]/80 text-sm sm:text-base">Empowering the next generation of entrepreneurs</p>
            </div>
            <div>
              <h3 className="text-[#D4A017] font-semibold mb-4 text-base sm:text-lg font-['Playfair_Display']">Quick Links</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#home" className="text-[#F8EDE3]/80 hover:text-[#D4A017] transition-colors">Home</a></li>
                <li><a href="#programs" className="text-[#F8EDE3]/80 hover:text-[#D4A017] transition-colors">Programs</a></li>
                <li><a href="#resources" className="text-[#F8EDE3]/80 hover:text-[#D4A017] transition-colors">Resources</a></li>
                <li><a href="#about" className="text-[#F8EDE3]/80 hover:text-[#D4A017] transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-[#F8EDE3]/80 hover:text-[#D4A017] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#D4A017] font-semibold mb-4 text-base sm:text-lg font-['Playfair_Display']">Contact Info</h3>
              <div className="space-y-2 text-[#F8EDE3]/80 text-sm sm:text-base">
                <p>Email : info@kalpataru.com</p>
                <p>Name : Dr Sandhiya Rani</p>
                <p>Phone : +91 9841296548</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="bg-[#D4A017] p-2 rounded-lg hover:bg-[#F8EDE3] hover:text-[#2E3A59] transition-all duration-300">
                    <Phone className="h-5 w-5 text-[#1C2526]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#D4A017]/30 mt-8 pt-8 text-center text-[#F8EDE3]/80 text-sm sm:text-base animate-slide-up">
            <p>&copy; 2024 Kalpataru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
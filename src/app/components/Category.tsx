import Image from "next/image";

const PortalHome = () => {
    const sidebarLinks = [
        "Introduction",
        "Samhitas",
        "Brahmanas",
        "Aranyakas",
        "Upanishads",
        "Vedangas",
        "Rituals",
        "Upveda",
        "Present Context",
        "About Project",
    ];

    const usefulLinks = [
        "Indira Gandhi National Centre for the Arts (IGNCA)",
        "National Cultural Audiovisual Archives (NCAA)",
        "National Mission for Manuscripts (NMM)",
        "Aatmanirbhar Bharat Centre For Design (ABCD)",
        "National Mission on Cultural Mapping (NMCM)",
        "Ministry of Culture",
        "Cultural Organizations",
        "Centres of Vedic Learning",
    ];

    const quotes = [
        {
            text: "The Divine forces do not help those who do not toil themselves.",
            reference: "Vedamritabandavah",
            author: "Prof. Shashiprabha Kumar",
        },
    ];

    const newContent = [
        "Vedic GPS",
        "Ghana Patha of Select Mantras from Krishna Yajurveda",
        "Creative Rendition of select Vedic Suktas",
        "Taittiriya Brahmana",
    ];

    const otherLinks = [
        "Tradition of Vedic chanting has been inscribed by UNESCO on the Representative List...",
        "Video Clip Submitted to UNESCO",
    ];

    return (
        <main className="flex font-sans text-gray-800">
            {/* Left Sidebar */}
            <aside className="w-1/4 p-6 bg-[#FF9933] space-y-8">
                <section className="p-4 bg-saffron-700 text-white rounded-lg">
  <h3 className="text-lg font-bold bg-red-700 text-white p-1 text-center">Main Links</h3>
  <nav className="flex flex-col space-y-2 mt-3 text-center">
    {sidebarLinks.map((link, index) => (
      <a 
        href={`#${link.toLowerCase()}`} 
        key={index} 
        className="flex items-center text-md text-gray-900 hover:text-white transition-colors duration-200"
      >
        {/* Arrow bullet */}
        <span className="mr-2 text-xl">➜</span> 
        {/* Link text */}
        {link}
      </a>
    ))}
  </nav>
</section>


                <section>
                    <h3 className="text-lg font-bold bg-red-700 text-white p-1 text-center">USEFUL LINKS</h3>
                    <nav className="flex flex-col space-y-2">
                        {usefulLinks.map((link, index) => (
                            <a href={`#${link.toLowerCase()}`} key={index} className="text-md text-gray-900 hover:underline">
                                {link}
                            </a>
                        ))}
                    </nav>
                </section>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-8 space-y-8">

            <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Vedic Puranas</h1>
                {/* Vedic Introduction Section */}
                <section className="space-y-3">
                    <p className="text-lg leading-relaxed">
                        The Vedas are the source of integral wisdom, science, tradition, and culture of a remarkable civilization.
                        They are Oral compilations of distilled wisdom of cosmic knowledge survived from time immemorial. They are not
                        only identified as scriptures but also as the fountainhead of Indian culture and human civilization.
                    </p>
                    <a href="#" className="text-red-600 font-semibold">Read More..</a>
                </section>

                {/* Video Section */}
                <section className="flex justify-center">
                    <video width="600" controls>
                        <source src="/path/to/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </section>

                {/* Further Description */}
                <section className="space-y-3">
                    <p className="leading-relaxed">
                        The portal aims to communicate messages enshrined in Vedic knowledge for universal well-being.
                        This portal will be a one-stop solution for the user who would like to search any information regarding
                        the Vedic heritage, be it the abstract oral traditions, or the textual tradition in the form of publications,
                        manuscripts, implements, or Yajna related objects.
                    </p>
                </section>
            </div>

            {/* Right Sidebar */}
            <aside className="w-1/4 p-6 bg-[#FF9933] space-y-8">
                <section>
                    <h3 className="text-lg font-bold bg-red-700 text-white p-1">VEDIC QUOTE OF THE DAY</h3>
                    {quotes.map((quote, index) => (
                        <blockquote key={index} className="text-gray-900 italic border-l-4 border-gray-600 pl-4 py-2">
                            “{quote.text}”
                            <cite className="block font-semibold">- {quote.reference}, {quote.author}</cite>
                        </blockquote>
                    ))}
                </section>

                <section className="p-4 bg-saffron-700 text-white rounded-lg overflow-hidden">
  <h3 className="text-lg font-bold bg-red-700 text-white p-1 text-center">NEW CONTENT</h3>
  
  {/* Scrolling container */}
  <div className="overflow-hidden relative h-40 mt-3">
    <nav 
      className="flex flex-col space-y-2 absolute animate-scroll" 
      style={{ animationDuration: "10s", animationIterationCount: "infinite" }}
    >
      {newContent.map((content, index) => (
        <a href="#" key={index} className="text-md text-gray-900 hover:text-white transition-colors duration-200">
          {content}
        </a>
      ))}
    </nav>
  </div>
</section>

                <section>
                    <h3 className="text-lg font-bold bg-red-700 text-white p-1">OTHER LINKS</h3>
                    <nav className="flex flex-col space-y-2">
                        {otherLinks.map((link, index) => (
                            <a href="#" key={index} className="text-md text-gray-900 hover:underline">
                                {link}
                            </a>
                        ))}
                    </nav>
                </section>
            </aside>


            <style jsx>{`
            @keyframes scroll {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.animate-scroll {
  animation: scroll 10s linear infinite;
}

            `}

            </style>
        </main>
    );
};

export default PortalHome;

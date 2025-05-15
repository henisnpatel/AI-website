import { kalnia } from '../utils/fonts';
import AboutText from '../components/AboutText';
import { useState, useRef, useEffect } from 'react';
import ExecMember from '@/components/ExecMember';

export default function About() {
  const [section, setSection] = useState('What We Do');

  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const execTeamRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  // const sponsorsRef = useRef<HTMLDivElement>(null);
  // const socialsRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    { ref: whatWeDoRef, name: 'What We Do' },
    { ref: execTeamRef, name: 'Exec Team' },
    { ref: faqRef, name: 'FAQ' },
    // { ref: sponsorsRef, name: 'Sponsors' },
    // { ref: socialsRef, name: 'Socials' },
  ];

  const handleScrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    sectionName: string
  ) => {
    setSection(sectionName);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeSection = sectionRefs.find(
              (s) => s.ref.current === entry.target
            )?.name;
            if (activeSection) {
              setSection(activeSection);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <div
      className={`${kalnia.variable} font-[family-name:var(--font-kalnia)] px-6 md:px-8 flex items-center max-w-6xl mx-auto w-full h-full`}
    >
      <nav className="min-w-30">
        <ul>
          {sectionRefs.map(({ name, ref }) => (
            <li
              key={name}
              className={`cursor-pointer ${
                section === name ? 'text-[#000000]' : 'text-[#6A6A6A]'
              }`}
              onClick={() => handleScrollToSection(ref, name)}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-10 h-full flex flex-col">
        <div className="py-12">
          <h1 className="text-4xl">{section}</h1>
        </div>
        <div className="overflow-y-scroll h-full no-scrollbar">
          {/* What We Do Section */}
          <div ref={whatWeDoRef}>
            <AboutText
              title="Title #1"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
            />
            <AboutText
              title="Title #2"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
            />
            <AboutText
              title="Title #3"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
            />
            <AboutText
              title="Title #4"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
            />
          </div>

          {/* Exec Team Section */}
          <div ref={execTeamRef} className="mt-10">
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-[48%]">
                <ExecMember
                  img_src="/portrait.avif"
                  name="Person #1"
                  role="Role #1"
                  desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
                  last={false}
                />
                <ExecMember
                  img_src="/portrait2.avif"
                  name="Person #2"
                  role="Role #2"
                  desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus?"
                  last={true}
                />
              </div>
              <div className="w-full md:w-[48%]">
                <ExecMember
                  img_src="/portrait2.avif"
                  name="Person #3"
                  role="Role #3"
                  desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
                  last={false}
                />
                <ExecMember
                  img_src="/portrait.avif"
                  name="Person #4"
                  role="Role #4"
                  desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
                  last={true}
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div ref={faqRef}>
            <AboutText
              title="Question 1"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
            />
            <AboutText
              title="Question 2"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
            />
          </div>

          {/* Sponsors Section */}
          {/* <div ref={sponsorsRef} className="mt-10">
            <AboutText
              title="Sponsors"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
            />
          </div> */}

          {/* Socials Section */}
          {/* <div ref={socialsRef} className="mt-10">
            <AboutText
              title="Socials"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt dolorum eveniet?"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

import { kalnia } from '../utils/fonts';
import AboutText from '../components/AboutText';
import { useState } from 'react';

export default function About() {
  const [section, setSection] = useState('What We Do');

  return (
    <div
      className={`${kalnia.variable} font-[family-name:var(--font-kalnia)] px-6 md:px-8 flex items-center max-w-6xl mx-auto w-full h-full`}
    >
      <nav className="min-w-30">
        <ul>
          <li className="text-[#244F7A]">About</li>
          <li
            className={`${
              section == 'What We Do' ? 'text-[#000000]' : 'text-[#6A6A6A]'
            }`}
          >
            What We Do
          </li>
          <li
            className={`${
              section == 'Exec Team' ? 'text-[#000000]' : 'text-[#6A6A6A]'
            }`}
          >
            Exec Team
          </li>
          <li
            className={`${
              section == 'FAQ' ? 'text-[#000000]' : 'text-[#6A6A6A]'
            }`}
          >
            FAQ
          </li>
          <li
            className={`${
              section == 'Sponsors' ? 'text-[#000000]' : 'text-[#6A6A6A]'
            }`}
          >
            Sponsors
          </li>
          <li
            className={`${
              section == 'Socials' ? 'text-[#000000]' : 'text-[#6A6A6A]'
            }`}
          >
            Socials
          </li>
        </ul>
      </nav>
      <div className="mx-10 h-full flex flex-col">
        <div className="py-12">
          <h1 className="text-4xl">{section}</h1>
        </div>
        <div className="overflow-y-scroll h-full no-scrollbar">
          <AboutText
            title="Title #1"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem
        sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt
        dolorum eveniet?"
          ></AboutText>
          <AboutText
            title="Title #1"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem
        sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt
        dolorum eveniet?"
          ></AboutText>
          <AboutText
            title="Title #1"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem
        sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt
        dolorum eveniet?"
          ></AboutText>
          <AboutText
            title="Title #2"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem
        sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt
        dolorum eveniet?"
          ></AboutText>
          <AboutText
            title="Title #3"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem
        sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt
        dolorum eveniet?"
          ></AboutText>
          <AboutText
            title="Title #3"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem
        sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt
        dolorum eveniet?"
          ></AboutText>
          <AboutText
            title="Title #3"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem
        sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt
        dolorum eveniet?"
          ></AboutText>
          <AboutText
            title="Title #3"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        voluptatem hic ab, sequi assumenda fugiat magnam vitae ducimus? Dolorem
        sint aspernatur quasi voluptatibus nulla. Totam saepe ad incidunt
        dolorum eveniet?"
          ></AboutText>
        </div>
      </div>
    </div>
  );
}

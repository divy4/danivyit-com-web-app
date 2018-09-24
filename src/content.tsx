import AppDevPng from './resources/AppDev.png';
import ContactPng from './resources/Contact.png';
import DanIvyJpg from './resources/DanIvy.jpg';
import DatabasePng from './resources/Database.png';
import DockerPng from './resources/Docker.png';
import EchoJpg from './resources/Echo.jpg';
import LanguagesPng from './resources/Languages.png';
import MachineLearningPng from './resources/MachineLearning.png';
import MallocPng from './resources/Malloc.png';
import MandelbrotPng from './resources/Mandelbrot.png';
import ParklandPng from './resources/Parkland.png';
import PerformancePng from './resources/Performance.png';
import RedAndBlueJpg from './resources/RedAndBlue.jpg';
import SystemAdminPng from './resources/SystemAdmin.png';
import ThesisPng from './resources/Thesis.png';
import UIUCPng from './resources/UIUC.png';
import WebsitePng from './resources/Website.png';
import WolverineJpg from './resources/Wolverine.jpg';

import * as React from 'react';
import { BulletList } from './components/sections/BulletList';
import { TextSection } from './components/sections/TextSection';

export interface IContentSubSection {
  type: any;
  children?: any;
  columnWidth?: string;
  flex: number;
  minWidth: string;
  title?: string;
}

export interface IContentSection {
  banner: any;
  bannerTitle: string;
  subSections: IContentSubSection[];
}

export interface IContentTab {
  sections: IContentSection[];
}

export interface IContentTabList {
  [key: string]: IContentTab;
}

export interface IContent {
  tabs: IContentTabList;
  tabNames: string[];
}

export const content: IContent = {
  tabNames: [
    'About',
    'Contact',
    'Experience',
    'Projects',
    'School',
    'Work',
  ],
  tabs: {
    About: {
      sections: [
        {
          banner: RedAndBlueJpg,
          bannerTitle: 'About Me',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Hello! My name is Dan Ivy. I'm a computer science student at University of
                  Illinois at Urbana-Champaign aspiring to become a software engineer or
                  DevOps engineer.
                </div>,
              flex: 1,
              minWidth: '320px',
            },
          ],
        },
        {
          banner: WebsitePng,
          bannerTitle: 'About This Website',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Oh, and this website isn't hosted by some website builder you can find online.
                  This website is 100% developed, packaged, and deployed by me on a Docker swarm
                  of Raspberry Pis that I own (with the help of the resources at the bottom of this
                  page, of course). Don't believe me? Checkout the GitHub repo
                  <a key="2" href="https://github.com/divy4/danivyit-com-web-app">here</a>!
                </div>,
              flex: 1,
              minWidth: '320px',
            },
          ],
        },
      ],
    },
    Contact: {
      sections: [
        {
          banner: ContactPng,
          bannerTitle: 'Contact',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Interested in contacting me? Send me an email at
                  danivy4@gmail.com with your inquiries!
                </div>,
              flex: 1,
              minWidth: '320px',
            },
          ],
        },
      ],
    },
    Experience: {
      sections: [
        {
          banner: LanguagesPng,
          bannerTitle: 'Programming Languages',
          subSections: [
            {
              children: [
                'Bash',
                'Batch',
                'C',
                'CSS',
                'C++',
                'C#/.NET',
                'HTML',
                'Java',
                'JavaScript/Typescript',
                'MIPS Assembly',
                'PHP',
                'PowerShell',
                'Python',
                'R',
                'Ruby',
                'SQL',
              ],
              columnWidth: '170px',
              flex: 1,
              minWidth: '320px',
              type: BulletList,
            },
          ],
        },
        {
          banner: AppDevPng,
          bannerTitle: 'Application Development',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Although I specialize in backend programming, I have experience in
                  frontend development as well!
                </div>,
              flex: 1,
              minWidth: '320px',
            },
            {
              children: [
                'Android',
                'iOS',
                'Linux',
                'Windows',
              ],
              columnWidth: '160px',
              flex: 1,
              minWidth: '320px',
              title: 'Platforms',
              type: BulletList,
            },
            {
              children: [
                'Android Studio',
                'AWT',
                'Qt/PyQt',
                ' Native',
              ],
              columnWidth: '160px',
              flex: 1,
              minWidth: '320px',
              title: 'Libraries/Tools Used',
              type: BulletList,
            },
          ],
        },
        {
          banner: MachineLearningPng,
          bannerTitle: 'Artificial Intelligence/Machine Learning',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Having started my education in software by reverse engineering an AI that drives
                  a car in a physics simulator, I've always had a fascination with artificial
                  intelligence. So it's no surprise that I wanted to specialize in machine
                  learning & big data in school. In fact, while taking Text Information Systems
                  at U of I, I decided to write my undergraduate thesis with my professor,
                  Dr. Zhai, using natural language processing on a set of 37,000 books!
                </div>,
              flex: 1,
              minWidth: '320px',
            },
          ],
        },
        {
          banner: PerformancePng,
          bannerTitle: 'Code/System Optimization',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Besides making software that works, I've always enjoyed optimizing code to
                  maximum performance. For instance, during my time at Wolverine Trading,
                  I was assigned to test a pair of network cards directly connected to each
                  other via an ethernet cable. And after several optimizations,
                  the network cards managed to send 100,000 TCP or 200,000 UDP packets
                  between each other per second!
                </div>,
              flex: 1,
              minWidth: '320px',
            },
            {
              children: [
                'Algorithm redesign',
                'Asynchronous I/O',
                'Branch optimization',
                'Cache optimization',
                'Linux kernel settings',
                'Multithreading',
                'Network card settings',
                'Processor affinity (\'CPU pinning\')',
              ],
              columnWidth: '140px',
              flex: 2,
              minWidth: '300px',
              title: 'Optimization Methods Used',
              type: BulletList,
            },
          ],
        },
        {
          banner: DatabasePng,
          bannerTitle: 'Databases',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Specializing in big data, it wasn't a surprise that I've had to dip my
                  toes in databases. By now, I've administered and used several databases,
                  including MySQL, SQLite (although let's be honest,
                  SQLite doesn't require much), and MongoDB.
                </div>,
              flex: 1,
              minWidth: '100%',
            },
            {
              children: [
                'Document (MongoDB)',
                'Graph (Neo4j)',
                'Relational (SQL)',
              ],
              columnWidth: '100px',
              flex: 1,
              minWidth: '320px',
              title: 'Database Types Used',
              type: BulletList,
            },
            {
              children: [
                'Common table expressions',
                'Foreign keys',
                'Fragmentation',
                'Views',
              ],
              columnWidth: '160px',
              flex: 1,
              minWidth: '320px',
              title: 'SQL Features Used',
              type: BulletList,
            },
          ],
        },
        {
          banner: DockerPng,
          bannerTitle: 'DevOps',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Although I had never heard of DevOps before my internship at
                  Echo Global Logistics in 2018, my work as a backend developer lead me
                  to developing my own Chef recipe that logs information about
                  Chef client runs... and I loved working with the tools Chef provides.
                  Since then, I've already set up my own Docker swarm
                  (which hosts this website) and I'm ready to start building my own
                  Chef environment as well!
                </div>,
              flex: 3,
              minWidth: '320px',
            },
            {
              children: [
                'Chef',
                'Docker',
              ],
              columnWidth: '80px',
              flex: 1,
              minWidth: '160px',
              title: 'Tools used',
              type: BulletList,
            },
          ],
        },
        {
          banner: MandelbrotPng,
          bannerTitle: 'Mathematics',
          subSections: [
            {
              children: [
                'Calculus I, II, & III (Parkland - MAT 128, 129, & 228)',
                'Electromagnetism (Parkland - PHY 142)',
                'Linear Algebra (Parkland - MAT 220)',
                'Numerical Methods (U of I - CS 357)',
                'Newtonian Physics (Parkland - PHY 141)',
                'Probability and Statistics for Computer Science (U of I - CS 361)',
                'Quantum Mechanics (Parkland - PHY 143)',
              ],
              columnWidth: '200px',
              flex: 4,
              minWidth: '320px',
              title: 'Math and Math-Related Classes Taken',
              type: BulletList,
            },
          ],
        },
        {
          banner: SystemAdminPng,
          bannerTitle: 'System Administration',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  Besides writing software, I have quite a bit of experience administrating
                  Unix/Linux systems as well as Windows machines. But perhaps my favorite operating
                  system is Arch Linux, because it gives me the option to customize every component
                  of the system before it's even installed.
                </div>,
              flex: 1,
              minWidth: '320px',
            },
            {
              children: [
                'Arch Linux',
                'Centos',
                'Debian',
                'Kali Linux',
                'Raspbian',
                'Ubuntu',
                'Windows (personal)',
              ],
              columnWidth: '160px',
              flex: 2,
              minWidth: '320px',
              title: 'Operating Systems Managed',
              type: BulletList,
            },
          ],
        },
        {
          banner: WebsitePng,
          bannerTitle: 'Web Development',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  By this point, I hope this section isn't a surprise, because the fact that
                  you're reading this is a living example that I have experience in web
                  development. Besides this website, I have also developed a few websites
                  for school projects and professionally with Echo Global Logistics.
                </div>,
              flex: 1,
              minWidth: '100%',
            },
            {
              children: [
                'CSS',
                'HTML',
                'JavaScript/TypeScript',
                'PHP',
              ],
              columnWidth: '160px',
              flex: 1,
              minWidth: '320px',
              title: 'Web-Related Languages Used',
              type: BulletList,
            },
            {
              children: [
                'Apache HTTP Server',
                'Bootstrap',
                'NGINX',
                'React',
                'Webpack',
              ],
              columnWidth: '160px',
              flex: 1,
              minWidth: '320px',
              title: 'Web Development Tools Used',
              type: BulletList,
            },
          ],
        },
      ],
    },
    Projects: {
      sections: [
        {
          banner: ThesisPng,
          bannerTitle: 'Senior Thesis',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  From the spring semester of my junior year to the spring semester of my
                  senior year, I had the pleasure of working on my thesis project,
                  Advanced Book Search Engine Techniques, with the guidance of
                  Dr. ChengXiang Zhai at University of Illinois. In this project, I,
                  with the help of my classmate Jay, worked on 3 components, topic analysis,
                  name-adjective pairing, and HierarchicalSQL, to enhance text analysis used
                  in book databases (also known as \'libraries\').
                </div>,
              flex: 1,
              minWidth: '100%',
            },
            {
              type: TextSection,
              children:
                <div>
                  The first part of this project aimed to make finding books similar to another
                  easier by generating a set of \'topics\' and assigning each book a probability
                  that the book belonged to each topic. To do this, we had to process
                  37,000 books and write an expectation-maximization algorithm that naively
                  requires 4TB of memory. But after making many optimizations, the size of our
                  program was reduced to 4GB and generated very accurate results in less than 200ms.
                </div>,
              flex: 1,
              minWidth: '100%',
              title: 'Topic Analysis',
            },
            {
              type: TextSection,
              children:
                <div>
                  The second part of this project tried to process the same 37,000 books so that
                  they could be searched not only by a character, but by a character's attributes.
                  This was done using stopword removal and part-of-speech tagging to filter each
                  book into a list of name-adjective pairs that can be queried in a SQL database.
                </div>,
              flex: 1,
              minWidth: '100%',
              title: 'Name-Adjective Pairing',
            },
            {
              type: TextSection,
              children:
                <div>
                  The last part of this project involved writing a PHP library, hierarchicalSQL,
                  which could automatically implement logical operators (e.g. 'sci fi books OR
                  adventure books') in websites that convert human input to SQL queries.
                </div>,
              flex: 1,
              minWidth: '100%',
              title: 'HierarchicalSQL',
            },
          ],
        },
        {
          banner: MallocPng,
          bannerTitle: 'Malloc Library',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  As part of a tournament in my System Programming class, I competed against
                  300 students to make the fastest, space efficient implementation of
                  malloc(), calloc(), realloc(), and free() functions. After writing my own
                  implementation, I was happy to find out that not only did my design
                  place 7th, but it managed to beat glibc's implementation by 10% in speed
                  while using approximately the same amount of memory!
                </div>,
              flex: 1,
              minWidth: '100%',
            },
          ],
        },
        {
          banner: DanIvyJpg,
          bannerTitle: 'More Projects to Come!',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  This website is still in progress, so come back soon to see more of my projects!
                </div>,
              flex: 1,
              minWidth: '100%',
            },
          ],
        },
      ],
    },
    School: {
      sections: [
        {
          banner: UIUCPng,
          bannerTitle: 'University of Illinois',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  I am currently a student at University of Illinois at Urbana-Champaign, where
                  I've spent my Junior and Senior years (plus an extra semester this fall) of
                  college. Here I continue to expand my knowledge in computer science.
                  In particular, I've been specializing in artificial intelligence and big data.
                </div>,
              flex: 1,
              minWidth: '320px',
            },
            {
              type: BulletList,
              children: [
                'Algorithms',
                'Computer Architecture',
                'Databases',
                'Probability and Statistics for Computer Science',
                'System Programming',
                'Text Information Systems',
              ],
              columnWidth: '160px',
              flex: 3,
              minWidth: '320px',
              title: 'Notable Classes',
            },
          ],
        },
        {
          banner: ParklandPng,
          bannerTitle: 'Parkland College',
          subSections: [
            {
              type: TextSection,
              children:
                <div>
                  During my freshman and sophomore year, I attended Parkland College in
                  Champaign, IL. Here, I started to refine my skills by building a foundation
                  in mathematics, physics, and computer science. Besides my classes,
                  I also became a peer tutor, a member of Phi Theta Kappa, and a member
                  of the German Club.
                </div>,
              flex: 1,
              minWidth: '320px',
            },
            {
              type: BulletList,
              children: [
                'Calculus I, II, & III',
                'Computer Science II',
                'Data Structures',
                'German I, II, & III',
                'Linear Algebra',
                'Modern Physics (quantum mechanics)',
              ],
              columnWidth: '160px',
              flex: 2,
              minWidth: '320px',
              title: 'Notable Classes',
            },
          ],
        },
      ],
    },
    Work: {
      sections: [
        {
          banner: EchoJpg,
          bannerTitle: 'Echo Global Logistics - Summer 2018',
          subSections: [
            {
              children:
                <div>
                  After having a software engineering internship the year before, I wanted to
                  try software development in another industry. And not only did Echo allow
                  me to do this, but my mentors, Jordan and Trent, showed me that I had much,
                  much more to learn when it comes to writing software, like the entirety of
                  Agile software development. In this process, I also found out that software
                  engineering isn't the only path I could take, as I started to realize that
                  I enjoyed managing DevOps tools too.
                </div>,
              flex: 1,
              minWidth: '320px',
              type: TextSection,
            },
            {
              children: [
                `Develop reliable software in Ruby, C#, SQL, and TypeScript
                using the Agile software development process`,
                `Understand Echo's software deployment process,
                from a GitLab merge request to a Chef client using a recipe`,
                'Annoy Jordan with blinking Trello boards',
              ],
              columnWidth: '320px',
              flex: 1.4,
              minWidth: '320px',
              title: 'Responsibilities',
              type: BulletList,
            },
          ],
        },
        {
          banner: WolverineJpg,
          bannerTitle: 'Wolverine Trading - Summer 2017',
          subSections: [
            {
              children:
                <div>
                  In 2017, I had the pleasure of having my first software engineering job as an
                  intern with Wolverine Trading in Chicago. Once I was there, the Adamantium
                  team and my partner, Adam, showed me that software engineering is nothing
                  like computer science. Sure, someone is assigning you a project that involves
                  writing code, but unlike in class, I have a team of experts sitting next to
                  me that can help me whenever I'm stuck... especially since I wasn't great
                  with Git at the time (Sorry about that guys).
                </div>,
              flex: 1,
              minWidth: '320px',
              type: TextSection,
            },
            {
              children: [
                `Develop C++ and Python code that is fast and efficient enough to handle
                real-time market data and hundreds of thousands of network packets per second`,
                `Study mechanics of trading options on exchanges,
                including order books and put-call parity`,
                'Learn basic trading skills, such as trading vega and theta in simulated markets',
              ],
              columnWidth: '320px',
              flex: 1.5,
              minWidth: '320px',
              title: 'Responsibilities',
              type: BulletList,
            },
          ],
        },
      ],
    },
  },
};

import defaultImg from './resources/DanIvy.jpg';
import { BulletList } from './components/sections/BulletList';
import { TextSection } from './components/sections/TextSection';

export interface IContentSubSection {
  type: any;
  children?: any;
  columnWidth?: string;
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
  [key: string]: IContentTabList;
}

export const content: IContent = {
  tabs: {
    Home: {
      sections: [
        {
          banner: defaultImg,
          bannerTitle: "Home",
          subSections: [
            {
              type: TextSection,
              children: "Hello!",
            },
          ],
        },
      ],
    },
    About: {
      sections: [
        {
          banner: defaultImg,
          bannerTitle: "About",
          subSections: [
            {
              type: TextSection,
              children: "Hello!",
            },
          ],
        },
      ],
    },
    Experience: {
      sections: [
        {
          banner: defaultImg,
          bannerTitle: "Experience",
          subSections: [
            {
              type: TextSection,
              children: "Hello!",
            },
          ],
        },
      ],
    },
    School: {
      sections: [
        {
          banner: defaultImg,
          bannerTitle: "School",
          subSections: [
            {
              type: TextSection,
              children: "Hello!",
            },
          ],
        },
      ],
    },
    Work: {
      sections: [
        {
          banner: defaultImg,
          bannerTitle: "Work",
          subSections: [
            {
              type: TextSection,
              children: "Hello!",
            },
          ],
        },
      ],
    },
    Contact: {
      sections: [
        {
          banner: defaultImg,
          bannerTitle: "Contact",
          subSections: [
            {
              type: TextSection,
              children: "Hello!",
            },
          ],
        },
      ],
    },
  },
};
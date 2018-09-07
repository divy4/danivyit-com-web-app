import defaultImg from './resources/DanIvy.jpg';
import { BulletList } from './components/sections/BulletList';
import { TextSection } from './components/sections/TextSection';

export interface IContentSubSection {
  type: any;
  children?: any;
  columnWidth?: string;
  flex: number;
  minWidth: string;
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
    "About",
    "Experience",
    "School",
    "Work",
    "Contact"
  ],
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
              flex: 1,
              minWidth: "300px",
            },
          ],
        },
        {
          banner: defaultImg,
          bannerTitle: "Home 2",
          subSections: [
            {
              type: TextSection,
              children: "Hello!",
              flex: 1,
              minWidth: "300px",
            },
            {
              type: BulletList,
              children: [
                "Bullet 1",
                "Bullet 2",
                "Bullet 3",
                "Bullet 4",
                "Bullet 5",
                "Bullet 6",
                "Bullet 7",
                "Bullet 8",
                "Bullet 9",
                "Bullet 10",
              ],
              columnWidth: "100px",
              flex: 1,
              minWidth: "300px",
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
              flex: 1,
              minWidth: "300px",
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
              flex: 1,
              minWidth: "300px",
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
              flex: 1,
              minWidth: "300px",
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
              flex: 1,
              minWidth: "300px",
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
              flex: 1,
              minWidth: "300px",
            },
          ],
        },
      ],
    },
  },
};
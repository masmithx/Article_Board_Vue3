import { ArticleCategory } from './ArticleCategory'

export interface Article {
  category: ArticleCategory
  title: string
  bgImage: string
}

export const articles: Article[] = [
  {
    category: ArticleCategory.WORKPLACE,
    title: 'Ignition Podcast: Innovation, Agility, Talent, Workplace, Culture, and more',
    bgImage: '1.png',
  },
  {
    category: ArticleCategory.TRAINING,
    title: 'Threat Briefing',
    bgImage: '2.png',
  },
  {
    category: ArticleCategory.PRODUCTIVITY,
    title: 'SSC Telework Portal',
    bgImage: '3.png',
  },
  {
    category: ArticleCategory.EDUCATION,
    title: 'AIR FORCE Virtual Education',
    bgImage: '4.png',
  },
  {
    category: ArticleCategory.EDUCATION,
    title: 'Guide to DigitalU',
    bgImage: '5.png',
  },
  {
    category: ArticleCategory.WORKPLACE,
    title: 'How Build a Collaborative Team Environment',
    bgImage: '6.png',
  },
] 
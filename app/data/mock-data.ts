export interface Conversation {
  id: string;
  title: string;
  category: string;
  participantCount: number;
  messageCount: number;
  expiresAt: Date;
  createdAt: Date;
  isLive: boolean;
  description: string;
  imageUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  conversationId: string;
  publishedAt: Date;
  readTime: number;
  imageUrl: string;
  viewCount: number;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  activeConversations: number;
  category: string;
  imageUrl: string;
}

export const mockConversations: Conversation[] = [
  {
    id: "1",
    title: "Climate Policy: Finding Common Ground",
    category: "Environment",
    participantCount: 234,
    messageCount: 1847,
    expiresAt: new Date("2026-08-21T12:00:00.000Z"),
    createdAt: new Date("2026-08-14T12:00:00.000Z"),
    isLive: true,
    description:
      "A balanced discussion on climate change policies, exploring perspectives from different economic and environmental viewpoints.",
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "The Future of Remote Work",
    category: "Technology",
    participantCount: 567,
    messageCount: 3421,
    expiresAt: new Date("2026-08-23T12:00:00.000Z"),
    createdAt: new Date("2026-08-16T12:00:00.000Z"),
    isLive: true,
    description: "Examining how remote work is reshaping our cities, communities, and work-life balance.",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Education Reform: What Works?",
    category: "Education",
    participantCount: 189,
    messageCount: 892,
    expiresAt: new Date("2026-08-20T12:00:00.000Z"),
    createdAt: new Date("2026-08-13T12:00:00.000Z"),
    isLive: true,
    description:
      "Teachers, parents, and students discuss what educational approaches are most effective in the modern world.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Healthcare Access and Affordability",
    category: "Health",
    participantCount: 412,
    messageCount: 2156,
    expiresAt: new Date("2026-08-22T12:00:00.000Z"),
    createdAt: new Date("2026-08-15T12:00:00.000Z"),
    isLive: true,
    description: "A global conversation about making healthcare accessible and affordable for everyone.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
  },
];

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Renewable Energy Transition: Consensus Emerges on Practical Steps",
    summary:
      "After a week-long conversation involving 456 participants, a balanced perspective emerged on transitioning to renewable energy while maintaining economic stability.",
    category: "Environment",
    conversationId: "1",
    publishedAt: new Date("2026-08-17T12:00:00.000Z"),
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
    viewCount: 12453,
  },
  {
    id: "2",
    title: "Digital Privacy: Where Users Drew the Line",
    summary:
      "A diverse group of 789 participants discussed data privacy, revealing surprising agreement on fundamental rights and practical concerns.",
    category: "Technology",
    conversationId: "2",
    publishedAt: new Date("2026-08-14T12:00:00.000Z"),
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    viewCount: 8921,
  },
  {
    id: "3",
    title: "Mental Health Support: Community Solutions",
    summary:
      "Over 300 voices shared experiences and solutions for improving mental health support systems in communities worldwide.",
    category: "Health",
    conversationId: "4",
    publishedAt: new Date("2026-08-12T12:00:00.000Z"),
    readTime: 10,
    imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=400&fit=crop",
    viewCount: 15678,
  },
  {
    id: "4",
    title: "Urban Planning for Walkable Cities",
    summary:
      "Citizens, planners, and policymakers found common ground on creating more pedestrian-friendly urban environments.",
    category: "Society",
    conversationId: "2",
    publishedAt: new Date("2026-08-09T12:00:00.000Z"),
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
    viewCount: 6234,
  },
];

export const mockCommunities: Community[] = [
  {
    id: "1",
    name: "Climate Action Network",
    description: "A global community focused on environmental sustainability and climate change solutions.",
    memberCount: 12456,
    activeConversations: 23,
    category: "Environment",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Tech Ethics Forum",
    description: "Discussing the ethical implications of emerging technologies and digital transformation.",
    memberCount: 8934,
    activeConversations: 18,
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "Education Innovators",
    description: "Teachers, students, and parents reimagining education for the 21st century.",
    memberCount: 6721,
    activeConversations: 15,
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    name: "Healthcare for All",
    description: "Working towards accessible, affordable healthcare systems worldwide.",
    memberCount: 9845,
    activeConversations: 21,
    category: "Health",
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    name: "Economic Justice",
    description: "Exploring fair economic systems and reducing inequality through informed dialogue.",
    memberCount: 7632,
    activeConversations: 12,
    category: "Economy",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    name: "Urban Development",
    description: "Shaping the future of our cities through community-driven planning and design.",
    memberCount: 5421,
    activeConversations: 9,
    category: "Society",
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop",
  },
];

export function getConversationById(id: string): Conversation | undefined {
  return mockConversations.find((conversation) => conversation.id === id);
}

export function getArticleById(id: string): Article | undefined {
  return mockArticles.find((article) => article.id === id);
}

export function getCommunityById(id: string): Community | undefined {
  return mockCommunities.find((community) => community.id === id);
}

export function getArticlesForConversation(conversationId: string): Article[] {
  return mockArticles.filter((article) => article.conversationId === conversationId);
}

export function getConversationsForCategory(category: string): Conversation[] {
  return mockConversations.filter((conversation) => conversation.category === category);
}

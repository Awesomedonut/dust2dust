export interface Character {
  id: string;
  name: string;
  role: string;
  headshot: string;
  fullBody: string;
  description: string;
}

export const characters: Character[] = [
  {
    id: "item-a",
    name: "Item A",
    role: "Category Alpha",
    headshot: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    description: "Revolutionary breakthrough technology that transforms the way we approach complex problems. Our cutting-edge solutions leverage artificial intelligence and advanced algorithms."
  },
  {
    id: "item-b",
    name: "Item B",
    role: "Category Beta",
    headshot: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    description: "Unmatched speed and efficiency powered by state-of-the-art optimization techniques. Our performance-driven architecture ensures lightning-fast response times."
  },
  {
    id: "item-c",
    name: "Item C",
    role: "Category Gamma",
    headshot: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    description: "Military-grade encryption and enterprise-level protection protocols safeguard your most sensitive data. Comprehensive security framework with real-time threat detection."
  },
  {
    id: "item-d",
    name: "Item D",
    role: "Category Delta",
    headshot: "https://images.unsplash.com/photo-1494790108755-2616c8671d2a?w=300&h=300&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1494790108755-2616c8671d2a?w=300&h=300&fit=crop",
    description: "Worldwide infrastructure spanning multiple continents with 99.9% uptime guarantee. Our global network ensures seamless connectivity and consistent performance."
  },
  {
    id: "item-e",
    name: "Item E",
    role: "Category Epsilon",
    headshot: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    description: "Advanced targeting algorithms powered by deep learning and predictive analytics. Our precision-focused approach delivers accurate results with minimal margin of error."
  },
  {
    id: "item-f",
    name: "Item F",
    role: "Category Zeta",
    headshot: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    fullBody: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    description: "Uncompromising commitment to excellence with meticulous attention to every detail. Our quality assurance process includes rigorous testing and continuous monitoring."
  }
];
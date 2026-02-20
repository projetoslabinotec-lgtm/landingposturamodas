import { Zap, Shirt, Users, Globe, MapPin } from 'lucide-react';
import React from 'react';
import { Feature, Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = "5511999999999"; // Please update with the real number if needed
export const WHATSAPP_MESSAGE = "Olá! Vi o site e gostaria de conhecer as peças da Postura Modas (Armani, OGOCHI, etc).";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const APP_STORE_LINK = "#";
export const PLAY_STORE_LINK = "#";

export const ADDRESS = {
  street: "Avenida Juracy Magalhães",
  district: "Centro",
  city: "Entre Rios - Bahia",
  zip: "48180-000",
  mapsLink: "https://maps.google.com/?q=Avenida+Juracy+Magalhães+Entre+Rios+Bahia"
};

export const BRANDS_LIST = [
  "Dolce & Gabbana",
  "Armani",
  "OGOCHI",
  "John Pool",
  "Aztec",
  "Dri Fit",
  "Oversize",
];

export const NAV_LINKS = [
  { name: 'Conceito', href: '#concept' },
  { name: 'Marcas', href: '#brands' },
  { name: 'Estilo', href: '#gallery' },
  { name: 'Mostruário', href: '#showcase' },
  { name: 'Loja Física', href: '#location' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Liberdade & Estilo',
    description: 'A roupa certa liberta. Cortes Oversize e Jogger para quem quer conforto sem perder a imponência.',
    icon: React.createElement(Zap, { className: "w-8 h-8 text-brand-gold" }),
  },
  {
    id: 2,
    title: 'Marcas de Peso',
    description: 'Trabalhamos com gigantes: Dolce & Gabbana, Armani, OGOCHI. Qualidade indiscutível.',
    icon: React.createElement(Shirt, { className: "w-8 h-8 text-brand-gold" }),
  },
  {
    id: 3,
    title: 'A Loja que te veste',
    description: 'Consultoria de estilo real. Não vendemos apenas peças, criamos a sua identidade visual.',
    icon: React.createElement(Users, { className: "w-8 h-8 text-brand-gold" }),
  },
  {
    id: 4,
    title: 'Variedade Premium',
    description: 'Do Dri Fit para o treino ao Sarja para o encontro. Versatilidade para o homem moderno.',
    icon: React.createElement(Globe, { className: "w-8 h-8 text-brand-gold" }),
  },
];

export const GALLERY_ITEMS: Product[] = [
  {
    id: 1,
    name: "Knit Premium",
    price: "",
    category: "Sofisticação",
    image: "/assets/images/team/gallery-1.jpeg",
  },
  {
    id: 2,
    name: "Street Flow",
    price: "",
    category: "Atitude",
    image: "/assets/images/team/gallery-2.jpeg",
  },
  {
    id: 3,
    name: "Textura & Cor",
    price: "",
    category: "Tendência",
    image: "/assets/images/team/gallery-3.jpeg",
  },
  {
    id: 4,
    name: "Casual Smart",
    price: "",
    category: "Versatilidade",
    image: "/assets/images/team/gallery-4.jpeg",
  },
  {
    id: 5,
    name: "Elegância Clássica",
    price: "",
    category: "Sofisticação",
    image: "/assets/images/team/gallery-5.jpeg",
  },
  {
    id: 6,
    name: "Urban Style",
    price: "",
    category: "Atitude",
    image: "/assets/images/team/gallery-6.jpeg",
  },
  {
    id: 7,
    name: "Premium Collection",
    price: "",
    category: "Tendência",
    image: "/assets/images/team/gallery-7.jpeg",
  }
];

export const SHOWCASE_ITEMS = [
  { id: 1, image: "/assets/images/products/aztec.jpeg", title: "Aztec" },
  { id: 2, image: "/assets/images/products/aztec (2).jpeg", title: "Aztec Casual" },
  { id: 3, image: "/assets/images/products/aztec (3).jpeg", title: "Aztec Jeans" },
  { id: 4, image: "/assets/images/products/bermuda.jpeg", title: "Bermudas Confort" },
  { id: 5, image: "/assets/images/products/bermuda2.jpeg", title: "Bermudas Premium" },
  { id: 6, image: "/assets/images/products/blusacasual.jpeg", title: "Blusas Casuais e Confortáveis" },
  { id: 7, image: "/assets/images/products/conceito.jpeg", title: "Conceito" },
  { id: 8, image: "/assets/images/products/estiloconceito.jpeg", title: "Estilo Conceito" },
  { id: 9, image: "/assets/images/products/estiloconceito2.jpeg", title: "Estilo Conceito Vol. 2" },
  { id: 10, image: "/assets/images/products/estiloconceito3.jpeg", title: "Estilo Conceito Vol. 3" },
  { id: 11, image: "/assets/images/products/estiloconceito4.jpeg", title: "Estilo Conceito Vol. 4" },
  { id: 12, image: "/assets/images/products/estilolevis.jpeg", title: "Estilo Levi's" },
  { id: 13, image: "/assets/images/products/estiloogchi.jpeg", title: "Estilo OGOCHI" },
  { id: 14, image: "/assets/images/products/sandalia1.jpeg", title: "Sandálias Confort" },
  { id: 15, image: "/assets/images/products/sandalia2.jpeg", title: "Sandálias Premium" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Empreendedor",
    text: "Sempre achei que para ter postura precisava usar terno. A Postura Modas me mostrou que um bom Oversize impõe respeito e me dá liberdade.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Matheus Silva",
    role: "Personal Trainer",
    text: "As peças Dri Fit e Jogger são de outro nível. Treino e saio pra rua com o mesmo estilo. A curadoria deles é diferenciada.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "João Pedro",
    role: "Músico",
    text: "Gosto da liberdade que as roupas me dão. OGOCHI e John Pool são minhas preferidas. Atendimento top em Entre Rios.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
  }
];

export const MOSTRUARIO_CATEGORIES = [
  {
    id: 'bermudas',
    title: 'Bermudas',
    items: [
      { id: 'b1', image: '/assets/images/products/bermuda.jpeg', title: 'Bermuda Confort' },
      { id: 'b2', image: '/assets/images/products/aztec (2).jpeg', title: 'Bermuda AZTEC casual' },
      { id: 'b3', image: '/assets/images/products/aztec (3).jpeg', title: 'Bermuda AZTEC Jeans' },
      { id: 'b4', image: '/assets/images/products/aztec.jpeg', title: 'Bermuda Jeans AZTEC' },
      { id: 'b5', image: '/assets/images/products/bermuda2.jpeg', title: 'Bermuda Conceito' },
    ],
  },
  {
    id: 'calcas',
    title: 'Calças',
    items: [
      { id: 'c1', image: '/assets/images/products/calcas_estilolevis.jpeg', title: "Calça Levi's" },
      { id: 'c2', image: '/assets/images/products/calca.jpeg', title: "Calça Jeans Levi's" },
      { id: 'c3', image: '/assets/images/products/Calcas_1.jpeg', title: 'Calças Sociais' },
      { id: 'c4', image: '/assets/images/products/Calsas.jpeg', title: 'Calças Sociais' },
    ],
  },
  {
    id: 'camisas',
    title: 'Camisas',
    items: [
      { id: 'm1', image: '/assets/images/products/blusacasual.jpeg', title: 'Blusa Casual' },
      { id: 'm2', image: '/assets/images/products/estiloconceito.jpeg', title: 'Camisa Conceito' },
      { id: 'm3', image: '/assets/images/products/estiloconceito2.jpeg', title: 'Camisa Conceito' },
      { id: 'm4', image: '/assets/images/products/estiloconceito3.jpeg', title: 'Camisa Conceito' },
      { id: 'm5', image: '/assets/images/products/estiloconceito4.jpeg', title: 'Camisa Conceito' },
      { id: 'm6', image: '/assets/images/products/estiloogchi.jpeg', title: 'Camisa OGOCHI' },
    ],
  },
  {
    id: 'sandalias',
    title: 'Sandálias',
    items: [
      { id: 's1', image: '/assets/images/products/sandalia1.jpeg', title: 'Sandália Confort' },
      { id: 's2', image: '/assets/images/products/sandalia2.jpeg', title: 'Sandália Premium' },
    ],
  },
];
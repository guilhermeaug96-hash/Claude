export const brand = {
  name: 'ChocoPass',
  tagline: 'Seu passaporte de descontos para o Cacau Park',
  description:
    'Simule sua viagem à costa do cacau e descubra quanto pode economizar: descontos reais em hospedagem, alimentação, lazer, lojas e cafés.',
  shortTagline: 'Mais momentos. Mais sorrisos. Mais Cacau Park.',
}

export const quote = {
  message: 'A simplicidade é a consequência de emoções refinadas.',
  author: "Jean D'Alembert",
}

export type Category = {
  slug: string
  nome: string
  icone: 'Hotel' | 'UtensilsCrossed' | 'Ticket' | 'ShoppingBag' | 'Coffee'
}

export const categories: Category[] = [
  { slug: 'hospedagem', nome: 'Hospedagem', icone: 'Hotel' },
  { slug: 'alimentacao', nome: 'Alimentação', icone: 'UtensilsCrossed' },
  { slug: 'lazer', nome: 'Lazer', icone: 'Ticket' },
  { slug: 'lojas', nome: 'Lojas', icone: 'ShoppingBag' },
  { slug: 'cafes', nome: 'Cafés', icone: 'Coffee' },
]

export type Partner = {
  id: number
  nome: string
  slug: string
  descricao: string
  cidade: string
  uf: string
  categoria: string
  tag: 'Novo' | 'Top' | 'Mais usado'
  rating: number
  reviews: number
  beneficio: string
  capa: string
}

export const partners: Partner[] = [
  {
    id: 2,
    nome: 'Txai Resort Itacaré',
    slug: 'txai-resort-itacare',
    descricao: 'Resort eco-luxo à beira-mar com bangalôs entre coqueiros.',
    cidade: 'Itacaré',
    uf: 'BA',
    categoria: 'Hospedagem',
    tag: 'Mais usado',
    rating: 4.9,
    reviews: 1620,
    beneficio: '25% OFF em diárias para 2 pessoas',
    capa: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80',
  },
  {
    id: 9,
    nome: 'Tour da Fazenda Yrerê',
    slug: 'tour-da-fazenda-yrere-cacau',
    descricao: 'Roteiro do cacau ao chocolate, com degustação.',
    cidade: 'Ilhéus',
    uf: 'BA',
    categoria: 'Lazer',
    tag: 'Top',
    rating: 4.9,
    reviews: 2210,
    beneficio: '40% OFF no tour completo (4h)',
    capa: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80',
  },
  {
    id: 16,
    nome: 'Chocolat du Jour',
    slug: 'chocolat-du-jour-itacare',
    descricao: 'Chocolates artesanais bean-to-bar premiados.',
    cidade: 'Itacaré',
    uf: 'BA',
    categoria: 'Lojas',
    tag: 'Top',
    rating: 4.9,
    reviews: 760,
    beneficio: '15% OFF + degustação grátis',
    capa: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=900&q=80',
  },
  {
    id: 12,
    nome: 'Surf School Itacaré',
    slug: 'surf-school-itacare',
    descricao: 'Aulas de surf na Praia da Tiririca para todos os níveis.',
    cidade: 'Itacaré',
    uf: 'BA',
    categoria: 'Lazer',
    tag: 'Novo',
    rating: 4.9,
    reviews: 410,
    beneficio: '25% OFF em pacote de 3 aulas',
    capa: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&q=80',
  },
  {
    id: 20,
    nome: 'Dengo Café & Doceria',
    slug: 'dengo-cafe-doceria',
    descricao: 'Brunch e doceria autoral com cacau local.',
    cidade: 'Itacaré',
    uf: 'BA',
    categoria: 'Cafés',
    tag: 'Novo',
    rating: 4.9,
    reviews: 470,
    beneficio: '18% OFF no brunch completo',
    capa: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80',
  },
  {
    id: 21,
    nome: 'Meu Feijão Verde',
    slug: 'meu-feijao-verde-XU9x',
    descricao: 'Restaurante conceituado em Eusébio.',
    cidade: 'Eusébio',
    uf: 'CE',
    categoria: 'Alimentação',
    tag: 'Novo',
    rating: 5,
    reviews: 100,
    beneficio: 'Sobremesa grátis + drink da casa',
    capa: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
  },
]

export const steps = [
  {
    numero: 1,
    titulo: 'Compre seu passe',
    descricao: 'Garanta o ChocoPass antes da viagem e receba o acesso na hora.',
  },
  {
    numero: 2,
    titulo: 'Mostre no parceiro',
    descricao: 'Apresente seu passe digital em qualquer estabelecimento parceiro.',
  },
  {
    numero: 3,
    titulo: 'Economize na hora',
    descricao: 'O desconto é aplicado na hora, sem cupom, sem burocracia.',
  },
]

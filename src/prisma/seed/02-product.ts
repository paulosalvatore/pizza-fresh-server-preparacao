import { Prisma, PrismaClient } from '@prisma/client';

export const products: Prisma.ProductCreateInput[] = [
  {
    name: 'Pizza de Mussarela',
    description: 'Queijo mussarela, massa fina, borda recheada',
    image: 'https://i.imgur.com/hNE75Iw.png',
    price: 12.34,
  },
  {
    name: 'Pizza de Calabresa',
    description: 'Queijo mussarela, massa fina, borda recheada',
    image: 'https://i.imgur.com/hNE75Iw.png',
    price: 30.2,
  },
  {
    name: 'Pizza de Frango com Catupiry',
    description: 'Queijo mussarela, massa fina, borda recheada',
    image: 'https://i.imgur.com/hNE75Iw.png',
    price: 35.4,
  },
];

export const product = async (prisma: PrismaClient) => {
  for (const obj of Object.values(products)) {
    await prisma.product.upsert({
      where: { name: obj.name },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};

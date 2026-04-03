const { PrismaClient } = require('./src/generated/client');
const path = require('path');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

async function main() {
  console.log('Seeding database...');
  
  // Upsert categories
  const aiChatCat = await prisma.category.upsert({
    where: { slug: 'ai-chat' },
    update: {},
    create: {
      name: 'AI Chat',
      slug: 'ai-chat',
    },
  });

  const imageGenCat = await prisma.category.upsert({
    where: { slug: 'image-generation' },
    update: {},
    create: {
      name: 'Image Generation',
      slug: 'image-generation',
    },
  });

  // Upsert Tools
  await prisma.tool.upsert({
    where: { slug: 'chatgpt' },
    update: {},
    create: {
      name: 'ChatGPT',
      slug: 'chatgpt',
      url: 'https://chatgpt.com',
      shortDesc: 'Generative pre-trained transformer by OpenAI',
      longDesc: 'ChatGPT is a prominent conversational AI tool that can answer questions, write code, and more.',
      categoryId: aiChatCat.id,
      status: 'ACTIVE',
      businessModel: 'FREEMIUM',
      developer: 'OpenAI',
    },
  });

  await prisma.tool.upsert({
    where: { slug: 'midjourney' },
    update: {},
    create: {
      name: 'Midjourney',
      slug: 'midjourney',
      url: 'https://midjourney.com',
      shortDesc: 'AI image generator based on text prompts',
      longDesc: 'Midjourney is a popular AI image creator operating within Discord to generate stunning visuals.',
      categoryId: imageGenCat.id,
      status: 'ACTIVE',
      businessModel: 'PAID',
      developer: 'Midjourney Inc',
    },
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { prisma } from "./lib/prisma";

async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: "Alice",
//       email: "alice1@prisma.io",
//       posts: {
//         create: {
//           title: "Hello World",
//           content: "This is my first post!",
//           published: true,
//         },
//       },
//     },
//     include: {
//       posts: true,
//     },
//   });
    //   console.log("Created user:", user);
    
    const newPost = await prisma.post.create({
        data: {
            authorId: 1,
            title: 'Hello World 2',
            content: 'This is my second post as 1st user!',
            published: true
        }
    })

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

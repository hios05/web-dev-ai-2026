import prisma from "../prisma.js";

// Model파일 : 테이블에 접근만 함 - 왜 해야 하는지 모름 (이건 service 역할)

// SELECT count(*) FROM recipes 
export const countAll = async () => {
  return await prisma.recipe.count();
};

// SELECT count(*) FROM recipes WHERE name LIKE %keyword%
export const countByKeyword = async (keyword) => {
  return await prisma.recipe.count({ where: { name: { contains: keyword } } });
};

// SELECT * FROM recipes ORDER BY id DESC LIMIT limit OFFSET offset
export const findAll = async ({ limit, offset }) => {
  return await prisma.recipe.findMany({
    orderBy: { id: "desc" },
    take: limit,
    skip: offset,
  });
};

// SELECT * FROM recipes WHERE name LIKE '%keyword%' ORDER BY id DESC LIMIT limit OFFSET offset
export const findByKeyword = async ({ keyword, limit, offset }) => {
  return await prisma.recipe.findMany({
    where: { name: { contains: keyword } },
    orderBy: { id: "desc" },
    take: limit,
    skip: offset,
  });
};

// SELECT * FROM recipes WHERE id = ? 
export const findById = async (id) => {
  return await prisma.recipe.findUnique({ where: { id: Number(id) } });
};

export const findOwnerAndImage = async (id) => {
  return await prisma.recipe.findUnique({
    where: { id: Number(id) },
    select: { user_id: true, image: true },
  });
};

export const create = async ({ userId, name, image, description, name_eng, abv, difficulty }) => {
  const recipe = await prisma.recipe.create({
    data: { user_id: userId, name, image, description, name_eng, abv, difficulty },
  });
  return recipe.id;
};


// INSERT INTO recipes (user_id, name, image, description, name_eng, abv, difficulty) VALUES (?, ?, ?, ?, ?, ?)
export const update = async (id, { name, image, description, name_eng, abv, difficulty }) => {
  await prisma.recipe.update({
    where: { id: Number(id) },
    data: { name, image, description, name_eng, abv, difficulty },
  });
};

export const remove = async (id) => {
  await prisma.recipe.delete({ where: { id: Number(id) } });
};

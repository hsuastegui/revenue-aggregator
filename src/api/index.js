const branches = ["branch1.json", "branch2.json", "branch3.json"];

export const getProducts = async () =>
  await Promise.all(branches.map((b) => fetch(`/api/${b}`)))
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then((data) =>
      data.reduce((acc, { products }) => [...acc, ...products], [])
    )
    .catch((e) => []);

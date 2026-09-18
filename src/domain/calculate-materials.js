function addMaterial(totals, { id, quantity, crafteable }) {
  const current = totals.get(id);

  totals.set(id, {
    quantity: (current?.quantity ?? 0) + quantity,
    crafteable,
  });
}

function expandItem(recipes, totals, { id, quantity }) {
  const recipe = recipes.get(id);

  addMaterial(totals, { id, quantity, crafteable: Boolean(recipe) });

  if (!recipe) return;

  for (const ingredient of recipe) {
    const requiredQuantity = ingredient.quantity * quantity;

    expandItem(recipes, totals, ingredient);
  }
}

export function calculateRequiredMaterial(recipes, items) {
  const totals = new Map();

  for (const { id, quantity } of items) {
    expandItem(recipes, totals, { id, quantity });

    totals.delete(id);
  }

  return totals;
}

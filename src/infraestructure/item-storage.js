const STORAGE_KEY = "crafting-items";

const DEFAULT_ITEMS = [
  {
    id: 1,
    quantity: 1,
  },
  {
    id: 12,
    quantity: 1,
  },
];

export function createItemStorage(storage = localStorage) {
  function load() {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) {
      return DEFAULT_ITEMS.map((item) => ({ ...item }));
    }

    try {
      return JSON.parse(storedData);
    } catch (e) {
      return DEFAULT_ITEMS.map((item) => ({ ...item }));
    }
  }

  function save(items) {
    storage.set(STORAGE_KEY, JSON.stringify(items));
  }

  return {
    load,
    save,
  };
}

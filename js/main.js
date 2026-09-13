"use strict";

const ids = {
  rubyOrichalcumEarring: 1,
  exquisiteRubyJewel: 2,
  orichalcumHook: 3,
  orichalcumSetting: 4,
  rubyOrb: 5,
  orichalcumFiligree: 6,
  globOfEctoplasm: 7,
  rubyCrystal: 8,
  pileOfIncandescentDust: 9,
  orichalcumIngot: 10,
  orichalcumOre: 11,
};

const bom = [
  {
    id: ids.rubyOrichalcumEarring,
    craft: [
      { id: ids.exquisiteRubyJewel, qty: 5 },
      { id: ids.orichalcumHook, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  },
  {
    id: ids.exquisiteRubyJewel,
    craft: [
      { id: ids.rubyOrb, qty: 1 },
      { id: ids.orichalcumFiligree, qty: 1 },
      { id: ids.globOfEctoplasm, qty: 1 },
    ],
  },
  {
    id: ids.rubyOrb,
    craft: [
      { id: ids.rubyCrystal, qty: 2 },
      { id: ids.pileOfIncandescentDust, qty: 5 },
    ],
  },
  {
    id: ids.orichalcumFiligree,
    craft: [{ id: ids.orichalcumIngot, qty: 2 }],
  },
  {
    id: ids.orichalcumIngot,
    craft: [{ id: ids.orichalcumOre, qty: 2 }],
  },
  {
    id: ids.orichalcumHook,
    craft: [{ id: ids.orichalcumIngot, qty: 2 }],
  },
  {
    id: ids.orichalcumSetting,
    craft: [{ id: ids.orichalcumIngot, qty: 2 }],
  },
];

const data = [
  {
    id: ids.rubyOrichalcumEarring,
    name: "Ruby Orichalcum Earring",
    image:
      "https://render.guildwars2.com/file/29F124099BBC31F0AA34B9596A163A99652D6512/433703.png",
  },
  {
    id: ids.exquisiteRubyJewel,
    name: "Exquisite Ruby Jewel",
    image:
      "https://render.guildwars2.com/file/33795ED91E2FF24AD495C9C9FBF40D0AFEDB2891/220939.png",
  },
  {
    id: ids.rubyOrb,
    name: "Ruby Orb",
    image:
      "https://render.guildwars2.com/file/7702E49901413CC14B2F5B7BFD059522333210E6/220947.png",
  },
  {
    id: ids.rubyCrystal,
    name: "Ruby Crystal",
    image:
      "https://render.guildwars2.com/file/90097CD0D563E852044397F848556C3F5EAE66D0/220917.png",
  },
  {
    id: ids.pileOfIncandescentDust,
    name: "Pile of Incandescent Dust",
    image:
      "https://render.guildwars2.com/file/3501C2BBADF95BE5F14E31484850E851EFCA33CB/434536.png",
  },
  {
    id: ids.orichalcumFiligree,
    name: "Orichalcum Filigree",
    image:
      "https://render.guildwars2.com/file/36716A5309700B989075FD4A74AB94052A0DF01E/219512.png",
  },
  {
    id: ids.orichalcumIngot,
    name: "Orichalcum Ingot",
    image:
      "https://render.guildwars2.com/file/D1941454313ACCB234906840E1FB401D49091B96/220460.png",
  },
  {
    id: ids.orichalcumOre,
    name: "Orichalcum Ore",
    image:
      "https://render.guildwars2.com/file/A6E2C82153BA684E2D05D3FCA09F3E02431366ED/220461.png",
  },
  {
    id: ids.globOfEctoplasm,
    name: "Glob of Ectoplasm",
    image:
      "https://render.guildwars2.com/file/18CE5D78317265000CF3C23ED76AB3CEE86BA60E/65941.png",
  },

  {
    id: ids.orichalcumHook,
    name: "Orichalcum Hook",
    image:
      "https://render.guildwars2.com/file/3CC4E23004C5BAB9D0CCDAB10C47E8E86098F6D9/219496.png",
  },
  {
    id: ids.orichalcumSetting,
    name: "Orichalcum Setting",
    image:
      "https://render.guildwars2.com/file/DD02B907A499D37F9A6562EFC2FF0E642FE193A7/219500.png",
  },
];

function exploteBOM(bom, rootId, rootQty) {
  const totals = new Map();

  function walk(id, qty) {
    totals.set(id, (totals.get(id) ?? 0) + qty);

    const children = bom.find((item) => item.id === id);

    if (!children) return;

    for (const { id: childrenId, qty: childrenQty } of children.craft) {
      walk(childrenId, qty * childrenQty);
    }
  }

  walk(rootId, rootQty);

  totals.delete(rootId);

  return totals;
}

function formatData(result) {
  return Array.from(result).map(([key, value]) => {
    const item = data.find((item) => item.id === key);

    return [key, { name: item.name, image: item.image, qty: value }];
  });
}

const rubyOrichalcumEarringMaterials = exploteBOM(
  bom,
  ids.rubyOrichalcumEarring,
  10,
);

const totalMaterials = formatData(rubyOrichalcumEarringMaterials);

function render(data) {
  const tbody = document.querySelector("[data-js='tbody']");

  const string = data
    .map(([key, item]) => {
      return `
      <tr class="board__row">
        <td class="board__cell board__cell--item">
          <div class="board__item">
            <img
              src="${item.image}"
              alt="item image"
              class="board__icon"
            />
            <span>${item.name}</span>
          </div>
        </td>
        <td class="board__cell board__cell--quantity">${item.qty}</td>
      </tr>
      `;
    })
    .join("");

  tbody.innerHTML = string;
}

render(totalMaterials);

// Hacer el formulario reactivo

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
  rubyOrichalcumAmulet: 12,
  orichalcumChain: 13,
  rubyOrichalcumRing: 14,
  orichalcumBand: 15,
  blackDiamondOrichalcumEarring: 16,
  exquisiteBlackDiamondJewel: 17,
  blackDiamond: 18,
  serpentiteOrichalcumAmulet: 19,
  exquisiteSerpentiteJewel: 20,
  blackDiamondOrichalcumRing: 21,
  blackDiamondOrichalcumAmulet: 22,
  serpentiteOrichalcumEarring: 23,
  serpentiteOrichalcumRing: 24,
  jadeOrichalcumEarring: 25,
  exquisiteJadeJewel: 26,
  chunkofPureJade: 27,
  jadeOrichalcumAmulet: 28,
  jadeOrichalcumRing: 29,
  opalOrichalcumEarring: 30,
  exquisiteOpalJewel: 31,
  opalOrb: 32,
  opalCrystal: 33,
  freshwaterPearlOrichalcumRing: 34,
  exquisiteFreshwaterPearl: 35,
  freshwaterPearl: 36,
};

const bom = new Map([
  [
    ids.rubyOrichalcumEarring,
    [
      { id: ids.exquisiteRubyJewel, qty: 5 },
      { id: ids.orichalcumHook, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.rubyOrichalcumAmulet,
    [
      { id: ids.exquisiteRubyJewel, qty: 5 },
      { id: ids.orichalcumChain, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.rubyOrichalcumRing,
    [
      { id: ids.exquisiteRubyJewel, qty: 5 },
      { id: ids.orichalcumBand, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.blackDiamondOrichalcumEarring,
    [
      { id: ids.exquisiteBlackDiamondJewel, qty: 5 },
      { id: ids.orichalcumHook, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.blackDiamondOrichalcumAmulet,
    [
      { id: ids.exquisiteBlackDiamondJewel, qty: 5 },
      { id: ids.orichalcumChain, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.blackDiamondOrichalcumRing,
    [
      { id: ids.exquisiteBlackDiamondJewel, qty: 5 },
      { id: ids.orichalcumBand, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.serpentiteOrichalcumAmulet,
    [
      { id: ids.exquisiteSerpentiteJewel, qty: 5 },
      { id: ids.orichalcumChain, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.serpentiteOrichalcumEarring,
    [
      { id: ids.exquisiteSerpentiteJewel, qty: 5 },
      { id: ids.orichalcumHook, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.serpentiteOrichalcumRing,
    [
      { id: ids.exquisiteSerpentiteJewel, qty: 5 },
      { id: ids.orichalcumBand, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.jadeOrichalcumEarring,
    [
      { id: ids.exquisiteJadeJewel, qty: 5 },
      { id: ids.orichalcumHook, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.jadeOrichalcumAmulet,
    [
      { id: ids.exquisiteJadeJewel, qty: 5 },
      { id: ids.orichalcumChain, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.jadeOrichalcumRing,
    [
      { id: ids.exquisiteJadeJewel, qty: 5 },
      { id: ids.orichalcumBand, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.opalOrichalcumEarring,
    [
      { id: ids.exquisiteOpalJewel, qty: 5 },
      { id: ids.orichalcumHook, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.freshwaterPearlOrichalcumRing,
    [
      { id: ids.exquisiteFreshwaterPearl, qty: 5 },
      { id: ids.orichalcumHook, qty: 1 },
      { id: ids.orichalcumSetting, qty: 1 },
    ],
  ],
  [
    ids.exquisiteFreshwaterPearl,
    [
      { id: ids.freshwaterPearl, qty: 1 },
      { id: ids.orichalcumFiligree, qty: 1 },
      { id: ids.globOfEctoplasm, qty: 1 },
    ],
  ],
  [
    ids.exquisiteOpalJewel,
    [
      { id: ids.opalOrb, qty: 1 },
      { id: ids.orichalcumFiligree, qty: 1 },
      { id: ids.globOfEctoplasm, qty: 1 },
    ],
  ],
  [
    ids.exquisiteRubyJewel,
    [
      { id: ids.rubyOrb, qty: 1 },
      { id: ids.orichalcumFiligree, qty: 1 },
      { id: ids.globOfEctoplasm, qty: 1 },
    ],
  ],
  [
    ids.exquisiteJadeJewel,
    [
      { id: ids.chunkofPureJade, qty: 1 },
      { id: ids.orichalcumFiligree, qty: 1 },
      { id: ids.globOfEctoplasm, qty: 1 },
    ],
  ],
  [
    ids.exquisiteBlackDiamondJewel,
    [
      { id: ids.blackDiamond, qty: 1 },
      { id: ids.orichalcumFiligree, qty: 1 },
      { id: ids.globOfEctoplasm, qty: 1 },
    ],
  ],
  [
    ids.opalOrb,
    [
      { id: ids.opalCrystal, qty: 2 },
      { id: ids.pileOfIncandescentDust, qty: 5 },
    ],
  ],
  [
    ids.rubyOrb,
    [
      { id: ids.rubyCrystal, qty: 2 },
      { id: ids.pileOfIncandescentDust, qty: 5 },
    ],
  ],
  [ids.orichalcumBand, [{ id: ids.orichalcumIngot, qty: 3 }]],
  [ids.orichalcumFiligree, [{ id: ids.orichalcumIngot, qty: 2 }]],
  [ids.orichalcumIngot, [{ id: ids.orichalcumOre, qty: 2 }]],
  [ids.orichalcumHook, [{ id: ids.orichalcumIngot, qty: 2 }]],
  [ids.orichalcumSetting, [{ id: ids.orichalcumIngot, qty: 2 }]],
  [ids.orichalcumChain, [{ id: ids.orichalcumIngot, qty: 4 }]],
]);

const materialsData = new Map([
  [
    ids.rubyOrichalcumEarring,
    {
      name: "Ruby Orichalcum Earring",
      image:
        "https://render.guildwars2.com/file/29F124099BBC31F0AA34B9596A163A99652D6512/433703.png",
    },
  ],
  [
    ids.rubyOrichalcumRing,
    {
      name: "Ruby Orichalcum Ring",
      image:
        "https://render.guildwars2.com/file/F60D6E7659B061E3BFE95F6A0102EE07A97CCF25/455589.png",
    },
  ],
  [
    ids.exquisiteRubyJewel,
    {
      name: "Exquisite Ruby Jewel",
      image:
        "https://render.guildwars2.com/file/33795ED91E2FF24AD495C9C9FBF40D0AFEDB2891/220939.png",
    },
  ],
  [
    ids.rubyOrb,
    {
      name: "Ruby Orb",
      image:
        "https://render.guildwars2.com/file/7702E49901413CC14B2F5B7BFD059522333210E6/220947.png",
    },
  ],
  [
    ids.rubyCrystal,
    {
      name: "Ruby Crystal",
      image:
        "https://render.guildwars2.com/file/90097CD0D563E852044397F848556C3F5EAE66D0/220917.png",
    },
  ],
  [
    ids.pileOfIncandescentDust,
    {
      name: "Pile of Incandescent Dust",
      image:
        "https://render.guildwars2.com/file/3501C2BBADF95BE5F14E31484850E851EFCA33CB/434536.png",
    },
  ],
  [
    ids.orichalcumFiligree,
    {
      name: "Orichalcum Filigree",
      image:
        "https://render.guildwars2.com/file/36716A5309700B989075FD4A74AB94052A0DF01E/219512.png",
    },
  ],
  [
    ids.orichalcumIngot,
    {
      name: "Orichalcum Ingot",
      image:
        "https://render.guildwars2.com/file/D1941454313ACCB234906840E1FB401D49091B96/220460.png",
    },
  ],
  [
    ids.orichalcumOre,
    {
      name: "Orichalcum Ore",
      image:
        "https://render.guildwars2.com/file/A6E2C82153BA684E2D05D3FCA09F3E02431366ED/220461.png",
    },
  ],
  [
    ids.globOfEctoplasm,
    {
      name: "Glob of Ectoplasm",
      image:
        "https://render.guildwars2.com/file/18CE5D78317265000CF3C23ED76AB3CEE86BA60E/65941.png",
    },
  ],
  [
    ids.orichalcumHook,
    {
      name: "Orichalcum Hook",
      image:
        "https://render.guildwars2.com/file/3CC4E23004C5BAB9D0CCDAB10C47E8E86098F6D9/219496.png",
    },
  ],
  [
    ids.orichalcumSetting,
    {
      name: "Orichalcum Setting",
      image:
        "https://render.guildwars2.com/file/DD02B907A499D37F9A6562EFC2FF0E642FE193A7/219500.png",
    },
  ],
  [
    ids.rubyOrichalcumAmulet,
    {
      name: "Ruby Orichalcum Amulet",
      image:
        "https://render.guildwars2.com/file/F211FA612DB698FEF8D19E27C56BF4E6960BE36F/455603.png",
    },
  ],
  [
    ids.orichalcumChain,
    {
      name: "Orichalcum Chain",
      image:
        "https://render.guildwars2.com/file/EE1EAACDB79ECA661EDFD43E95242A027550AC54/219504.png",
    },
  ],
  [
    ids.blackDiamondOrichalcumEarring,
    {
      name: "Black Diamond Orichalcum Earring",
      image:
        "https://render.guildwars2.com/file/F3FEE72B9F390463CCD461DF5E40261BFCCEB11B/1203060.png",
    },
  ],
  [
    ids.blackDiamondOrichalcumAmulet,
    {
      name: "Black Diamond Orichalcum Amulet",
      image:
        "https://render.guildwars2.com/file/75CD103E5706CB47D33B39783F6C25A59F7F3164/1203059.png",
    },
  ],
  [
    ids.blackDiamondOrichalcumRing,
    {
      name: "Black Diamond Orichalcum Ring",
      image:
        "https://render.guildwars2.com/file/212AF33DC2450BF7B59B61C5746F07C39DF1E703/1203061.png",
    },
  ],
  [
    ids.exquisiteBlackDiamondJewel,
    {
      name: "Exquisite Black Diamond Jewel",
      image:
        "https://render.guildwars2.com/file/A9240258AD32121963FF71360500B29E0C0E29EE/1203033.png",
    },
  ],
  [
    ids.blackDiamond,
    {
      name: "Black Diamond",
      image:
        "https://render.guildwars2.com/file/4E096C75FAB2EF90A82648A43C64FC226267FB92/1202991.png",
    },
  ],
  [
    ids.orichalcumBand,
    {
      name: "Orichalcum Band",
      image:
        "https://render.guildwars2.com/file/EE24D0CD5257BFE1139D405D405729F2603BFA47/219508.png",
    },
  ],
  [
    ids.serpentiteOrichalcumAmulet,
    {
      name: "Serpentite Orichalcum Amulet",
      image:
        "https://render.guildwars2.com/file/0B0504ADEBDC5D96C7DB1B1BD14FDD24712662CB/1203062.png",
    },
  ],
  [
    ids.serpentiteOrichalcumEarring,
    {
      name: "Serpentite Orichalcum Earring",
      image:
        "https://render.guildwars2.com/file/1DB39D44DF06ED10B931641A0599C7A5AE70C872/1203063.png",
    },
  ],
  [
    ids.serpentiteOrichalcumRing,
    {
      name: "Serpentite Orichalcum Ring",
      image:
        "https://render.guildwars2.com/file/CCFCF274976AA5F19CAC680A2B681C087B31B663/1203064.png",
    },
  ],
  [
    ids.exquisiteSerpentiteJewel,
    {
      name: "Exquisite Serpentite Jewel",
      image:
        "https://render.guildwars2.com/file/DA99DBD87B3171202641F52B7098F99826BDA3AD/1203034.png",
    },
  ],
  [
    ids.jadeOrichalcumEarring,
    {
      name: "Jade Orichalcum Earring",
      image:
        "https://render.guildwars2.com/file/A8E3D8AF74753BEEFBAEEB2C4594BB1001511DAA/2593554.png",
    },
  ],
  [
    ids.jadeOrichalcumAmulet,
    {
      name: "Jade Orichalcum Amulet",
      image:
        "https://render.guildwars2.com/file/0D01FB013E7912E7BE1CDD367D2E049C68716C1C/2593558.png",
    },
  ],
  [
    ids.jadeOrichalcumRing,
    {
      name: "Jade Orichalcum Ring",
      image:
        "https://render.guildwars2.com/file/170C4A6E2471A0D397563F6274CDDF0AF349717A/2596747.png",
    },
  ],
  [
    ids.exquisiteJadeJewel,
    {
      name: "Exquisite Jade Jewel",
      image:
        "https://render.guildwars2.com/file/48D61ED3BBA6AAB11FDB22003EE4244C010DF24C/2595104.png",
    },
  ],
  [
    ids.chunkofPureJade,
    {
      name: "Chunk of Pure Jade",
      image:
        "https://render.guildwars2.com/file/C7E13105A754F639BB6C7A439F06CF45C9EB1C18/2595189.png",
    },
  ],
  [
    ids.opalOrichalcumEarring,
    {
      name: "Opal Orichalcum Earring",
      image:
        "https://render.guildwars2.com/file/5007F9AD422CA0F47619EC48DF1CE5E0D1B40276/433702.png",
    },
  ],
  [
    ids.exquisiteOpalJewel,
    {
      name: "Exquisite Opal Jewel",
      image:
        "https://render.guildwars2.com/file/E9AAE966EC3613B4E00D0BB4ABA7F39DA19D7402/220971.png",
    },
  ],
  [
    ids.opalOrb,
    {
      name: "Opal Orb",
      image:
        "https://render.guildwars2.com/file/62CE38CB99469CBADDAD6FF4A221F75B636AA55D/220957.png",
    },
  ],
  [
    ids.opalCrystal,
    {
      name: "Opal Crystal",
      image:
        "https://render.guildwars2.com/file/D121707FEAAB6D71D1C807C7E70C75CD1E4F6552/220956.png",
    },
  ],
  [
    ids.freshwaterPearlOrichalcumRing,
    {
      name: "Freshwater Pearl Orichalcum Ring",
      image:
        "https://render.guildwars2.com/file/D998320E2C7CCF220269747A549CD1FB2206399F/1203072.png",
    },
  ],
  [
    ids.exquisiteFreshwaterPearl,
    {
      name: "Exquisite Freshwater Pearl",
      image:
        "https://render.guildwars2.com/file/DF36C75D9294FCFE9B0A1DE3D8975477400CC9FC/1202984.png",
    },
  ],
  [
    ids.freshwaterPearl,
    {
      name: "Freshwater Pearl",
      image:
        "https://render.guildwars2.com/file/629318080FD49E701566ED98DF98FA54033AC9CB/223939.png",
    },
  ],
]);

function calculateRequiredMaterials(bom, items) {
  const totals = new Map();

  function expandItem(id, qty) {
    const recipe = bom.get(id);

    totals.set(id, {
      qty: (totals.get(id)?.qty ?? 0) + qty,
      crafteable: !!recipe,
    });

    if (!recipe) return;

    for (const ingredient of recipe) {
      const requiredQuantity = ingredient.qty * qty;

      expandItem(ingredient.id, requiredQuantity);
    }
  }

  for (const item of items) {
    expandItem(item.id, item.qty);

    totals.delete(item.id);
  }

  return totals;
}

function createMaterialCollection(materials, materialsData) {
  const materialsIteration = materials.entries().map(([key, value]) => {
    const material = materialsData.get(key);

    return [
      key,
      {
        ...value,
        name: material.name,
        image: material.image,
      },
    ];
  });

  return new Map(materialsIteration);
}

function createMaterialRow(material) {
  return `
    <tr class="board__row">
      <td class="board__cell board__cell--item">
        <div class="board__item">
          <img
            src="${material.image}"
            alt="${material.name}"
            class="board__icon"
          />
          <span>${material.name}</span>
        </div>
      </td>
      <td class="board__cell board__cell--quantity">${material.qty}</td>
    </tr>
  `;
}

function createItemRow(item) {
  return `
    <tr class="board__row">
      <td class="board__cell board__cell--item">
        <div class="board__item">
          <img
            src="${item.image}"
            alt="${item.name}"
            class="board__icon"
          />
          <span>${item.name}</span>
        </div>
      </td>
      <td class="board__cell board__cell--quantity">
        <input data-input="${item.id}" type="number" class="board__input" value="${item.qty}" step="1" />
      </td>
    </tr>
  `;
}

function renderMaterial(materialsCollection) {
  const crafteableTable = document.querySelector(
    "[data-js='crafteable-table']",
  );
  const uncrafteableTable = document.querySelector(
    "[data-js='uncrafteable-table']",
  );

  crafteableTable.innerHTML = materialsCollection
    .entries()
    .map(([key, value]) => {
      if (!value.crafteable) return;
      return createMaterialRow(value);
    })
    .join("");

  uncrafteableTable.innerHTML = materialsCollection
    .entries()
    .map(([key, value]) => {
      if (value.crafteable) return;
      return createMaterialRow(value);
    })
    .join("");
}

function renderItems(itemsCollection) {
  const itemsBoard = document.querySelector("[data-js='items-board']");

  itemsBoard.innerHTML = itemsCollection
    .map(({ id, qty = 1 }) => {
      const item = materialsData.get(id);
      return createItemRow({ ...item, qty, id });
    })
    .join("");
}

function initMaterials(items) {
  const materials = calculateRequiredMaterials(bom, items);

  const materialsCollection = createMaterialCollection(
    materials,
    materialsData,
  );

  renderMaterial(materialsCollection);
}

document.addEventListener("change", (e) => {
  if (!e.target.dataset.input) {
    return;
  }

  const itemId = Number(e.target.dataset.input);
  const inputValue = Number(e.target.value);

  const item = items.find((item) => item.id === itemId);

  item.qty = inputValue;

  localStorage.setItem("data", JSON.stringify(items));

  initMaterials(items);
});

const items = JSON.parse(localStorage.getItem("data")) ?? [
  { id: ids.rubyOrichalcumEarring, qty: 1 },
  { id: ids.rubyOrichalcumAmulet, qty: 1 },
  { id: ids.rubyOrichalcumRing, qty: 1 },
  { id: ids.blackDiamondOrichalcumEarring, qty: 1 },
  { id: ids.blackDiamondOrichalcumAmulet, qty: 1 },
  { id: ids.blackDiamondOrichalcumRing, qty: 1 },
  { id: ids.serpentiteOrichalcumEarring, qty: 1 },
  { id: ids.serpentiteOrichalcumAmulet, qty: 1 },
  { id: ids.serpentiteOrichalcumRing, qty: 1 },
  { id: ids.jadeOrichalcumAmulet, qty: 1 },
  { id: ids.jadeOrichalcumEarring, qty: 1 },
  { id: ids.jadeOrichalcumRing, qty: 1 },
  { id: ids.opalOrichalcumEarring, qty: 1 },
  { id: ids.freshwaterPearlOrichalcumRing, qty: 1 },
];

renderItems(items);

initMaterials(items);

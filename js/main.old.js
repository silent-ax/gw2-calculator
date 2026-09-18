import { calculateRequiredMaterial } from "../src/domain/calculate-materials.js";
import { ITEM_IDS } from "../src/data/items-id.js";
import { RECIPES } from "../src/data/recipes.js";

// "use strict";

// const ids = {
//   rubyOrichalcumEarring: 1,
//   exquisiteRubyJewel: 2,
//   orichalcumHook: 3,
//   orichalcumSetting: 4,
//   rubyOrb: 5,
//   orichalcumFiligree: 6,
//   globOfEctoplasm: 7,
//   rubyCrystal: 8,
//   pileOfIncandescentDust: 9,
//   orichalcumIngot: 10,
//   orichalcumOre: 11,
//   rubyOrichalcumAmulet: 12,
//   orichalcumChain: 13,
// };

// const bom = new Map([
//   [
//     ids.rubyOrichalcumEarring,
//     [
//       { id: ids.exquisiteRubyJewel, qty: 5 },
//       { id: ids.orichalcumHook, qty: 1 },
//       { id: ids.orichalcumSetting, qty: 1 },
//     ],
//   ],
//   [
//     ids.rubyOrichalcumAmulet,
//     [
//       { id: ids.exquisiteRubyJewel, qty: 5 },
//       { id: ids.orichalcumChain, qty: 1 },
//       { id: ids.orichalcumSetting, qty: 1 },
//     ],
//   ],
//   [
//     ids.exquisiteRubyJewel,
//     [
//       { id: ids.rubyOrb, qty: 1 },
//       { id: ids.orichalcumFiligree, qty: 1 },
//       { id: ids.globOfEctoplasm, qty: 1 },
//     ],
//   ],
//   [
//     ids.rubyOrb,
//     [
//       { id: ids.rubyCrystal, qty: 2 },
//       { id: ids.pileOfIncandescentDust, qty: 5 },
//     ],
//   ],
//   [ids.orichalcumFiligree, [{ id: ids.orichalcumIngot, qty: 2 }]],
//   [ids.orichalcumIngot, [{ id: ids.orichalcumOre, qty: 2 }]],
//   [ids.orichalcumHook, [{ id: ids.orichalcumIngot, qty: 2 }]],
//   [ids.orichalcumSetting, [{ id: ids.orichalcumIngot, qty: 2 }]],
//   [ids.orichalcumChain, [{ id: ids.orichalcumIngot, qty: 4 }]],
// ]);

// const materialsData = new Map([
//   [
//     ids.rubyOrichalcumEarring,
//     {
//       name: "Ruby Orichalcum Earring",
//       image:
//         "https://render.guildwars2.com/file/29F124099BBC31F0AA34B9596A163A99652D6512/433703.png",
//     },
//   ],
//   [
//     ids.exquisiteRubyJewel,
//     {
//       name: "Exquisite Ruby Jewel",
//       image:
//         "https://render.guildwars2.com/file/33795ED91E2FF24AD495C9C9FBF40D0AFEDB2891/220939.png",
//     },
//   ],
//   [
//     ids.rubyOrb,
//     {
//       name: "Ruby Orb",
//       image:
//         "https://render.guildwars2.com/file/7702E49901413CC14B2F5B7BFD059522333210E6/220947.png",
//     },
//   ],
//   [
//     ids.rubyCrystal,
//     {
//       name: "Ruby Crystal",
//       image:
//         "https://render.guildwars2.com/file/90097CD0D563E852044397F848556C3F5EAE66D0/220917.png",
//     },
//   ],
//   [
//     ids.pileOfIncandescentDust,
//     {
//       name: "Pile of Incandescent Dust",
//       image:
//         "https://render.guildwars2.com/file/3501C2BBADF95BE5F14E31484850E851EFCA33CB/434536.png",
//     },
//   ],
//   [
//     ids.orichalcumFiligree,
//     {
//       name: "Orichalcum Filigree",
//       image:
//         "https://render.guildwars2.com/file/36716A5309700B989075FD4A74AB94052A0DF01E/219512.png",
//     },
//   ],
//   [
//     ids.orichalcumIngot,
//     {
//       name: "Orichalcum Ingot",
//       image:
//         "https://render.guildwars2.com/file/D1941454313ACCB234906840E1FB401D49091B96/220460.png",
//     },
//   ],
//   [
//     ids.orichalcumOre,
//     {
//       name: "Orichalcum Ore",
//       image:
//         "https://render.guildwars2.com/file/A6E2C82153BA684E2D05D3FCA09F3E02431366ED/220461.png",
//     },
//   ],
//   [
//     ids.globOfEctoplasm,
//     {
//       name: "Glob of Ectoplasm",
//       image:
//         "https://render.guildwars2.com/file/18CE5D78317265000CF3C23ED76AB3CEE86BA60E/65941.png",
//     },
//   ],
//   [
//     ids.orichalcumHook,
//     {
//       name: "Orichalcum Hook",
//       image:
//         "https://render.guildwars2.com/file/3CC4E23004C5BAB9D0CCDAB10C47E8E86098F6D9/219496.png",
//     },
//   ],
//   [
//     ids.orichalcumSetting,
//     {
//       name: "Orichalcum Setting",
//       image:
//         "https://render.guildwars2.com/file/DD02B907A499D37F9A6562EFC2FF0E642FE193A7/219500.png",
//     },
//   ],
//   [
//     ids.rubyOrichalcumAmulet,
//     {
//       name: "Ruby Orichalcum Amulet",
//       image:
//         "https://render.guildwars2.com/file/F211FA612DB698FEF8D19E27C56BF4E6960BE36F/455603.png",
//     },
//   ],
//   [
//     ids.orichalcumChain,
//     {
//       name: "Orichalcum Chain",
//       image:
//         "https://render.guildwars2.com/file/EE1EAACDB79ECA661EDFD43E95242A027550AC54/219504.png",
//     },
//   ],
// ]);

// function calculateRequiredMaterials(bom, items) {
//   const totals = new Map();

//   function expandItem(id, qty) {
//     const recipe = bom.get(id);

//     totals.set(id, {
//       qty: (totals.get(id)?.qty ?? 0) + qty,
//       crafteable: !!recipe,
//     });

//     if (!recipe) return;

//     // console.log(children);

//     for (const ingredient of recipe) {
//       const requiredQuantity = ingredient.qty * qty;

//       expandItem(ingredient.id, requiredQuantity);
//     }
//   }

//   for (const item of items) {
//     expandItem(item.id, item.qty);

//     totals.delete(item.id);
//   }

//   return totals;
// }

// function createMaterialCollection(materials, materialsData) {
//   const materialsIteration = materials.entries().map(([key, value]) => {
//     const material = materialsData.get(key);

//     return [
//       key,
//       {
//         ...value,
//         name: material.name,
//         image: material.image,
//       },
//     ];
//   });

//   return new Map(materialsIteration);
// }

// function createMaterialRow(material) {
//   return `
//     <tr class="board__row">
//       <td class="board__cell board__cell--item">
//         <div class="board__item">
//           <img
//             src="${material.image}"
//             alt="${material.name}"
//             class="board__icon"
//           />
//           <span>${material.name}</span>
//         </div>
//       </td>
//       <td class="board__cell board__cell--quantity">${material.qty}</td>
//     </tr>
//   `;
// }

// function createItemRow(item) {
//   return `
//     <tr class="board__row">
//       <td class="board__cell board__cell--item">
//         <div class="board__item">
//           <img
//             src="${item.image}"
//             alt="${item.name}"
//             class="board__icon"
//           />
//           <span>${item.name}</span>
//         </div>
//       </td>
//       <td class="board__cell board__cell--quantity">
//         <input data-input="${item.id}" type="number" class="board__input" value="${item.qty}" step="1" />
//       </td>
//     </tr>
//   `;
// }

// function renderMaterial(materialsCollection) {
//   const crafteableTable = document.querySelector(
//     "[data-js='crafteable-table']",
//   );
//   const uncrafteableTable = document.querySelector(
//     "[data-js='uncrafteable-table']",
//   );

//   crafteableTable.innerHTML = materialsCollection
//     .entries()
//     .map(([key, value]) => {
//       if (!value.crafteable) return;
//       return createMaterialRow(value);
//     })
//     .join("");

//   uncrafteableTable.innerHTML = materialsCollection
//     .entries()
//     .map(([key, value]) => {
//       if (value.crafteable) return;
//       return createMaterialRow(value);
//     })
//     .join("");
// }

// function renderItems(itemsCollection) {
//   const itemsBoard = document.querySelector("[data-js='items-board']");

//   itemsBoard.innerHTML = itemsCollection
//     .map(({ id, qty = 1 }) => {
//       const item = materialsData.get(id);
//       return createItemRow({ ...item, qty, id });
//     })
//     .join("");
// }

// function initMaterials(items) {
//   const materials = calculateRequiredMaterials(bom, items);

//   const materialsCollection = createMaterialCollection(
//     materials,
//     materialsData,
//   );

//   renderMaterial(materialsCollection);
// }

// document.addEventListener("change", (e) => {
//   if (!e.target.dataset.input) {
//     return;
//   }

//   const itemId = Number(e.target.dataset.input);
//   const inputValue = Number(e.target.value);

//   const item = items.find((item) => item.id === itemId);

//   item.qty = inputValue;

//   localStorage.setItem("data", JSON.stringify(items));

//   initMaterials(items);
// });

// const items = JSON.parse(localStorage.getItem("data")) ?? [
//   { id: ids.rubyOrichalcumEarring, qty: 1 },
//   { id: ids.rubyOrichalcumAmulet, qty: 1 },
// ];

// renderItems(items);

// initMaterials(items);

/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 23
*/



// file: lib.js

IMPORT("ToolType");
IMPORT("StructuresAPI");




// file: spectype.js

/*
var BLOCK_RENDER_SLAB = Block.createSpecialType({
     rendertype: 50
});
*/
var BLOCK_RENDER_STAIRS = Block.createSpecialType({
     rendertype: 10,
     base: 67
});




// file: blocks/bamboo/bamboo_planks.js

IDRegistry.genBlockID("bambooPlanks");
Block.createBlock("bambooPlanks", [
     {name: "Bamboo Planks", texture: [["bamboo_planks", 0]], inCreative: false}]);




// file: blocks/bamboo/bamboo_planks_vertical.js

IDRegistry.genBlockID("bambooPlanksVertical");
Block.createBlock("bambooPlanksVertical", [
     {name: "Bamboo Wall", texture: [["bamboo_planks_vertical", 0]], inCreative: false}]);




// file: items/amethyst/amethyst.js

IDRegistry.genItemID("amethyst");
Item.createItem("amethyst", "Amethyst", { name: "amethyst", meta: 0});




// file: items/amethyst/amethyst_armor.js

IDRegistry.genItemID("amethystHelmet");
IDRegistry.genItemID("amethystChestplate");
IDRegistry.genItemID("amethystLeggings");
IDRegistry.genItemID("amethystBoots");

Item.createArmorItem("amethystHelmet", "Amethyst Helmet", {name: "amethyst_helmet"}, {type: "helmet", armor: 3, durability: 364, texture: "armor/amethyst_layer_1.png"});
Item.createArmorItem("amethystChestplate", "Amethyst Chestplate", {name: "amethyst_chestplate"}, {type: "chestplate", armor: 6, durability: 529, texture: "armor/amethyst_layer_1.png"});
Item.createArmorItem("amethystLeggings", "Amethyst Leggings", {name: "amethyst_leggings"}, {type: "leggings", armor: 6, durability: 496, texture: "armor/amethyst_layer_2.png"});
Item.createArmorItem("amethystBoots", "Amethyst Boots", {name: "amethyst_boots"}, {type: "boots", armor: 3, durability: 430, texture: "armor/amethyst_layer_1.png"});

Recipes.addShaped({id: ItemID.amethystHelmet, count: 1, data: 0}, [
    "xxx",
    "x x",
    "  "
], ["x", ItemID.amethyst, 0]);

Recipes.addShaped({id: ItemID.amethystChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ["x", ItemID.amethyst, 0]);

Recipes.addShaped({id: ItemID.amethystLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ["x", ItemID.amethyst, 0]);

Recipes.addShaped({id: ItemID.amethystBoots, count: 1, data: 0}, [
    "   ",
    "x x",
    "x x"
], ["x", ItemID.amethyst, 0]);




// file: items/jade/jade.js

IDRegistry.genItemID("jade");
Item.createItem("jade", "Jade", { name: "jade", meta: 0});




// file: items/jade/jade_armor.js

IDRegistry.genItemID("jadeHelmet");
IDRegistry.genItemID("jadeChestplate");
IDRegistry.genItemID("jadeLeggings");
IDRegistry.genItemID("jadeBoots");

Item.createArmorItem("jadeHelmet", "Jade Helmet", {name: "jade_helmet"}, {type: "helmet", armor: 5, durability: 364, texture: "armor/jade_layer_1.png"});
Item.createArmorItem("jadeChestplate", "Jade Chestplate", {name: "jade_chestplate"}, {type: "chestplate", armor: 10, durability: 529, texture: "armor/jade_layer_1.png"});
Item.createArmorItem("jadeLeggings", "Jade Leggings", {name: "jade_leggings"}, {type: "leggings", armor: 8, durability: 496, texture: "armor/jade_layer_2.png"});
Item.createArmorItem("jadeBoots", "Jade Boots", {name: "jade_boots"}, {type: "boots", armor: 5, durability: 430, texture: "armor/jade_layer_1.png"});

Recipes.addShaped({id: ItemID.jadeHelmet, count: 1, data: 0}, [
    "xxx",
    "x x",
    "  "
], ["x", ItemID.jade, 0]);

Recipes.addShaped({id: ItemID.jadeChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ["x", ItemID.jade, 0]);

Recipes.addShaped({id: ItemID.jadeLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ["x", ItemID.jade, 0]);

Recipes.addShaped({id: ItemID.jadeBoots, count: 1, data: 0}, [
    "   ",
    "x x",
    "x x"
], ["x", ItemID.jade, 0]);




// file: items/ruby/ruby.js

IDRegistry.genItemID("ruby");
Item.createItem("ruby", "Ruby", { name: "ruby", meta: 0});




// file: items/ruby/ruby_armor.js

IDRegistry.genItemID("rubyHelmet");
IDRegistry.genItemID("rubyChestplate");
IDRegistry.genItemID("rubyLeggings");
IDRegistry.genItemID("rubyBoots");

Item.createArmorItem("rubyHelmet", "Ruby Helmet", {name: "ruby_helmet"}, {type: "helmet", armor: 5, durability: 364, texture: "armor/ruby_layer_1.png"});
Item.createArmorItem("rubyChestplate", "Ruby Chestplate", {name: "ruby_chestplate"}, {type: "chestplate", armor: 7, durability: 529, texture: "armor/ruby_layer_1.png"});
Item.createArmorItem("rubyLeggings", "Ruby Leggings", {name: "ruby_leggings"}, {type: "leggings", armor: 7, durability: 496, texture: "armor/ruby_layer_2.png"});
Item.createArmorItem("rubyBoots", "Ruby Boots", {name: "ruby_boots"}, {type: "boots", armor: 5, durability: 430, texture: "armor/ruby_layer_1.png"});

Recipes.addShaped({id: ItemID.rubyHelmet, count: 1, data: 0}, [
    "xxx",
    "x x",
    "   "
], ["x", ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ["x", ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ["x", ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyBoots, count: 1, data: 0}, [
    "   ",
    "x x",
    "x x"
], ["x", ItemID.ruby, 0]);




// file: blocks/ore/amethyst_ore.js

IDRegistry.genBlockID("amethystOre");
Block.createBlock("amethystOre", [ 
  {name: "Amethyst Ore", texture: [["ore_amethyst", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.amethystOre, "stone", 2);
Block.setDestroyTime(BlockID.amethystOre, 5);
Block.setDestroyLevel("amethystOre", 2);
Block.registerDropFunction("amethystOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.amethyst, 1, 0]];
		if(Math.random() < enchant.fortune/2 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 2, 5, enchant.experience);
		return drop;
	}
	return [];
}, 3);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  for(var i = 0; i < 5; i++){
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
          GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.amethystOre, 0, 5);
  }
});




// file: blocks/ore/jade_ore.js

IDRegistry.genBlockID("jadeOre");
Block.createBlock("jadeOre", [ 
  {name: "Jade Ore", texture: [["ore_jade", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.jadeOre, "stone", 2);
Block.setDestroyTime(BlockID.jadeOre, 7);
Block.setDestroyLevel("jadeOre", 2);
Block.registerDropFunction("jadeOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.jade, 1, 0]];
		if(Math.random() < enchant.fortune/2 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 2, 5, enchant.experience);
		return drop;
	}
	return [];
}, 3);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  for(var i = 0; i < 5; i++){
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 10);
          GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.jadeOre, 0, 5);
  }
});




// file: blocks/ore/ruby_ore.js

IDRegistry.genBlockID("rubyOre");
Block.createBlock("rubyOre", [ 
  {name: "Ruby Ore", texture: [["ore_ruby", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.rubyOre, "stone", 2);
Block.setDestroyTime(BlockID.rubyOre, 6);
Block.setDestroyLevel("rubyOre", 2);
Block.registerDropFunction("rubyOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.ruby, 1, 0]];
		if(Math.random() < enchant.fortune/2 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 2, 5, enchant.experience);
		return drop;
	}
	return [];
}, 3);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  for(var i = 0; i < 5; i++){
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 15);
          GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rubyOre, 0, 5);
  }
});




// file: blocks/amethyst_block.js

IDRegistry.genBlockID("amethystBlock");
Block.createBlock("amethystBlock", [
     {name: "Amethyst Block", texture: [["block_amethyst", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.amethystBlock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ["a", ItemID.amethyst, 0]);




// file: blocks/jade_block.js

IDRegistry.genBlockID("jadeBlock");
Block.createBlock("jadeBlock", [
     {name: "Jade Block", texture: [["block_jade", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.jadeBlock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ["a", ItemID.jade, 0]);




// file: blocks/ruby_block.js

IDRegistry.genBlockID("rubyBlock");
Block.createBlock("rubyBlock", [
     {name: "Ruby Block", texture: [["block_ruby", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.rubyBlock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ["a", ItemID.ruby, 0]);




// file: items/amethyst/amethyst_toolkit.js

//sword

IDRegistry.genItemID("amethystSword");
Item.createItem("amethystSword", "Amethyst Sword", {name: "amethyst_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("amethyst_sword", {durability: 751, level: 3, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.amethystSword, "amethyst_sword", ToolType.sword);

Recipes.addShaped({id: ItemID.amethystSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ["a", ItemID.amethyst, 0, "b", 280, 0]);

//shovel

IDRegistry.genItemID("amethystShovel");
Item.createItem("amethystShovel", "Amethyst Shovel", {name: "amethyst_shovel", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("amethyst_shovel", {durability: 751, level: 3, efficiency: 8, damage: 5.5, enchantability: 14});
ToolAPI.setTool(ItemID.amethystShovel, "amethyst_shovel", ToolType.shovel);

Recipes.addShaped({id: ItemID.amethystShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ["a", ItemID.amethyst, 0, "b", 280, 0]);

//pickaxe

IDRegistry.genItemID("amethystPickaxe");
Item.createItem("amethystPickaxe", "Amethyst Pickaxe", {name: "amethyst_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("amethyst_pickaxe", {durability: 751, level: 3, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.amethystPickaxe, "amethyst_pickaxe", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.amethystPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ["a", ItemID.amethyst, 0,  "b", 280, 0]);

//axe

IDRegistry.genItemID("amethystAxe");
Item.createItem("amethystAxe", "Amethyst Axe", {name: "amethyst_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("amethyst_axe", {durability: 751, level: 3, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.amethystAxe, "amethyst_axe", ToolType.axe);

Recipes.addShaped({id: ItemID.amethystAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.amethyst, 0, 'b', 280, 0]);

//hoe

IDRegistry.genItemID("amethystHoe");
Item.createItem("amethystHoe", "Amethyst Hoe", {name: "amethyst_hoe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("amethyst_hoe", {durability: 751, level: 3, efficiency: 8, damage: 1, enchantability: 14});
ToolAPI.setTool(ItemID.amethystHoe, "amethyst_hoe", ToolType.hoe);

Recipes.addShaped({id: ItemID.amethystHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.amethyst, 0, 'b', 280, 0]);




// file: items/jade/jade_toolkit.js

//sword

IDRegistry.genItemID("jadeSword");
Item.createItem("jadeSword", "Jade Sword", {name: "jade_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("jade_sword", {durability: 1101, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.jadeSword, "jade_sword", ToolType.sword);

Recipes.addShaped({id: ItemID.jadeSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ["a", ItemID.jade, 0, "b", 280, 0]);

//shovel

IDRegistry.genItemID("jadeShovel");
Item.createItem("jadeShovel", "Jade Shovel", {name: "jade_shovel", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("jade_shovel", {durability: 1101, level: 4, efficiency: 8, damage: 5.5, enchantability: 14});
ToolAPI.setTool(ItemID.jadeShovel, "jade_shovel", ToolType.shovel);

Recipes.addShaped({id: ItemID.jadeShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ["a", ItemID.jade, 0, "b", 280, 0]);

//pickaxe

IDRegistry.genItemID("jadePickaxe");
Item.createItem("jadePickaxe", "Jade Pickaxe", {name: "jade_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("jade_pickaxe", {durability: 1101, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.jadePickaxe, "jade_pickaxe", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.jadePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ["a", ItemID.jade, 0,  "b", 280, 0]);

//axe

IDRegistry.genItemID("jadeAxe");
Item.createItem("jadeAxe", "Jade Axe", {name: "jade_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("jade_axe", {durability: 1101, level: 4, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.jadeAxe, "jade_axe", ToolType.axe);

Recipes.addShaped({id: ItemID.jadeAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.jade, 0, 'b', 280, 0]);

//hoe

IDRegistry.genItemID("jadeHoe");
Item.createItem("jadeHoe", "Jade Hoe", {name: "jade_hoe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("jade_hoe", {durability: 1101, level: 4, efficiency: 8, damage: 1, enchantability: 14});
ToolAPI.setTool(ItemID.jadeHoe, "jade_hoe", ToolType.hoe);

Recipes.addShaped({id: ItemID.jadeHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.jade, 0, 'b', 280, 0]);




// file: items/ruby/ruby_toolkit.js

//sword

IDRegistry.genItemID("rubySword");
Item.createItem("rubySword", "Ruby Sword", {name: "ruby_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ruby_sword", {durability: 451, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.rubySword, "ruby_sword", ToolType.sword);

Recipes.addShaped({id: ItemID.rubySword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ["a", ItemID.ruby, 0, "b", 280, 0]);

//shovel

IDRegistry.genItemID("rubyShovel");
Item.createItem("rubyShovel", "Ruby Shovel", {name: "ruby_shovel", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ruby_shovel", {durability: 451, level: 4, efficiency: 8, damage: 5.5, enchantability: 14});
ToolAPI.setTool(ItemID.rubyShovel, "ruby_shovel", ToolType.shovel);

Recipes.addShaped({id: ItemID.rubyShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ["a", ItemID.ruby, 0, "b", 280, 0]);

//pickaxe

IDRegistry.genItemID("rubyPickaxe");
Item.createItem("rubyPickaxe", "Ruby Pickaxe", {name: "ruby_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ruby_pickaxe", {durability: 451, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.rubyPickaxe, "ruby_pickaxe", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.rubyPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ["a", ItemID.ruby, 0,  "b", 280, 0]);

//axe

IDRegistry.genItemID("rubyAxe");
Item.createItem("rubyAxe", "Ruby Axe", {name: "ruby_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ruby_axe", {durability: 451, level: 4, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.rubyAxe, "ruby_axe", ToolType.axe);

Recipes.addShaped({id: ItemID.rubyAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

//hoe

IDRegistry.genItemID("rubyHoe");
Item.createItem("rubyHoe", "Ruby Hoe", {name: "ruby_hoe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ruby_hoe", {durability: 451, level: 4, efficiency: 8, damage: 1, enchantability: 14});
ToolAPI.setTool(ItemID.rubyHoe, "ruby_hoe", ToolType.hoe);

Recipes.addShaped({id: ItemID.rubyHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);




// file: blocks/rock/marble.js

IDRegistry.genBlockID("marble");
Block.createBlock("marble", [ 
  {name: "Marble", texture: [["marble", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.marble, "stone", 2);
Block.setDestroyTime(BlockID.marble, 5);
Block.setDestroyLevel("marble", 2);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  for(var i = 0; i < 15; i++){
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 50);
          GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.marble, 0, 15);
  }
});

//marble polished
IDRegistry.genBlockID("marblePolished");
Block.createBlock("marblePolished", [ 
  {name: "Polished Marble", texture: [["marble_polished", 0]], inCreative: true}]);
Recipes.addShapeless({id: BlockID.marblePolished, count: 1, data: 0}, [
    {id: BlockID.marble, data: 0}
]);

//marble bricks
IDRegistry.genBlockID("marbleBricks");
Block.createBlock("marbleBricks", [ 
  {name: "Marble Bricks", texture: [["marble_bricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.marbleBricks, count: 4, data: 0}, [
    "aa",
    "aa"
], ['a', BlockID.marble, 0]);

//marble mossy
IDRegistry.genBlockID("marbleMossy");
Block.createBlock("marbleMossy", [ 
  {name: "Mossy Marble Bricks", texture: [["marble_mossy", 0]], inCreative: true}]);
Recipes.addShapeless({id: BlockID.marbleMossy, count: 1, data: 0}, [
    {id: BlockID.marbleBricks, data: 0}, {id: 106, data: 0},
]);

//marble cracked
IDRegistry.genBlockID("marbleCracked");
Block.createBlock("marbleCracked", [ 
  {name: "Cracked Marble Bricks", texture: [["marble_cracked", 0]], inCreative: true}]);
Recipes.addFurnace(BlockID.marbleBricks, BlockID.marbleCracked, 0);

//marble pillar
IDRegistry.genBlockID("marblePillar");
Block.createBlock("marblePillar", [ 
  {name: "Marble Pillar", texture: [["marble_polished", 0], ["marble_polished", 0], ["marble_pillar", 0], 
["marble_pillar", 0], ["marble_pillar", 0], ["marble_pillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.marblePillar, count: 2, data: 0}, [
    "a",
    "a"
], ['a', BlockID.marbleSlab, 0]);

//marble brick slab INDEV
IDRegistry.genBlockID("marbleSlab");
Block.createBlock("marbleSlab", [ 
  {name: "Marble Brick Slab", texture: [["marble_bricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.marbleSlab, count: 6, data: 0}, [
    "aaa",
], ['a', BlockID.marbleBricks, 0]);
Block.setShape(BlockID.marbleSlab,0,0,0,1,0.5,1);
/*
//marble brick stairs INDEV
IDRegistry.genBlockID("marbleStairs");
Block.createBlock("marbleStairs", [ 
  {name: "Marble Brick Stairs", texture: [["marble_bricks", 0]], inCreative: true}], BLOCK_RENDER_STAIRS);
Recipes.addShaped({id: BlockID.marbleStairs, count: 4, data: 0}, [
    "a  ",
    "aa ",
    "aaa"
], ['a', BlockID.marbleBricks, 0]);
*/




// file: blocks/rock/basalt.js

//basalt
IDRegistry.genBlockID("basalt");
Block.createBlock("basalt", [ 
  {name: "Basalt", texture: [["basalt", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.basalt, "stone", 2);
Block.setDestroyTime(BlockID.basalt, 5);
Block.setDestroyLevel("basalt", 2);
Block.registerDropFunction("basalt", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
return [[BlockID.basaltCobblestone, 1, 0]]
}
});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  for(var i = 0; i < 15; i++){
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 75);
          GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.basalt, 0, 15);
  }
});

//basalt cobblestone
IDRegistry.genBlockID("basaltCobblestone");
Block.createBlock("basaltCobblestone", [ 
  {name: "Basalt Cobblestone", texture: [["basalt_cobblestone", 0]], inCreative: true}]);

//basalt polished
IDRegistry.genBlockID("basaltPolished");
Block.createBlock("basaltPolished", [ 
  {name: "Polished Basalt", texture: [["basalt_polished", 0]], inCreative: true}]);
Recipes.addShapeless({id: BlockID.basaltPolished, count: 1, data: 0}, [
    {id: BlockID.basalt, data: 0}
]);

//basalt bricks
IDRegistry.genBlockID("basaltBricks");
Block.createBlock("basaltBricks", [ 
  {name: "Basalt Bricks", texture: [["basalt_bricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.basaltBricks, count: 4, data: 0}, [
    "aa",
    "aa"
], ['a', BlockID.basalt, 0]);

//basalt mossy
IDRegistry.genBlockID("basaltMossy");
Block.createBlock("basaltMossy", [ 
  {name: "Mossy Basalt Bricks", texture: [["basalt_mossy", 0]], inCreative: true}]);
Recipes.addShapeless({id: BlockID.basaltMossy, count: 1, data: 0}, [
    {id: BlockID.basaltBricks, data: 0}, {id: 106, data: 0},
]);

//basalt cracked
IDRegistry.genBlockID("basaltCracked");
Block.createBlock("basaltCracked", [ 
  {name: "Cracked Basalt Bricks", texture: [["basalt_cracked", 0]], inCreative: true}]);
Recipes.addFurnace(BlockID.basaltBricks, BlockID.basaltCracked, 0);

//basalt pillar
IDRegistry.genBlockID("basaltPillar");
Block.createBlockWithRotation("basaltPillar", [ 
  {name: "Basalt Pillar", texture: [["basalt_polished", 0], ["basalt_polished", 0], ["basalt_pillar", 0], 
["basalt_pillar", 0], ["basalt_pillar", 0], ["basalt_pillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.basaltPillar, count: 2, data: 0}, [
    "a",
    "a"
], ['a', BlockID.basaltSlab, 0]);

//basalt brick slab INDEV
IDRegistry.genBlockID("basaltSlab");
Block.createBlock("basaltSlab", [ 
  {name: "Basalt Brick Slab", texture: [["basalt_bricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.basaltSlab, count: 6, data: 0}, [
    "aaa"
], ['a', BlockID.basaltBricks, 0]);
Block.setShape(BlockID.basaltSlab,0,0,0,1,0.5,1);
/*
//basalt brick stairs INDEV
IDRegistry.genBlockID("basaltStairs");
Block.createBlock("basaltStairs", [ 
  {name: "Basalt Brick Stairs", texture: [["basalt_bricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.basaltStairs, count: 4, data: 0}, [
    "a  ",
    "aa ",
    "aaa"
], ['a', BlockID.basaltBricks, 0]);
Block.setShape(BlockID.basaltStairs,0,0,0,1,0.5,1);
*/




// file: blocks/rock/slate.js

//slate
IDRegistry.genBlockID("slate");
Block.createBlock("slate", [ 
  {name: "Slate", texture: [["slate", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.slate, "stone", 2);
Block.setDestroyTime(BlockID.slate, 5);
Block.setDestroyLevel("slate", 2);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  for(var i = 0; i < 15; i++){
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 23, 113);
          GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.slate, 0, 15);
  }
});

//slate polished
IDRegistry.genBlockID("slatePolished");
Block.createBlock("slatePolished", [ 
  {name: "Polished Slate", texture: [["slate_polished_top", 0], ["slate_polished_top", 0], ["slate_polished_side", 0]], inCreative: true}]);
Recipes.addShapeless({id: BlockID.slatePolished, count: 1, data: 0}, [
    {id: BlockID.slate, data: 0}
]);

//slate bricks
IDRegistry.genBlockID("slateBricks");
Block.createBlock("slateBricks", [ 
  {name: "Slate Bricks", texture: [["slate_bricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slateBricks, count: 4, data: 0}, [
    "aa",
    "aa"
], ['a', BlockID.slate, 0]);

//slate mossy
IDRegistry.genBlockID("slateMossy");
Block.createBlock("slateMossy", [ 
  {name: "Mossy Slate Bricks", texture: [["slate_mossy", 0]], inCreative: true}]);
Recipes.addShapeless({id: BlockID.slateMossy, count: 1, data: 0}, [
    {id: BlockID.slateBricks, data: 0}, {id: 106, data: 0},
]);

//slate pillar
IDRegistry.genBlockID("slatePillar");
Block.createBlock("slatePillar", [ 
  {name: "Slate Pillar", texture: [["slate_polished_top", 0], ["slate_polished_top", 0], ["slate_pillar", 0], 
["slate_pillar", 0], ["slate_pillar", 0], ["slate_pillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slatePillar, count: 2, data: 0}, [
    "a",
    "a"
], ['a', BlockID.slateBricks, 0]);

//slate tile
IDRegistry.genBlockID("slateTile");
Block.createBlock("slateTile", [ 
  {name: "Slate Tiles", texture: [["slate_tile", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slateTile, count: 4, data: 0}, [
    "aa",
    "aa"
], ['a', BlockID.slatePolished, 0]);




// file: biomes/snowdonia.js

var snowdoniaBiome = new CustomBiome("snowdonia")
// цвет неба
.setSkyColor(39259)
// цвет травы
.setGrassColor(39259)
// цвет листвы
.setFoliageColor(39259)
// поверхностный блок
.setCoverBlock(2, 0)
// слой блоков под поверхностью
.setSurfaceBlock(3, 0)
// блок заливки под поверхностным слоем
.setFillingBlock(1, 0);
Callback.addCallback("GenerateBiomeMap", function(x, z, rand, dimensionId, chunkSeed, worldSeed) {
(x *= 16, z *= 16);
// проходка по блокам чанка
for (var xs = x; xs < x + 26; xs++)
for (var zs = z; zs < z + 26; zs++)
// генерация случайного шума на основе сида и текущих координат
if (GenerationUtils.getPerlinNoise(xs, 0, zs, worldSeed, 0.0225, 3) < 0.3)
// установка биома (любого) на координаты
World.setBiomeMap(xs, zs, snowdoniaBiome.id);
});





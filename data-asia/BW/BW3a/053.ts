import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミEX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [
		492
	],
	hp: 110,
	types: [
		"Grass"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "こうごうせい"
			},
			effect: {
				ja: "自分の山札から草エネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				ja: "リベンジバースト"
			},
			effect: {
				ja: "相手がすでにとったサイドの枚数×30ダメージを追加。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card

import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナッキー"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		512
	],
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "気性が 激しく トゲの ついた しっぽを 振り回して 戦う。 頭の 葉っぱは とても 苦い。"
	},
	attacks: [
		{
			name: {
				ja: "もってくる"
			},
			effect: {
				ja: "自分の山札を3枚引く。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				ja: "フィールドドレイン"
			},
			effect: {
				ja: "場に「スタジアム」が出ているなら、30ダメージを追加し、このポケモンのHPを「30」回復する。"
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
			type: "Water",
			value: "－20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		}
	],
	evolveFrom: {
		ja: "ヤナップ"
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "トルネロスEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		641
	],
	hp: 180,
	types: [
		"Colorless"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ふきながし"
			},
			effect: {
				ja: "自分の手札をすべて山札にもどし、山札を切る。その後、山札を6枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ジェットブラスト"
			},
			effect: {
				ja: "このポケモンについている「プラズマエネルギー」の数×30ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－20"
		}
	],
	retreat: 2,
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

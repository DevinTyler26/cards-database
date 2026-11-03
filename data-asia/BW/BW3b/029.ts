import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヒダルマ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		555
	],
	hp: 110,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "戦いで 弱ると 岩のように 動かなくなる。 心を 研ぎ澄まし 精神力で 戦うのだ。"
	},
	attacks: [
		{
			name: {
				ja: "シンクロドロー"
			},
			effect: {
				ja: "自分の手札をすべて山札にもどし、山札を切る。その後、相手の手札の枚数ぶん、自分の山札を引く。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "ヒヒダルMAX"
			},
			effect: {
				ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×50ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "50×"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 3,
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
		ja: "ダルマッカ"
	}
}

export default card

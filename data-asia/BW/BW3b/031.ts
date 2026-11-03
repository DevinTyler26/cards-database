import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "オーベム"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		606
	],
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "相手の 記憶を 操作する。 ３色の 指を 点滅させて 仲間と 会話している らしい。"
	},
	attacks: [
		{
			name: {
				ja: "ブレインコントロール"
			},
			effect: {
				ja: "相手の手札を見て、その中から1枚選び、相手の山札の一番下にもどす。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "サイケこうせん"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
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
		ja: "リグレー"
	}
}

export default card

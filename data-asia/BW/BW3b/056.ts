import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "エンブオー"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [
		500
	],
	hp: 150,
	types: [
		"Fire"
	],
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "れっからんぶ"
			},
			effect: {
				ja: "自分の手札から炎エネルギーを1枚選び、自分のポケモンにつける。この特性は、自分の番に何回でも使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ヒートスタンプ"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 4,
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
	],
	evolveFrom: {
		ja: "チャオブー"
	}
}

export default card

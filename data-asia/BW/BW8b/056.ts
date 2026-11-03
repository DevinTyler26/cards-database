import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダス"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [
		569
	],
	hp: 100,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ダストオキシン"
			},
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、おたがいの場・手札・トラッシュのカードに書かれている特性（「ダストオキシン」をのぞく）は、すべてなくなる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ヘドロなげ"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless"
			],
			damage: 60
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
		ja: "ヤブクロン"
	}
}

export default card

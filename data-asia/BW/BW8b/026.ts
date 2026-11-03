import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "メタング"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		375
	],
	hp: 90,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "２匹の ダンバルが 合体した。 ２つの 脳みそが 連結したので サイコパワーは より 強くなった。"
	},
	attacks: [
		{
			name: {
				ja: "ねんりき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Psychic"
			],
			damage: 10
		},
		{
			name: {
				ja: "サイコパンチ"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
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
		ja: "ダンバル"
	}
}

export default card

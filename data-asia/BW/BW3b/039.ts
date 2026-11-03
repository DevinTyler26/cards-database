import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー"
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		436
	],
	hp: 70,
	types: [
		"Metal"
	],
	stage: "Basic",
	description: {
		ja: "大昔の ドーミラーは 鏡のように 反射していたと 考える 研究家も いる。"
	},
	attacks: [
		{
			name: {
				ja: "はねとばす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "かいてんアタック"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 40
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
			type: "Psychic",
			value: "－20"
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
	]
}

export default card

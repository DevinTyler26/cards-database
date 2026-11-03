import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "コリンク"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		403
	],
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "体を 動かすたびに 筋肉が 伸び縮みして 電気が 生まれる。 ピンチになると 体が 輝く。"
	},
	attacks: [
		{
			name: {
				ja: "とびつく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Lightning"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "バチバチ"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
	]
}

export default card

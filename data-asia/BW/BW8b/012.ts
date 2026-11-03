import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "バニプッチ"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		582
	],
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "朝日を 浴びた 氷柱から 生まれたと されている ポケモン。 マイナス５０度の 息を 吐く。"
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
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Metal",
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

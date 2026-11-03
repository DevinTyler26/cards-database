import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "プルリル"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		592
	],
	hp: 80,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "獲物を 毒で しびれさせて ８０００メートルの 深海に あるという 住処に 連れていく。"
	},
	attacks: [
		{
			name: {
				ja: "あわ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "どくえき"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。"
			},
			cost: [
				"Water",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
	]
}

export default card

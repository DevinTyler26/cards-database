import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		215
	],
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	description: {
		ja: "ずるがしこく １匹が 親を 誘き寄せ もう１匹が タマゴを 取るという チームプレーも 見せる。"
	},
	attacks: [
		{
			name: {
				ja: "おいつめる"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			cost: [
				"Darkness"
			],
			damage: 10
		},
		{
			name: {
				ja: "ひっかく"
			},
			cost: [
				"Colorless",
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
	resistances: [
		{
			type: "Psychic",
			value: "－20"
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

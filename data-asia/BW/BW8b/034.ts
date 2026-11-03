import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "モノズ"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		633
	],
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	description: {
		ja: "周りの 様子が わからないので 手当り次第に ぶつかっては 動くものに かみつき 食べまくる。"
	},
	attacks: [
		{
			name: {
				ja: "つきとばす"
			},
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 30
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

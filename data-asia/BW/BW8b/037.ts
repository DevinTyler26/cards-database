import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "クチート"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		303
	],
	hp: 70,
	types: [
		"Metal"
	],
	stage: "Basic",
	description: {
		ja: "ツノが 変形して できた 大アゴが 頭に ついている。 鉄骨を かみきってしまう。"
	},
	attacks: [
		{
			name: {
				ja: "おどろかす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選ぶ。その後、そのカードを見てから相手の山札にもどし、山札を切る。"
			},
			cost: [
				"Metal"
			]
		},
		{
			name: {
				ja: "まるかぶり"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 30
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

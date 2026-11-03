import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "テッシード"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		597
	],
	hp: 60,
	types: [
		"Metal"
	],
	stage: "Basic",
	description: {
		ja: "危険を 察知すると トゲを いっせいに 発射して 反撃。 その すきに 転がって 逃げる。"
	},
	attacks: [
		{
			name: {
				ja: "じばく"
			},
			effect: {
				ja: "このポケモンにも60ダメージ。"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: 60
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

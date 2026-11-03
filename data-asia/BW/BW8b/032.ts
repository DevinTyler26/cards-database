import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		624
	],
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	description: {
		ja: "自分が 傷ついても 気にせず 集団で 全身の 刃物を 食いこませ 相手を 攻撃する。"
	},
	attacks: [
		{
			name: {
				ja: "きりさく"
			},
			cost: [
				"Darkness"
			],
			damage: 10
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

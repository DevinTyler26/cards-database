import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "バスラオ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		550
	],
	hp: 80,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "赤と 青の バスラオは 仲が 悪いが なぜか 色の 違う 個体が 群れに 紛れ込んでいる。"
	},
	attacks: [
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "むらがるキバ"
			},
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっていないなら、このワザは失敗。"
			},
			cost: [
				"Water"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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

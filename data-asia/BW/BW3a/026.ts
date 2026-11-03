import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ベトベター"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		88
	],
	hp: 70,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "ドブ川の ヘドロが 月からの エックス線を 浴びて 生まれた。 汚い 場所に 現われる。"
	},
	attacks: [
		{
			name: {
				ja: "ベトベト"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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

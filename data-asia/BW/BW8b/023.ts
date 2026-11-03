import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ベトベター"
	},
	illustrator: "Hajime Kusajima",
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
		ja: "ヘドロが ポケモンに なった。 汚い 場所に 集まって 体の ばい菌を 増やしていく。"
	},
	attacks: [
		{
			name: {
				ja: "ゆうわくどく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをどくにする。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "ヘドロなげ"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 30
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

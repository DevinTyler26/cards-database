import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ムシャーナ"
	},
	illustrator: "Maiko Fujiwara",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		518
	],
	hp: 100,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "食べた 夢を 実体化 させる。 おでこから もれる 煙が 夢に 出てきた ものに 姿を 変える。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "よちむ"
			},
			effect: {
				ja: "自分の山札を上から2枚見て、その中から1枚選び、手札に加える。残りのカードは、山札の上にもどす。この特性は、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ふわふわドリーム"
			},
			effect: {
				ja: "このポケモンをねむりにする。"
			},
			cost: [
				"Psychic",
				"Psychic"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
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
	],
	evolveFrom: {
		ja: "ムンナ"
	}
}

export default card

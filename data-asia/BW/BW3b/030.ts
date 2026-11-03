import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "リグレー"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		605
	],
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "強力な サイコパワーを 操る。 サイコパワーで 相手の 脳みそを 絞めつけて 頭痛を 起こさせる。"
	},
	attacks: [
		{
			name: {
				ja: "ねんりき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Psychic"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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

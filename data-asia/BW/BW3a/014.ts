import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "フリーザー"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		144
	],
	hp: 120,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "伝説の とりポケモン。 空気中の 水分を 凍らせ 吹雪を 作り出すことが できる。"
	},
	attacks: [
		{
			name: {
				ja: "れいとうビーム"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "アイスウイング"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card

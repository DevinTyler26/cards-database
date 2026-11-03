import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ムクバード"
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		397
	],
	hp: 80,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	description: {
		ja: "自分の 弱さを わきまえており いつも 群れで 暮らしている。 １匹になると やかましく 鳴く。"
	},
	attacks: [
		{
			name: {
				ja: "とっしん"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも10ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
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
	],
	evolveFrom: {
		ja: "ムックル"
	}
}

export default card

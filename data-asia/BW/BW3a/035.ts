import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ドテッコツ"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		533
	],
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	description: {
		ja: "鍛え上げられた 筋肉の 体は プロレスラーが 束に なって 攻撃しても びくとも しない。"
	},
	attacks: [
		{
			name: {
				ja: "かいりき"
			},
			cost: [
				"Fighting",
				"Fighting"
			],
			damage: 30
		},
		{
			name: {
				ja: "ぶんなぐる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
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
		ja: "ドッコラー"
	}
}

export default card

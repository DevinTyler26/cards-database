import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "プクリン"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		40
	],
	hp: 90,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	description: {
		ja: "キメ細やかな 体毛は 極上の 肌触り。 息を 吸い込んで ふくらむ。"
	},
	attacks: [
		{
			name: {
				ja: "りんしょう"
			},
			effect: {
				ja: "ワザ「りんしょう」を持つ自分のポケモンの数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "さいみんはどう"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
	],
	evolveFrom: {
		ja: "プリン"
	}
}

export default card

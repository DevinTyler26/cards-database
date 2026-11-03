import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ハリテヤマ"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		297
	],
	hp: 120,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	description: {
		ja: "体の 大きな ポケモンたちと 力比べをすることが 大好き。 張り手で トラックを ぶっ飛ばす。"
	},
	attacks: [
		{
			name: {
				ja: "ねこだまし"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "うっちゃり"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「+20」される。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 90
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
		ja: "マクノシタ"
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "キルリア"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		281
	],
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "トレーナーが 喜ぶと キルリアに エネルギーが 満ちあふれ 楽しそうに くるくると 踊る。"
	},
	attacks: [
		{
			name: {
				ja: "ひらてうち"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "サイコキネシス"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×10ダメージを追加。"
			},
			cost: [
				"Psychic",
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
		ja: "ラルトス"
	}
}

export default card

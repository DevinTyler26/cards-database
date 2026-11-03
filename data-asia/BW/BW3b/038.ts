import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "マニューラ"
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		461
	],
	hp: 90,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	description: {
		ja: "進化して さらに ずる賢くなり ツメで 石に サインをつけて コミュニケーションを はかっている。"
	},
	attacks: [
		{
			name: {
				ja: "ダークペナルティ"
			},
			effect: {
				ja: "相手のバトルポケモンに「ポケモンのどうぐ」がついていないなら、このワザは失敗。"
			},
			cost: [
				"Darkness"
			],
			damage: 90
		},
		{
			name: {
				ja: "みだれひっかき"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×30ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "30×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
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
		ja: "ニューラ"
	}
}

export default card

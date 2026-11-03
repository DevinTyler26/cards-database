import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "スピアー"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		15
	],
	hp: 120,
	types: [
		"Grass"
	],
	stage: "Stage2",
	description: {
		ja: "高速で 飛びまわり 毒針で 攻撃したあと すぐに 飛び去る 戦法が 得意技だ。"
	},
	attacks: [
		{
			name: {
				ja: "ハッスルスピア"
			},
			effect: {
				ja: "このポケモンのHPがまんたんの状態なら、40ダメージを追加し、相手のバトルポケモンをどくとこんらんにする。"
			},
			cost: [
				"Grass"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "つきさす"
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
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 0,
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
		ja: "コクーン"
	}
}

export default card

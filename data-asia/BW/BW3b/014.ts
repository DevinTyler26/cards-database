import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		609
	],
	hp: 120,
	types: [
		"Fire"
	],
	stage: "Stage2",
	description: {
		ja: "シャンデラの 炎に 包まれると 魂が 吸い取られ 燃やされる。 抜け殻の 体 だけが 残る。"
	},
	attacks: [
		{
			name: {
				ja: "はじけるほのお"
			},
			effect: {
				ja: "相手のベンチポケモンを2匹選び、そのポケモンにも、それぞれ30ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fire"
			],
			damage: 30
		},
		{
			name: {
				ja: "れんごく"
			},
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
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
	],
	evolveFrom: {
		ja: "ランプラー"
	}
}

export default card

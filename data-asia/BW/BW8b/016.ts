import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "キュレム"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		646
	],
	hp: 130,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "失った 体を 真実と 理想で 埋めてくれる 英雄を 待つ 氷の 伝説ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "フロストスピア"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも30ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ブリザードバーン"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザを使えない。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 3,
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

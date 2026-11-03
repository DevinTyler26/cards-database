import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "フリージオ"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		615
	],
	hp: 80,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "氷の 結晶で できた 鎖を使い 獲物を 絡め取り マイナス１００度に 凍らせる。"
	},
	attacks: [
		{
			name: {
				ja: "コールサイン"
			},
			effect: {
				ja: "自分の山札から水ポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ハードフリージング"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。次の相手の番、このワザを受けた相手のバトルポケモンは、ワザを使えない。"
			},
			cost: [
				"Water"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Metal",
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
	]
}

export default card

import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ"
	},
	illustrator: "Toyste Beach",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		133
	],
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "不安定な 遺伝子の おかげで さまざまな 進化の 可能性を 秘めている 特殊な ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "しんかのきざし"
			},
			effect: {
				ja: "「イーブイ」から進化する、それぞれちがうタイプのポケモンを、自分の山札から3枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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

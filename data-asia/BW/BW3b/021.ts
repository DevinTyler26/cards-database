import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "フリージオ"
	},
	illustrator: "Kagemaru Himeno",
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
		ja: "雪雲の 中で 生まれた。 氷の 結晶で できた 鎖で 獲物を 捕まえる。"
	},
	attacks: [
		{
			name: {
				ja: "こおりのくさり"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
			},
			cost: [
				"Water"
			]
		},
		{
			name: {
				ja: "フロストバニッシュ"
			},
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、手札にもどしてよい。"
			},
			cost: [
				"Water",
				"Water"
			],
			damage: 40
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

import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ"
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		523
	],
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。"
	},
	attacks: [
		{
			name: {
				ja: "でんじしょうがい"
			},
			effect: {
				ja: "次の相手の番、相手は手札から「グッズ」を出して使えない。"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "かみなりおとし"
			},
			effect: {
				ja: "このポケモンについている雷エネルギーをすべてトラッシュし、相手のポケモン1匹に、80ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
		ja: "シママ"
	}
}

export default card

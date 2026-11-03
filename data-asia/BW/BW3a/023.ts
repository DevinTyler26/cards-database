import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "レントラー"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		405
	],
	hp: 140,
	types: [
		"Lightning"
	],
	stage: "Stage2",
	description: {
		ja: "壁の向こうも 見える 力で 逃げた 獲物を 追いつめるほかにも 迷子の 子供を 捜したりする。"
	},
	attacks: [
		{
			name: {
				ja: "フラッシュインパクト"
			},
			effect: {
				ja: "自分のポケモンを1匹選び、そのポケモンにも20ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Lightning"
			],
			damage: 60
		},
		{
			name: {
				ja: "かみくだく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: 80
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
		ja: "ルクシオ"
	}
}

export default card

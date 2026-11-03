import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィア"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		470
	],
	hp: 100,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "植物の ような 細胞になり 体内で 光合成を して きれいな 空気を つくりだせる。"
	},
	attacks: [
		{
			name: {
				ja: "エナジークラッシュ"
			},
			effect: {
				ja: "相手の場のポケモンについているエネルギーの合計×20ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "リーフブレード"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "－20"
		}
	],
	retreat: 2,
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
		ja: "イーブイ"
	}
}

export default card

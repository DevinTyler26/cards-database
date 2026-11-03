import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "コロトック"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		402
	],
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "変幻自在の 鳴き声を 競い合わせる 鳴き比べ という 遊びを 楽しむ 村がある。"
	},
	attacks: [
		{
			name: {
				ja: "あんみんノイズ"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "ドレインカッター"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×40ダメージ。相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "40×"
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
	],
	evolveFrom: {
		ja: "コロボーシ"
	}
}

export default card

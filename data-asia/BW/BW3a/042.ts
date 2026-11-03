import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ズルズキン"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		560
	],
	hp: 90,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	description: {
		ja: "トサカの 大きさで グループの リーダーを 決める。 キック攻撃で コンクリートブロックを 破壊する。"
	},
	attacks: [
		{
			name: {
				ja: "いしあたま"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			cost: [
				"Darkness"
			],
			damage: 20
		},
		{
			name: {
				ja: "ぶっこみキック"
			},
			effect: {
				ja: "相手のバトルポケモンの残りHPが、このポケモンの残りHPより多いなら、30ダメージを追加。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "－20"
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
		ja: "ズルッグ"
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "キリキザン"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		625
	],
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	description: {
		ja: "数匹の コマタナを 戦わせ 傷つき 動けなくなった 獲物を まっぷたつにする 怖い ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "きりさく"
			},
			cost: [
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "ドラゴンキラー"
			},
			effect: {
				ja: "相手のバトルポケモンが竜タイプなら、40ダメージを追加。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: "80+"
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
		ja: "コマタナ"
	}
}

export default card

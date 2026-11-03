import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "キリキザン"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		625
	],
	hp: 100,
	types: [
		"Metal"
	],
	stage: "Stage1",
	description: {
		ja: "コマタナの 群れを 率いている。 ボスの 座を 奪い合い 戦う。 敗れると 群れを 追い出される。"
	},
	attacks: [
		{
			name: {
				ja: "エナジーストリーム"
			},
			effect: {
				ja: "自分のトラッシュから鋼エネルギーを1枚選び、このポケモンにつける。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "メタルシザーズ"
			},
			effect: {
				ja: "このポケモンについている鋼エネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
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
		ja: "コマタナ"
	}
}

export default card

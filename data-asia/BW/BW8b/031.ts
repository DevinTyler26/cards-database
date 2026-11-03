import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキー"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		197
	],
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	description: {
		ja: "月の 波動を 浴びると 全身の 輪っか模様が 光り 不思議な 力に あふれるのだ。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ダークシェード"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の「プラズマ団」のポケモン全員の最大HPは、それぞれ「20」大きくなる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "やみのキバ"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 70
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
		ja: "イーブイ"
	}
}

export default card

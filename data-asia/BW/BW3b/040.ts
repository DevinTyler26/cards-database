import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		437
	],
	hp: 110,
	types: [
		"Metal"
	],
	stage: "Stage1",
	description: {
		ja: "別世界への 穴を 開けて そこから 雨を 降らしていた。 そのため 豊作の神 とされる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かいふくふうじ"
			},
			effect: {
				ja: "このポケモンがいるかぎり、おたがいのポケモン全員のHPは、回復しない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "オラクルペイン"
			},
			effect: {
				ja: "相手の手札の枚数×10ダメージを追加。"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: "30+"
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
	retreat: 4,
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
		ja: "ドーミラー"
	}
}

export default card

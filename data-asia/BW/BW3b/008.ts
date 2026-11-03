import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "モロバレル"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		591
	],
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "両腕の モンスターボールに 似た カサを ゆらゆらと 動かして 獲物を 誘う ダンスを 踊る。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "でたとこほうし"
			},
			effect: {
				ja: "この特性は、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをどくとこんらんにする。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "つきあげる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "20+"
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
		ja: "タマゲタケ"
	}
}

export default card

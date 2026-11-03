import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "コクーン"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		14
	],
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "天敵に 見つからないように 葉っぱの 裏や 枝の すきまに 隠れて 進化の ときを 待つ。"
	},
	attacks: [
		{
			name: {
				ja: "かくれる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
				"Grass"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
		ja: "ビードル"
	}
}

export default card

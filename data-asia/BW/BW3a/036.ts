import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ローブシン"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		534
	],
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	description: {
		ja: "コンクリートを 作る 技術は ２０００年前に ローブシンから 教わったと 考えられている。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "マスターアーツ"
			},
			effect: {
				ja: "このポケモンの最大HPは、このポケモンについている闘エネルギー1個につき「20」大きくなる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "やまおとし"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、オモテの数ぶん、相手の山札を上からトラッシュする。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 4,
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
		ja: "ドテッコツ"
	}
}

export default card

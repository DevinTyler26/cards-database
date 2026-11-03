import { spawnSync } from 'node:child_process'
import path from 'node:path'
import ts from 'typescript'

function git(root: string, args: string[]): string {
	const result = spawnSync('git', args, { cwd: root, encoding: 'utf8' })
	if (result.error) throw result.error
	if (result.status !== 0) throw new Error(result.stderr || 'git failed')
	return result.stdout
}

export function validateAsianChanges(base: string, root = process.cwd()): number {
	if (!/^[a-f0-9]{40}$/.test(base) || /^0+$/.test(base)) {
		throw new Error('Supply an existing base commit with --base <40-character SHA>')
	}
	const changed = git(root, ['diff', '--name-only', '--no-renames', '--diff-filter=ACM', '-z', base, 'HEAD', '--'])
		.split('\0').filter(Boolean)
	const asianFiles = changed.filter(file => file.startsWith('data-asia/') && file.endsWith('.ts'))
	// Shared schema/compiler changes must not silently escape Asian validation.
	const sharedChanged = changed.some(file => file === 'interfaces.d.ts' || file.startsWith('server/compiler/') || file === 'tsconfig.json')
	if (!sharedChanged && asianFiles.length === 0) {
		console.log('No changed Asian data files')
		return 0
	}
	const configFile = path.join(root, 'tsconfig.asia.json')
	const loaded = ts.readConfigFile(configFile, ts.sys.readFile)
	if (loaded.error) throw new Error(ts.flattenDiagnosticMessageText(loaded.error.messageText, '\n'))
	const config = ts.parseJsonConfigFileContent(loaded.config, ts.sys, root, undefined, configFile)
	const files = sharedChanged ? config.fileNames : asianFiles.map(file => path.join(root, file))
	const program = ts.createProgram(files, config.options)
	const diagnostics = [...config.errors, ...ts.getPreEmitDiagnostics(program)]
	if (diagnostics.length) {
		console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
			getCanonicalFileName: file => file,
			getCurrentDirectory: () => root,
			getNewLine: () => '\n'
		}))
		return 1
	}
	console.log(`Validated ${files.length} Asian data inputs${sharedChanged ? ' (shared schema/compiler changed)' : ''}`)
	return 0
}

if (import.meta.main) {
	try {
		if (process.argv.length !== 4 || process.argv[2] !== '--base') throw new Error('Usage: bun scripts/validate-asian-changes.ts --base <SHA>')
		process.exitCode = validateAsianChanges(process.argv[3])
	} catch (error) {
		console.error(error instanceof Error ? error.message : error)
		process.exitCode = 1
	}
}

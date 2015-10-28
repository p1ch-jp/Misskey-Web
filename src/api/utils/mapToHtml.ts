import jade from 'jade';

export default function(templatePath: string, values: Object[]): string {
	const compiler: (locals?: any) => string = jade.compileFile(templatePath);
	return values.map((value: Object) => {
		return compiler(value);
	}).join();
}

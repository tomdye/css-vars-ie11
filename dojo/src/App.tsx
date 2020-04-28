import { create, tsx } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import * as css from './App.m.css';
import * as colours from './colours.m.css';
import * as base from './base.m.css';
// import rainbowTheme from './rainbowTheme'
// import TextInput, { Addon } from '@dojo/widgets/text-input';
// import RadioGroup from '@dojo/widgets/radio-group';

const factory = create({ theme });
// const radioOptions = Object.keys(rainbowTheme.variants).map(name => ({ value: name }));

export default factory(function App({ properties, middleware: { theme } }) {
	// if (!theme.get()) {
	// 	theme.set(rainbowTheme);
	// }

	// const { theme: themeProp } = properties();
	// const themedCss = theme.classes(css);
	// const variantClass = theme.variant();

	return (
		<div classes={[colours.dark, base.background]}>
			<div classes={colours.light}>
				<div classes={css.one}></div>
				<div classes={css.two}></div>
				<div classes={css.three}></div>
			</div>
			<div classes={colours.dark}>
				<div classes={css.one}></div>
				<div classes={css.two}></div>
				<div classes={css.three}></div>
			</div>
		</div>
	);
});

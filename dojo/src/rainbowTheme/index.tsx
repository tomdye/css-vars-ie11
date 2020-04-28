import * as darkVariant from './dark.m.css';
import * as lightVariant from './light.m.css';
import * as AppCss from './App.m.css';

export default {
	theme: {
		'variant/App': AppCss
	},
	variants: {
		default: lightVariant,
		light: lightVariant,
		dark: darkVariant
	}
}

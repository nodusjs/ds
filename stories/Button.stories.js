import { fn } from "storybook/test";

export default {
	title: "Component/Button",
	tags: ["autodocs"],
	render: ({
		color,
		disabled,
		hidden,
		innerText,
		size,
		type,
		value,
		variant,
		width,
		onBrand,
		onClick,
	}) => {
		const button = document.createElement("x-button");
		button.innerText = innerText;
		button.addEventListener("click", (e) => onClick(e.detail));
		button.setAttribute("color", color);
		button.setAttribute("size", size);
		button.setAttribute("type", type);
		button.setAttribute("value", value);
		button.setAttribute("variant", variant);
		button.setAttribute("width", width);
		disabled && button.setAttribute("disabled", "");
		hidden && button.setAttribute("hidden", "");
		onBrand && button.setAttribute("on-brand", "");
		return button;
	},
	argTypes: {
		color: {
			control: { type: "select" },
			options: ["brand", "error"],
			description: "Define a cor visual principal do botão.",
			table: {
				defaultValue: { summary: "brand" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Desabilita o botão, impedindo interações do usuário.",
			table: {
				defaultValue: { summary: false },
			},
		},
		hidden: {
			control: "boolean",
			description:
				"Oculta o botão visualmente e do layout (equivale ao atributo HTML `hidden`).",
			table: {
				defaultValue: { summary: false },
			},
		},
		innerText: {
			control: "text",
			description: "Texto visível dentro do botão.",
		},
		onBrand: {
			control: "boolean",
			description: "Indica se o botão está sobre uma área com cor de marca.",
			table: {
				defaultValue: { summary: false },
			},
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg", "xl"],
			description: "Tamanho do botão.",
			table: {
				defaultValue: { summary: "md" },
			},
		},
		type: {
			control: { type: "select" },
			options: ["submit", "reset"],
			description: "Tipo de botão HTML nativo.",
			table: {
				defaultValue: { summary: "submit" },
			},
		},
		value: {
			control: "text",
			description:
				"Valor que será submetido com o formulário (caso aplicável).",
		},
		variant: {
			control: { type: "select" },
			options: ["solid", "outlined", "ghost", "link"],
			description: "Estilo visual do botão.",
			table: {
				defaultValue: { summary: "solid" },
			},
		},
		width: {
			control: "text",
			description: "Tamanho horizontal (ex: 'hug', 'fill', 'px', '%').",
			table: {
				defaultValue: { summary: "hub" },
			},
		},
		on: {
			control: "text",
			description:
				"O atributo `on` conecta eventos de outros elementos a este componente de forma declarativa, usando a sintaxe `source/event:target/handler|filtro`.",
			table: {
				category: "Echo",
			},
		},
		onClick: {
			action: "onClick",
			description: "Evento disparado ao clicar no botão (detail incluído).",
			table: {
				category: "Echo",
			},
		},
	},
	args: {
		color: "brand",
		disabled: false,
		hidden: false,
		innerText: "Button",
		on: "",
		onBrand: false,
		onClick: fn(),
		size: "md",
		type: "submit",
		value: "",
		variant: "solid",
		width: "hug",
	},
	parameters: {
		docs: {
			description: {
				component:
					"Componente `x-button` do NodusJS/X. Utilizado para ações principais e secundárias da interface.",
			},
		},
	},
};

export const Solid = {
	args: {
		variant: "solid",
	},
};

export const Outlined = {
	args: {
		variant: "outlined",
	},
};

export const Ghost = {
	args: {
		variant: "ghost",
	},
};

export const Link = {
	args: {
		variant: "link",
	},
};

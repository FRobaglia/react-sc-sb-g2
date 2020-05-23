import React from 'react';
import Title, { colors, types } from '../ui/atoms/Title';
import { withKnobs, text } from "@storybook/addon-knobs";
import './../assets/css/main.css'

export default {
    title: 'Title',
    component: Title,
    decorators: [withKnobs]
};

export const Main = () => <Title text={text("Label", "Minecraft")} type={types.main} color={colors.white}/>;
export const MainHighlight = () => <Title text={text("Label", "Minecraft")} type={types.main} color={colors.purple}/>;

export const Nav = () => <Title text={text("Label", "Parcourir",)} type={types.navigation} color={colors.white}/>;
export const NavOnHover = () => <Title text={text("Label", "Parcourir")} type={types.navigation} color={colors.purple}/>;
import App from "../App";

export default {
  title: 'App',
  component: App,
  argTypes: {
    // define any props that should be available for customization in the storybook UI
  },
  parameters: {
    // add any global parameters here, such as design systems or accessibility settings
  },
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};

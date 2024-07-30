import { Meta } from '@storybook/angular';
import { SideBarComponent } from './side-bar.component';

export default {
  title: 'SideBarComponent',
  component: SideBarComponent,
} as Meta<SideBarComponent>;

export const Primary = {
  render: (args: SideBarComponent) => ({
    props: args,
  }),
  args: {},
};

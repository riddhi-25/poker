import { Meta } from '@storybook/angular';
import { SwimlaneComponent } from './swimlane.component';

export default {
  title: 'SwimlaneComponent',
  component: SwimlaneComponent,
} as Meta<SwimlaneComponent>;

export const Primary = {
  render: (args: SwimlaneComponent) => ({
    props: args,
  }),
  args: {
    likeCount:0,
    dislikeCount:0,
  },
};
